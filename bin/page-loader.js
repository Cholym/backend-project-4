#!/usr/bin/env node
import { Command } from 'commander';
import savePage from '../src/index.js';

const program = new Command();

program
  .description('Page loader utility')
  .version('0.0.1', '-V, --version', 'output the version number')
  .helpOption('-h, --help', 'output usage information')
  .usage('[options] <url>')
  .option('-o, --output [dir]', 'output dir (default: "/home/user/current-dir")')
  .argument('<pageUrl>', 'page url to download')
  .action((pageUrl, dir) => {
    savePage(pageUrl, dir.output);
  });

program.parse(process.argv);
