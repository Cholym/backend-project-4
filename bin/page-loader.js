#!/usr/bin/env node
import { Command } from 'commander';
//import pageLoader from '../src/index.js';

const program = new Command;

program
  .description('Page loader utility')
  .version('0.0.1', '-V, --version', 'output the version number')
  .helpOption('-h, --help', 'output usage information')
  .option('-o, -output [dir]', 'output dir (default: "/home/user/current-dir")')
  .action

program.parse();

