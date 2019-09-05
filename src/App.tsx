import React, { ReactElement, useState } from 'react';
import CardList from './components/card-list/card-list.component';
import 'typeface-roboto';
import tongueTwisters from './tongue-source.json';
import { Typography } from '@material-ui/core';

const App: React.FC = (): ReactElement => {
  const [selectedTwister, setSelectedTwister] = useState('');
  
  const handleClick = () => {
    let randomIndex = Math.floor(Math.random() * tongueTwisters.length + 1);
    setSelectedTwister(tongueTwisters[randomIndex].content);
  }

  return (
    <div className="TongueTyphoon">
      <header className="App-header">
        {/* We already have an h1 in the page, let's not duplicate it. */}
      <Typography variant="h1" component="h2">
        h1. Heading
      </Typography>
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
