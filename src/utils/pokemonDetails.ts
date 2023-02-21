export const heightTransformer = (height: number) => {
  const heightInMeters = height / 10;
  const heightInFeet = heightInMeters * 3.28084;
  const heightInFeetInt = Math.floor(heightInFeet);
  const heightInInches = Math.round((heightInFeet - heightInFeetInt) * 12);
  return {
    meters: `${heightInMeters}m`,
    feetAndInches: `${heightInFeetInt}'${heightInInches}"`,
  };
};

export const weightTransformer = (weight: number) => {
  const weightInKg = weight / 10;
  const weightInLbs = weightInKg * 2.20462;
  return {
    kg: `${weightInKg.toFixed(1)}kg`,
    lbs: `${weightInLbs.toFixed(1)}lbs`,
  };
};
