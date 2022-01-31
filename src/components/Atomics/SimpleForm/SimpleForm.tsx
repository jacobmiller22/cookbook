import React from "react";
import _ from "lodash";

/** Components */
import Query from "components/Atomics/Query";
import FormControl from "@mui/material/FormControl";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import { Divider, FormLabel, InputAdornment, Button } from "@mui/material";

/** Interfaces */
import { IFormQuery } from "interfaces";
interface ISimpleFormProps {
  queries: IFormQuery[];
  data: any;
  onChange: (key: string, value: string | number) => void;
  submit: {
    label: string;
    onSubmit: (e: React.SyntheticEvent) => void;
  };
  cancel: {
    label: string;
    onCancel: () => void;
  };
}

const SimpleForm = ({
  queries,
  data,
  onChange,
  submit,
  cancel,
}: ISimpleFormProps) => {
  const renderQueries = () => {
    return _.map(queries, (query, index) => {
      return (
        <Grid item xs={12} key={`form-query-${index}`}>
          <FormControl fullWidth>
            <FormLabel>{query.label}</FormLabel>
            <Query
              query={query}
              data={data}
              onChange={onChange}
              autoFocus={index === 0}
              startAdornment={
                typeof query.startAdornment === "string" ? (
                  <InputAdornment
                    position="start"
                    sx={{ transform: "translateY(8px)" }}
                  >
                    {query.startAdornment}
                  </InputAdornment>
                ) : (
                  query.startAdornment
                )
              }
            />
          </FormControl>
        </Grid>
      );
    });
  };

  return (
    <form
      style={{ width: "100%" }}
      onSubmit={(e) => {
        e.preventDefault();
        submit.onSubmit(e);
      }}
    >
      <Grid container spacing={3}>
        <Grid
          container
          item
          xs={12}
          sx={{ marginInline: "24px", marginTop: "24px" }}
        >
          <Grid container spacing={3}>
            {renderQueries()}
          </Grid>
        </Grid>
        <Grid
          container
          item
          xs={12}
          sx={{ marginInline: "24px", marginBottom: "24px" }}
          spacing={1}
        >
          <div style={{ flexGrow: 1 }}></div>
          <Grid item>
            <Button onClick={cancel.onCancel} color="error">
              {cancel.label}
            </Button>
          </Grid>
          <Grid item>
            <Button type="submit" variant="contained">
              {submit.label}
            </Button>
          </Grid>
        </Grid>
      </Grid>
    </form>
  );
};
export default SimpleForm;
