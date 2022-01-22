import React from "react";

interface IProps {
  colour: string;
}

class Tile extends React.Component<IProps> {
  get colourClass(): string {
    switch (this.props.colour) {
      case "yellow":
        return "bg-yellele";
      case "green":
        return "bg-greenle";
      default:
        return "bg-gray-500";
    }
  }

  render(): React.ReactNode {
    return (
      <div
        className={`text-center h-14 w-14 leading-14 mx-0.5 text-3xl font-bold ${this.colourClass}`}
      >
        {this.props.children}
      </div>
    );
  }
}

export default Tile;
