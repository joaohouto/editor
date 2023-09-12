import styled from "styled-components";

export const Container = styled.div`
  margin: 0;
  padding: 0;
  border: 0;
  box-sizing: border-box;

  .ProseMirror {
    padding: 24px;
    width: 100%;
    min-height: 50vh;
  }

  button {
    transition: opacity 0.4s all;
    cursor: pointer;
    user-select: none;
    border: 0;
  }

  div {
    outline: 0;
  }

  p {
    line-height: 150%;
  }

  ul,
  ol {
    margin-left: 24px;
  }

  ul[data-type="taskList"] {
    list-style: none;
    padding: 0;
    margin: 0;

    p {
      margin: 0;
      word-wrap: break-word;
    }

    li {
      display: flex;
      margin: 8px 0;
      padding: 0;

      > label {
        flex: 0 0 auto;
        margin-right: 8px;
        user-select: none;

        input[type="checkbox"] {
          appearance: none;
          background-color: var(--background);
          margin: 0;
          font: inherit;
          color: currentColor;
          width: 20px;
          height: 20px;
          border: 1px solid var(--grayC);
          border-radius: 4px;
          transition: 0.2s ease;

          cursor: pointer;

          display: grid;
          place-content: center;

          &:hover {
            background: var(--grayF1);
          }
        }

        input[type="checkbox"]::before {
          content: "";
          transform: scale(0);
          width: 16px;
          height: 16px;
          transition: 0.2s transform ease;

          width: 4px;
          height: 8px;
          border: solid var(--background);
          border-width: 0 2px 2px 0;
          -webkit-transform: rotate(45deg);
          -ms-transform: rotate(45deg);
          transform: rotate(0deg) scale(0) translate(-1px, -1px);
        }

        input[type="checkbox"]:checked {
          background: var(--info);
          border: 1px solid var(--info);
        }

        input[type="checkbox"]:checked::before {
          transform: rotate(45deg) scale(1) translate(-1px, -1px);
        }
      }

      > div {
        flex: 1 1 auto;
      }

      ul li,
      ol li {
        display: list-item;
      }

      ul[data-type="taskList"] > li {
        display: flex;
      }
    }
  }

  hr {
    border-top: 1px solid var(--grayD);
    margin: 24px 0;
    padding: 0;
  }

  blockquote {
    padding: 0 24px;
    border-left: 4px solid var(--grayD);
  }

  pre {
    color: var(--background);
    background: var(--text);
    border-radius: 8px;

    padding: 16px;
  }

  code {
    font-family: monospace;
    color: var(--background);
    background: var(--text);
    border-radius: 6px;

    font-size: 14px;
    padding: 3px 6px;
  }

  a {
    cursor: pointer;
    font-weight: normal;
    text-decoration: underline;
  }

  .image {
    width: 100%;

    border: 1px solid var(--grayE);
    border-radius: 8px;

    display: flex;
    align-items: center;
    justify-content: center;
  }
`;
