import React, { ReactElement } from 'react';
import { Card, Button } from 'react-bootstrap';

interface Props {
    tt?: any
}
const CardComponent: React.FC<Props> = ({ tt }): ReactElement => {
    return (
        <Card>
            <Card.Title>#{tt.id}</Card.Title>
            <Card.Text>{tt.content}</Card.Text>
            <Button variant="primary">Like</Button>
        </Card>
    )
}

export default CardComponent;