/* eslint-disable react/prop-types */
import React, {
  useCallback,
  useEffect,
  useLayoutEffect,
  useRef,
  useState,
} from "react";

import { Component } from "react";
import { CommandMenu } from "./styles";

export const updateScrollView = (container, item) => {
  const containerHeight = container.offsetHeight;
  const itemHeight = item ? item.offsetHeight : 0;

  const top = item.offsetTop - 8;
  const bottom = top + itemHeight;

  if (top < container.scrollTop) {
    container.scrollTop -= container.scrollTop - top + 5;
  } else if (bottom > containerHeight + container.scrollTop) {
    container.scrollTop += bottom - containerHeight - container.scrollTop + 5;
  }
};

const CommandList = ({ items, command, editor, range }) => {
  const [selectedIndex, setSelectedIndex] = useState(0);

  const selectItem = (index) => {
    const item = items[index];

    if (item) {
      command(item);
    }
  };

  useEffect(() => {
    const navigationKeys = ["ArrowUp", "ArrowDown", "Enter"];

    const onKeyDown = (e) => {
      if (navigationKeys.includes(e.key)) {
        e.preventDefault();

        if (e.key === "ArrowUp") {
          setSelectedIndex((selectedIndex + items.length - 1) % items.length);
          return true;
        }
        if (e.key === "ArrowDown") {
          setSelectedIndex((selectedIndex + 1) % items.length);
          return true;
        }
        if (e.key === "Enter") {
          console.log("opa");
          selectItem(selectedIndex);
          return true;
        }

        return false;
      }
    };

    document.addEventListener("keydown", onKeyDown);

    return () => {
      document.removeEventListener("keydown", onKeyDown);
    };
  }, [items, selectedIndex, setSelectedIndex]);

  useEffect(() => {
    setSelectedIndex(0);
  }, [items]);

  const commandListContainer = useRef(null);

  useLayoutEffect(() => {
    const container = commandListContainer?.current;

    const item = container?.children[selectedIndex];

    if (item && container) updateScrollView(container, item);
  }, [selectedIndex]);

  return (
    <CommandMenu ref={commandListContainer}>
      {items.map((item, index) => {
        return (
          <button
            className={`item ${index === selectedIndex ? "is-selected" : ""}`}
            key={index}
            onClick={() => selectItem(index)}
          >
            <div className="icon-box">{item.icon}</div>

            <div className="info">
              <strong>{item.title}</strong>
              <span>{item.description}</span>
            </div>
          </button>
        );
      })}

      {items.length === 0 && <span className="message">Nenhum resultado</span>}
    </CommandMenu>
  );
};
export default CommandList;
