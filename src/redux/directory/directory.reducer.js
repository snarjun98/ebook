const INITIAL_STATE = {
    section:[
        {
        title:'Action',
        imageUrl:'https://m.media-amazon.com/images/I/51qE5LN8T3L.jpg',
        id:1,
        linkUrl:'shop/sneakers'
    },
    {
        title:'Action',
        imageUrl:'https://m.media-amazon.com/images/I/51qE5LN8T3L.jpg',
        id:2,
        linkUrl:'shop/hats'
    },
    {
        title:'Action',
        imageUrl:'https://m.media-amazon.com/images/I/51qE5LN8T3L.jpg',
        id:3,
        linkUrl:'shop/mens'
    },
    {
        title:'Action',
        imageUrl:'https://m.media-amazon.com/images/I/51qE5LN8T3L.jpg',
        size:'large',
        id:4,
        linkUrl:'shop/womens'
    },
    {
        title:'Action',
        imageUrl:'https://m.media-amazon.com/images/I/51qE5LN8T3L.jpg',
        size:'large',
        id:5,
        linkUrl:'shop/jackets'
    },
]
};

const directoryReducer = (state =INITIAL_STATE,action) => {
    switch(action.type) {
        default:
            return state;
    }
};

export default directoryReducer;