import React from 'react';
import './App.css';
import tongueTwisters from './tongue-source.json';

class App extends React.Component<{}, {selectedTwister: string}> {
  constructor(props: any) {
    super(props);

    this.state = {
      selectedTwister: '',
    }

    this.handleClick = this.handleClick.bind(this);
  }
  
  handleClick() {
    let randomIndex = Math.floor(Math.random() * tongueTwisters.length + 1);
    this.setState({selectedTwister: tongueTwisters[randomIndex].content});
  }

  render() {
      return (
      <div className="App">
        <header className="App-header">
          <p>
            { this.state.selectedTwister }
          </p>
          <button onClick={ this.handleClick }>Show a tongue twister</button>
        </header>
      </div>
    );
  }
}

export default App;
