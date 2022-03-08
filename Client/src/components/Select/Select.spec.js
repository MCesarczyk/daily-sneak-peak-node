import { fireEvent, render, within } from "@testing-library/react";
import Select from ".";

const options = [
  { id: 1, label: 'Elephants' },
  { id: 2, label: 'Cheetahs' },
  { id: 3, label: 'Zombies' }
];

it("Select should switch between option, checking more than once in a row shouldn't have any effect", () => {
  const { getByRole } = render(
    <Select options={options} />
  );

  fireEvent.mouseDown(getByRole('button'));
  const listbox = within(getByRole('listbox'));
  fireEvent.click(listbox.getByText(/Elephants/i));
  expect(getByRole('select')).toHaveTextContent('Elephants');

  fireEvent.mouseDown(getByRole('button'));
  fireEvent.click(listbox.getByText(/Zombies/i));
  expect(getByRole('select')).toHaveTextContent('Zombies');

  fireEvent.mouseDown(getByRole('button'));
  fireEvent.click(listbox.getByText(/Zombies/i));
  expect(getByRole('select')).toHaveTextContent('Zombies');
});