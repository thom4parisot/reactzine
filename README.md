# news.ee

A single page app prototype using React.

# Prerequisite

Install Node, probably through `nvm` is the easiest way.

```bash
curl https://raw.githubusercontent.com/creationix/nvm/v0.13.1/install.sh | bash
nvm install 0.10
nvm use 0.10
```

# Install

## With Node.js

This method installs, builds the project and opens it automatically for you:

```bash
git clone https://github.com/oncletom/news.ee.git
cd news.ee && npm install
```

## Git only

This method is suitable if you do not want to bother installing Node.js:

```bash
git clone https://github.com/oncletom/news.ee.git
cd news.ee && git checkout gh-pages
```

Then double click/launch `index.html`.

## Without git

Least case scenario, you do not have either `git` or `node`:

1. [download the latest release](https://github.com/oncletom/news.ee/archive/gh-pages.zip);
1. uncompress it;
1. double click/launch `index.html`.

# Live demo

A live demo is available at [oncletom.github.io/news.ee](http://oncletom.github.io/news.ee
).

A new version can be redeployed by typing:

```bash
npm run deploy
```