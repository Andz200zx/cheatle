import React from "react";
import Theme from "./controls/theme";

class App extends React.Component {
  get day(): number {
    const dayOne = new Date("2021/06/20");
    const diff = new Date().getTime() - dayOne.getTime();
    return Math.ceil(diff / (1000 * 3600 * 24));
  }

  render(): React.ReactNode {
    return (
      <div className="bg-gray-200 dark:bg-gray-900">
        <div className="container mx-auto text-center">
          <Theme />
          <div className="bg-purple-700 text-slate-900 dark:text-white">
            Cheatle day {this.day}
          </div>
        </div>
      </div>
    );
  }
}

export default App;
