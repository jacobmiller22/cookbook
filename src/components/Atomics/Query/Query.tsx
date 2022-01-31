/** omponents */
import { TextField } from "@mui/material";
import FilledInput from "@mui/material/FilledInput";

import NumberInput from "components/Atomics/NumberInput";

/** Interfaces/Types */
import { EFormQueryType, IFormQuery } from "interfaces";
import React from "react";

interface IQueryProps {
  query: IFormQuery;
  data: any;
  onChange: (key: string, value: string | number) => void;
  [rest: string]: any;
}

const Query = ({ query, data, onChange, ...rest }: IQueryProps) => {
  switch (query.type) {
    case EFormQueryType.TEXT:
      return (
        <FilledInput
          value={data[query.name]}
          onChange={(e: React.ChangeEvent) =>
            //@ts-ignore
            onChange(query.name, e.target.value)
          }
          {...rest}
        />
      );
    case EFormQueryType.NUMBER:
      return (
        <NumberInput query={query} data={data} onChange={onChange} {...rest} />
      );
    default:
      return null;
  }
};

export default Query;
