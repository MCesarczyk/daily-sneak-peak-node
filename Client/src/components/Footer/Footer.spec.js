import { render, screen } from "@testing-library/react";
import { ThemeProvider } from "styled-components";
import { lightMode } from "../../assets/theme"
import "jest-styled-components";
import Footer from ".";

const footerElement = () => render(
  <ThemeProvider theme={lightMode}>
    <Footer />
  </ThemeProvider>
);

test("Header should be in document", () => {
  footerElement();

  const footer = screen.getByTestId("footer");
  expect(footer).toBeInTheDocument();
});

test("Header should contain footer note", () => {
  footerElement();

  const footerNote = screen.getByText(/Copyright ©/i);
  expect(footerNote).toBeInTheDocument();
});

test("Header should contain mail adress", () => {
  footerElement();

  const address = screen.getByText(/Cesarczyk.dev/i);
  expect(address).toBeInTheDocument();
});