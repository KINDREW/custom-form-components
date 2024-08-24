import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import { useForm, Controller } from "react-hook-form";
import CheckboxGroup from "../src/components/CheckboxGroup";

test("renders CheckboxGroup component and handles checkboxes", () => {
  const Wrapper = () => {
    const { control, setValue } = useForm();
    return (
      <Controller
        name="preferences"
        control={control}
        render={({ field }) => (
          <CheckboxGroup
            {...field}
            label="Preferences"
            options={[
              { value: "email", label: "Email" },
              { value: "sms", label: "SMS" },
            ]}
          />
        )}
      />
    );
  };

  render(<Wrapper />);

  // Find the checkboxes by their labels
  const emailCheckbox = screen.getByLabelText(/email/i);
  const smsCheckbox = screen.getByLabelText(/sms/i);

  // Initial assertions to make sure checkboxes are not checked
  expect(emailCheckbox).not.toBeChecked();
  expect(smsCheckbox).not.toBeChecked();

  // Simulate user clicking on the email checkbox
  fireEvent.click(emailCheckbox);
  expect(emailCheckbox).toBeChecked();

  // Simulate user clicking on the sms checkbox
  fireEvent.click(smsCheckbox);
  expect(smsCheckbox).toBeChecked();

  // Uncheck the email checkbox
  fireEvent.click(emailCheckbox);
  expect(emailCheckbox).not.toBeChecked();
});
