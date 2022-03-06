import reducer from "../childSlice";
import mock from "../../../assets/mocks/child.json";
import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import store from "../../../store";
import { ThemeProvider } from "styled-components";
import { lightMode } from "../../../assets/theme";
import Tile from "./Tile";

const setup = (child) => render(
  <Provider store={store}>
    <ThemeProvider theme={lightMode}>
      <Tile child={child} />
    </ThemeProvider>
  </Provider>
);

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

test("Child data should render properly", async () => {
  setup(mock);

  const tile = screen.queryByTestId('child-tile');
  expect(tile).toBeInTheDocument();

  expect(screen.getByText(/name:/)).toBeInTheDocument();
  expect(screen.getByRole('heading').innerHTML).toBe('Mary Jane');
  expect(screen.getByText(/group:/)).toBeInTheDocument();
  expect(screen.getByRole('subheading').innerHTML).toBe("Crocodiles");
});

test("Placeholder should display when it's no data", () => {
  setup();

  const tile = screen.queryByTestId('child-tile');
  expect(tile).not.toBeInTheDocument();

  const errorMessage = screen.getByRole('heading');
  expect(errorMessage.innerHTML).toBe('Sorry... no child data found.');

  const errorImage = screen.queryByRole('img');
  expect(errorImage).toBeInTheDocument();
});