import { createStore } from "vuex";

const removerAcentos = (string) => {
  const mapaAcentosHex = {
    a: /[\xE0-\xE6]/g,
    e: /[\xE8-\xEB]/g,
    i: /[\xEC-\xEF]/g,
    o: /[\xF2-\xF6]/g,
    u: /[\xF9-\xFC]/g,
    c: /\xE7/g,
  };
  for (let letra in mapaAcentosHex) {
    var expressaoRegular = mapaAcentosHex[letra];
    string = string.replace(expressaoRegular, letra);
  }
  return string;
};

export default createStore({
  state: {
    Mujer: [
      {
        title: "Black Snake Dress",
        src: require("@/assets/img/Mujer/1.jpeg"),
        price: 1849.99,
        description:
       "",
        type: "Top",
        color: "Black",
        Marca: "Gucci",
        gender: "Mujer",
        id: 1,
      },

      {
        title: "Tattered Silk Coat",
        src: require("@/assets/img/Mujer/2.jpeg"),
        price: 1379.99,
        description:
          "",
        type: "Top",
        color: "Grey",
        Marca: "Maison Margiela",
        gender: "Mujer",
        id: 2,
      },
      {
        title: "Royal Gold Gown",
        src: require("@/assets/img/Mujer/3.jpeg"),
        price: 859.99,
        description:
          "",
        type: "Top",
        color: "Blue",
        Marca: "Luisa Beccaria",
        gender: "Mujer",
        id: 3,
      },
      {
        title: "Fine Ripped Shirt",
        src: require("@/assets/img/Mujer/4.jpeg"),
        price: 1319.99,
        description:
          "",
        type: "Top",
        color: "Black",
        Marca: "Maison Margiela",
        gender: "Mujer",
        id: 4,
      },
      {
        title: "Renaissance Dress",
        src: require("@/assets/img/Mujer/5.jpeg"),
        price: 2899.99,
        description:
          "",
        type: "Top",
        color: "White",
        Marca: "Simone Rocha",
        gender: "Mujer",
        id: 5,
      },
      {
        title: "Black Buttoned Overcoat",
        src: require("@/assets/img/Mujer/6.jpeg"),
        price: 659.99,
        description:
          "",
        type: "Top",
        color: "Black",
        Marca: "Yohji Yamamoto",
        gender: "Mujer",
        id: 6,
      },
      {
        title: "Black Layered Top",
        src: require("@/assets/img/Mujer/7.jpeg"),
        price: 779.99,
        description:
          " ",
        type: "Top",
        color: "Black",
        Marca: "Anne Sofie Madsen",
        gender: "Mujer",
        id: 7,
      },
      {
        title: "White Bracelet Sneakers",
        src: require("@/assets/img/Mujer/8.jpeg"),
        price: 579.99,
        description:
          " ",
        type: "Shoes",
        color: "White",
        Marca: "Comme De Garcons",
        gender: "Mujer",
        id: 8,
      },
      {
        title: "Gold and Black Heels",
        src: require("@/assets/img/Mujer/9.jpeg"),
        price: 739.99,
        description:
          " ",
        type: "Shoes",
        color: "Gold",
        Marca: "Dolce & Gabbana",
        gender: "Mujer",
        id: 9,
      },

      {
        title: "Gold and Pink Floral Heels",
        src: require("@/assets/img/Mujer/10.jpeg"),
        price: 1239.99,
        description:
          " ",
        type: "Shoes",
        color: "Gold",
        Marca: "Dolce & Gabbana",
        gender: "Mujer",
        id: 10,
      },
      {
        title: "Stitched Mouse Top",
        src: require("@/assets/img/Mujer/11.jpeg"),
        price: 669.99,
        description:
          " ",
        type: "Top",
        color: "White",
        Marca: "Dolce & Gabbana",
        gender: "Mujer",
        id: 11,
      },
      {
        title: "Black Emblem Bag",
        src: require("@/assets/img/Mujer/12.jpeg"),
        price: 279.99,
        description:
          "",
        type: "Accessories",
        color: "Black",
        Marca: "Jean Paul Gaultier",
        gender: "Mujer",
        id: 12,
      },
      {
        title: "Glitter Skull Bag",
        src: require("@/assets/img/Mujer/13.jpeg"),
        price: 339.99,
        description:
          "",
        type: "Accessories",
        color: "Blue",
        Marca: "Manish Arora",
        gender: "Mujer",
        id: 13,
      },
      {
        title: "Portrait Bag",
        src: require("@/assets/img/Mujer/14.jpeg"),
        price: 489.99,
        description:
          "",
        type: "Accessories",
        color: "Gold",
        Marca: "Moschino",
        gender: "Mujer",
        id: 14,
      },
      {
        title: "Gold Bow Heels",
        src: require("@/assets/img/Mujer/15.jpeg"),
        price: 1239.99,
        description:
          "",
        type: "Shoes",
        color: "Gold",
        Marca: "Versace",
        gender: "Mujer",
        id: 15,
      },
      {
        title: "Black Lace Dress",
        src: require("@/assets/img/Mujer/16.jpeg"),
        price: 2579.99,
        description:
          "",
        type: "Top",
        color: "Black",
        Marca: "Valentino",
        gender: "Mujer",
        id: 16,
      },
      {
        title: "Aged Snake Bag",
        src: require("@/assets/img/Mujer/17.jpeg"),
        price: 899.99,
        description:
          "",
        type: "Accessories",
        color: "Gold",
        Marca: "Valentino",
        gender: "Mujer",
        id: 17,
      },
      {
        title: "Transparent Stitched Dress",
        src: require("@/assets/img/Mujer/18.jpeg"),
        price: 1529.99,
        description:
          "",
        type: "Top",
        color: "Gold",
        Marca: "Valentino",
        gender: "Mujer",
        id: 18,
      },
    ],
    Hombre: [
      {
        title: "Butterfly Suit",
        src: require("@/assets/img/Hombre/1.jpeg"),
        price: 979.99,
        description:
          "",
        type: "Top",
        color: "Black",
        Marca: "Alexander McQueen",
        gender: "Hombre",
        id: 19,
      },
      {
        title: "Balenciaga Boots",
        src: require("@/assets/img/Hombre/2.jpeg"),
        price: 779.99,
        description:
          "",
        type: "Shoes",
        color: "Black",
        Marca: "Balenciaga",
        gender: "Hombre",
        id: 20,
      },
      {
        title: "Burberry Jacket",
        src: require("@/assets/img/Hombre/3.jpeg"),
        price: 779.99,
        description:
          "",
        type: "Top",
        color: "Brown",
        Marca: "Burberry",
        gender: "Hombre",
        id: 21,
      },
      {
        title: "Gold Leaf Jacket",
        src: require("@/assets/img/Hombre/4.jpeg"),
        price: 3779.99,
        description:
          "",
        type: "Top",
        color: "Gold",
        Marca: "Dolce & Gabbana",
        gender: "Hombre",
        id: 22,
      },
      {
        title: "Snake Coat",
        src: require("@/assets/img/Hombre/5.jpeg"),
        price: 3779.99,
        description:
          "",
        type: "Top",
        color: "Blue",
        Marca: "Dries Van Noten",
        gender: "Hombre",
        id: 23,
      },
      {
        title: "Bee Pin",
        src: require("@/assets/img/Hombre/6.jpeg"),
        price: 279.99,
        description:
          "",
        type: "Accessories",
        color: "Gold",
        Marca: "Gucci",
        gender: "Hombre",
        id: 24,
      },
      {
        title: "React Shoes",
        src: require("@/assets/img/Hombre/7.jpeg"),
        price: 349.99,
        description:
          "",
        type: "Shoes",
        color: "Red",
        Marca: "Nike",
        gender: "Hombre",
        id: 25,
      },
      {
        title: "Brown costume",
        src: require("@/assets/img/Hombre/8.jpeg"),
        price: 234.99,
        description:
          "",
        type: "Top",
        color: "Brown",
        Marca: "Nordstorm",
        gender: "Hombre",
        id: 26,
      },
      {
        title: "Archive Redux",
        src: require("@/assets/img/Hombre/9.jpeg"),
        price: 93.99,
        description:
          "",
        type: "Top",
        color: "Brown",
        Marca: "Raf Simons",
        gender: "Hombre",
        id: 27,
      },
      {
        title: "Red Girl Shirt",
        src: require("@/assets/img/Hombre/10.jpeg"),
        price: 1349.99,
        description:
          "",
        type: "Top",
        color: "Red",
        Marca: "Raf Simons",
        gender: "Hombre",
        id: 28,
      },
      {
        title: "RS Pink Jacket",
        src: require("@/assets/img/Hombre/11.jpeg"),
        price: 1149.99,
        description:
          "",
        type: "Top",
        color: "Red",
        Marca: "Raf Simons",
        gender: "Hombre",
        id: 29,
      },
      {
        title: "Playing Card Pants",
        src: require("@/assets/img/Hombre/12.jpeg"),
        price: 949.99,
        description:
          "",
        type: "Bottom",
        color: "Black",
        Marca: "Undercover",
        gender: "Hombre",
        id: 30,
      },
      {
        title: "Castle Backpack",
        src: require("@/assets/img/Hombre/13.jpeg"),
        price: 699.99,
        description:
          "",
        type: "Accessories",
        color: "Grey",
        Marca: "Undercover",
        gender: "Hombre",
        id: 31,
      },
      {
        title: "Black Portrait Jacket",
        src: require("@/assets/img/Hombre/14.jpeg"),
        price: 1299.99,
        description:
          "",
        type: "Top",
        color: "Black",
        Marca: "Undercover",
        gender: "Hombre",
        id: 32,
      },
      {
        title: "Red Portrait Girl",
        src: require("@/assets/img/Hombre/15.jpeg"),
        price: 699.99,
        description:
          "",
        type: "Top",
        color: "Red",
        Marca: "Yohji Yamamoto",
        gender: "Hombre",
        id: 33,
      },
    ],
    cart: [],
    product: {},
    searchWord: null,
    filteredProducts: null,
    tax: 5,
    shipping: 15,
  },
  getters: {
    allProducts: (state) => state.Mujer.concat(state.Hombre),
    getMujer: (state) => state.Mujer,
    getHombre: (state) => state.Hombre,

    getCart: (state) => state.cart,
    cartItemCount: (state) => state.cart.length,

    getSearchWord: (state) => state.searchWord,

    getFilteredProduct: (state) => state.filteredProducts,

    getProductByIdMujer: (state) => (id) =>
      state.Mujer.find((Mujer) => Mujer.id === parseInt(id)),

    getProductByIdHombre: (state) => (id) =>
      state.Hombre.find((Hombre) => Hombre.id === parseInt(id)),

    cartTotalPrice: (state) => {
      let total = 0;
      state.cart.forEach((item) => {
        total += item.quantityPrice;
      });
      return total.toFixed(2);
    },

    getTax: (state) => state.tax,
    getShipping: (state) => state.shipping,

    cartVerificarPrice: (state) => {
      let total = 0;

      state.cart.forEach((item) => {
        total = item.quantityPrice + state.shipping;
        total = total + (total * state.tax) / 100;
      });
      return total.toFixed(2);
    },
  },
  mutations: {
    ADD_TO_CART: (state, { product, quantity, size, quantityPrice }) => {
      let productInCart = state.cart.find((item) => {
        return item.product.id === product.id;
      });
      if (productInCart) {
        productInCart.quantity += quantity;
        productInCart.quantityPrice += productInCart.product.price;
        productInCart.quantityPrice =
          Math.round(productInCart.quantityPrice * 100) / 100;
        return;
      }
      state.cart.push({ product, quantity, size, quantityPrice });
    },

    REMOVE_FROM_CART: (state, product) => {
      state.cart = state.cart.filter((item) => {
        return item.product.id !== product.id;
      });
    },

    GET_PRODUCT_DETAILS: (state, product) => {
      state.productDetails.push(product);
    },

    FILTERED_PRODUCTS(state, word) {
      if (!word || word === "{}") {
        state.searchWord = null;
        state.filteredProducts = null;
      } else {
        state.searchWord = word;
        word = removerAcentos(word.trim().toLowerCase());
        state.filteredProducts = state.Mujer
          .concat(state.Hombre)
          .filter((product) => {
            return (
              product.title.toLowerCase().includes(word) ||
              product.Marca.toLowerCase().includes(word) ||
              product.color.toLowerCase().includes(word) ||
              product.type.toLowerCase().includes(word)
            );
          });
      }
    },

    ORDER_SUCCESSFUL(state) {
      state.cart = [];
    },
  },
  actions: {
    addProductToCart: (
      { commit },
      { product, quantity, size, quantityPrice }
    ) => {
      commit("ADD_TO_CART", { product, quantity, size, quantityPrice });
    },
    removeProductFromCart: ({ commit }, product) => {
      commit("REMOVE_FROM_CART", product);
    },
    filterProducts({ commit }, word) {
      commit("FILTERED_PRODUCTS", word);
    },
    orderSuccess({ commit }) {
      commit("ORDER_SUCCESSFUL");
    },
  },
  modules: {},
});
