import React from "react";
import { useCurrentEditor } from "@tiptap/react";
import {
  RiArrowDownSLine,
  RiCheckLine,
  RiCheckboxFill,
  RiCodeLine,
  RiH1,
  RiH2,
  RiH3,
  RiListOrdered,
  RiListUnordered,
  RiQuoteText,
  RiText,
} from "react-icons/ri";
import { TransformContainer } from "./styles";

export default function NodeSelector({ open, setOpen }) {
  const { editor } = useCurrentEditor();

  if (!editor) {
    return null;
  }

  const items = [
    {
      name: "Texto",
      icon: <RiText size={12} />,
      command: () =>
        editor.chain().focus().toggleNode("paragraph", "paragraph").run(),
      isActive: () =>
        editor.isActive("paragraph") &&
        !editor.isActive("bulletList") &&
        !editor.isActive("orderedList"),
    },
    {
      name: "Título 1",
      icon: <RiH1 size={12} />,
      command: () => editor.chain().focus().toggleHeading({ level: 1 }).run(),
      isActive: () => editor.isActive("heading", { level: 1 }),
    },
    {
      name: "Título 2",
      icon: <RiH2 size={12} />,
      command: () => editor.chain().focus().toggleHeading({ level: 2 }).run(),
      isActive: () => editor.isActive("heading", { level: 2 }),
    },
    {
      name: "Título 3",
      icon: <RiH3 size={12} />,
      command: () => editor.chain().focus().toggleHeading({ level: 3 }).run(),
      isActive: () => editor.isActive("heading", { level: 3 }),
    },
    {
      name: "Lista de tarefas",
      icon: <RiCheckboxFill size={12} />,
      command: () => editor.chain().focus().toggleTaskList().run(),
      isActive: () => editor.isActive("taskItem"),
    },
    {
      name: "Lista ordenada",
      icon: <RiListUnordered size={12} />,
      command: () => editor.chain().focus().toggleBulletList().run(),
      isActive: () => editor.isActive("bulletList"),
    },
    {
      name: "Lista numerada",
      icon: <RiListOrdered size={12} />,
      command: () => editor.chain().focus().toggleOrderedList().run(),
      isActive: () => editor.isActive("orderedList"),
    },
    {
      name: "Citação",
      icon: <RiQuoteText size={12} />,
      command: () =>
        editor
          .chain()
          .focus()
          .toggleNode("paragraph", "paragraph")
          .toggleBlockquote()
          .run(),
      isActive: () => editor.isActive("blockquote"),
    },
    {
      name: "Código",
      icon: <RiCodeLine size={12} />,
      command: () => editor.chain().focus().toggleCodeBlock().run(),
      isActive: () => editor.isActive("codeBlock"),
    },
  ];

  const activeItem = items.filter((item) => item.isActive()).pop() ?? {
    name: "Outros",
  };

  return (
    <TransformContainer>
      <button
        className="tool-button"
        onClick={() => setOpen(!open)}
        title="Modificar bloco"
      >
        <span>{activeItem?.name}</span>
        <RiArrowDownSLine size={16} />
      </button>

      {open && (
        <div className="dropdown">
          {items.map((item) => (
            <button
              key={item.name}
              onClick={() => {
                item.command();
                setOpen(false);
              }}
            >
              <div>
                <div className="icon-box">{item.icon}</div>
                {item.name}
              </div>

              {item.isActive() && <RiCheckLine size={14} />}
            </button>
          ))}
        </div>
      )}
    </TransformContainer>
  );
}
