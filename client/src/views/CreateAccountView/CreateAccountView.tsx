import fieldsTemplate from "./fields";
import schema from "./schema";

/** Interfaces/types */

/** components */
import { Box, Button, Divider, Grid, Typography } from "@mui/material";
import { BasicForm } from "components/Atomics";
import { useEffect, useState } from "react";
import { useAuth } from "hooks";

type CreateAccountViewProps = {};

const CreateAccountView = ({}: CreateAccountViewProps) => {
  const { user } = useAuth();
  console.log(user);
  const [fields, setFields] = useState(null);

  useEffect(() => {
    if (!user) return;

    const newFields = fieldsTemplate.map((field) => ({
      ...field,
      initialValue: user[field.name],
    }));
    console.log(newFields);
    setFields(newFields);
  }, [user]);

  return (
    <>
      <Box maxWidth="800px" width="100%" marginY="2rem">
        <Typography variant="h6" gutterBottom marginTop="1rem">
          Account Setup
        </Typography>
        <Divider sx={{ marginBottom: "1rem" }} />
        {user && fields ? (
          <BasicForm
            fields={fields}
            handleSubmit={null}
            schema={schema}
            submitButtonText="Continue"
          />
        ) : (
          <div>loading</div>
        )}
      </Box>
    </>
  );
};

export default CreateAccountView;
