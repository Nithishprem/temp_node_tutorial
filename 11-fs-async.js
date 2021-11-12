const { readFile, writeFile } = require('fs');

console.log('Start');

readFile('./content/first.txt', 'utf8', (err,result) =>{
    if(err){
        console.log(err);
    }else{
        const first = result;
        readFile('./content/second.txt', 'utf8', (err,result) =>{
            if(err){
                console.log(err);
            }else{
                const second = result;
                writeFile('./content/result-async.txt', `Here is the result: ${first}\n${second}`, (err,result) =>{
                    if(err){
                        console.log(err);
                    }else{
                        console.log("this task has finished")
                        console.log(result)

                        
                    }
                
                })
                
            }
        
        })
    }

})

console.log('Starting the next task');