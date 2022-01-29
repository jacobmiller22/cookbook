import { Dialog } from "components/molecules";

interface RecipeProps {
  show: boolean;
}

const Recipe = ({ show }: RecipeProps) => {
  return <Dialog open={show} title="title" />;
};

export default Recipe;
