import React, { Suspense } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import index from './containers/index';

export default function () {
    return (
        <Router>
            <Suspense fallback={<div>Loading...</div>}>
                <Route exact path="/" component={index} />
            </Suspense>
        </Router>
    );
}
