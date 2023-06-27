import axios from "axios";
import endPoints from "@services/api";
import { data } from "autoprefixer";

const addProduct = async (body) => {
  const config = {
    headers: { Accept: "application/json", "Content-type": "application/json" },
  };
  const response = await axios.post(
    endPoints.products.addProduct,
    body,
    config
  );
  return data;
};

export { addProduct };
