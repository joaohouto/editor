import styled from "styled-components";

export const CommandMenu = styled.div`
  display: flex;
  flex-direction: column;

  max-height: 300px;
  overflow-y: auto;

  width: 240px;
  background: var(--background);
  border-radius: 8px;
  margin-top: 8px;
  padding: 4px;
  border: 1px solid var(--grayE);
  box-shadow: 0 0 8px rgba(0, 0, 0, 0.1);

  button {
    background: var(--background);
    padding: 4px 8px;
    border-radius: 4px;
    font-size: 14px;
    text-align: left;
    cursor: pointer;

    transition: opacity 0.4s all;
    user-select: none;
    border: 0;

    display: flex;
    align-items: center;
    gap: 8px;

    &:focus {
      background: var(--grayF1);
      outline: 0;
    }

    .icon-box {
      height: 40px;
      width: 40px;
      min-width: 40px;
      border: 1px solid var(--grayD);
      background: var(--background);
      color: var(--text);
      border-radius: 6px;

      display: flex;
      align-items: center;
      justify-content: center;
    }

    .info {
      display: flex;
      flex-direction: column;
      gap: 4px;

      > strong {
        font-size: 14px;
        font-weight: 600;
        color: var(--text);
      }

      > span {
        font-size: 10px;
        color: var(--secondary-text);
      }
    }
  }

  button.is-selected {
    background: var(--grayF1);
    outline: 0;
  }

  .message {
    font-size: 14px;
    margin: 4px 8px;
    color: var(--secondary-text);
  }
`;
