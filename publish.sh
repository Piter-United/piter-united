#!/bin/bash
echo "Fetch all"
git fetch --all
echo "Reset current branch"
git reset --hard
echo "Remote branch"
git branch -r
echo "remove tmp"
rm -Rf .git/tmp
echo "create tmp"
mkdir .git/tmp
echo "copy dist && CNAME"
cp -r dist/ .git/tmp
cp CNAME .git/tmp
echo "checkout gh-pages"
git checkout -b gh-pages
echo "pull origin gh-pages"
git pull origin gh-pages
echo "copy from tmp"
cp -r .git/tmp/ .
echo "rm tmp"
rm -Rf .git/tmp
echo "add"
git add .
echo "commit"
git commit -am 'build'
echo "push"
git push origin gh-pages
