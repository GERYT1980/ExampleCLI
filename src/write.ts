const fs = require('fs');


let todos = 'Walk the dog\n' + 
             'Buy milk\n' + 
             'Do homework';

fs.writeFile('todolist.txt', todos, (err: any) => {
    if (err) throw err;
    console.log('List saved!');
});


fs.readFile('todolist.txt', 'utf8' ,(err: any, data: string) => {
    if (err) throw err;
    console.log(data);
});
