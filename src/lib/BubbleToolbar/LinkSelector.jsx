import React from "react";
import { useCurrentEditor } from "@tiptap/react";
import { RiLink, RiLinkUnlink } from "react-icons/ri";
import { LinkMenu } from "./styles";

export default function LinkSelector({ open, setOpen }) {
  const { editor } = useCurrentEditor();

  if (!editor) {
    return null;
  }

  return (
    <>
      <button
        onClick={() => {
          if (editor.getAttributes("link").href) {
            editor.commands.unsetLink();
          } else {
            setOpen(() => !open);
          }
        }}
        title="Link"
        className={(editor.getAttributes("link").href || open) && "is-active"}
      >
        {editor.getAttributes("link").href ? (
          <RiLinkUnlink size={16} />
        ) : (
          <RiLink size={16} />
        )}
      </button>

      {open && (
        <LinkMenu
          onSubmit={(e) => {
            e.preventDefault();
            const href = e.target[0].value;

            if (!href) return;

            editor.commands.setLink({ href });
            setOpen(false);
          }}
        >
          <input placeholder="Insira a url..." autoFocus />
        </LinkMenu>
      )}
    </>
  );
}
