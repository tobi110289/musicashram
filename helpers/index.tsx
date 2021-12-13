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
  if (!date) return null;
  const delta = Math.abs(+new Date(date) - +new Date(now)) / 1000;
  const days = Math.floor(delta / 86400);
  return days;
}

function isDateInPast(date: string) {
  return +new Date(Date.now()) > +new Date(date);
}

function isDateToday(date: string) {
  return Math.abs(+new Date(Date.now()) - +new Date(date)) < 8.64e7;
}

function capitalizeFirstLetter(name: string) {
  return name.charAt(0).toUpperCase() + name.slice(1).toLowerCase();
}

function rndBg() {
  return `bg-img${Math.round(Math.random() * 10) + 1}`;
}

export {
  calculateShare,
  sortByFirstName,
  returnTotalTokens,
  calculateDaysLeft,
  isDateInPast,
  isDateToday,
  capitalizeFirstLetter,
  rndBg
};
