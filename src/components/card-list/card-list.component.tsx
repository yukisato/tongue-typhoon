import React, { ReactElement } from 'react';
import Card from '../card/card.component';
import tongueTwisters from '../../tongue-source.json';

const CardList: React.FC = (): ReactElement => {
    return (
        <div>
        {
            tongueTwisters.map(tt => <Card key={tt.id} tt={tt} />)
        }
        </div>
    );
}

export default CardList;