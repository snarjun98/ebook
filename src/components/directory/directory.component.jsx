import React from 'react';
import MenuItem from '../menu_item/menu_item.component';
import './directory.stylee.scss';

class Directory extends React.Component{
    constructor(){
        super();
        this.state={
            section:[{
                title:'Action',
                imageUrl:'https://m.media-amazon.com/images/I/51qE5LN8T3L.jpg',
                id:1
            },
            {
                title:'Action',
                imageUrl:'https://m.media-amazon.com/images/I/51qE5LN8T3L.jpg',
                id:2
            },
            {
                title:'Action',
                imageUrl:'https://m.media-amazon.com/images/I/51qE5LN8T3L.jpg',
                id:3
            },
            {
                title:'Action',
                imageUrl:'https://m.media-amazon.com/images/I/51qE5LN8T3L.jpg',
                size:'large',
                id:4
            },
            {
                title:'Action',
                imageUrl:'https://m.media-amazon.com/images/I/51qE5LN8T3L.jpg',
                size:'large',
                id:5
            },
        ]
        }
    }
    render(){
        return(
            <div className='directory-menu'>
                {
                    this.state.section.map(({id, ...otherSectionProps}) =>(
                        <MenuItem key={id} {...otherSectionProps}/>
                    ))
                }
            </div>
        )
    }
}

export default Directory;