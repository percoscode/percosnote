import React from 'react';
import './App.css';

import Navigation from './components/navigation'
import SetupTools from './components/setupTools';
import CompositionMain from './components/compositionMain';

class  App extends React.Component {
  constructor() {
    super();
    this.state = {
    }
  }

  componentDidMount() {
    fetch('http://localhost:3000')
      // .then(response => response.json())
      .then(console.log)
  }

  render() {
    return (
      <div className="App">
        <Navigation />
        <SetupTools />
        <CompositionMain />
      </div>
    )
  }

}

export default App;
