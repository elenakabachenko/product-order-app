import {fetchProducts} from "./productSlice";

import {store} from "../index";

const getProductListResponse = [
  {
    id: 1,
    image: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
    price: 109.95,
    title: "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
}
];

const mockNetWorkResponse = () => {
  jest.spyOn(global, "fetch").mockImplementation(
    jest.fn(
      () => Promise.resolve({
        json: () => Promise.resolve(getProductListResponse),
      }),
    ) as jest.Mock)
};

beforeEach(() => {
  mockNetWorkResponse();
});


test("Fetch list of products", async () => {
    const result = await store.dispatch(fetchProducts());

    const products = result.payload;

    expect(result.type).toBe("products/fetch/fulfilled");
    expect(products).toEqual(getProductListResponse);

    const state = store.getState();

    expect(state.products.data.length).toBeGreaterThan(0);
    expect(state.products.data[0].id).toEqual(getProductListResponse[0].id)
});