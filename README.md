# reactzine

A single page app prototype using React.

# Install

## With Node.js

This method installs, builds the project and opens it automatically for you:

```bash
git clone https://github.com/oncletom/reactzine.git
cd reactzine && npm install
```

## Git only

This method is suitable if you do not want to bother installing Node.js:

```bash
git clone https://github.com/oncletom/reactzine.git
cd reactzine && git checkout gh-pages
```

Then double click/launch `index.html`.

## Without git

Least case scenario, you do not have either `git` or `node`:

1. [download the latest release](https://github.com/oncletom/reactzine/archive/gh-pages.zip);
1. uncompress it;
1. double click/launch `index.html`.

# Live demo

A live demo is available at [oncletom.github.io/reactzine](http://oncletom.github.io/reactzine).

A new version can be built and deployed by typing:

```bash
npm run deploy
```

# Comments

- title line height/width can be an issue depending of the screen resolution/layout/orientation (too long to fit)
- the _audio_/_video_ icons often overlap the title
- pagination is not 
- React components are not unit tested
- the development of this prototype involves a [Pull Request to the `react-classset` component](https://github.com/petehunt/react-classset/pull/1/files)
- the `iframe[sandbox]` does not deal well without the `same-domain-origin` permission: YouTube videos do not load for example — the drawback is the iframe gets the permission to write cookies, so third-party user tracking
- there is no nice way to detect the loading progress of an iframe, hence it is hard to improve efficiently the user experience
- non-scrolling + stretched items in height and width is tricky — even with CSS Flexbox — I spent more time on this than learning React
- React made it super easy to deal with UI display
- it would have been easy to use Browserstack/Saucelabs/wraith to test visual regression and mobile compatibility quality