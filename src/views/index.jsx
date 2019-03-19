import React from 'react';
import styled from 'styled-components';

import Input from '../components/container/input';

const Grid = styled.div`
    display: grid;
    grid-template-columns: repeat(9, 1fr);
    max-width: 450px;
`;

export default function ({ sudoku }) {
    return (
        <Grid>
            {sudoku.map(input => <Input key={input.coordinates} id={input.index} possibilities={input.possibilities} siblings={input.siblings} />)}
        </Grid>
    );
}
