import React from 'react';
import Theme from './controls/theme';

class App extends React.Component {

  render(): React.ReactNode {
    return (
      <div className='text-center dark:bg-slate-800'>
        <Theme />
          <div className='bg-red-800 text-slate-900 dark:text-white'>
            Cheatle
          </div>
      </div>
    );
  }
}

export default App;
