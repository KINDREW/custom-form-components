import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import { useForm, Controller } from "react-hook-form";
import TextInput from "../src/components/TextInput";

test("renders TextInput component", () => {
  const Wrapper = () => {
    const { control } = useForm();
    return (
      <Controller
        name="username"
        control={control}
        render={({ field }) => (
          <TextInput {...field} label="Username" placeholder="Enter username" />
        )}
      />
    );
  };

  render(<Wrapper />);

  // Find the input field by its label
  const input = screen.getByLabelText(/username/i);

  // Ensure the input is rendered
  expect(input).toBeInTheDocument();

  // Check placeholder text
  expect(input).toHaveAttribute("placeholder", "Enter username");

  // Check that the input is initially empty
  expect(input.value).toBe("");

  // Simulate user typing into the input
  fireEvent.change(input, { target: { value: "testuser" } });

  // Assert that the input value is updated
  expect(input.value).toBe("testuser");

  // Simulate clearing the input
  fireEvent.change(input, { target: { value: "" } });

  // Assert that the input is cleared
  expect(input.value).toBe("");
});
