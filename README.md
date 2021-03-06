# Bootlace
Bootlace is a HTML5/CSS3 boilerplate with Twitter's Bootstrap 3 and Font Awesome 4 built in. Bootlace also incorporates Grunt for easy developing and deployment processes.

* Bootstrap v3.0.3
* Font Awesome v4.0.3

## Requirements
* Ruby
* Node
* Grunt

## Install
 Start by installing `Grunt` and `Sass` by running these commands:

```shell
npm install -g grunt-cli
gem install sass
```

Clone this repo:

```shell
git clone https://github.com/kjunggithub/bootlace
cd bootlace
```
Install all the npm dependencies by running

```shell
npm install
```

Build for the first time by running

```shell
grunt build
```

## Grunt Workflow
### Build
```shell
grunt build
```

The `build` task performs the following:
* Performs JS linting
* Minifies CSS and JS files
* Concats CSS and JS files
* adds CSS vendor prefixes
* Minifies all images

### Watch
```shell
grunt watch
```
The `watch` task watches the following:
* /Index.html
* /sass/styles.scss
* /js/init.js

### Deploy
```shell
grunt deploy
```
The `deploy` task performs the following:
* Performs JS linting
* Minifies CSS and JS files
* Concats CSS and JS files
* adds CSS vendor prefixes
* Minifies all images
* Cleans all uneeded files
* SFTP files to production (to do)
