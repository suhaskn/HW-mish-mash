const groupAdultsByAgeRange = (array) =>{
    person = {}
    result = {}

    if (array.length === 0){
        return person;
    }
    else{
        if (getAgeGreaterThan18(array).length === 0){
            return person;
        } 
        else{
            return getAgeGroup(array);
        }       
    }

    function getAgeGreaterThan18(array){
        return array.filter(currentage => { return currentage.age > 18; })
    }

    function getAgeGroup(array){
        ageBelow20  = array.filter(currentage => { return  currentage.age > 17 && currentage.age < 21; })
        if(ageBelow20.length> 0){
            result['20 and younger'] = ageBelow20;
        }
        age21To30  = array.filter(currentage => { return currentage.age > 20 && currentage.age  < 31; })
        if(age21To30.length> 0){
            result['21-30'] = age21To30;
        }
        age31To40  = array.filter(currentage => { return currentage.age > 30 && currentage.age  < 41; })
        if(age31To40.length> 0){
        result['31-40'] = age31To40;
        }
        age41To50  = array.filter(currentage => { return currentage.age > 40 && currentage.age  < 51; })
        if(age41To50.length> 0){
        result['41-50'] = age41To50;
        }
        age50To60  = array.filter(currentage => { return currentage.age > 50 ; })
        result['51 and older'] = age50To60;
        return result;
    }
}

module.exports= {groupAdultsByAgeRange};