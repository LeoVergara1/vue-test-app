import { render, fireEvent } from "@testing-library/vue";

import HelloWorld from "./HelloWorld.vue";

test("renders HelloWorld", async () => {
  const { getByText } = render(HelloWorld);
  // solo validar que se renderiza algo
  const element = getByText("Click on the Vite and Vue logos to learn more");
  expect(element).toBeTruthy();
});

test("incrementa el contador al hacer clic en el botón", async () => {
  const { getByText } = render(HelloWorld);
  const button = getByText("count is 0");

  // Simula un clic en el botón
  await fireEvent.click(button);

  // Verifica que el texto del contador se haya actualizado
  expect(getByText("count is 1")).toBeTruthy();
});
