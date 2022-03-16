import renderer from "react-test-renderer";
import { ThemeProvider } from "styled-components";
import { lightMode } from "../../../assets/theme"
import "jest-styled-components";
import { Title } from ".";

test("Title should change color on hover", () => {
  const titleItem = renderer.create(
    <ThemeProvider theme={lightMode}>
      <Title />
    </ThemeProvider>
  );

  const title = titleItem.toJSON();
  
  expect(title).toHaveStyleRule('color', '#F5F5F5', {
    modifier: ':hover'
  });
});