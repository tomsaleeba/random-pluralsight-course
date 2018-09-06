#!/usr/bin/env node
const fs = require('fs')

const courseDataFilename = 'all-courses.json'
const urlPrefix = 'https://app.pluralsight.com/library/courses/'

const courseData = JSON.parse(fs.readFileSync(courseDataFilename))
const courseCount = courseData.length
const randomCourseIndex = Math.floor(Math.random() * courseCount)
const pickedCourse = courseData[randomCourseIndex]
console.log(`Picked course
  title: ${pickedCourse.title}
  desc:  ${pickedCourse.description}
  URL:   ${urlPrefix}${pickedCourse.prodId}
  index: ${randomCourseIndex}`)

