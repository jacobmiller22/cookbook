import { FormType } from "lib/util/types";

export default [
  {
    name: "name",
    label: "Name",
    placeholder: "Jane Doe",
    initialValue: "Potatoes",
    type: FormType.SHORT_TEXT,
    required: true,
    editable: true,
  },
  {
    name: "email",
    label: "Email Address",
    placeholder: "",
    initialValue: "",
    type: FormType.SHORT_TEXT,
    required: true,
    editable: false,
  },
  {
    name: "username",
    label: "Username",
    placeholder: "",
    initialValue: "",
    type: FormType.SHORT_TEXT,
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
