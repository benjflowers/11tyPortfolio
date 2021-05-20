---
layout: process.njk
title: "Using 11ty for my Personal Site"
---

## The basics
I am still working through them but here is a list

1. Add git ignore for node modules
2. running `yarn init -y`
3. `yarn add @11ty/eleventy`
4. `git init`
5. Add `start` and `build` scripts to package
6. initial commit
7. Add .eleventy.js file and designate the input and output directories like so `return { dir: { input: "src", output: "public"}}`
8. Created a css directory in src
9. Created an _includes directory in src - directories noted with an underscore can be considered a partial
10. Each 11ty site needs an 'entry point' so create an index.md
11. All other pages created after that can be visited by navigating to the url fEx: '/posts' to go see posts
12. Important to not that you can create collections by creating a directory name is your choice. In the directory you need to provide a .json file with the same name. Give it a tag key with the value of the name of the collection and permalink false entry as well.
13. To add scripting to any page: Add `js` directory inside the `_includes` directory. This `js` directory will house all js files. To link them to a specific page add a script tag in your njk file and include the file like so: include jsDir/jsFile.js (inside the curly brace with percentage)
