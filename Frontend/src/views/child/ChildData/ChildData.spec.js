import reducer from "../childSlice";
import mock from "../../../assets/mocks/child.json";
import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import store from "../../../store";
import { ThemeProvider } from "styled-components";
import { lightMode } from "../../../assets/theme";
import Tile from "../../../components/Tile";

const setup = (state, child) => render(
  <Provider store={store}>
    <ThemeProvider theme={lightMode}>
      <Tile
        state={state}
        componentsState={{
          notFound: !child,
          errorMessage: "Sorry... no child data found.",
          loading: child && Object.entries(child).length === 0
        }}
        avatarUrl={child?.avatarUrl}
        headingData={{
          title: `${child?.name} ${child?.surname}`,
          subtitle: child?.group
        }}
        footerData={{
          buttonLabel: "Delete child",
          onDeleteWarning: `You're about to delete ${child?.name} ${child?.surname}`,
          onActionCall: () => dispatch(deleteChildData(child?.id)),
          popupFormType: 'editChild'
        }}
      />
    </ThemeProvider>
  </Provider>
);

test("Tile component should render spinner during loading", () => {
  setup('loading');

  const loader = screen.queryByText(/Loading/);
  expect(loader).toBeInTheDocument();
});

test("Children list should be empty in idle state", () => {
  const { container } = setup('idle');

  expect(container.firstChild).toBeNull();
});

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
  setup('success', mock);

  const tile = screen.queryByTestId('details-tile');
  expect(tile).toBeInTheDocument();

  expect(screen.getByText(/name:/)).toBeInTheDocument();
  expect(screen.getByRole('heading').textContent).toBe('Mary Jane');
  expect(screen.getByText(/group:/)).toBeInTheDocument();
  expect(screen.getByRole('subheading').innerHTML).toBe("Crocodiles");
});

test("Placeholder should display when it's no data", () => {
  setup('success');

  const tile = screen.queryByTestId('details-tile');
  expect(tile).not.toBeInTheDocument();

  const errorMessage = screen.getByRole('heading');
  expect(errorMessage.innerHTML).toBe('Sorry... no child data found.');

  const errorImage = screen.queryByRole('img');
  expect(errorImage).toBeInTheDocument();
});