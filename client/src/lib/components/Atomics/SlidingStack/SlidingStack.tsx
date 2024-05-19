import { useState } from "react";
import { Stack } from "@mui/material";
import { PreviewArrow } from "./components";

type SlideStackProps = {
  children: React.ReactNode[];
  spacing?: string;
  slideSize?: number;
};

const SlidingStack = ({
  spacing,
  children,
  slideSize = 3,
}: SlideStackProps) => {
  const [pos, setPos] = useState(0);

  const renderChildren = () => {
    console.log(typeof children);
    console.log(children);

    const end =
      children.length - 1 < pos + slideSize
        ? children.length - 1
        : pos + slideSize;

    const slide = children.slice(pos, end);

    console.log(slide, pos, end);
    return slide;
  };

  const renderArrowbutton = (direction: "left" | "right") => {
    const handleClick = (dir: "left" | "right") => {
      switch (dir) {
        case "left":
          setPos(pos - slideSize);
          break;
        case "right":
          setPos(pos + slideSize);
          break;
      }
    };

    if (
      (direction === "left" && pos === 0) ||
      (direction === "right" && pos + slideSize >= children.length - 1)
    ) {
      return null;
    }
    return <PreviewArrow direction={direction} onClick={handleClick} />;
  };

  return (
    <Stack
      direction="row"
      spacing={spacing || "0.5rem"}
      justifyContent="center"

      // maxWidth="100%"
      // minWidth={"0px"}
      // flex={1}
    >
      {renderArrowbutton("left")}
      {renderChildren()}
      {renderArrowbutton("right")}
    </Stack>
  );
};

export default SlidingStack;
