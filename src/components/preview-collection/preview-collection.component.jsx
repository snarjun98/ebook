import "./preview-collection.style.scss";
import CollectionItem from "../Collection-item/collection-item.component";
import React from "react";
import {Searchbox} from '../search/search.component';

const PreviewCollection = ({title,items}) =>(

    <div className='collection-preview'>
        <h1 className='title'>{title.toUpperCase()}</h1>
        <div className='preview'>
{
items.filter((item,idx) =>idx).map((item)=>(
<CollectionItem key={item.id} item={item} ></CollectionItem>
))
}
        </div>
    </div>
)

export default PreviewCollection;