var mit = require('./')
  , licence1 = mit('David Björklund')
  , licence2 = mit('David Björklund', '2012-2013') // year is second optional argument, defaults to current year

console.log(licence1)
console.log(licence2)