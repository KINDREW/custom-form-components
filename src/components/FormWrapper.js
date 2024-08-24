import React from "react";
import { useForm, Controller } from "react-hook-form";
import TextInput from "./TextInput";
import CheckboxGroup from "./CheckboxGroup";
import SelectInput from "./SelectInput";

const FormWrapper = () => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <TextInput
        name="username"
        control={control}
        label="Username"
        placeholder="Enter your username"
        rules={{ required: "Username is required" }}
      />
      <CheckboxGroup
        name="preferences"
        control={control}
        label="Preferences"
        options={[
          { value: "email", label: "Email" },
          { value: "sms", label: "SMS" },
        ]}
      />
      <SelectInput
        name="role"
        control={control}
        label="Role"
        options={[
          { value: "admin", label: "Admin" },
          { value: "user", label: "User" },
        ]}
      />
      <button type="submit">Submit</button>
    </form>
  );
};

export default FormWrapper;
