/**
 * @jest-environment jsdom
 */

import {
  calculateShare,
  sortByFirstName,
  returnTotalTokens,
  calculateDaysLeft,
} from "../helpers";
import { mockUsers, sortedByFirstNameMockUsers } from "../__mocks__/mockUsers";

describe('calculateShare', () => {
  it('calculates the share of the total treasury correctly', () => {
    const share = calculateShare(1000, 100, 10);
    expect(share).toBe(100);
  });
});

describe('sortByFirstName', () => {
  it('sorts the users by first name', () => {
    const sortedUsers = sortByFirstName(mockUsers);
    expect(sortedUsers).toEqual(sortedByFirstNameMockUsers);
  });
});

describe('returnTotalTokens', () => {
  it('returns the total amount of tokens of all users', () => {
    const totalTokens = returnTotalTokens(mockUsers);
    expect(totalTokens).toBe(2050);
  });
});

describe('calculateDaysLeft', () => {
  it('calculates the amount of days left to a given date', () => {
    const mockDate = '2021-12-06';
    const mockDate2 = 1638655452342;
    const daysLeft = calculateDaysLeft(mockDate, mockDate2);
    console.log(daysLeft);
    expect(daysLeft).toBe(2);
  });
});