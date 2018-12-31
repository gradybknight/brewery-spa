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
  // makes a dictionary of each word in beerStyles with the word as key and an array of beers as the value
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
          keyWordDict[cleanedWord] = [beer];
        } else {
          keyWordDict[cleanedWord].push(beer);
        }
      }
    });
  });
  return keyWordDict;
}

export function cleanABV(abv) {
  let cleanedABV = abv.split(`%`);
  return cleanedABV[0] / 1; // cast to number
}

export function cleanIBU(ibu) {
  let cleanedIBU = ibu.split(`/`);
  cleanedIBU = cleanedIBU[0];
  if (cleanedIBU === `OG` || cleanedIBU === `NA`) {
    return 9999;
  } else {
    return cleanedIBU / 1; // cast to number
  }
}

export function removeDuplicates(beers) {
  //  implement this
  let uniqueBeers = [];
  return uniqueBeers;
}

export function filterByRestrictions(beers, keyWordDict, restrictions) {
  //  This function receives an array of restrictions of the following shape:
  // const exampleRestriction = {
  //   type: `brewery`, // brewery word ibu abv
  //   rangeLow: 0, // low value if numeric search
  //   rangeHigh: 100, // high value if numeric search
  //   strTarget: `CASTLE ROCK` // string to match
  // };

  let restrictedBeers = [];
  //iterate over all the restrictions
  restrictions.forEach(restriction => {
    // add all the beers from a brewery
    if (restriction.type === `brewery`) {
      const beersToAdd = filterByBrands(beers, [restriction.strTarget]);
      restrictedBeers = [...restrictedBeers, ...beersToAdd];
      // add all the beers with a key word
    } else if (restriction.type === `word`) {
      restrictedBeers = [
        ...restrictedBeers,
        ...keyWordDict[restriction.strTarget]
      ];
      // filter by abv. Must clean abv as dataset is messy
    } else if (restriction.type === `abv`) {
      beers.forEach(beer => {
        const abv = cleanABV(beer.abv);
        if (abv >= restriction.rangeLow && abv <= restriction.rangeHigh) {
          restrictedBeers.push(beer);
        }
      });
      // filter by ibu. Must clean ibu as dataset is messy
    } else if (restriction.type === `ibu`) {
      beers.forEach(beer => {
        const ibu = cleanIBU(beer.ibu);
        if (ibu >= restriction.rangeLow && ibu <= restriction.rangeHigh) {
          restrictedBeers.push(beer);
        }
      });
    }
  });
  // remove duplicates from array and return
  // return removeDuplicates(restrictedBeers);
  return restrictedBeers;
}
