import React from 'react';
import MenuItem from '../menu_item/menu_item.component';
import './directory.stylee.scss';
import { connect } from 'react-redux';
import { selectDirectorySetions } from '../../redux/directory/directory.selector';
import { createStructuredSelector } from 'reselect';

const Directory =({section})=>(
       
        
            <div className='directory-menu'>
                {section.map(({id, ...otherSectionProps}) =>(
                        <MenuItem key={id} {...otherSectionProps}/>
                    ))
                }
            </div> 
);

const mapStateToProp=createStructuredSelector({
    section:selectDirectorySetions
});


export default connect(mapStateToProp)(Directory);