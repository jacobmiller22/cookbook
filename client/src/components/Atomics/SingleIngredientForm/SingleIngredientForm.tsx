import { useForm, Controller } from "react-hook-form";
/** Interfaces/types */

/** components */
import {
  Button,
  FormControl,
  FormHelperText,
  Grid,
  TextField,
} from "@mui/material";

interface ISingleIngredientFormProps {
  onComplete: (ingredient: any) => void;
}

const SingleIngredientForm = ({ onComplete }: ISingleIngredientFormProps) => {
  const {
    handleSubmit,
    control,
    setValue,
    getValues,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    onComplete(data);
  };
  // console.log(errors);
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Grid
        container
        item
        xs={12}
        // spacing={2}
        sx={{ mt: 1 }}
        display="flex"
        justifyContent="space-evenly"
        flexWrap="nowrap"
      >
        <Controller
          name="name"
          control={control}
          rules={{ required: true }}
          render={({ field }) => (
            <FormControl sx={{ marginInline: 1 }} fullWidth {...field}>
              <TextField placeholder="Ingredient" label="Ingredient" />

              <FormHelperText error={errors.ingredient}>
                {errors.ingredient ? "Ingredient is required" : "​"}
              </FormHelperText>
            </FormControl>
          )}
        />
        <Controller
          name="amount"
          control={control}
          rules={{ required: true }}
          render={({ field }) => (
            <FormControl sx={{ marginInline: 1 }} {...field}>
              <TextField
                name="amount"
                placeholder="Amount"
                label="Amount"
                //@ts-ignore
                InputProps={{ type: "number", step: "2" }}
              />
              <FormHelperText error={errors.amount}>
                {errors.amount ? "Amount is required" : ""}
              </FormHelperText>
            </FormControl>
          )}
        />

        <Controller
          name="unit"
          control={control}
          rules={{ required: true }}
          render={({ field }) => (
            <FormControl sx={{ marginInline: 1 }} {...field}>
              <TextField name="unit" placeholder="Unit" label="Unit" />
              <FormHelperText error={errors.unit}>
                {errors.unit ? "Unit is required" : ""}
              </FormHelperText>
            </FormControl>
          )}
        />
      </Grid>
      <Grid item xs={12} container sx={{ mt: 1, mb: 1 }}>
        <div style={{ flexGrow: 1 }} />
        <Button type="submit" variant="contained" color="primary">
          Add Ingredient
        </Button>
      </Grid>
    </form>
  );
};

export default SingleIngredientForm;
