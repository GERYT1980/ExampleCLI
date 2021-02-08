#!/usr/bin/env node
"use strict";
var chalk = require('chalk');
var clear = require('clear');
var figlet = require('figlet');
var path = require('path');
var program = require('commander');
clear();
console.log(chalk.red(figlet.textSync('to-do app', { horizontalLayout: 'full' })));
program
    .version('0.0.1')
    .description("Command line arguments:")
    .option('-l, --list', 'Lists all the tasks')
    .option('-a, --add', 'Adds a new task')
    .option('-r, --remove', 'Removes an tasks')
    .option('-c, --complate', 'Complates an task')
    .parse(process.argv);
console.log('you ordered a pizza with:');
if (program.peppers)
    console.log('  - peppers');
if (program.pineapple)
    console.log('  - pineapple');
if (program.bbq)
    console.log('  - bbq');
var cheese = true === program.cheese
    ? 'marble'
    : program.cheese || 'no';
console.log('  - %s cheese', cheese);
if (!process.argv.slice(2).length) {
    program.outputHelp();
}
