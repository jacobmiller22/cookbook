/**
 * Defines the schema for the NewRecipeView
 */

import * as Yup from "yup";

export default Yup.object().shape({
  name: Yup.string()
    .min(1, "Must be greater than 0")
    .max(50, "Character limit exceeded (50)")
    .required("Required"),
  email: Yup.string()
    .min(1, "Must be greater than 0")
    .max(50, "Character limit exceeded (50)")
    .required("Required"),
  username: Yup.string()
    .min(1, "Must be greater than 0")
    .max(50, "Character limit exceeded (50)")
    .required("Required"),

  bio: Yup.string()
    .max(2000, "Character limit exceeded (2000)")
    .required("Required"),
});
