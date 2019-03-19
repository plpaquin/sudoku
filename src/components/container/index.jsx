import React from 'react';
import { connect } from 'react-redux';

import View from '../../views';

function sudokuContainer({ sudoku }) {
    return (
        <View sudoku={sudoku} />
    );
}

const mapStateToProps = state => {
    return { sudoku: state.sudoku };
};

export default connect(mapStateToProps)(sudokuContainer);
