import { fetchRequest, options } from "./index";
import { ITreasury } from "../interfaces/treasury";

function getAllTreasuries(): Promise<ITreasury[]> {
  return fetchRequest("/treasury");
}

export { getAllTreasuries };
