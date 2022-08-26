#!/usr/bin/env node

var mit = require('./mit.js')
const fs = require('fs');
const path = require('path')

const license = mit(process.argv[2], process.argv[3]);
fs.writeFileSync(path.join(process.cwd(), 'License'), license);
