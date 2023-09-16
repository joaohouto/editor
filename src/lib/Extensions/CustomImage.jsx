import Image from "@tiptap/extension-image";

const CustomImage = Image.extend({
  addAttributes() {
    return {
      ...this.parent?.(),
      width: {
        default: null,
      },
      height: {
        default: null,
      },
    };
  },
  addNodeView() {
    return ({
      editor,
      node,
      getPos,
      HTMLAttributes,
      decorations,
      extension,
    }) => {
      const container = document.createElement("div");

      container.className = "image";

      let content = document.createElement("img");
      content.src = node.attrs.src;
      container.append(content);

      return {
        dom: container,
        contentDOM: content,
      };
    };
  },
});

export default CustomImage;
