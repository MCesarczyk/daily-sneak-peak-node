import { render, screen } from "@testing-library/react";
// import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import store from "../../store";
// import mock from "../../../assets/mocks/children.json";
import ListView from ".";

test("Children list should render spinner during loading", () => {
  render(
    <ListView childrenList={{}} state="loading" />
  );

  const loader = screen.queryByText(/Loading/);
  expect(loader).toBeInTheDocument();
});

test("Children list should be empty in idle state", () => {
  const { container } = render(
    <ListView childrenList={{}} state="idle" />
  );

  expect(container.firstChild).toBeNull();
});

test("Children list appears in document after delay", () => {
  render(
    <Provider store={store}>
      <ListView childrenList={{}} state="success" />
    </Provider>
  );

  const list = screen.queryByRole('list');
  expect(list).toBeInTheDocument();
});

test("Empty list shouldn't render at all", () => {
  render(
    <Provider store={store}>
      <ListView childrenList={[]} state="success" />
    </Provider>
  );

  const list = screen.getByRole('list');
  expect(list.firstChild).toBeNull();
});

// test("Children list should render mocked data", () => {
//   render(
//     <Provider store={store}>
//       <BrowserRouter>
//         <ListView childrenList={mock} state="success" />
//       </BrowserRouter>
//     </Provider>
//   );

//   const list = screen.getByRole('list');
//   const fullNames = screen.getAllByText(/Child:/);
//   fullNames.forEach(
//     (name, index) => expect(name.closest('span').innerHTML).toEqual(`Child: ${mock[index].name} ${mock[index].surname}`)
//   );

//   const groupNames = screen.getAllByText(/Group:/);
//   groupNames.forEach(
//     (name, index) => expect(name.closest('p').innerHTML).toEqual(`Group: ${mock[index].group}`)
//   );
// });