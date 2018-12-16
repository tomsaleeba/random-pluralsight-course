#!/bin/bash
cd `dirname "$0"`
buildDir=dist
mkdir -p $buildDir/
rm -fr $buildDir/*
./get-data/write-separate-files.js
cp ./site/index.html $buildDir/
