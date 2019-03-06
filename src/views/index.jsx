import React, { Component } from 'react';
import styled from 'styled-components';

import Input from '../components/input';

function getBoxGroups() {
    const groups = [
        [0],
        [3],
        [6],
        [27],
        [30],
        [33],
        [54],
        [57],
        [60],
    ];
    let k = 0;

    for (let group = 0; group < 9; group++) {
        for (let r = 0; r < 3; r++) {
            k = groups[group][0] + (r + (r * 8));

            for (let c = 0; c < 3; c++) {
                if (k + c !== groups[group][0]) {
                    groups[group].push(k + c);
                }
            }
        }
    }

    return groups;
}

function getHorizontalGroups() {
    const groups = [];
    let group = 0;

    for (let k = 0; k < 81; k++) {
        if (k !== 0 && k % 9 === 0) {
            group += 1;
        }

        if (groups[group] === undefined) {
            groups.push([]);
        }

        groups[group].push(k);
    }

    return groups;
}

function getVerticalGroups() {
    const groups = [];

    for (let group = 0; group < 9; group++) {
        if (groups[group] === undefined) {
            groups.push([]);
        }

        for (let k = group; k < 81; k += 9) {
            groups[group].push(k);
        }
    }

    return groups;
}

const columns = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I'];
const possibilities = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const sudokuData = [];

const groups = {
    box: getBoxGroups(),
    horizontal: getHorizontalGroups(),
    vertical: getVerticalGroups(),
};

for (let c = 0; c < 9; c++) {
    for (let r = 1; r <= 9; r++) {
        sudokuData.push({
            id: `${columns[c]}${r}`,
            possibilities,
        });
    }
}

const Grid = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr;
    max-width: 450px;
`;

export default class sudokuGrid extends Component {
    constructor() {
        super();

        this.state = {
            sudoku: sudokuData,
        };

        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(index, event) {
        this.updateGroups(index, event.target.value);

        const { sudoku } = this.state;
        sudoku[index].possibilities = [event.target.value];

        this.setState({ sudoku });
    }

    updateGroups(index, value) {
        this.updateBoxGroups(index, value);
        this.updateHorizontalGroups(index, value);
        this.updateVerticalGroups(index, value);
    }

    updateBoxGroups(index, value) {
        const { sudoku } = this.state;

        groups.box.forEach(group => {
            if (group.includes(index)) {
                group.map(input => {
                    sudoku[input].possibilities.splice(sudoku[input].possibilities.indexOf(value), 1);
                    return input;
                });
            }
        });

        this.setState({ sudoku });
    }

    updateHorizontalGroups(index, value) {
        const { sudoku } = this.state;

        groups.horizontal.forEach(group => {
            if (group.includes(index)) {
                group.map(input => {
                    sudoku[input].possibilities.splice(sudoku[input].possibilities.indexOf(value), 1);
                    return input;
                });
            }
        });

        this.setState({ sudoku });
    }

    updateVerticalGroups(index, value) {
        const { sudoku } = this.state;

        groups.vertical.forEach(group => {
            if (group.includes(index)) {
                group.map(input => {
                    sudoku[input].possibilities.splice(sudoku[input].possibilities.indexOf(value), 1);
                    return input;
                });
            }
        });

        this.setState({ sudoku });
    }

    render() {
        const { sudoku } = this.state;
        return (
            <Grid>
                {sudoku.map((input, index) => <Input id={index} key={input.id} onChange={this.handleChange} possibilities={input.possibilities} />)}
            </Grid>
        );
    }
}
