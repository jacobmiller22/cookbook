import { ModalCtx } from "contexts/modal";
import { useHookCtx } from ".";

const useModal = () => useHookCtx(ModalCtx);

export default useModal;
