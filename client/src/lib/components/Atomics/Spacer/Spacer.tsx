/** Interfaces/types */

/** components */

interface ISpacerProps {
  [rest: string]: any;
}

const Spacer = ({ ...rest }: ISpacerProps) => (
  <div style={{ flexGrow: 1, maxHeight: "100%", minHeight: "0%", ...rest }} />
);

export default Spacer;
