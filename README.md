# mit

Create the MIT-licence

## Installation

```
npm install mit
```

## Example

```javascript
var mit = require('./')
  , licence1 = mit('David Björklund')
  , licence2 = mit('David Björklund', '2012-2013') // year is second optional argument, defaults to current year

console.log(licence1)
console.log(licence2)
```

## Command line

`mit` can also be used as a command line tool. First navigate to the folder where you want to add the license file. Example of usage follows:

```
npm -g install mit
mit "David Björklund"

# If you want to add a particular year run this instead

mit "David Björklund" 2012-2013
```
These commands will generate a License file in the desired directory.

## Licence

Copyright (c) 2013 David Björklund

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.
