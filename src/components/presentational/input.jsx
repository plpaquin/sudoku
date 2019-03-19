import React, { Component } from 'react';

export default class input extends Component {
    constructor(props) {
        super(props);

        this.getValue = this.getValue.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    getValue() {
        const { possibilities } = this.props;

        if (possibilities.length === 1) {
            return possibilities[0];
        }

        return '';
    }

    handleChange(index, event) {
        const { onChange } = this.props;

        if (onChange) {
            onChange(index, event);
        }
    }

    render() {
        const { id } = this.props;
        return (
            <input max={9} min={1} onChange={event => this.handleChange(id, event)} type="number" value={this.getValue()} />
        );
    }
}
