var fs = require('fs')
  , path = require('path')
  , template = fs.readFileSync(path.join(__dirname, 'licence.template'), 'utf8')
  , mit = function(name, year) {
      if (year === undefined)
        year = (new Date).getFullYear()

      return template.replace('<name>', name).replace('<year>', year)
    }

module.exports = mit