import { Input } from "@material-ui/core";

interface InputProps {
  type: string;
  [rest: string]: any;
}

const CustomInput = ({ type, ...rest }: InputProps): JSX.Element => {
  return <Input type={type} {...rest} name="recipe_img"></Input>;
};

export default CustomInput;
