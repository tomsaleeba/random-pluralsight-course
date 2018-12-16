#!/usr/bin/env node
const fs = require('fs')

const courseDataFilename = 'all-courses.json'
const outputDir = __dirname + '/../dist'

const courseData = JSON.parse(fs.readFileSync(__dirname + '/' + courseDataFilename))
const promises = []
let idCounter = 0
for (const curr of courseData) {
  const data = curr
  const filename = idCounter + '.json'
  promises.push(write(JSON.stringify(data), filename))
  idCounter++
}
const maxIndex = idCounter - 1
promises.push(write(`const pluralSightCourseMaxIndex = ${maxIndex}`, 'index.js'))
Promise.all(promises).then(result => {
  console.log(`Done. Wrote ${result.length} files, of which ${maxIndex + 1} were courses`)
}).catch(err => {
  console.error('[ERROR] failed to write files', err)
})

async function write (data, filename) {
  fs.writeFileSync(outputDir + '/' + filename, data)
}
