import { toast } from "react-hot-toast";
import {
  RiCheckboxLine,
  RiH1,
  RiH2,
  RiH3,
  RiImageFill,
  RiListOrdered,
  RiListUnordered,
  RiQuoteText,
} from "react-icons/ri";

const getSuggestionItems = ({ query, imageUploader }) => {
  return [
    {
      title: "Título 1",
      description: "Seção de título grande.",
      searchTerms: ["titulo", "heading", "h1"],
      icon: <RiH1 size={16} />,
      command: ({ editor, range }) => {
        editor
          .chain()
          .focus()
          .deleteRange(range)
          .setNode("heading", { level: 1 })
          .run();
      },
    },
    {
      title: "Título 2",
      description: "Seção de título médio.",
      searchTerms: ["titulo", "heading", "h2"],
      icon: <RiH2 size={16} />,
      command: ({ editor, range }) => {
        editor
          .chain()
          .focus()
          .deleteRange(range)
          .setNode("heading", { level: 2 })
          .run();
      },
    },

    {
      title: "Título 3",
      description: "Seção de título pequeno.",
      searchTerms: ["titulo", "heading", "h3"],
      icon: <RiH3 size={16} />,
      command: ({ editor, range }) => {
        editor
          .chain()
          .focus()
          .deleteRange(range)
          .setNode("heading", { level: 3 })
          .run();
      },
    },

    {
      title: "Lista de tarefas",
      description: "Caixinhas de tarefas.",
      searchTerms: ["todo", "tarefas", "list", "check", "checkbox"],
      icon: <RiCheckboxLine size={16} />,
      command: ({ editor, range }) => {
        editor.chain().focus().deleteRange(range).toggleTaskList().run();
      },
    },

    {
      title: "Lista ordenada",
      description: "Crie uma lista com marcadores.",
      searchTerms: ["lista", "ponto", "marcador", "bullet"],
      icon: <RiListUnordered size={16} />,
      command: ({ editor, range }) => {
        editor.chain().focus().deleteRange(range).toggleBulletList().run();
      },
    },

    {
      title: "Lista numerada",
      description: "Crie uma lista ordenada.",
      searchTerms: ["lista", "ordenada", "ordered"],
      icon: <RiListOrdered size={16} />,
      command: ({ editor, range }) => {
        editor.chain().focus().deleteRange(range).toggleOrderedList().run();
      },
    },

    {
      title: "Citação",
      description: "Capture uma citação.",
      searchTerms: ["citação", "quote"],
      icon: <RiQuoteText size={16} />,
      command: ({ editor, range }) =>
        editor
          .chain()
          .focus()
          .deleteRange(range)
          .toggleNode("paragraph", "paragraph")
          .toggleBlockquote()
          .run(),
    },

    {
      title: "Imagem",
      description: "Faça o upload de alguma imagem.",
      searchTerms: ["imagem"],
      icon: <RiImageFill size={16} />,
      command: ({ editor, range }) => {
        const url = window.prompt("URL da imagem");

        if (url) {
          editor
            .chain()
            .focus()
            .deleteRange(range)
            .setImage({ src: url })
            .run();
        }

        /* toast.promise(
          imageUploader().then((response) => {
            editor
              .chain()
              .focus()
              .deleteRange(range)
              .setImage({ src: response.url, title: response.title })
              .run();
          }),
          {
            loading: "Carregando arquivo",
            success: "Arquivo carregado",
            error: "Erro ao carregar arquivo",
          }
        ); */
      },
    },
  ].filter((item) => {
    if (typeof query === "string" && query.length > 0) {
      const search = query.toLowerCase();

      return (
        item.title.toLowerCase().includes(search) ||
        item.description.toLowerCase().includes(search) ||
        (item.searchTerms &&
          item.searchTerms.some((term) => term.includes(search)))
      );
    }

    return true;
  });
};

export default getSuggestionItems;
