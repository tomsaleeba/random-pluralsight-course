I got tired of having to pick a PluralSight course. Instead, I want to be given a random course to challenge me to pick something outside what I normally would look at.

Currently it's a command line app but in the future, I plan to make it into a webpage.

## Running

### Requirements

  1. NodeJS >= 6
  1. curl
  1. jq >= 1.5

### Steps

  1. clone this repo
  1. download the course data
      ```bash
      bash get-dataset.sh
      ```
  1. pick a random course
      ```bash
      node pick-random-course.js
      ```
