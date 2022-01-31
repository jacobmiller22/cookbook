import FilledInput from "@mui/material/FilledInput";
import { IFormQuery } from "interfaces";
import React from "react";

interface INumberInputProps {
  query: IFormQuery;
  data: any;
  onChange: (key: string, value: string | number) => void;
  [rest: string]: any;
}

const re = /^[0-9]*$/;

const NumberInput = ({ query, data, onChange, ...rest }: INumberInputProps) => {
  return (
    <FilledInput
      value={data[query.name]}
      onChange={(e) => {
        re.test(e.target.value) && onChange(query.name, e.target.value);
      }}
      {...rest}
    />
  );
};
export default NumberInput;
