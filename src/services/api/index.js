const API = process.env.NEXT_PUBLIC_API_URL;
const VERSION = process.env.NEXT_PUBLIC_API_URL_VERSION;

const endPoints = {
  auth: {
    login: `${API}/api/${VERSION}/auth/login`,
    profile: `${API}/api/${VERSION}/auth/login`,
  },
  products: {
    getProduct: (id) => {
      `${API}/api/${VERSION}/products/${id}`;
    },
    getProducts: (limit, offset) => {
      `${API}/api/${VERSION}/products?limit=${limit}&offsets=${offset}`;
    },
    addProduct: `${API}/api/${VERSION}/products/`,
    updateProduct: (id) => `${API}/api/${VERSION}/products/${id}`,
    deleteProduct: (id) => `${API}/api/${VERSION}/products/${id}`,
  },
  categories: {
    getCategoriesList: `${API}/api/${VERSION}/categories/`,
    addCategory: `${API}/api/${VERSION}/categories/`,
    getCateggoryItems: (id) =>
      `${API}/api/${VERSION}/categories/${id}/products/`,
    updaateCategory: (id) => `${API}/api/${VERSION}/categories/${id}`,
  },
  files: {
    addImage: `${API}/api/${VERSION}/files/upload/`,
  },
};

export default endPoints;
