import PizzaDetail from "./index";
import { PizzaService } from "../../services/pizza-service.js";

PizzaDetail.route = "/pizzas/:id";
PizzaDetail.getData = async function ({ id }) {
  return await PizzaService.get(id);
};
export default PizzaDetail;
