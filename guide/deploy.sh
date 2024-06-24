#!/bin/bash
# exit when any command fails
set -e

# navigate into the guide directory
cd guide

# build the project
npm run build

# navigate into the build output directory
cd build

# initialize a new git repository
git init
git add -A
git commit -m 'deploy'

# push to GitHub Pages
git push -f https://${GITHUB_ACCESS_TOKEN}@github.com/<your-username>/<your-repo-name>.git master:gh-pages

cd -
