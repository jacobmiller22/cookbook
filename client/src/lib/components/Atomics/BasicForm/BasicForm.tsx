import { AnySchema } from "yup";
/** Interfaces/types */

/** components */
import {
  Box,
  Button,
  CircularProgress,
  FormControl,
  FormHelperText,
  FormLabel,
  Input,
  InputLabel,
  TextField,
  Typography,
} from "@mui/material";
import { Formik, Form, FormikProps, Field, FieldArray } from "formik";
import { FormType } from "lib/util/types";
import { mapObjectArr } from "lib/enumeration";
import NumberField from "../NumberField";
import TextArea from "../TextArea";
import Spacer from "../Spacer";
import React from "react";
import AddIcon from "@mui/icons-material/AddSharp";
import RemoveIcon from "@mui/icons-material/RemoveSharp";
import theme from "lib/theme";
import _ from "lodash";

interface IRecipeFormProps {
  fields: any[];
  handleSubmit: (values: any) => Promise<boolean>;
  schema?: AnySchema;
  submitButtonText?: string;
  successText?: string;
}

const BasicForm = ({
  fields,
  handleSubmit,
  schema,
  submitButtonText = "Submit",
  successText = "Success",
}: IRecipeFormProps) => {
  const [submitText, setSubmitText] = React.useState(submitButtonText);

  const onSubmit = async (values: any, actions) => {
    const success: boolean = await handleSubmit(values);
    actions.setSubmitting(false);
    setSubmitText(successText);
    setTimeout(() => {
      setSubmitText(submitButtonText);
    }, 3000);
    if (success) {
      actions.resetForm();
    }
  };

  let initialValues = createInitialValues(fields, "initialValue");

  return (
    <Formik
      onSubmit={onSubmit}
      initialValues={initialValues}
      validationSchema={schema}
    >
      {(props: FormikProps<any>) => (
        <Form>
          <Box
            display="flex"
            flexDirection="column"
            justifyContent="flex-start"
            paddingX="2"
          >
            {renderFields(fields, { formikProps: props })}
            <Button
              type="submit"
              variant="contained"
              disabled={!props.dirty || props.isSubmitting}
            >
              {props.isSubmitting ? (
                <CircularProgress size={24.5} />
              ) : (
                submitText
              )}
            </Button>
          </Box>
        </Form>
      )}
    </Formik>
  );
};

export default BasicForm;

const renderFields = (fields, { formikProps }) => {
  return fields.map((customField, index: number) => {
    return (
      <React.Fragment key={`field-${index}`}>
        {renderField(customField, { formikProps, index })}
      </React.Fragment>
    );
  });
};

const renderField = (
  customField,
  { formikProps, index, parentName = undefined }
) => {
  /** Render the field array fields */
  if (customField.type === FormType.ARRAY) {
    return (
      <Box>
        <FieldArray name={customField.name}>
          {(arrayHelpers) => (
            <Box
              marginLeft="0.5rem"
              paddingLeft="0.5rem"
              sx={{
                borderLeft: "1px solid",
                borderLeftColor: theme.palette.divider,
              }}
            >
              {formikProps.values[customField.name].map(
                (value, subIndex: number) => {
                  return (
                    <Box key={`field-${index}-${subIndex}`}>
                      <Box width="100%" display="flex" alignItems="center">
                        <FormLabel>
                          {customField.singularLabel} {subIndex + 1}
                        </FormLabel>
                        <Spacer />
                        <Button
                          color="secondary"
                          onClick={() => arrayHelpers.remove(subIndex)}
                          startIcon={<RemoveIcon />}
                        >
                          Remove
                        </Button>
                      </Box>
                      {customField.fields.map(
                        (subCustomField, fieldIndex: number) => {
                          return (
                            <React.Fragment
                              key={`field-${index}-${subIndex}-${fieldIndex}`}
                            >
                              {renderField(subCustomField, {
                                formikProps,
                                index: subIndex,
                                parentName: customField.name,
                              })}
                            </React.Fragment>
                          );
                        }
                      )}
                    </Box>
                  );
                }
              )}
              <Button
                color="secondary"
                onClick={() => {
                  let newField = createInitialValues(customField.fields, "");

                  arrayHelpers.push(newField);
                }}
                startIcon={<AddIcon />}
              >
                Add
              </Button>
            </Box>
          )}
        </FieldArray>
      </Box>
    );
  }

  /** Render the standard field NOT an array */

  const name = `${parentName ? `${parentName}.${index}.` : ""}${
    customField.name
  }`;
  return (
    <Field name={name}>
      {({ field, form }: { field: any; form: any }) => {
        return (
          <Box width="100%" marginY="0.25rem">
            {renderInput(customField, field, formikProps)}
          </Box>
        );
      }}
    </Field>
  );
};

const renderInput = (
  customField,
  formikField: any,
  { errors, touched, index }
) => {
  // console.log({ errors, touched });
  switch (customField.type) {
    case FormType.LONG_TEXT: {
      const error =
        nestStrToValue(formikField.name, touched) &&
        nestStrToValue(formikField.name, errors);

      const errorMessage = _.isEmpty(error) ? null : error;
      return (
        <TextArea
          id={formikField.name}
          sx={{ width: "100%" }}
          placeholder={customField.placeholder}
          label={customField.label}
          helperText={customField.helperText}
          required={customField.required}
          error={errorMessage}
          disabled={
            customField.editable === undefined ? false : !customField.editable
          }
          {...formikField}
        />
      );
    }
    case FormType.SHORT_TEXT: {
      const error =
        nestStrToValue(formikField.name, touched) &&
        nestStrToValue(formikField.name, errors);

      const errorMessage = _.isEmpty(error) ? null : error;

      return (
        <TextField
          id={formikField.name}
          sx={{ width: "100%" }}
          placeholder={customField.placeholder}
          label={customField.label}
          InputLabelProps={{
            shrink: true,
          }}
          disabled={
            customField.editable === undefined ? false : !customField.editable
          }
          variant="standard"
          required={customField.required}
          error={errorMessage}
          {...formikField}
          helperText={
            errorMessage ? errorMessage : customField.helperText || " "
          }
        />
      );
    }
    case FormType.NUMBER: {
      const error =
        nestStrToValue(formikField.name, touched) &&
        nestStrToValue(formikField.name, errors);

      const errorMessage = _.isEmpty(error) ? null : error;

      return (
        <NumberField
          id={formikField.name}
          sx={{ width: "100%" }}
          placeholder={customField.placeholder}
          label={customField.label}
          helperText={customField.helperText}
          required={customField.required}
          error={errorMessage}
          disabled={
            customField.editable === undefined ? false : !customField.editable
          }
          {...formikField}
        />
      );
    }

    case FormType.ARRAY: {
      throw new Error("Array type not supported. This should never happen");
    }
    default: {
      console.warn("Unsupported field type. Defaulting to short text field");
      return (
        <TextField
          id={formikField.name}
          variant="standard"
          label={customField.label}
          placeholder={customField.placeholder}
          helperText={customField.helperText}
          required={customField.required}
          error={errors[formikField.name]}
          touched={touched[formikField.name]}
          disabled={
            customField.editable === undefined ? false : !customField.editable
          }
          {...formikField}
        />
      );
    }
  }
};
const createInitialValues = (fields, k: string | null) => {
  return mapObjectArr(fields, (field) =>
    field.type === FormType.ARRAY
      ? [
          field.name,

          [
            mapObjectArr(field.fields, (subField) => [
              subField.name,
              k ? subField[k] : "",
            ]),
          ],
        ]
      : [field.name, k ? field[k] : ""]
  );
};

const nestStrToValue = (nestedString: string, obj: any) => {
  // Example nested string
  // ingredients.0.unit

  const nestedArr = nestedString.split(".");
  let currentObj = { ...obj }; // Use spread operator to clone object
  for (let i = 0; i < nestedArr.length; i++) {
    const key = nestedArr[i];
    currentObj[key] = currentObj[key] || {}; // Create the object if it doesn't exist
    currentObj = currentObj[key];
  }

  return currentObj;
};
