/** Interfaces/types */

/** components */

interface ISpacerProps {
  [rest: string]: any;
}

const Spacer = ({ ...rest }: ISpacerProps) => (
  <div style={{ flexGrow: 1, ...rest }} />
);

export default Spacer;
