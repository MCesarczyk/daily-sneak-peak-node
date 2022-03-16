import reducer from "./childrenSlice";
import mock from "../../assets/mocks/children.json";

test("Children reducer should return initial state", () => {
  expect(reducer(undefined, {})).toEqual({
    children: [],
    state: 'idle'
  });
});

test("Children reducer should return mocked data", () => {
  const previousState = mock;
  expect(reducer(previousState, {})).toMatchSnapshot();
});