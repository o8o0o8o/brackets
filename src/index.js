function check(str, bra) {  
    let up = [];
    let down = [];    
    for (let i = 0; i < str.length; i++) {        
        for (let j = 0; j < bra.length; j++) {
            if (str[i] === bra[j][0]) {
                if (
                    typeof str[i + 1] === "undefined" &&
                    bra[j][0] !== bra[j][1]
                ) {
                    return false;
                }
                if (bra[j][0] === bra[j][1]) {  
                    let count = 0;
                    for (let x = 0; x <= str.length; x++) {
                        count++;
                        if(str[x + i] !== bra[j][0]) {                           
                            if (x % 2 !== 0 ) {
                                if (str[i] === down[0]) {
                                    up.pop();
                                    down.shift();
                                    i += --x;
                                } else {                                   
                                up.push(str[i]);
                                down.unshift(str[i]);                                
                                }                               
                            } else {
                                i += --x;
                            }     
                            break;
                        }                        
                    }                    
                    break;
                } else {                    
                    up.push(str[i]);
                    down.unshift(bra[j][1]);                   
                    break;
                }
            }
            if (str[i] === bra[j][1]) {                       
                if ((up.length === 0) && bra[j][0] !== bra[j][1]) {
                    return false;
                }     
                if (str[i] !== down[0]) {
                    return false;                        
                }            
                let count = 1;
                for (let k = 0; k < up.length; k++) {                  
                    if (str[i + k] !== down[k]) {
                        break;                        
                    } else if (str[i + k] === down[k]) {
                       up.pop();
                       down.shift();
                       count++;
                       k--;
                       i++;
                       j = - 1;
                    } else {                     
                    }                    
                }                           
            }
        }
    }
    if (up.length !== 0 && down.length !== 0) {
        return false;
    }
    return true;
};

module.exports = check;
