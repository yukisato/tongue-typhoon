import React, { ReactElement, useState } from 'react';
import CardList from './components/card-list/card-list.component';
import './App.css';
import tongueTwisters from './tongue-source.json';

const App: React.FC = (): ReactElement => {
  const [selectedTwister, setSelectedTwister] = useState('');
  
  const handleClick = () => {
    let randomIndex = Math.floor(Math.random() * tongueTwisters.length + 1);
    setSelectedTwister(tongueTwisters[randomIndex].content);
  }

  return (
    <div className="TongueTyphoon">
      <header className="App-header">
        <p>
          { selectedTwister }
        </p>
        <button onClick={ handleClick }>Show a tongue twister</button>
        <hr />
        <CardList />
      </header>
    </div>
  );
}

export default App;
