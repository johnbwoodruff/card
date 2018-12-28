'use strict'

// Pull in our modules
const chalk = require('chalk')
const boxen = require('boxen')
const fs = require('fs')
const path = require('path')

// Define options for Boxen
const options = {
  padding: 1,
  margin: 1,
  borderStyle: 'round'
}

// Text + chalk definitions
const data = {
  name: chalk.white('           John Woodruff'),
  location: chalk.white('           Utah, USA'),
  handle: chalk.white('johnbwoodruff'),
  work: chalk.white('Software Engineer at Domo'),
  twitter: chalk.gray('https://twitter.com/') + chalk.cyan('johnbwoodruff'),
  npm: chalk.gray('https://npmjs.com/') + chalk.red('~johnbwoodruff'),
  github: chalk.gray('https://github.com/') + chalk.green('johnbwoodruff'),
  dev: chalk.gray('https://dev.to/') + chalk.green('johnbwoodruff'),
  linkedin: chalk.gray('https://linkedin.com/in/') + chalk.blue('johnbwoodruff'),
  web: chalk.cyan('https://johnbwoodruff.com'),
  npx: chalk.red('npx') + ' ' + chalk.white('johnbwoodruff'),
  labelWork: chalk.white.bold('       Work:'),
  labelTwitter: chalk.white.bold('    Twitter:'),
  labelnpm: chalk.white.bold('        npm:'),
  labelGitHub: chalk.white.bold('     GitHub:'),
  labelDev: chalk.white.bold('       Blog:'),
  labelLinkedIn: chalk.white.bold('   LinkedIn:'),
  labelWeb: chalk.white.bold('        Web:'),
  labelCard: chalk.white.bold('       Card:')
}

// Actual strings we're going to output
const newline = '\n'
const heading = `${data.name} / ${data.handle}`
const location = `${data.location}`
const professional = `${data.labelWork}  ${data.work}`
const twitter = `${data.labelTwitter}  ${data.twitter}`
const npm = `${data.labelnpm}  ${data.npm}`
const github = `${data.labelGitHub}  ${data.github}`
const linkedin = `${data.labelLinkedIn}  ${data.linkedin}`
const blog = `${data.labelDev}  ${data.dev}`
const website = `${data.labelWeb}  ${data.web}`
const card = `${data.labelCard}  ${data.npx}`

// Put all our output together into a single variable so we can use boxen effectively
const output = heading + newline + // data.name + data.handle
               location + newline +
               newline + // Add one whole blank line
               professional + newline + // data.labelWork + data.work
               twitter + newline + // data.labelTwitter + data.twitter
               npm + newline + // data.labelnpm + data.npm
               github + newline + // data.labelGitHub + data.github
               linkedin + newline + // data.labelLinkedIn + data.linkedin
               blog + newline + // data.labelWeb + data.web
               website + newline + newline + // data.labelWeb + data.web
               card // data.labelCard + data.npx

fs.writeFileSync(path.join(__dirname, 'bin/output'), chalk.green(boxen(output, options)))
