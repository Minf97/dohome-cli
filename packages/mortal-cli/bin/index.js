#!/usr/bin/env node


const yargs = require('yargs');

console.log('name', yargs.argv.name);


yargs.command(
    ['create', 'c'],
    '新建一个模板',
    (yargs) => {
        return yargs.option('name', {
            alias: 'n',
            demand:true,
            describe: '模板名称',
            demandOption: true,
            type:'string'
        })
    },
    (argv) => {
        console.log('argv',argv);
    }
).argv
