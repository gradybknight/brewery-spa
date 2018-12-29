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

export function getUniqueDescpriptions(beers) {
  let uniqueNames = {};
  beers.forEach(beer => {
    if (!uniqueNames[beer.beerStyle]) {
      uniqueNames[beer.beerStyle] = beer.beerStyle;
    }
  });
  let descriptions = Object.keys(uniqueNames);
  descriptions.sort((a, b) => {
    return a - b;
  });
  return descriptions;
}

export function makeDictionaryOfKeyWords(beers) {
  // makes a dictionary of each word in beerStyles with the word as key and an array of beers.id as the value
  // limitted this to only words >3 characters
  // removed trailing commas but did not further clean the entries
  let keyWordDict = {};
  beers.forEach(beer => {
    let words = beer.beerStyle.split(" ");
    words.forEach(word => {
      let cleanedWords = word.split(",");
      let cleanedWord = cleanedWords[0];
      if (cleanedWord.length > 3) {
        if (!keyWordDict[cleanedWord]) {
          keyWordDict[cleanedWord] = [beer.id];
        } else {
          keyWordDict[cleanedWord].push(beer.id);
        }
      }
    });
  });
  return keyWordDict;
}
