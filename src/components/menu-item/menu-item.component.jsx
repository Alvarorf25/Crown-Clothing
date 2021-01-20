import React from 'react';
import { withRouter } from 'react-router-dom';    // to avoid prop drilling import this

import './menu-item.styles.scss';

const MenuItem = ({ title, imageUrl, size, history, linkUrl, match }) => (
    <div className={`${size} menu-item`} onClick={() => history.push(`${match.url}${linkUrl}`)}>
        <div className='background-image' style={{backgroundImage: `url(${imageUrl})`}} />
        <div className='content'>
            <h1 className='title'>{title.toUpperCase()}</h1>
            <span className='subtitle'>SHOP NOW</span>
        </div>
    </div>
);

export default withRouter(MenuItem);           // Passing the "MenuItem" component as argument using withRouter to modify it giving it the access to location, match and history properties that only has access HomePage before (because it the child router)



/*
 withRouter() is a high order component. It means that it is a function that pass 
 as argument a component to be modified. In this case it is giving "MenuItem"
 access to the properties match, history and location (linkUrl) that only have 
 the HomePage component because is the first child route. 
  
  `${match.url}${linkUrl}`   = /someMatchedURL/linkURL
*/