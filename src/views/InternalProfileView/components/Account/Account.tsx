import { useAuth } from "hooks";
import useSWR from "swr";
import fields from "./fields";
import schema from "./schema";
import { useEffect, useState } from "react";

/** Interfaces/types */

/** components */
import { Box, Typography } from "@mui/material";
import { BasicForm } from "components/Atomics";
import { getAccountDetails, updateUsername } from "lib/auth";
import { useSnackbar } from "notistack";

interface IAccountProps {}

const Account = ({}: IAccountProps) => {
  const { enqueueSnackbar } = useSnackbar();
  const [isLoading, setIsLoading] = useState<any>(true);
  const { user } = useAuth();

  const {
    data: detailsResponse,
    error,
    revalidate,
  } = useSWR(user?.userId, getAccountDetails);

  useEffect(() => {
    if (!user) return;

    setIsLoading(true);
    (async () => {
      await revalidate();
      setIsLoading(false);
    })();
  }, [user]);

  if (error) {
    enqueueSnackbar("Could not load account details", { variant: "error" });
  }

  const details = { ...detailsResponse?.data };
  console.log(details);
  // setIsLoading(false);

  const handleSubmit = async (values: any): Promise<boolean> => {
    let editable: { username?: string; bio?: string } = {};
    for (let field of fields)
      if (field.editable) editable[field.name] = values[field.name];

    setIsLoading(true);
    const { username, bio } = editable;

    username && (await updateUsername(user.userId, username));

    // bio && await updateBio(user.userId, bio);

    await revalidate();
    setIsLoading(false);

    return true;
  };

  if (!details || isLoading) return <Box>Loading...</Box>;

  // Fill in the form with the user's data
  let initialFields = fields.map((field) => ({
    ...field,
    initialValue: details[field.name],
  }));

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
