# @joaohouto/editor

> ⚠️ Hey, this is an experimental package! So, some things can't work properly.

## About

`@joaohouto/editor` is a rich text editor React component built with [Tiptap](https://tiptap.dev/) packages. It provides a powerful and flexible solution for integrating rich text editing capabilities into your React applications.

You can try this package here: https://codesandbox.io/s/editor-4kvd84.

## Installation

You can install the `@joaohouto/editor` package via npm or yarn:

```bash
npm i @joaohouto/editor
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
        onUpdate={({ editor }) => console.log(editor.getHTML())}
      />
    </div>
  );
}

export default App;
```

The `Editor` component has the following props:

| Prop             | Type                       | Description                                                            | Default |
| ---------------- | -------------------------- | ---------------------------------------------------------------------- | ------- |
| `defaultContent` | `string`                   | The default data. Must be a HTML code.                                 |
| `onUpdate`       | `(editor: Editor) => void` | The callback function that is called whenever the editor data changes. |

## Styles

Also, some colors need to be provided by a `:root` CSS tag in order to Editor work properly. Here they are:

```css
/* Your global CSS file */
:root {
  --info: #0075ff;

  --background: #fff;
  --text: #333;
  --secondary-text: #777;

  --gray4: #444;
  --gray9: #999;
  --grayC: #ccc;
  --grayD: #ddd;
  --grayE: #eee;
  --grayF1: #f1f1f1;
  --grayFA: #fafafa;

  --purple-text: rgba(147, 51, 234, 1);
  --red-text: rgba(224, 0, 0, 1);
  --yellow-text: rgba(234, 179, 8, 1);
  --blue-text: rgba(37, 99, 235, 1);
  --green-text: rgba(0, 138, 0, 1);
  --orange-text: rgba(255, 157, 0, 1);
  --pink-text: rgba(186, 64, 129, 1);
  --gray-text: rgba(168, 162, 158, 1);

  --purple-background: rgba(147, 51, 234, 0.2);
  --red-background: rgba(224, 0, 0, 0.2);
  --yellow-background: rgba(234, 179, 8, 0.2);
  --blue-background: rgba(37, 99, 235, 0.2);
  --green-background: rgba(0, 138, 0, 0.2);
  --orange-background: rgba(255, 157, 0, 0.2);
  --pink-background: rgba(186, 64, 129, 0.2);
  --gray-background: rgba(168, 162, 158, 0.2);
}
```

## Contributing

We welcome contributions! If you have any bug reports, feature requests, or code improvements, please open an issue or submit a pull request on our [GitHub repository](https://github.com/joaohouto/editor).

## License

This project is licensed under the MIT License.
