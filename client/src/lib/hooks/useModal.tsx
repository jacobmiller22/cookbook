import { ModalCtx, TModalCtx } from "lib/contexts/modal";
import { useHookCtx } from ".";

const useModal = () => {
  return useHookCtx<TModalCtx>(ModalCtx);
};

export default useModal;
