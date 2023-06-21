// Good Luck 💪🏾
function count(letter,str){
    let total=0

    str.split("").forEach(char=> {
        if(char === letter){
            total++
        }
    });
    return total
    
    }
    
//const result =count("c", "bootcamp")
const result =count("o", "fikrcamp coding bootcamp")
//const result =count("a","fikrcamp") 
console.log(result)
