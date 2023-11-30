#!/usr/bin/env node


const yargs = require('yargs');
const { inquirerPrompt } = require('./inquirer')

yargs.command(
    ['create', 'c'],
    '新建一个模板',
    (yargs) => {
        return yargs.option('name', {
            alias: 'n',
            demand: true,
            describe: '模板名称',
            demandOption: true,
            type: 'string'
        })
    },
    (argv) => {
        inquirerPrompt(argv).then(answers => {
            console.log('answers', answers);
        })
    }
).argv
