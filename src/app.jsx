import React, { Suspense } from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import store from './redux/store';
import sudoku from './components/container';

export default function () {
    return (
        <Provider store={store}>
            <Router>
                <Suspense fallback={<div>Loading...</div>}>
                    <Route exact path="/" component={sudoku} />
                </Suspense>
            </Router>
        </Provider>
    );
}
