import Pizzas from "./index";
import { PizzaService } from "../../services/pizza-service.js";

Pizzas.route = "/";
Pizzas.getData = async function (parms, query) {
  return await PizzaService.getAll(query);
};

export default Pizzas;
