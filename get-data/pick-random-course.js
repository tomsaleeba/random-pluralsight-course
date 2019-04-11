#!/usr/bin/env node
const fs = require('fs')

const courseDataFilename = 'all-courses.json'
const urlPrefix = 'https://app.pluralsight.com/library/courses/'

const rawCourseData = JSON.parse(fs.readFileSync(courseDataFilename))
const courseData = rawCourseData.filter(e => e.description) // ignore anything without a desc
const courseCount = courseData.length
const randomCourseIndex = Math.floor(Math.random() * courseCount)
const pickedCourse = courseData[randomCourseIndex]
console.log(`Picked course
  title: ${pickedCourse.title}
  desc:  ${pickedCourse.description}
  URL:   ${urlPrefix}${pickedCourse.prodId}
  index: ${randomCourseIndex}`)

