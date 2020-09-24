import { toast } from "react-toastify";

export const toastError = (error) => {
  toast.error(error);
};
export const toastSuccess = (message) => {
  toast.success(message);
};
