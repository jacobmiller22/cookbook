import { Dialog } from "lib/components/Atomics";

type RecipeProps = {
  show: boolean;
};

const Recipe = ({ show }: RecipeProps) => {
  return <Dialog open={show} title="title" />;
};

export default Recipe;
