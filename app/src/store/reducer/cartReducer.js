const ADD_TO_CART = 'ADD_TO_CART';

export const addToCartAction = payload => ({ type: ADD_TO_CART, payload });

// Если продукта нет в корзине, то мы берем action.payload, добавляем к нему count: 1 и измененный объект добавляем в состояние

// Если продукт есть в корзине, то мы обращаемся к свойству count этого продукта и увеличиваем значение на 1

const checkProduct = (state, payload) => {
    const productInCart = state.find(el => el.id === payload.id);
    if(!productInCart){
        return [...state, {...payload, count: 1}]
    } else {
        productInCart.count++
        return [...state]
    }
}

export const cartReducer = (state=[], action) => {
  if(action.type === ADD_TO_CART){
    return checkProduct(state, action.payload)
  } else {
    return state
}
}