import { createSlice, configureStore } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: { items: [], totalQuantity: 0 },
  reducers: {
    replaceCart(state, action) {
      state.totalQuantity = action.payload.totalQuantity;
      state.items = action.payload.items;
    },
    addQuantity(state, action) {
      const name = action.payload;
      const existingItem = state.items.find((item) => item.name === name);
      state.totalQuantity++;
      existingItem.quantity++;
    },
    subtractQuantity(state, action) {
      const name = action.payload;
      const existingItem = state.items.find((item) => item.name === name);

      if (existingItem) {
        state.totalQuantity--;
        if (existingItem.quantity === 1) {
          // If quantity is 1, remove the item from the cart
          state.items = state.items.filter((item) => item.name !== name);
        } else {
          // Decrease the quantity by 1
          existingItem.quantity--;
        }
      }
    },
    addToCart(state, action) {
      const { productData, selectedSize } = action.payload;

      const existingItemIndex = state.items.findIndex(
        (item) => item.name === productData.brandProductName
      );

      if (existingItemIndex !== -1) {
        // Item already exists in the cart, update its quantity
        state.items[existingItemIndex].quantity++;
        state.totalQuantity++;
      } else {
        // Item doesn't exist in the cart, add it
        state.items.push({
          id: productData.id,
          size: selectedSize,
          imageUrl: productData.brandProductimage,
          price: parseFloat(productData.brandProductPrice),
          name: productData.brandProductName,
          quantity: 1,
          totalPrice: parseFloat(productData.brandProductPrice),
        });
        state.totalQuantity++;
      }
    },

    removeFromCart(state, action) {
      const id = action.payload;
      const existingItem = state.items.find((item) => item.id === id);
      state.totalQuantity--;
      if (existingItem.quantity === 1) {
        state.items = state.items.filter((item) => item.id !== id);
      } else {
        existingItem.quantity--;
      }
    },
  },
});

export const {
  addToCart,
  replaceCart,
  removeFromCart,
  addQuantity,
  subtractQuantity,
} = cartSlice.actions;

const store = configureStore({
  reducer: {
    cart: cartSlice.reducer,
  },
});

export default store;
