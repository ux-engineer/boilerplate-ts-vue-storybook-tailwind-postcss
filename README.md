# boilerplate-ts-vue-storybook-tailwind-postcss

This repository answers StackOverflow question [How to configure VueJS + PostCss + Tailwind with Storybook](https://stackoverflow.com/questions/53027576/how-to-configure-vuejs-postcss-tailwind-with-storybook).

This project boilerplate has been set up with [a forked version of Storybook Vue CLI Plugin](https://github.com/ux-engineer/vue-cli-plugin-storybook) for getting to use the newest 5.3 pre-release version ([issue 71](https://github.com/storybookjs/vue-cli-plugin-storybook/issues/71)).

Storybook 5.3 brings forth long anticipated Storybook Docs with multi-framework support, and two new storyformats: [Component Story Format (CSF)](https://storybook.js.org/docs/formats/component-story-format/) and [MDX Syntax](https://storybook.js.org/docs/formats/mdx-syntax/#docs-content).

As setting up these two new optional storyformats was not in scope of the original SO question, these haven't been done here. If needed I can create separate branches for these additional setups.

Project is configured with Vue CLI4 and TypeScript along with [Composition API](https://github.com/vuejs/composition-api) functional component format as future-proofing for the upcoming Vue 3.0 release targeted at the end Q1/2020.

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Run your unit tests
```
npm run test:unit
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
