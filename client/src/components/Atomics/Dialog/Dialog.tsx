import { Fragment } from "react";
import _ from "lodash";
import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from "@mui/material";

interface CustomDialogProps {
  open: boolean;
  title: string;
  content?: any[];
  actions?: JSX.Element[];
  [rest: string]: any;
}

const CustomDialog = ({
  open,
  title,
  content,
  actions,
  ...rest
}: CustomDialogProps): JSX.Element => {
  const renderContent = () => {
    const renderObject = (object) => {
      switch (object.type) {
        case "text":
          return <DialogContentText>{object.content}</DialogContentText>;
        case "jsx":
          return object.content;
        default:
          return null;
      }
    };
    return _.map(content, (object, i) => {
      return <Fragment key={i}>{renderObject(object)}</Fragment>;
    });
  };

  return (
    <Dialog open={open} {...rest}>
      {title && <DialogTitle>{title}</DialogTitle>}
      {content && <DialogContent>{renderContent()}</DialogContent>}
      {actions && (
        <DialogActions>
          {_.map(actions, (action, i) => (
            <Fragment key={i}>{action}</Fragment>
          ))}
        </DialogActions>
      )}
    </Dialog>
  );
};

export default CustomDialog;
