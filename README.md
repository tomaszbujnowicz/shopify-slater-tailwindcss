# 🚀 Shopify Starter Theme + TailwindCSS with PurgeCSS

**First of all, big thank your for guys at The Couch for creating Shopify development toolkit called [Slater](https://github.com/the-couch/slater). Special thanks goes to Kevin.**

I wanted to use Slater and TailwindCSS but couldn't make that work together. I had a project on the table with a start date NOW and decided to create this little temporary monster.

I took the [Slater theme](https://github.com/the-couch/slater), integrated it with TailwindCSS + PurgeCSS and rewrite most of the markup to use css classes from TailwindCSS.

Note: the theme needs some love and it's still work in progress.

## Requirements
Make sure all dependencies have been installed before moving on:

* [npm](https://www.npmjs.com/get-npm)
* [Node.js](https://nodejs.org/en/download/) >= 8.16.0

## Quick start: Installation
Install Slater globally
- `npm i slater -g`

Clone this repository and run
- `npm install` to install dependencies (/root folder)
- `cd tailwind` and `npm install` to install Tailwind depedencies (/tailwind folder)

## Use CSS file
In order to edit the CSS file, go to /tailwind/src/main.css

## Tasks
| Task Name | Description
| :------------- | :------------- |
| `npm run start` | Run all tasks and watch all relevant files for changes
| `npm run build` | Run all tasks, minify output so it's ready to push to production 
| `slater sync` | Sync local files to your remote theme

Please run these tasks from root folder.

## Copyright and license
MIT License © [The Couch](https://thecouch.nyc)

Copyright 2019 Tomasz Bujnowicz under the [MIT license](http://opensource.org/licenses/MIT).