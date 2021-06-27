import { Input } from "@material-ui/core";

interface InputProps {
  type: string;
  [rest: string]: any;
}

const CustomInput = ({ type, ...rest }: InputProps): JSX.Element => {
  return <Input type={type} name="recipe_img" {...rest}></Input>;
};

export default CustomInput;
