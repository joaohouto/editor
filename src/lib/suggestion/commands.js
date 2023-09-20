import { Extension } from "@tiptap/core";
import Suggestion from "@tiptap/suggestion";

const Commands = Extension.create({
  name: "slash-command",

  addOptions: {
    suggestion: {
      char: "/",
      command: ({ editor, range, props }) => {
        props.command({ editor, range, props });
      },
    },
  },

  addProseMirrorPlugins() {
    return [
      Suggestion({
        editor: this.editor,
        ...this.options.suggestion,
      }),
    ];
  },
});

export default Commands;
