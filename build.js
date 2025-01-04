'use strict';

// Pull in our modules
import chalk from 'chalk';
import boxen from 'boxen';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

// Define options for Boxen
const options = {
  padding: 1,
  margin: 1,
  borderStyle: 'round'
};

const { white, gray, cyan, red, green, blue } = chalk;

const data = {
  name: white('           John Woodruff'),
  location: white('           Utah, USA'),
  handle: white('johnbwoodruff'),
  work: white('Senior Software Engineer at Mosaic'),

  // Social links
  links: {
    bluesky: `${gray('https://bsky.app/profile/')}${cyan('johnbwoodruff.com')}`,
    npm: `${gray('https://npmjs.com/')}${red('~johnbwoodruff')}`,
    github: `${gray('https://github.com/')}${green('johnbwoodruff')}`,
    dev: `${gray('https://dev.to/')}${green('johnbwoodruff')}`,
    linkedin: `${gray('https://linkedin.com/in/')}${blue('johnbwoodruff')}`,
    web: cyan('https://johnbwoodruff.com'),
  },

  // Labels
  labels: {
    work: white.bold('       Work:'),
    bluesky: white.bold('    Bluesky:'),
    npm: white.bold('        npm:'),
    github: white.bold('     GitHub:'),
    dev: white.bold('       Blog:'),
    linkedin: white.bold('   LinkedIn:'),
    web: white.bold('        Web:'),
    card: white.bold('       Card:'),
  },

  npx: `${red('npx')} ${white('johnbwoodruff')}`,
};

const output = [
  `${data.name} / ${data.handle}`,
  data.location,
  '',
  `${data.labels.work}  ${data.work}`,
  `${data.labels.bluesky}  ${data.links.bluesky}`,
  `${data.labels.npm}  ${data.links.npm}`,
  `${data.labels.github}  ${data.links.github}`,
  `${data.labels.linkedin}  ${data.links.linkedin}`,
  `${data.labels.dev}  ${data.links.dev}`,
  `${data.labels.web}  ${data.links.web}`,
  '',
  `${data.labels.card}  ${data.npx}`,
].join('\n');

const __dirname = fileURLToPath(new URL('.', import.meta.url));

fs.writeFileSync(
  path.join(__dirname, 'bin/output'),
  chalk.green(boxen(output, options))
);
