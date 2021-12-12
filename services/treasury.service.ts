import { fetchRequest, options } from "./index";
import { ITreasury } from "../interfaces/treasury";

function getAllTreasuries(): Promise<ITreasury[]> {
  return fetchRequest("/treasury");
}
function updateTreasury(
  amount: number,
  accessToken: string
): Promise<ITreasury[]> {
  return fetchRequest("/treasury", options("PUT", { amount }, accessToken));
}
function createTreasury(date: string, accessToken: string): Promise<ITreasury> {
  return fetchRequest("/treasury", options("POST", { date }, accessToken));
}

export { getAllTreasuries, updateTreasury, createTreasury };
