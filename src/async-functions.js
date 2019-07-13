const superagent = require('superagent');

const getTatooineResidents = () => {
 
    superagent
    .get('https://swapi.co/api/planets/1/')
    .then(res => {
       return returnPromise(res.body.residents)
    })
    .catch(err=>{
        return Promise.reject(err.message);
    })
}

function returnPromise(value){
    return new Promise((resolve, reject) => {
        resolve(value);
        reject(err.messgae);
    })
}

const promiseMeAString = (name) => {
    
    if(typeof(name) === 'string'){
        return Promise.resolve("You kept the Promise!")
    }
    else{
        return Promise.reject("You have failed me!")
    }

}

module.exports = {getTatooineResidents,
                    promiseMeAString}
