export const habitatToColor = (str: string) => {
  const habitatColors = {
    cave: 'rock',
    forest: 'grass',
    grassland: 'bug',
    mountain: 'dark',
    rare: 'dragon',
    roughterrain: 'steel',
    sea: 'water',
    urban: 'fighting',
    watersedge: 'ice',
  };

  const formatedHabitat = str.replace(/-/g, '');

  return habitatColors[formatedHabitat as keyof typeof habitatColors];
};
