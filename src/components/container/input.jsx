import React from 'react';
import { connect } from 'react-redux';

import Input from '../presentational/input';

function inputContainer({ id, possibilities, siblings }) {
    return (
        <Input id={id} possibilities={possibilities} siblings={siblings} />
    );
}

const mapDispatchToProps = dispatch => {
    return {};
};

export default connect(null, mapDispatchToProps)(inputContainer);
