import React from "react";

import Footer from "./controls/footer";
import Header from "./controls/header";
import Theme from "./controls/theme";

class App extends React.Component {
  constructor(props: any) {
    super(props);
    this.loadTheme();
  }

  loadTheme(): void {
    if (
      localStorage.theme === "dark" ||
      (!("theme" in localStorage) &&
        window.matchMedia("(prefers-color-scheme: dark)").matches)
    ) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }

  get day(): number {
    const dayOne = new Date("2021/06/20");
    const diff = new Date().getTime() - dayOne.getTime();
    return Math.round(diff / (1000 * 3600 * 24));
  }

  render(): React.ReactNode {
    return (
      <div className="flex flex-col h-screen justify-between bg-gray-200 dark:bg-gray-900 text-slate-900 dark:text-white">
        <Header />
        <div className="container mb-auto text-center">
          {/* <Theme /> */}
          <div className="bg-greenle">day {this.day}</div>
        </div>
        <Footer />
      </div>
    );
  }
}

export default App;
