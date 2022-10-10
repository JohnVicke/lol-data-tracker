import React from "react";
import { ComponentStory } from "@storybook/react";
import { createStory } from "../../utils/createStory";
import { Formik, Form } from "formik";

import { TextInput } from "ui";
import { MagnifyingGlassIcon } from "@heroicons/react/24/solid";
import type { TextInputProps } from "ui";

export const Base: ComponentStory<typeof TextInput> = (args: TextInputProps) => (
  <Formik
    initialValues={{ test: "" }}
    onSubmit={async (values, { setErrors }) => {
      console.log(values);
      setErrors({ test: "Example error message" });
    }}
  >
    {({ submitForm }) => (
      <Form>
        <TextInput {...args} name="test" label="test" endIcon={<MagnifyingGlassIcon />} onSubmit={submitForm} />
      </Form>
    )}
  </Formik>
);

export default createStory(TextInput);
