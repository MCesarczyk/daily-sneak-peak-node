import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import store from "../../../store";
import { children } from "../../../assets/mocks/children";
import reducer from "../childrenSlice";
import ChildrenList from ".";
import ListView from "./List";

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
  render(<ListView children={[]}/>);

  const list = screen.getByRole('list');
  expect(list.firstChild).toBeNull();
});

test("Children reducer should return initial state", () => {
  expect(reducer(undefined, {})).toEqual({
    "children": []
  });
});

test("Children reducer should return stored data", () => {
  const previousState = children;
  expect(reducer(previousState, {})).toMatchSnapshot();
});

