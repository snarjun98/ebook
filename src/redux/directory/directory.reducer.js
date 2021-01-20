const INITIAL_STATE = {
    section:[
        {
        title:'Action',
        imageUrl:'https://images.gr-assets.com/misc/1541707154-1541707154_goodreads_misc.png',
        id:1,
        linkUrl:'shop/action'
    },
    {
        title:'Comedy',
        imageUrl:'https://d1gbp99v447ls8.cloudfront.net/wp-content/uploads/2020/01/30152340/crime-books-non-crime-readers.png',
        id:2,
        linkUrl:'shop/comedy'
    },
    {
        title:'Horror',
        imageUrl:'https://www.fiercereads.com/wp-content/uploads/2020/05/1_mrMPplL.png',
        id:3,
        linkUrl:'shop/horror'
    },
    {
        title:'Thirller',
        imageUrl:'https://www.nypl.org/sites/default/files/2016recommendedcovers.jpg',
        size:'large',
        id:4,
        linkUrl:'shop/thirller'
    },
    {
        title:'Motivational',
        imageUrl:'https://toledolibrary.s3.amazonaws.com/uploads/images/blog/_large/best-business-books-2018-collage.jpg',
        size:'large',
        id:5,
        linkUrl:'shop/motivational'
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