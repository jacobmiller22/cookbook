import { useForm, useFieldArray, Controller } from "react-hook-form";
import { Button, Typography, Grid, TextField } from "@mui/material";

const CriteriaForm = ({ onSubmit }) => {
  const {
    handleSubmit,
    control,
    setValue,
    getValues,
    formState: { errors },
  } = useForm();
  const { fields, append, remove } = useFieldArray({
    control,
    name: "ingredients",
  });

  const renderError = (options, field) => {
    if (!options) return null;
    let text = "";
    switch (options.type) {
      case "pattern":
        text = "";
        break;
      default:
        text = "";
        break;
    }
    return text;
  };

  const isOptionalRequired = (amount, unit) => {
    return (amount != null && amount !== "") || (unit != null && unit !== "");
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      {
        //@ts-expect-error
        fields.map(({ id, ingredient, amount, unit }, i) => {
          return (
            <Grid container spacing={1} key={id}>
              <Grid item xs={6}>
                <Controller
                  name={`ingredients[${i}].ingredient`}
                  control={control}
                  defaultValue={ingredient}
                  rules={{ required: true }}
                  render={({ field }) => (
                    <TextField
                      placeholder="Ingredient"
                      label="Ingredient*"
                      variant="outlined"
                      size="medium"
                      helperText={renderError(
                        errors?.ingredients?.[i]?.ingredient,
                        {
                          ingredient: getValues(`ingredients[${i}].ingredient`),
                        }
                      )}
                      error={
                        !!renderError(errors?.ingredients?.[i]?.ingredient, {
                          ingredient: getValues(`ingredients[${i}].ingredient`),
                        })
                      }
                      fullWidth
                      {...field}
                      onChange={(e) =>
                        setValue(
                          `ingredients[${i}].ingredient`,
                          e.target.value,
                          {
                            shouldValidate: true,
                          }
                        )
                      }
                    />
                  )}
                />
              </Grid>
              <Grid item xs={4}>
                <Controller
                  name={`ingredients[${i}].amount`}
                  control={control}
                  defaultValue={amount}
                  rules={{
                    required: isOptionalRequired(
                      getValues(`ingredients[${i}].amount`),
                      getValues(`ingredients[${i}].unit`)
                    ),
                  }}
                  render={({ field }) => (
                    <TextField
                      label={`Amount${
                        isOptionalRequired(
                          getValues(`ingredients[${i}].amount`),
                          getValues(`ingredients[${i}].unit`)
                        )
                          ? "*"
                          : ""
                      }`}
                      variant="outlined"
                      size="medium"
                      fullWidth
                      helperText={renderError(
                        errors?.ingredients?.[i]?.amount,
                        {
                          amount: getValues(`ingredients[${i}].amount`),
                        }
                      )}
                      error={
                        !!renderError(errors?.ingredients?.[i]?.amount, {
                          amount: getValues(`ingredients[${i}].amount`),
                        })
                      }
                      {...field}
                      onChange={(e) =>
                        setValue(`ingredients[${i}].amount`, e.target.value, {
                          shouldValidate: true,
                        })
                      }
                    />
                  )}
                />
              </Grid>
              <Grid item xs={2}>
                <Controller
                  name={`ingredients[${i}].unit`}
                  control={control}
                  defaultValue={unit}
                  rules={{
                    required: isOptionalRequired(
                      getValues(`ingredients[${i}].amount`),
                      getValues(`ingredients[${i}].unit`)
                    ),
                  }}
                  render={({ field }) => (
                    <TextField
                      label={`Unit${
                        (getValues(`ingredients[${i}].amount`),
                        getValues(`ingredients[${i}].unit`) ? "*" : "")
                      }`}
                      variant="outlined"
                      size="medium"
                      fullWidth
                      helperText={renderError(errors?.ingredients?.[i]?.unit, {
                        unit: getValues(`ingredients[${i}].unit`),
                      })}
                      error={
                        !!renderError(errors?.ingredients?.[i]?.unit, {
                          unit: getValues(`ingredients[${i}].unit`),
                        })
                      }
                      {...field}
                      onChange={(e) =>
                        setValue(`ingredients[${i}].unit`, e.target.value, {
                          shouldValidate: true,
                        })
                      }
                    />
                  )}
                />

                {errors &&
                  errors.ingredients &&
                  errors?.ingredients[i]?.unit?.message && (
                    <p>
                      {errors?.ingredients[i]?.unit?.type === "pattern" &&
                        "unit is required"}
                    </p>
                  )}
              </Grid>
            </Grid>
          );
        })
      }
      <Grid item xs={12}>
        <Typography component="span" color="primary" onClick={() => append({})}>
          Add +
        </Typography>
      </Grid>
      <Grid item xs={12}>
        <i>
          <Typography variant="subtitle2">
            Fields that are marked with * sign are required.
          </Typography>
        </i>
      </Grid>

      <Grid item xs={12}>
        <Button
          size="large"
          type="submit"
          variant="contained"
          color="primary"
          fullWidth
          //@ts-expect-error
          type="submit"
        >
          Checkout
        </Button>
      </Grid>
    </form>
  );
};
export default CriteriaForm;

// const useStyles = makeStyles((theme) => ({
//   formContainer: {
//     height: "100vh",
//     display: "flex",
//     flexDirection: "column",
//     flexShrink: 1,
//     // alignItems: "center",
//     // justifyContent: "center",
//     // minHeight: `calc(100vh - ${theme.mixins.toolbar["@media (min-width:600px)"].minHeight}px)`,
//     maxWidth: 500,
//     margin: `0 auto`,
//   },
//   section: {
//     paddingTop: 0,
//     paddingBottom: 0,
//     marginTop: "50px",
//     // width: "100%",
//     // height: "100%",
//   },
//   addItem: {
//     fontWeight: "bold",
//     cursor: "pointer",
//     alignSelf: "flex-start",
//   },
//   form: {
//     width: "100%",
//   },
//   removeItem: {
//     fontWeight: "bold",
//     cursor: "pointer",
//     alignSelf: "flex-end",
//     // alignContent: "flex-end",
//     padding: "5px",
//     paddingBottom: "25px",
//   },
// }));
