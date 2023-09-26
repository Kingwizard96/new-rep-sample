const inquirer = require('inquirer');
const { join }  = require('path');
const { writeFile } = require('fs/promises');
const { createDocument } = require('./document');

class CLI {
    constructor(){
        this.title = '';

        // array of task object e.g [{text: string,priority: bool},...]
        this.task = [];
    }
    run() {
      return inquirer 
        .prompt([
            {
                type: 'input',
                name: 'name',
                message: 'enter your name',
            },
        ])
            .then(({ name }) => {
                this.title = `${name}'s tasks`;
                return this.addTask();
            })
            .then(() => {
                //  sort by priorty
                this.task.sort((a,b)=> 
                a.priority === b.priority ? 0 : a.priority  && b.priority ? -1 : 1
            );
            return writeFile(
                join(_dirname, '..', 'output', 'tasks.html'), 
                createDocument(this.title, this.tasks)
            );
        })
        .then(() => console.log('created tasks.html'))
        .catch((err) => {
            console.log(err);
            console.log('oops.something went wrong');
            });
    } 
    
    addTask() {
        return inquirer
        .prompt([
            {
                type: 'input',
                name: 'text',
                message: 'enter task',
            },
            {
                type: 'confirm',
                name: 'priority',
                message: 'is this a priority task?',
            },
            {
                type: 'confirm',
                name: 'confirmAddTask',
                message: 'would you like to add another task',
            },
        ])
        .then(({ text, priority, confrimAddTask }) => {
            this.task.push({text, priority });
            if (confrimAddTask) {
                return this.addTask();
            }
        });
    }
}

module.exports = CLI;