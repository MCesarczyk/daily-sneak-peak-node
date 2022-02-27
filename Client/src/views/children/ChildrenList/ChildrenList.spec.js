import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import store from "../../../store";
import { children } from "../../../assets/mocks/children";
import reducer from "../childrenSlice";
import ChildrenList from ".";

test("Children list renders correctly", () => {
  render(
    <Provider store={store}>
      <ChildrenList />
    </Provider>
  );

  const list = screen.getByTestId("childrenList");
  expect(list).toBeInTheDocument();
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