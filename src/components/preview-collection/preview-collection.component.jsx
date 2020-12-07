import "./preview-collection.style.scss";
import CollectionItem from "../Collection-item/collection-item.component";
import React from "react";

const PreviewCollection = ({title,items}) =>(
    <div className='collection-preview'>
        <h1 className='title'>{title.toUpperCase()}</h1>
        <div className='preview'>
{
items.filter((item,idx) =>idx<4).map(({id,...otherItemProps})=>(
<CollectionItem key={id} {...otherItemProps} ></CollectionItem>
))
}
        </div>
    </div>
)

export default PreviewCollection;