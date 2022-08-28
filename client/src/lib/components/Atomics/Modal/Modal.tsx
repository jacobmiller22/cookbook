import { useModal } from "lib/hooks";

/** Interfaces/types */

/** components */
import {
  Breakpoint,
  Dialog,
  DialogContent,
  DialogTitle,
  IconButton,
} from "@mui/material";
import { MODAL_VARIANT } from "lib/modal/types";
import CloseIcon from "@mui/icons-material/Close";

interface IModalProps {}

const Modal = ({}: IModalProps) => {
  const [modal, dispatch] = useModal();

  const renderDialogTitle = () => {
    //@ts-ignore
    switch (modal.type) {
      case MODAL_VARIANT.FORM:
        return (
          <DialogTitle sx={{ display: "flex" }}>
            {/* @ts-ignore */}
            {modal.content.title}
            <div style={{ flexGrow: 1 }} />
            <IconButton onClick={handleClose}>
              <CloseIcon />
            </IconButton>
          </DialogTitle>
        );
      default:
        null;
    }
  };

  const renderDialogContent = () => {
    switch (modal.type) {
      case MODAL_VARIANT.FORM: {
        return (
          <DialogContent>
            {/* @ts-ignore */}
            {<modal.content.body {...modal.content.bodyProps} />}
          </DialogContent>
        );
      }
      default:
        return null;
    }
  };

  const getDialogProps = () => {
    switch (modal.type) {
      case MODAL_VARIANT.FORM:
        return { maxWidth: "lg" as Breakpoint, fullWidth: true };
      default:
        return {};
    }
  };

  const handleClose = () => {
    dispatch({ type: MODAL_VARIANT.CLOSED, open: false });
  };

  return (
    <Dialog open={modal.open} onClose={handleClose} {...getDialogProps()}>
      {renderDialogTitle()}
      {renderDialogContent()}
    </Dialog>
  );
};

export default Modal;
