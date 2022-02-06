import { useModal } from "contexts/modal";

/** Interfaces/types */

/** components */
import {
  Breakpoint,
  Dialog,
  DialogContent,
  DialogTitle,
  IconButton,
} from "@mui/material";
import { MODAL_VARIANT } from "interfaces";
import CloseIcon from "@mui/icons-material/Close";

interface IModalProps {}

const Modal = ({}: IModalProps) => {
  const [modal, dispatch] = useModal();

  const renderDialogTitle = () => {
    console.log(modal);
    switch (modal.type) {
      case MODAL_VARIANT.FORM:
        return (
          <DialogTitle sx={{ display: "flex" }}>
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
    dispatch({ type: MODAL_VARIANT.CLOSED });
  };

  return (
    <Dialog open={modal.open} onClose={handleClose} {...getDialogProps()}>
      {renderDialogTitle()}
      {renderDialogContent()}
    </Dialog>
  );
};

export default Modal;
