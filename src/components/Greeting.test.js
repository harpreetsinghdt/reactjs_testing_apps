import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Greeting from "./Greeting";

describe("Greeting component", () => {
  // test("renders hello world as a text", () => {
  //   // Arrange
  //   render(<Greeting />);

  //   // Act

  //   // Assert
  //   // screen.getByText("Hello world", { exact: true });
  //   const ele = screen.getByText("Hello world", { exact: false });
  //   expect(ele).toBeInTheDocument();
  // });

  // test("renders see you in the text", () => {
  //   render(<Greeting />);
  //   const elem = screen.getByText("see you", { exact: false });
  //   expect(elem).toBeInTheDocument();
  // });

  // test("renders its good to see you in the text", () => {
  //   render(<Greeting />);
  //   const elem = screen.getByText("its good to see you");
  //   expect(elem).toBeInTheDocument();
  // });

  test("renders- good to see you - if the button was NOT clicked", () => {
    render(<Greeting />);
    const elem = screen.getByText("good to see you", { exact: false });
    expect(elem).toBeInTheDocument();
  });

  test("renders- changed! - if the button was clicked", () => {
    // Arrange
    render(<Greeting />);

    // Act
    const btnElem = screen.getByRole("button");
    userEvent.click(btnElem);

    // Assert
    const elem = screen.getByText("Changed!");
    expect(elem).toBeInTheDocument();
  });

  test("doesn't renders- good to see you - if the button was clicked", () => {
    // Arrange
    render(<Greeting />);

    // Act
    const btnElem = screen.getByRole("button");
    userEvent.click(btnElem);

    // Assert
    const elem = screen.queryByText("good to see you", { exact: false });
    expect(elem).toBeNull();
  });

  test("renders- Child component - in the output component", () => {
    render(<Greeting />);
    const elem = screen.getByText("Child component", { exact: false });
    expect(elem).toBeInTheDocument();
  });
});
