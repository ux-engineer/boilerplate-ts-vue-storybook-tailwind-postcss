/* eslint-disable import/no-extraneous-dependencies */
import { configure } from '@storybook/vue';

// Import Vendor Plugins
import '../../src/plugins';

// Import Styles
import '../../src/assets/styles/index.css';

const req = require.context('../../src/stories', true, /.stories.js$/);

function loadStories() {
  req.keys().forEach((filename) => req(filename));
}

configure(loadStories, module);
