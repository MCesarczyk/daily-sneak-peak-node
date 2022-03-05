import { render } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import ListViewItem from ".";
import mock from "../../../../../assets/mocks/children.json";

const setup = (id) => {
  const child = mock[id];

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

test("ListViewItem should get link to single child view (first on list)", () => {
  const fullName = setup(0).getByText(/Amy Raven/);
  expect(fullName).toBeInTheDocument();
  expect(fullName.closest('a')).toHaveAttribute('href', '/children/6')
});

test("ListViewItem should get link to single child view (middle)", () => {
  const fullName = setup(2).getByText(/John Doe/);
  expect(fullName).toBeInTheDocument();
  expect(fullName.closest('a')).toHaveAttribute('href', '/children/3')
});

test("ListViewItem should get link to single child view (last on list)", () => {
  const fullName = setup(mock.length-1).getByText(/Sophie Moon/);
  expect(fullName).toBeInTheDocument();
  expect(fullName.closest('a')).toHaveAttribute('href', '/children/5')
});

test("ListViewItem should contain group name", () => {
  const groupName = setup(0).getByText(/Group:/);
  expect(groupName).toBeInTheDocument();
  expect(groupName.closest('p').innerHTML).toContain('Monkeys')
});

test("ListViewItem should contain group name (another example)", () => {
  const groupName = setup(2).getByText(/Group:/);
  expect(groupName).toBeInTheDocument();
  expect(groupName.closest('p').innerHTML).toContain('Crocodiles')
});