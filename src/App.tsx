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
      <div className="h-screen bg-gray-200 dark:bg-gray-900">
        <div className="container text-center">
          <Theme />
          <div className="bg-greenle text-slate-900 dark:text-white">
            day {this.day}
          </div>
        </div>
      </div>
    );
  }
}

export default App;
