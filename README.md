# @joaohouto/editor

> ⚠️ Hey, this is an experimental package! So, some things can't work properly.

`@joaohouto/editor` is a rich text editor React component built with [Tiptap](https://tiptap.dev/) packages. It provides a powerful and flexible solution for integrating rich text editing capabilities into your React applications.

## Installation

You can install the `@joaohouto/editor` package via npm or yarn:

```bash
npm install @joaohouto/editor
# OR
yarn add @joaohouto/editor
```

## Usage

Here's a basic example of how to use the Editor component in your React application:

```javascript
import React from "react";
import { Editor } from "@joaohouto/editor";

const DEFAULT_CONTENT = `<p>Hello World!</p>`;

function App() {
  return (
    <div className="App">
      <Editor
        defaultContent={DEFAULT_CONTENT}
        onUpdate={(data) => console.log(data)}
      />
    </div>
  );
}

export default App;
```

The `Editor` component has the following props:

| Prop             | Type                     | Description                                                            | Default |
| ---------------- | ------------------------ | ---------------------------------------------------------------------- | ------- |
| `defaultContent` | `string`                 | The default data. Must be a HTML code.                                 |
| `onUpdate`       | `(data: string) => void` | The callback function that is called whenever the editor data changes. |

## Contributing

We welcome contributions! If you have any bug reports, feature requests, or code improvements, please open an issue or submit a pull request on our [GitHub repository](https://github.com/joaohouto/editor).

## License

This project is licensed under the MIT License.
