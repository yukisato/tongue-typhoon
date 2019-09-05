import React, { ReactElement } from 'react';
import Button from '@material-ui/core/Button';

interface Props {
    tt?: any
}
const CardComponent: React.FC<Props> = ({ tt }): ReactElement => {
    return (
        <Button variant="contained" color="primary">
            Hello World
        </Button>
    )
}

export default CardComponent;