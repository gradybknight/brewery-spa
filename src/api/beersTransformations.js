export function filterByBrands(beers, breweryNames) {
  let matchingBeers = [];
  if (breweryNames.length === 0) {
    return beers;
  } else {
    breweryNames.forEach(breweryName => {
      let brewerysBeers = beers.filter(
        beer => beer.breweryName === breweryName
      );
      matchingBeers = [...matchingBeers, ...brewerysBeers];
    });
    return matchingBeers;
  }
}

export function getUniqueBreweryNames(beers) {
  let uniqueNames = {};
  beers.forEach(beer => {
    if (!uniqueNames[beer.breweryName]) {
      uniqueNames[beer.breweryName] = beer.breweryName;
    }
  });
  return Object.keys(uniqueNames);
}
