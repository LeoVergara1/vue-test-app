import { render } from "@testing-library/vue";
import App from "./App.vue";

test("renders App", async () => {
  const { getByText } = render(App);
  // solo validar que se renderiza algo
  const element = getByText("Hello Vite!");
  expect(element).toBeTruthy();
});
