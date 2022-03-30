import { Dialog } from "components/Atomics";

type RecipeProps = {
  show: boolean;
};

const Recipe = ({ show }: RecipeProps) => {
  return <Dialog open={show} title="title" />;
};

export default Recipe;
