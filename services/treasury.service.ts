import { fetchRequest, options } from "./index";
import { ITreasury } from "../interfaces/treasury";

function getAllTreasuries(): Promise<ITreasury[]> {
  return fetchRequest("/treasury");
}
function updateTreasury(amount: number): Promise<ITreasury[]> {
  return fetchRequest("/treasury", options("PUT", { amount }));
}

export { getAllTreasuries, updateTreasury };
