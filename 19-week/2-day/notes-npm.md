# Node Package Manager (NPM)

## What is NPM?

NPM is a tool used in Node.js to manage third-party packages and modules

## How does it work?

When you install something with an npm command or run the command `npm init` your current working directory will have a node_modules directory and package.json file added to it.

Within this node_modules directory you can find the packages you've installed along with their dependencies (other packages they may need to run correctly). Each package you'd like to use can then be imported into your files.

The package.json file will list off details about your current project. Things like entry point (where the project originates), scripts and dependencies can be found in the package.json

## How to install a node package

Installing a node package is super easy and can be done by running a command in your terminal:

```
npm install package-name-here
```

package-name-here will be replaced with the name of the package you'd like to install.

You can also use a shorthand command for installation that will accomplish the same as the command above:

```
npm i package-name-here
```

## Dev dependencies??

A dev dependency is a package used only during development and not in production environments. Examples include tools like compilers, testing frameworks, or Nodemon. To install a dev dependency, use the -D flag:

```
npm i -D package-name-here
```
