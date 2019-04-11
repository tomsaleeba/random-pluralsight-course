#!/bin/bash
# pulls the dataset of all course from the server to your local disk
set -euo pipefail
cd `dirname "$0"`

pageSize=3000
outFile=all-courses.json
dataDir=data
rawFile=$dataDir/raw-$outFile

mkdir -p $dataDir

# TODO be smarter about paging and wait until response is empty
# at last check, there were 256,200 items but the responses are empty after page 19
for page in {1..20}; do
  echo "[INFO] getting page $page"
  curl \
    "https://sp10050dad.guided.ss-omtrdc.net/?page=$page&q=*&m_Count=$pageSize" \
    > $rawFile.$page
done

jq '.resultsets[0].results' $rawFile.* | jq -s 'add' > $rawFile

cat $rawFile \
  | jq '[.[] | {prodId: .prodId, title: .title, description: .description}]' \
  > $outFile
echo "Wrote output to $outFile"

