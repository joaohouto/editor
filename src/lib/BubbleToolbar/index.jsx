import { useState } from "react";
import { BubbleMenu, useCurrentEditor } from "@tiptap/react";

import {
  RiBold,
  RiFormatClear,
  RiItalic,
  RiStrikethrough,
} from "react-icons/ri";

import NodeSelector from "./NodeSelector";
import LinkSelector from "./LinkSelector";
import ColorSelector from "./ColorSelector";

import { BubbleContainer, Container } from "./styles";

export default function BubbleToolbar() {
  const [linkOpen, setLinkOpen] = useState(false);
  const [nodeOpen, setNodeOpen] = useState(false);
  const [colorOpen, setColorOpen] = useState(false);

  const { editor } = useCurrentEditor();

  if (!editor) {
    return null;
  }

  return (
    <BubbleMenu
      tippyOptions={{
        moveTransition: "transform 0.2s ease",
        onHidden: () => {
          setNodeOpen(false);
          setLinkOpen(false);
          setColorOpen(false);
        },
      }}
    >
      <Container>
        <BubbleContainer>
          <NodeSelector
            open={nodeOpen}
            setOpen={(e) => {
              setNodeOpen(e);
              setLinkOpen(false);
              setColorOpen(false);
            }}
          />

          <LinkSelector
            open={linkOpen}
            setOpen={(e) => {
              setLinkOpen(e);
              setNodeOpen(false);
              setColorOpen(false);
            }}
          />

          <button
            onClick={() => editor.chain().focus().toggleBold().run()}
            disabled={!editor.can().chain().focus().toggleBold().run()}
            className={editor.isActive("bold") ? "is-active" : ""}
            title="Negrito"
          >
            <RiBold size={16} />
          </button>

          <button
            onClick={() => editor.chain().focus().toggleItalic().run()}
            disabled={!editor.can().chain().focus().toggleItalic().run()}
            className={editor.isActive("italic") ? "is-active" : ""}
            title="Itálico"
          >
            <RiItalic size={16} />
          </button>
          <button
            onClick={() => editor.chain().focus().toggleStrike().run()}
            disabled={!editor.can().chain().focus().toggleStrike().run()}
            className={editor.isActive("strike") ? "is-active" : ""}
            title="Traço"
          >
            <RiStrikethrough size={16} />
          </button>

          <button
            onClick={() => editor.chain().focus().unsetAllMarks().run()}
            title="Limpar formatação"
          >
            <RiFormatClear size={16} />
          </button>

          <ColorSelector
            open={colorOpen}
            setOpen={(e) => {
              setNodeOpen(false);
              setLinkOpen(false);
              setColorOpen(e);
            }}
          />
        </BubbleContainer>
      </Container>
    </BubbleMenu>
  );
}
