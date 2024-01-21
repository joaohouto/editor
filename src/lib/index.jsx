import React, { useCallback, useRef } from "react";
import PropTypes from "prop-types";

import { EditorProvider } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import Highlight from "@tiptap/extension-highlight";
import Link from "@tiptap/extension-link";
import TaskList from "@tiptap/extension-task-list";
import TaskItem from "@tiptap/extension-task-item";
import Typography from "@tiptap/extension-typography";
import TextStyle from "@tiptap/extension-text-style";
import Color from "@tiptap/extension-color";
import Placeholder from "@tiptap/extension-placeholder";

import CustomImage from "./Extensions/CustomImage";

import { Container } from "./styles";
import BubbleToolbar from "./BubbleToolbar";

import Commands from "./suggestion/commands";
import getSuggestionItems from "./suggestion/items";
import renderItems from "./suggestion/renderItems";
import FixedToolbar from "./FixedToolbar";

function Editor({
  defaultContent,
  onUpdate,
  placeholder,
  imageUploader,
  showMobileToolbar,
}) {
  const extensions = [
    StarterKit,
    Typography,
    TextStyle,
    Link.extend({
      inclusive: false,
    }),
    Highlight.configure({
      multicolor: true,
    }),
    Color.configure({
      types: ["textStyle"],
    }),
    CustomImage,
    TaskList,
    TaskItem.configure({
      nested: true,
    }),
    Commands.configure({
      suggestion: {
        items: ({ query }) => getSuggestionItems({ query, imageUploader }),
        render: renderItems,
      },
    }),
    Placeholder.configure({
      placeholder,
    }),
  ];

  /*  const previousImages = useRef([]);

  const checkForNodeDeletions = useCallback(({ editor }) => {
    const content = editor.getJSON().content;

    let images = content.filter((item) => item.type === "image");
    images = images.map((image) => image.attrs.title);

    if (previousImages.current.length > images.length) {
      const diff = previousImages.current.filter((x) => images.includes(x));

      console.log("image deleted!");
      console.log(diff);
    }

    previousImages.current = images;
  }, []); */

  return (
    <Container>
      <EditorProvider
        extensions={extensions}
        content={defaultContent}
        onUpdate={(data) => {
          onUpdate(data);
        }}
      >
        {showMobileToolbar ? <FixedToolbar /> : <BubbleToolbar />}
      </EditorProvider>
    </Container>
  );
}

Editor.propTypes = {
  defaultContent: PropTypes.string,
  onUpdate: PropTypes.func,
  placeholder: PropTypes.string,
  imageUploader: PropTypes.func,
};

export { Editor };
