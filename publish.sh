#!/bin/bash
echo "clone repo"
git clone https://github.com/$TRAVIS_REPO_SLUG /tmp/repo
cd /tmp/repo
echo "show remote"
git remote -v
echo "fetch all"
git fetch origin gh-pages
echo "remote branch"
git branch -r
echo "checkout gh-pages"
git checkout gh-pages
git branch
echo "remove old files"
rm -rf *
echo "copy dist && CNAME"
cp -r $TRAVIS_BUILD_DIR/dist/ .
cp $TRAVIS_BUILD_DIR/CNAME .
echo "add"
git add .
echo "commit"
git commit -am 'build'
echo "files list"
ls -al
echo "push"
git push origin gh-pages
