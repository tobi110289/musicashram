import { IUser } from "../interfaces/user";

function calculateShare(treasury: number, sumTokens: number, tokens: number) {
  return +((treasury / 100) * (tokens / (sumTokens / 100))).toFixed(2);
}

function sortByFirstName(users: IUser[]) {
  return users.length
    ? users.slice().sort((a, b) => {
        const nameA = a.firstName.toUpperCase();
        const nameB = b.firstName.toUpperCase();
        if (nameA < nameB) {
          return -1;
        }
        if (nameA > nameB) {
          return 1;
        }
        return 0;
      })
    : [];
}

function returnTotalTokens(users: IUser[]): number {
  let totalToken = 0;
  if (users.length > 0) {
    totalToken = users.map((user) => user.tokens).reduce((a, b) => a + b);
  }
  return totalToken;
}

function calculateDaysLeft(date: string, now: number) {
  const delta =
    Math.abs(+new Date(date) - +new Date(formatedDateNow(now))) / 1000;
  const days = Math.floor(delta / 86400);
  return days;
}

function formatedDateNow(date: number) {
  const formatedDateNow = new Date(date)
    .toLocaleString()
    .split(",")[0]
    .split("/");
  return `${formatedDateNow[2]}-${formatedDateNow[0]}-${formatedDateNow[1]}`;
}

function isDateInPast(date: string) {
  return +new Date(formatedDateNow(Date.now())) > +new Date(date);
}

export {
  calculateShare,
  sortByFirstName,
  returnTotalTokens,
  calculateDaysLeft,
  isDateInPast,
};
