import React from "react";
import { useCurrentEditor } from "@tiptap/react";
import { RiArrowDownSLine, RiCheckLine } from "react-icons/ri";
import { ColorContainer } from "./styles";

const TEXT_COLORS = [
  {
    name: "Padrão",
    color: "var(--text)",
  },
  {
    name: "Roxo",
    color: "var(--purple-text)",
  },
  {
    name: "Vermelho",
    color: "var(--red-text)",
  },
  {
    name: "Amarelo",
    color: "var(--yellow-text)",
  },
  {
    name: "Azul",
    color: "var(--blue-text)",
  },
  {
    name: "Verde",
    color: "var(--green-text)",
  },
  {
    name: "Laranja",
    color: "var(--orange-text)",
  },
  {
    name: "Rosa",
    color: "var(--pink-text)",
  },
  {
    name: "Cinza",
    color: "var(--gray-text)",
  },
];

const HIGHLIGHT_COLORS = [
  {
    name: "Padrão",
    color: "var(--background)",
  },
  {
    name: "Roxo",
    color: "var(--purple-background)",
  },
  {
    name: "Vermelho",
    color: "var(--red-background)",
  },
  {
    name: "Amarelo",
    color: "var(--yellow-background)",
  },
  {
    name: "Azul",
    color: "var(--blue-background)",
  },
  {
    name: "Verde",
    color: "var(--green-background)",
  },
  {
    name: "Laranja",
    color: "var(--orange-background)",
  },
  {
    name: "Rosa",
    color: "var(--pink-background)",
  },
  {
    name: "Cinza",
    color: "var(--gray-background)",
  },
];

export default function ColorSelector({ open, setOpen }) {
  const { editor } = useCurrentEditor();

  if (!editor) {
    return null;
  }

  const activeColorItem = TEXT_COLORS.find(({ color }) =>
    editor.isActive("textStyle", { color })
  );

  const activeHighlightItem = HIGHLIGHT_COLORS.find(({ color }) =>
    editor.isActive("highlight", { color })
  );

  return (
    <ColorContainer>
      <button
        className="tool-button"
        onClick={() => setOpen(!open)}
        title="Cor do texto"
      >
        <span
          className="icon"
          style={{
            color: activeColorItem?.color,
            backgroundColor: activeHighlightItem?.color,
          }}
        >
          A
        </span>

        <RiArrowDownSLine size={16} />
      </button>

      {open && (
        <div className="dropdown">
          <div className="label">Texto</div>

          {TEXT_COLORS.map(({ name, color }, index) => (
            <button
              key={index}
              onClick={() => {
                editor.commands.unsetColor();
                name !== "Padrão" &&
                  editor
                    .chain()
                    .focus()
                    .setColor(color || "")
                    .run();
                setOpen(false);
              }}
              type="button"
            >
              <div>
                <div className="icon-box" style={{ color }}>
                  A
                </div>
                <span>{name}</span>
              </div>

              {editor.isActive("textStyle", { color }) && (
                <RiCheckLine size={14} />
              )}
            </button>
          ))}

          <div className="label">Fundo</div>

          {HIGHLIGHT_COLORS.map(({ name, color }, index) => (
            <button
              key={index}
              onClick={() => {
                editor.commands.unsetHighlight();
                name !== "Padrão" && editor.commands.setHighlight({ color });
                setOpen(false);
              }}
              type="button"
            >
              <div>
                <div className="icon-box" style={{ backgroundColor: color }}>
                  A
                </div>
                <span>{name}</span>
              </div>

              {editor.isActive("highlight", { color }) && (
                <RiCheckLine size={14} />
              )}
            </button>
          ))}
        </div>
      )}
    </ColorContainer>
  );
}
