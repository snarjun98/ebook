import { createSelector } from 'reselect';


const selectShopCollections= state =>state.shop;



export const selectShopCollectionsData = createSelector(
    [selectShopCollections],
    shop =>shop.collections
);

export const selectShopCollectionsPreview = createSelector(
    [selectShopCollectionsData],
    collections =>
    collections ? Object.keys(collections).map(key=>collections[key]):[]
);

export const selectCollection=collectionUrlPrams =>
createSelector(
    [selectShopCollectionsData],
    collections=>(collections?collections[collectionUrlPrams]:null)
);

export const selectCollectionitem=(collectionUrlPrams,collectionUrlPrams1) =>
createSelector(
    [selectShopCollectionsData],
    collections=>((collections[collectionUrlPrams].items).find(item=>item.id===collectionUrlPrams1))
);

