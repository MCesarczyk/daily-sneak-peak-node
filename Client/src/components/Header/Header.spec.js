import { render, screen } from "@testing-library/react";
import { ThemeProvider } from "styled-components";
import { lightMode } from "../../assets/theme"
import { BrowserRouter } from "react-router-dom";
import "jest-styled-components";
import Header from ".";

const headerElement = () => render(
  <ThemeProvider theme={lightMode}>
    <BrowserRouter>
      <Header />
    </BrowserRouter>
  </ThemeProvider>
);

test("Header should be in document", () => {
  headerElement();

  const header = screen.getByTestId("header");
  expect(header).toBeInTheDocument();
});

test("Header should contain Title", async () => {
  headerElement();

  const title = screen.getByRole('heading');
  await expect(title).toBeInTheDocument();
});