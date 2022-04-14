import reducer from "../groupSlice";
import mock from "../../../assets/mocks/group.json";
import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import store from "../../../store";
import { ThemeProvider } from "styled-components";
import { lightMode } from "../../../assets/theme";
import Tile from "../../../components/Tile";

const setup = (state, group) => render(
  <Provider store={store}>
    <ThemeProvider theme={lightMode}>
      <Tile
        state={state}
        componentsState={{
          notFound: !group,
          errorMessage: "Sorry... no group data found.",
          loading: group && Object.entries(group).length === 0
        }}
        avatarUrl={group?.avatarUrl}
        headingData={{
          title: group?.name,
          subtitle: group?.description,
          titleLabel: "group name: ",
          subtitleLabel: "description: "
        }}
        footerData={{
          buttonLabel: "Delete group",
          onDeleteWarning: `You're about to delete group: ${group?.name}`,
          onActionCall: () => dispatch(deleteGroupData(group?.id)),
          popupFormType: 'editGroup'
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

test("Groups list should be empty in idle state", () => {
  const { container } = setup('idle');

  expect(container.firstChild).toBeNull();
});

test("Group reducer should return the initial state", () => {
  expect(reducer(undefined, {})).toEqual(
    {
      id: 0,
      data: {},
      state: 'idle',
      gotoList: false
    }
  )
});

test("Group reducer should return mocked data", () => {
  const previousState = mock;
  expect(reducer(previousState, {})).toMatchSnapshot();
});

test("Group data should render properly", async () => {
  setup('success', mock);

  const tile = screen.queryByTestId('details-tile');
  expect(tile).toBeInTheDocument();

  expect(screen.getByText(/group name:/)).toBeInTheDocument();
  expect(screen.getByRole('heading').textContent).toBe('Crocodiles');
  expect(screen.getByText(/description:/)).toBeInTheDocument();
  expect(screen.getByRole('subheading').innerHTML).toBe("6year olders");
});

test("Placeholder should display when it's no data", () => {
  setup('success');

  const tile = screen.queryByTestId('details-tile');
  expect(tile).not.toBeInTheDocument();

  const errorMessage = screen.getByRole('heading');
  expect(errorMessage.innerHTML).toBe('Sorry... no group data found.');

  const errorImage = screen.queryByRole('img');
  expect(errorImage).toBeInTheDocument();
});