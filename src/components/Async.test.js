import { render, screen } from "@testing-library/react";
import Async from "./Async";

describe("Async component", () => {
  test("renders - posts if request succeedd", async () => {
    window.fetch = jest.fn();
    window.fetch.mockResolvedValueOnce({
      json: async () => [{ id: "p1", title: "First post" }],
    });
    render(<Async />);
    const elem = await screen.findAllByRole("listitem", {}, { timeout: 3000 });
    expect(elem).not.toHaveLength(0);
  });
});
