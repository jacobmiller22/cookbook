import { FormType } from "lib/util/types";

export default [
  {
    name: "name",
    label: "Full Name",
    placeholder: "Enter recipe name",
    initialValue: "Potatoes",
    type: FormType.SHORT_TEXT,
    required: true,
    editable: false,
  },
  {
    name: "email",
    label: "Email Address",
    placeholder: "",
    initialValue: "",
    type: FormType.SHORT_TEXT,
    // helperText: "How long does the recipe take to prepare in minutes?",
    required: true,
    editable: false,
  },
  {
    name: "username",
    label: "Username",
    placeholder: "",
    initialValue: "",
    type: FormType.SHORT_TEXT,
    // helperText: "How long does the recipe take to cook in minutes?",
    required: true,
    editable: true,
  },

  {
    name: "bio",
    label: "Bio",
    placeholder: "I love long walks on the beach",
    initialValue: "",
    type: FormType.LONG_TEXT,
    required: true,
    editable: true,
  },
];
