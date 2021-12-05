const mockUsers = [
  {
    id: 1,
    firstName: "Tobias",
    lastName: "Feltes",
    tokens: 150,

  },
  {
    id: 2,
    firstName: "Ralf",
    lastName: "Schmerberg",
    tokens: 250,

  },
  {
    id: 3,
    firstName: "PC",
    lastName: "Nackt",
    tokens: 150,

  },
  {
    id: 4,
    firstName: "Gogo",
    lastName: "Ernst",
    tokens: 1500,

  }
];

const sortedByFirstNameMockUsers = [
  { id: 4, firstName: 'Gogo', lastName: 'Ernst', tokens: 1500 },
  { id: 3, firstName: 'PC', lastName: 'Nackt', tokens: 150 },
  { id: 2, firstName: 'Ralf', lastName: 'Schmerberg', tokens: 250 },
  { id: 1, firstName: 'Tobias', lastName: 'Feltes', tokens: 150 }
];
export { mockUsers, sortedByFirstNameMockUsers };