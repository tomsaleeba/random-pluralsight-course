#!/bin/bash
# 99999 is too high, we get an empty result set back
allResults=10000
outFile=all-courses.json
rawFile=raw-$outFile
curl \
  "https://sp10050dad.guided.ss-omtrdc.net/?page=1&q=*&m_Count=$allResults" \
  > $rawFile

cat $rawFile \
  | jq '[.resultsets | .[0] | .results | .[] | {prodId: .prodId, title: .title, description: .description}]' \
  > $outFile
echo "Wrote output to $outFile"

