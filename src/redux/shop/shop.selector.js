import { createSelector } from 'reselect';


const selectShopCollections= state =>state.shop;



export const selectShopCollectionsData = createSelector(
    [selectShopCollections],
    shop =>shop.SHOP_DATA
);

export const selectShopCollectionsPreview = createSelector(
    [selectShopCollectionsData],
    collections =>Object.keys(collections).map(key=>collections[key])
);

export const selectCollection=collectionUrlPrams =>
createSelector(
    [selectShopCollectionsData],
    SHOP_DATA=>SHOP_DATA[collectionUrlPrams]
);

export const selectCollectionitem=(collectionUrlPrams,collectionUrlPrams1) =>
createSelector(
    [selectShopCollectionsData],
    SHOP_DATA=>((SHOP_DATA[collectionUrlPrams].items).find(item=>item.id===collectionUrlPrams1))
);

