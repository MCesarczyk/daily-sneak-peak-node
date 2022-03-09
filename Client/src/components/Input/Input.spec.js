import { fireEvent, render } from "@testing-library/react";
import Input from ".";

const setup = () => {
  const utils = render(<Input />);
  const input = utils.getByRole('textbox');
  return {
    input,
    ...utils
  }
}

test("Input should be empty initially and allow to input and clear its value", () => {
  const { input } = setup();
  expect(input.value).toBe('');

  fireEvent.change(input, { target: { value: "John" } });
  expect(input.value).toBe("John");

  fireEvent.change(input, { target: { value: 1125 } });
  expect(input.value).toBe("1125");

  fireEvent.change(input, { target: { value: "Qwerty123#$%" } });
  expect(input.value).toBe("Qwerty123#$%");

  fireEvent.change(input, { target: { value: '' } });
  expect(input.value).toBe('');
});