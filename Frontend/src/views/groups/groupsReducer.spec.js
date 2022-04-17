import reducer from "./groupsSlice";

test("Groups reducer should return initial state", () => {
  expect(reducer(undefined, {})).toEqual({
    groups: [],
    state: 'idle'
  });
});