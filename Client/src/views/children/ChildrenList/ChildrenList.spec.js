import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import store from "../../../store";
import mock from "../../../assets/mocks/children.json";
import reducer from "../childrenSlice";
import ChildrenList from ".";
import ListView from "./List";

test("Children reducer should return initial state", () => {
  expect(reducer(undefined, {})).toEqual({
    children: []
  });
});

test("Children reducer should return stored data", () => {
  const previousState = mock;
  expect(reducer(previousState, {})).toMatchSnapshot();
});

test("Children list appears in document", () => {
  render(
    <Provider store={store}>
      <ChildrenList />
    </Provider>
  );

  const list = screen.getByRole('list');
  expect(list).toBeInTheDocument();
});

test("Empty list shouldn't render at all", () => {
  render(<ListView children={[]} />);

  const list = screen.getByRole('list');
  expect(list.firstChild).toBeNull();
});

test("Children list should render mocked data", () => {
  render(
    <BrowserRouter>
      <ListView children={mock} />
    </BrowserRouter>
  );

  const list = screen.getByRole('list');
  const fullNames = screen.getAllByText(/Child:/);
  fullNames.forEach(
    (name, index) => expect(name.closest('span').innerHTML).toEqual(`Child: ${mock[index].name} ${mock[index].surname}`)
  );

  const groupNames = screen.getAllByText(/Group:/);
  groupNames.forEach(
    (name, index) => expect(name.closest('p').innerHTML).toEqual(`Group: ${mock[index].group}`)
  );
});