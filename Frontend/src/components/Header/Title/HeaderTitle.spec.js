import renderer from "react-test-renderer";
import { ThemeProvider } from "styled-components";
import { lightMode } from "../../../assets/theme"
import "jest-styled-components";
import { Title } from ".";

test("Title should change background color on hover", () => {
  const titleItem = renderer.create(
    <ThemeProvider theme={lightMode}>
      <Title />
    </ThemeProvider>
  );

  const title = titleItem.toJSON();
  
  expect(title).toHaveStyleRule('background-color', 'rgba(0,0,0,0.04)', {
    modifier: ':hover'
  });
});