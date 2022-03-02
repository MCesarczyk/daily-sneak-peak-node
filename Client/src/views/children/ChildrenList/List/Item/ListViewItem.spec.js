import { render } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import ListViewItem from ".";
import { children } from "../../../../../assets/mocks/children";

const setup = (id) => {
  const child = children[id];

  const item = render(
    <BrowserRouter>
      <ListViewItem child={child} />
    </BrowserRouter>
  );

  return item;
};

test("ListViewItem should be rendered in the list", () => {
  const itemInstance = setup(0).getByRole('listitem');
  expect(itemInstance).toBeInTheDocument();
});

test("ListViewItem should get link to single child view", () => {
  const fullName = setup(0).getByText(/Amy Raven/);
  expect(fullName).toBeInTheDocument();
  expect(fullName.closest('a')).toHaveAttribute('href', '/children/6')
});

test("ListViewItem should contain group name", () => {
  const groupName = setup(0).getByText(/Group:/);
  expect(groupName).toBeInTheDocument();
  expect(groupName.closest('p').innerHTML).toContain('Monkeys')
});

test("ListViewItem should get link to single child view", () => {
  const fullName = setup(2).getByText(/John Doe/);
  expect(fullName).toBeInTheDocument();
  expect(fullName.closest('a')).toHaveAttribute('href', '/children/3')
});

test("ListViewItem should contain group name", () => {
  const groupName = setup(2).getByText(/Group:/);
  expect(groupName).toBeInTheDocument();
  expect(groupName.closest('p').innerHTML).toContain('Crocodiles')
});