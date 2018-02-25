#!/bin/bash

git fetch
git reset --hard
git branch -r
rm -Rf .git/tmp
mkdir .git/tmp
cp -r dist/ .git/tmp
cp CNAME .git/tmp
git checkout -b gh-pages
git pull origin gh-pages
cp -r .git/tmp/ .
rm -Rf .git/tmp
git add .
git commit -am 'build'
git push origin gh-pages
