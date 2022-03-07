import { fireEvent, render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { ThemeProvider } from "styled-components";
import store from "../../store";
import { lightMode } from "../../assets/theme";
import DialogPopup from "./DialogPopup";
import { modal } from "../../assets/fixtures";

const formTypes = [
  "add",
  "edit",
  "addDetails",
  "editDetails"
];

const setup = (form) => render(
  <Provider store={store}>
    <ThemeProvider theme={lightMode} >
      <DialogPopup form={form} />
    </ThemeProvider>
  </Provider>
);

test("Dialog button should be present in the form", () => {
  setup();

  const button = screen.getByRole('button');
  expect(button).toBeInTheDocument();
});

test("Dialog should be initially closed", () => {
  setup();

  formTypes.forEach(type => {
    const title = screen.queryByText(modal[type].buttonText);
    expect(title).not.toBeInTheDocument();
  });
});

test("'Add new child dialog' should open after 'Add+' button click in Children List view", () => {
  setup("add");

  const button = screen.getByText(modal["add"].buttonText);
  fireEvent.click(button);
  expect(screen.queryByText(modal["add"].title)).toBeInTheDocument();
});