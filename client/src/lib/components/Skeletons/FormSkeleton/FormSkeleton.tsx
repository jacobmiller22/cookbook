/** Interfaces/types */

/** components */
import { Box, Skeleton } from "@mui/material";
import { ButtonSkeleton } from "lib/components/Skeletons";
import fields from "lib/views/InternalProfileView/components/Account/fields";

interface IFormSkeletonProps {}

const FormSkeleton = ({}: IFormSkeletonProps) => {
  const renderFields = () => {
    return fields.map((field: any) => (
      <Box mb="0.25rem" mt="0.25rem">
        <Skeleton variant="rectangular" width={75} height={17.25} />
        <Box pt="5px" pb="4px">
          <Skeleton variant="rectangular" width="100%" height={32} />
        </Box>
        <Box mt="0.25rem">
          {field.helperText ? (
            <Skeleton variant="rectangular" width={75} height={9} />
          ) : (
            <Box height="9px" />
          )}
        </Box>
      </Box>
    ));
  };

  return (
    <Box width="100%" display="flex" flexDirection="column">
      {renderFields()}
      <ButtonSkeleton width="100%" />
    </Box>
  );
};

export default FormSkeleton;
