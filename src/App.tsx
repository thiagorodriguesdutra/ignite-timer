import { ThemeProvider } from "styled-components";
import { Button } from "./components/Button";
import { defaultTheme } from "./styles/themes/default";

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <Button variant="primary"/>
      <Button variant="secundary"/>
      <Button variant="danger"/>
      <Button variant="success"/>
      <Button></Button>
    </ThemeProvider>
  );
}