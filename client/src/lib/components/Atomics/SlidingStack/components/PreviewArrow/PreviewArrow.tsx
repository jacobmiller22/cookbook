import { Button } from "@mui/material";
import ArrowIcon from "@mui/icons-material/ChevronRight";

type PreviewArrowProps = {
  direction: "left" | "right";
  onClick?: (dir: "left" | "right") => void;
};

const PreviewArrow = ({ direction, onClick }: PreviewArrowProps) => {
  const rotation = direction === "left" ? "180deg" : "0deg";

  return (
    <Button onClick={() => onClick(direction)}>
      <ArrowIcon sx={{ transform: `rotate(${rotation})` }} />
    </Button>
  );
};

export default PreviewArrow;
