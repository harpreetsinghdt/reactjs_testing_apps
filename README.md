## Reactjs - Testing Library

## React Testing Library

### React Testing Library builds on top of DOM Testing Library by adding APIs for working with React components.

[React Testing Library](https://testing-library.com/docs/react-testing-library/intro/)

## Jest

### Jest is a delightful JavaScript Testing Framework with a focus on simplicity.

### It works with projects using: Babel, TypeScript, Node, React, Angular, Vue and more!

[Jest Library Documentation](https://jestjs.io/docs/getting-started)

### listitem role is used for all li renders in screen

```
const elem = await screen.findAllByRole("listitem", {}, { timeout: 3000 });
expect(elem).not.toHaveLength(0);
```

[Click here](https://www.w3.org/TR/html-aria/#index-aria-menuitem)

### check other role in documentation below

[Click here](https://www.w3.org/TR/html-aria/#docconformance)
