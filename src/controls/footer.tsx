import React from "react";

class Footer extends React.Component {
  render(): React.ReactNode {
    return (
      <footer className="container flex justify-center items-center text-sm h-12">
        <a href="https://github.com/andz200zx/cheatle" className="mx-2">
          repo
        </a>
        <a href="https://ko-fi.com/tripod" className="mx-2">
          kofi
        </a>
        <a href="https://www.powerlanguage.co.uk/wordle/" className="mx-2">
          wordle
        </a>
      </footer>
    );
  }
}

export default Footer;
