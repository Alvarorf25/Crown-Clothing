import React from 'react';
import { Route } from 'react-router-dom';

import CollectionsOverview from '../../components/collections-overview/collections-overview.component';
import CollectionPage from '../collection/collection.component';

const ShopPage = ({ match }) => (        
    <div className='shop-page'>
        <Route exact path={`${match.path}`} component={CollectionsOverview} />
        <Route path={`${match.path}/:collectionId`} component={CollectionPage} />
    </div>    
);

export default ShopPage;

/*
 Because ShopPage component is nested in a route in the app.js "<Route />"" auto-
 matically passes the objects (match, location and history) into ShopPage component
 as props 

*/