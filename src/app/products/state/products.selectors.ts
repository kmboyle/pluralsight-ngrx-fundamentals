import { createFeatureSelector, createSelector } from "@ngrx/store";
import { ProductsState } from "./products.reducer";
import { sumProducts } from "src/app/utils/sum-products";
import { getRouterSelectors } from "@ngrx/router-store";
import * as fromProducts from './products.reducer';

export const selectProductsState = createFeatureSelector<fromProducts.ProductsState>('products');

export const selectProducts = createSelector(
    selectProductsState,
    fromProducts.selectProducts
);

export const selectProductsEntities = createSelector(
    selectProductsState,
    fromProducts.selectProductEntities
);

export const selectProductsLoading = createSelector(
    selectProductsState,
    (productsState) => productsState.loading
);

export const selectProductsShowProductCode = createSelector(
    selectProductsState,
    (productsState) => productsState.showProductCode
);

export const selectProductsErrorMessage = createSelector(
    selectProductsState,
    (productsState) => productsState.errorMessage
);
export const selectProductsTotal = createSelector(selectProducts, sumProducts);

export const { selectRouteParams } = getRouterSelectors();

export const selectProductById  = createSelector(
    selectProductsEntities,
    selectRouteParams,
    (productsEntities, { id }) => productsEntities[id]
);

// // prior to implementing entity adapters
// export const selectProductById  = createSelector(
//     selectProducts,
//     selectRouteParams,
//     (products, { id }) => products.find((product) => product.id === parseInt(id))
// );

//  // Use this approach if your store doesn't implement Router Store
// export const selectProductById = (id: string) => createSelector(
//     selectProducts,
//     (products) => products.find((product) => product.id === parseInt(id))
// );