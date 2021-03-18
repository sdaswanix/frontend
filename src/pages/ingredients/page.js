import Ingredients from "./index";
import { IngredientService } from "../../services/ingredient-service.js";

Ingredients.route = "/ingredients";
Ingredients.getData = async function (parms, query) {
  return await IngredientService.getAll(query);
};

export default Ingredients;
