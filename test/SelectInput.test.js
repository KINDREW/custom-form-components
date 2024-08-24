import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import { useForm, Controller } from "react-hook-form";
import SelectInput from "../src/components/SelectInput";

test("renders SelectInput component and handles selection", () => {
  const options = [
    { value: "admin", label: "Admin" },
    { value: "user", label: "User" },
  ];

  const Wrapper = () => {
    const { control } = useForm();
    return (
      <Controller
        name="role"
        control={control}
        render={({ field }) => (
          <SelectInput {...field} label="Role" options={options} />
        )}
      />
    );
  };

  render(<Wrapper />);

  // Check if the select input and options are rendered
  const selectElement = screen.getByLabelText("Role");
  expect(selectElement).toBeInTheDocument();

  // Ensure the default value is an empty string
  expect(selectElement.value).toBe("");

  // Simulate a selection change
  fireEvent.change(selectElement, { target: { value: "user" } });

  // Check if the selected value is 'user'
  expect(selectElement.value).toBe("user");
});
