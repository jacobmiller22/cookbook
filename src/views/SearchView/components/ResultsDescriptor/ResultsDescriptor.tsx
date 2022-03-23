/** Interfaces/types */

import { Typography } from "@mui/material";
import Box from "@mui/material/Box";

/** components */

interface IResultsDescriptorProps {
  [rest: string]: any;
  results: {
    total: number;
    displayed: number;
  };
}

const ResultsDescriptor = ({ results, ...rest }: IResultsDescriptorProps) => {
  return (
    <Box display="flex" {...rest}>
      <Typography variant="body2">
        Showing {results?.displayed || 0} recipes
      </Typography>
    </Box>
  );
};

export default ResultsDescriptor;
