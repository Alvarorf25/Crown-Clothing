import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { selectDirectorySections } from '../../redux/directory/directory.selectors';

import MenuItem from '../menu-item/menu-item.component';

import './directory.styles.scss';

const Directory = ({ sections }) => (    
    <div className='directory-menu'>
        {
            sections.map(({ id, ...otherSectionProps }) => 
                <MenuItem key={id} {...otherSectionProps} />            // title={title} imageUrl={imageUrl} size={size} linkUrl={linkUrl} because the keys and their values ar the same we can spread (...somenthing) to don't be verbose
            )
        }
    </div>    
);

const mapStateToProps = createStructuredSelector({
    sections: selectDirectorySections
});

export default connect(mapStateToProps)(Directory);