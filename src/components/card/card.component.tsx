import React, { ReactElement } from 'react';
interface Props {
    tt?: any
}
const Card: React.FC<Props> = ({ tt }): ReactElement => {
    return (
        <div>
            <p>
                {tt.content}
            </p>
        </div>
    )
}

export default Card;