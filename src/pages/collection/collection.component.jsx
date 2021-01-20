import React from 'react';
import { connect } from 'react-redux';

import CollectionItem from '../../components/collection-item/collection-item.component';

import { selectCollection } from '../../redux/shop/shop.selectors';

import './collection.styles.scss';

const CollectionPage = ({ collection }) => {
    const { title, items } = collection; 

    return (
        <div className='collection-page'>
            <h2 className='title'>{title}</h2>
            <div className='items'>
                {
                    items.map(item => (<CollectionItem key={item.id} item={item} />))
                }
            </div>            
        </div>
    );
};

const mapStateToProps = (state, ownProps) => ({                                 // here it is using the second optional parameters in mapStateToProps. First: that is the overall reduce state from the top, Second: is ownProps which are the props of the component that you're wrapping
    collection: selectCollection(ownProps.match.params.collectionId)(state)     // match.params is the object shows in console.log for the property path and the wrap the state "this is necessary because unlike other selectors, this selector needs a part of the state depending on the Url parameter"
});

export default connect(mapStateToProps)(CollectionPage);