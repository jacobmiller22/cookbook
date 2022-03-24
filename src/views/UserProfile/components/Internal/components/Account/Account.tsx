import useAuth from "hooks/Auth/useAuth";
import fields from "./fields";
import schema from "./schema";
import { useEffect, useState } from "react";
/** Interfaces/types */

/** components */
import { Box, Typography } from "@mui/material";
import { BasicForm } from "components/Atomics";

interface IAccountProps {}

const Account = ({}: IAccountProps) => {
  const { user } = useAuth();

  const handleSubmit = async (values: any) => {
    return true;
  };

  // Fill in the form with the user's data
  const initialFields = fields.map((field) => ({
    ...field,
    initialValue: user[field.name],
  }));

  console.log(initialFields);

  return (
    <Box width="100%">
      <BasicForm
        fields={initialFields}
        handleSubmit={handleSubmit}
        schema={schema}
        submitButtonText="Save Changes"
      />
    </Box>
  );
};

export default Account;
