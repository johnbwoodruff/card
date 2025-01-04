'use strict';

// Pull in our modules
import chalk from 'chalk';
import boxen from 'boxen';
import fs from 'fs';
import path from 'path';

// Define options for Boxen
const options = {
  padding: 1,
  margin: 1,
  borderStyle: 'round'
};

// Text + chalk definitions
const data = {
  name: chalk.white('           John Woodruff'),
  location: chalk.white('           Utah, USA'),
  handle: chalk.white('johnbwoodruff'),
  work: chalk.white('Senior Software Engineer at Mosaic'),
  bluesky:
    chalk.gray('https://bsky.app/profile/') + chalk.cyan('johnbwoodruff.com'),
  npm: chalk.gray('https://npmjs.com/') + chalk.red('~johnbwoodruff'),
  github: chalk.gray('https://github.com/') + chalk.green('johnbwoodruff'),
  dev: chalk.gray('https://dev.to/') + chalk.green('johnbwoodruff'),
  linkedin:
    chalk.gray('https://linkedin.com/in/') + chalk.blue('johnbwoodruff'),
  web: chalk.cyan('https://johnbwoodruff.com'),
  npx: chalk.red('npx') + ' ' + chalk.white('johnbwoodruff'),
  labelWork: chalk.white.bold('       Work:'),
  labelBluesky: chalk.white.bold('    Bluesky:'),
  labelnpm: chalk.white.bold('        npm:'),
  labelGitHub: chalk.white.bold('     GitHub:'),
  labelDev: chalk.white.bold('       Blog:'),
  labelLinkedIn: chalk.white.bold('   LinkedIn:'),
  labelWeb: chalk.white.bold('        Web:'),
  labelCard: chalk.white.bold('       Card:')
};

// Actual strings we're going to output
const newline = '\n';
const heading = `${data.name} / ${data.handle}`;
const location = `${data.location}`;
const professional = `${data.labelWork}  ${data.work}`;
const bluesky = `${data.labelBluesky}  ${data.bluesky}`;
const npm = `${data.labelnpm}  ${data.npm}`;
const github = `${data.labelGitHub}  ${data.github}`;
const linkedin = `${data.labelLinkedIn}  ${data.linkedin}`;
const blog = `${data.labelDev}  ${data.dev}`;
const website = `${data.labelWeb}  ${data.web}`;
const card = `${data.labelCard}  ${data.npx}`;

// Put all our output together into a single variable so we can use boxen effectively
const output =
  heading +
  newline +
  location +
  newline +
  newline +
  professional +
  newline +
  bluesky +
  newline +
  npm +
  newline +
  github +
  newline +
  linkedin +
  newline +
  blog +
  newline +
  website +
  newline +
  newline +
  card;

fs.writeFileSync(
  path.join(new URL('.', import.meta.url).pathname, 'bin/output'),
  chalk.green(boxen(output, options))
);
