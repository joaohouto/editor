/* eslint-disable react/prop-types */
import React from "react";

import { Component } from "react";
import { CommandMenu } from "./styles";

class CommandList extends Component {
  state = {
    selectedIndex: 0,
  };

  componentDidUpdate(oldProps) {
    if (this.props.items !== oldProps.items) {
      this.setState({
        selectedIndex: 0,
      });
    }
  }

  onKeyDown({ event }) {
    if (event.key === "ArrowUp") {
      this.upHandler();
      return true;
    }

    if (event.key === "ArrowDown") {
      this.downHandler();
      return true;
    }

    if (event.key === "Enter") {
      this.enterHandler();
      return true;
    }

    return false;
  }

  upHandler() {
    this.setState({
      selectedIndex:
        (this.state.selectedIndex + this.props.items.length - 1) %
        this.props.items.length,
    });
  }

  downHandler() {
    this.setState({
      selectedIndex: (this.state.selectedIndex + 1) % this.props.items.length,
    });
  }

  enterHandler() {
    this.selectItem(this.state.selectedIndex);
  }

  selectItem(index) {
    const item = this.props.items[index];

    if (item) {
      this.props.command(item);
    }
  }

  render() {
    const { items } = this.props;
    return (
      <CommandMenu>
        {items.map((item, index) => {
          return (
            <button
              className={`item ${
                index === this.state.selectedIndex ? "is-selected" : ""
              }`}
              key={index}
              onClick={() => this.selectItem(index)}
            >
              <div className="icon-box">{item.icon}</div>

              <div className="info">
                <strong>{item.title}</strong>
                <span>{item.description}</span>
              </div>
            </button>
          );
        })}

        {items.length === 0 && (
          <span className="message">Nenhum resultado</span>
        )}
      </CommandMenu>
    );
  }
}

export default CommandList;
