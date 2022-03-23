/**
 * Defines the fields used in NewRecipeView
 */

import { FormType } from "interfaces/Form";

export default [
  {
    name: "name",
    label: "Recipe name",
    placeholder: "Enter recipe name",
    initialValue: "Potatoes",
    type: FormType.SHORT_TEXT,
    required: true,
  },
  {
    name: "prepTime",
    label: "Prep time",
    placeholder: "X minutes",
    initialValue: 20,
    type: FormType.NUMBER,
    helperText: "How long does the recipe take to prepare in minutes?",
    required: true,
  },
  {
    name: "cookTime",
    label: "Cook time",
    placeholder: "X minutes",
    initialValue: 45,
    type: FormType.NUMBER,
    helperText: "How long does the recipe take to cook in minutes?",
    required: true,
  },
  {
    name: "servings",
    label: "Serves",
    placeholder: "X people",
    initialValue: 8,
    type: FormType.NUMBER,
    helperText: "How many people will this recipe serve?",
    required: true,
  },
  {
    name: "ingredients",
    label: "Ingredients",
    initialValue: [],
    type: FormType.ARRAY,
    helperText: "Enter ingredients",
    required: true,
    fields: [
      {
        name: "name",
        label: "Ingredient",
        placeholder: "Enter ingredient",
        initialValue: "Potatoe",
        type: FormType.SHORT_TEXT,

        required: true,
      },
      {
        name: "quantity",
        label: "Quantity",
        placeholder: "Enter quantity",
        initialValue: 5,
        type: FormType.NUMBER,
        required: true,
      },
      {
        name: "unit",
        label: "Unit",
        placeholder: "Enter unit",
        initialValue: "tots",
        type: FormType.SHORT_TEXT,
        required: true,
      },
    ],
  },
  {
    name: "description",
    label: "Description",
    placeholder: "Description...",
    initialValue: "My long description",
    type: FormType.LONG_TEXT,
    required: true,
  },
  {
    name: "instructions",
    label: "Instructions",
    placeholder: "Instructions...",
    initialValue: "My long instructions",
    type: FormType.LONG_TEXT,
    required: true,
  },
];
