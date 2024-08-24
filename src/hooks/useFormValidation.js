import { useForm } from "react-hook-form";

const useFormValidation = (defaultValues) => {
  return useForm({
    defaultValues,
    mode: "onBlur",
    reValidateMode: "onChange",
  });
};

export default useFormValidation;
