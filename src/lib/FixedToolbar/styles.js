import styled from "styled-components";

export const Container = styled.div``;

export const FixedContainer = styled.div`
  position: fixed;
  bottom: 0;
  left: 0;

  display: flex;
  align-items: center;
  justify-content: center;

  width: 100%;
  overflow-x: auto;

  border-top: 1px solid var(--grayD);
  background: var(--background);

  > button {
    height: 56px;
    padding: 16px;
    background: var(--background);
    color: var(--text);
    font-weight: 500;
    gap: 4px;
    font-size: 12px;
    cursor: pointer;
    transition: 0.2s ease;

    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;

    &:hover {
      background: var(--grayF1);
    }
  }

  .is-active {
    color: var(--info);
  }
`;

export const TransformContainer = styled.div`
  position: relative;

  .tool-button {
    height: 56px;
    width: 120px;
    padding: 16px;
    color: var(--text);
    background: var(--background);
    font-weight: 500;
    gap: 4px;
    font-size: 14px;
    text-align: left;
    cursor: pointer;

    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;

    border-right: 1px solid var(--grayE);

    &:hover {
      background: var(--grayF1);
    }
  }

  .dropdown {
    display: flex;
    flex-direction: column;

    width: 200px;
    background: var(--background);
    border-radius: 8px;
    margin: 8px;
    padding: 4px;
    border: 1px solid var(--grayE);
    box-shadow: 0 0 8px rgba(0, 0, 0, 0.1);

    button {
      background: var(--background);
      color: var(--text);
      padding: 6px 8px;
      border-radius: 4px;
      font-size: 14px;
      font-weight: 400;
      cursor: pointer;

      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: 6px;

      &:hover {
        background: var(--grayF1);
      }

      > div {
        display: flex;
        align-items: center;
        gap: 8px;
      }

      .icon-box {
        height: 24px;
        width: 24px;
        border: 1px solid var(--grayE);
        border-radius: 4px;
        background: var(--background);

        display: flex;
        align-items: center;
        justify-content: center;
      }
    }
  }
`;

export const ColorContainer = styled.div`
  .tool-button {
    height: 56px;
    padding: 16px;
    color: var(--text);
    background: var(--background);
    font-weight: 500;
    gap: 4px;
    font-size: 14px;
    cursor: pointer;

    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;

    border-left: 1px solid var(--grayE);

    &:hover {
      background: var(--grayF1);
    }

    .icon {
      width: 24px;
      height: 24px;

      display: flex;
      align-items: center;
      justify-content: center;
    }
  }

  .dropdown {
    display: flex;
    flex-direction: column;

    width: 200px;
    max-height: 300px;
    overflow-y: auto;

    background: var(--background);
    border-radius: 8px;
    margin: 8px;
    padding: 4px;
    border: 1px solid var(--grayE);
    box-shadow: 0 0 8px rgba(0, 0, 0, 0.1);

    .label {
      font-size: 14px;
      color: var(--secondary-text);
      font-weight: 500;
      padding: 8px 6px;
      text-transform: uppercase;
    }

    button {
      background: var(--background);
      color: var(--text);
      padding: 6px 8px;
      border-radius: 4px;
      font-size: 14px;
      font-weight: 400;
      cursor: pointer;

      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: 6px;

      &:hover {
        background: var(--grayF1);
      }

      > div {
        display: flex;
        align-items: center;
        gap: 8px;
      }

      .icon-box {
        height: 24px;
        width: 24px;
        border-radius: 4px;
        background: var(--background);
        border: 1px solid var(--grayE);
        font-size: 14px;

        font-weight: 500;

        display: flex;
        align-items: center;
        justify-content: center;
      }
    }
  }
`;

export const LinkMenu = styled.form`
  display: flex;
  flex-direction: column;

  width: 100%;
  color: var(--text);
  background: var(--background);
  border-radius: 8px;
  margin: 8px;
  padding: 4px;

  border: 1px solid var(--grayE);
  box-shadow: 0 0 8px rgba(0, 0, 0, 0.1);

  > input {
    padding: 6px 12px;
    border-radius: 4px;
    border: 1px solid var(--grayE);
    color: var(--text);
    background: var(--background);
  }
`;
