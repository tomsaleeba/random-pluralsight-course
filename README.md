I got tired of having to pick a PluralSight course. Instead, I want to be given a random course to challenge me to pick something outside what I normally would look at.

You can use this tool from the command line, or it's also a hosted web page.

## Running

### Requirements

  1. NodeJS >= 6
  1. curl
  1. jq >= 1.5

### Steps

  1. clone this repo
  1. download the course data
      ```bash
      ./get-data/get-dataset.sh
      ```
  1. pick a random course from the command line
      ```bash
      ./get-data/pick-random-course.js
      ```
  1. build the web page
      ```bash
      ./build.sh
      ```
  1. now you can deploy the web page. It's just a static site so do something like
      ```bash
      cd dist/
      aws s3 sync --acl=public-read . s3://some-bucket
      ```

