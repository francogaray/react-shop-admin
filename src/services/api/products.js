import axios from "axios";
import endPoints from "@services/api";

const addProduct = async (body) => {
  const config = {
    headers: { Accept: "*/*", "Content-type": "application/json" },
  };
  const response = await axios.post(
    endPoints.products.addProduct,
    body,
    config
  );
  return response.data;
};

export { addProduct };
