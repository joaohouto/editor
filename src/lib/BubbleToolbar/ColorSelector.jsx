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
    color: "#9333EA",
  },
  {
    name: "Vermelho",
    color: "#E00000",
  },
  {
    name: "Amarelo",
    color: "#EAB308",
  },
  {
    name: "Azul",
    color: "#2563EB",
  },
  {
    name: "Verde",
    color: "#008A00",
  },
  {
    name: "Laranja",
    color: "#FFA500",
  },
  {
    name: "Rosa",
    color: "#BA4081",
  },
  {
    name: "Cinza",
    color: "#A8A29E",
  },
];

const HIGHLIGHT_COLORS = [
  {
    name: "Padrão",
    color: "#fff",
  },
  {
    name: "Roxo",
    color: "#f6f3f8",
  },
  {
    name: "Vermelho",
    color: "#fdebeb",
  },
  {
    name: "Amarelo",
    color: "#fbf4a2",
  },
  {
    name: "Azul",
    color: "#c1ecf9",
  },
  {
    name: "Verde",
    color: "#acf79f",
  },
  {
    name: "Laranja",
    color: "#faebdd",
  },
  {
    name: "Rosa",
    color: "#faf1f5",
  },
  {
    name: "Cinza",
    color: "#f1f1ef",
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
