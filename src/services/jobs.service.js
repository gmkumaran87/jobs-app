import axios from "axios";
import { BASE_URL } from "../common/constant";

export default axios.create({
  baseURL: BASE_URL,
  headers: { "Content-Type": "application/json" },
});
