const DISCOUNT_PRODUCTS = "DISCOUNT_PRODUCTS";

export const salesReducer = (payload) => ({
  type: DISCOUNT_PRODUCTS,
  payload,
});

export const getDiscountProductsAction = (payload) => ({
	type: DISCOUNT_PRODUCTS,
	payload,
  });

const initialState = []; // Начальное состояние

export const allProductsReducer = (state = initialState, action) => {
  if (action.type === DISCOUNT_PRODUCTS) {
    if (action.payload) {
      return state.map((el) => {
        if (el.discont_price === null) {
          return { ...el, show_product: false };
        }
        return el;
      });
    } else {
      return state.map((el) => {
        return { ...el, show_product: true };
      });
    }
  } else {
    return state;
  }
};
