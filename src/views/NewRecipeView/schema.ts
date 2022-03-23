/**
 * Defines the schema for the NewRecipeView
 */

import * as Yup from "yup";

export default Yup.object().shape({
  name: Yup.string()
    .max(50, "Character limit exceeded (50)")
    .required("Required"),
  prepTime: Yup.number().min(1, "Must be greater than 0").required("Required"),
  cookTime: Yup.number().min(1, "Must be greater than 0").required("Required"),
  servings: Yup.number().min(1, "Must be greater than 0").required("Required"),
  ingredients: Yup.array()
    .of(
      Yup.object().shape({
        name: Yup.string().required("Required"),
        quantity: Yup.number()
          .min(1, "Must be greater than 0")
          .required("Required"),
        unit: Yup.string().required("Required"),
      })
    )
    .compact((v) => v.name && v.quantity && v.unit),
  description: Yup.string()
    .max(2000, "Character limit exceeded (2000)")
    .required("Required"),
  instructions: Yup.string()
    .max(2000, "Character limit exceeded (2000)")
    .required("Required"),
});
