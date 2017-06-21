#!/usr/bin/env node
import program from 'commander';
import pkginfo from 'pkginfo';
import loadConfig from 'config-attendant';
import argParser from 'commander-rc-adapter';

pkginfo(module, 'version', 'description');

// defaults set here can be overridden by rc files and command line
const optionDefaults = {};

program
  .version(module.exports.version)
  .description(module.exports.description)
  .parse(process.argv);

const options = loadConfig('topcheck', optionDefaults, argParser(program));
