#!/usr/bin/env node
import { } from './todo';

const fs = require('fs');
const chalk = require('chalk');
const clear = require('clear');
const figlet = require('figlet');
const path = require('path');
const program = require('commander');


clear();
console.log(
  chalk.red(
    figlet.textSync('to-do app', { horizontalLayout: 'full' })
  )
);

program
	.version('0.0.1')
  .description("Command line arguments:")
  .option('-l, --list', 'Lists all the tasks')
  .option('-a, --add', 'Adds a new task')
  .option('-r, --remove', 'Removes an tasks')
  .option('-c, --complate', 'Complates an task')
	.parse(process.argv);

;
if (program.list) {
  let startTxt = 'your todo list:'; 
  let itemOfTxt = fs.readFileSync('todolist.txt', 'utf8');
  console.log(startTxt);
  console.log(itemOfTxt);

  /* ,
  (err: string, data: string) => {if (err) throw err;  console.log(data); }))*/
};
if (program.add) {  
  let task = program.args[0]; 
  console.log('added todo: '+ task);
  fs.appendFile('todolist.txt', task+'\n',  
  (err: string) => { if (err) {console.log('failed')} else {console.log('succeed')}});
  };




 if (program.remove) { 
 let toBeRemoved = program.args[0];
 let itemOfTxt = fs.readFileSync('todolist.txt', 'utf8');
 let textByLine = itemOfTxt.split('\n');
 fs.writeFile('todolist.txt', "", (err: any) => {  if (err) throw err});
 for (let i = 0; i < textByLine.length; i += 1) { 
    if (toBeRemoved != textByLine[i]) {
      if (textByLine[i] != '') {
        fs.appendFile('todolist.txt',  textByLine[i] + '\n', (err: any) => {  if (err) throw err })
      } 
    }
 }
};



//if (program.complate) console.log('  - ');
if (!process.argv.slice(2).length) {
  program.outputHelp();
}
