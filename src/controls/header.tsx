import React from "react";
import Tile from "./tile";

class Header extends React.Component {
  render(): React.ReactNode {
    return (
      <header className="flex justify-center items-center h-20 text-center">
        <Tile colour="yellow">C</Tile>
        <Tile colour="yellow">H</Tile>
        <Tile colour="yellow">E</Tile>
        <Tile colour="yellow">A</Tile>
        <Tile colour="yellow">T</Tile>
        <Tile colour="green">L</Tile>
        <Tile colour="green">E</Tile>
      </header>
    );
  }
}

export default Header;
