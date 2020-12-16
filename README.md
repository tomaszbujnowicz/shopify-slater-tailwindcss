# Important note: Working on updated version of the boilerplate.

You might find this starter theme a little outdated and I am going to archive it soon.

The new starter theme will be based on some theme functionality from original Slater repo (including fixes/adjustments from issues and pull requests).

What's more important, It'll work without the complex setup from Slater and instead it'll be based on:

* Laravel Mix 6
* TailwindCSS 2
* and original Shopify Theme Kit for quick updates

Stay tuned ✌

---

# 🚀 Shopify Starter Theme + TailwindCSS with PurgeCSS

**First of all, big thank your for guys at The Couch for creating Shopify development toolkit called [Slater](https://github.com/the-couch/slater)**

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
| `npm run start` | Run all tasks and watch all relevant files for changes (PurgeCSS disabled)
| `npm run build` | Run all tasks, minify output so it's ready to push to production  (PurgeCSS enabled)
| `slater sync` | Sync local files to your remote theme

Please run these tasks from root folder.

## Copyright and license
MIT License © [The Couch](https://thecouch.nyc)

Copyright 2019 Tomasz Bujnowicz under the [MIT license](http://opensource.org/licenses/MIT).
