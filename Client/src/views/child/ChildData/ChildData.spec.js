import reducer from "../childSlice";
import mock from "../../../assets/mocks/child.json";

test("Child reducer should return the initial state", () => {
  expect(reducer(undefined, {})).toEqual(
    {
      id: 0,
      data: {},
      gotoList: false
    }
  )
});

test("Child reducer should return mocked data", () => {
  const previousState = mock;
  expect(reducer(previousState, {})).toMatchSnapshot();
});