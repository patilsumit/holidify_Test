
function addBinary(a, b) 
    { 
          
        // Initialize result 
        var  result = ""
          
        // Initialize digit sum 
        var s = 0
  
        // Traverse both strings starting  
        // from last characters 
        var i = a.length - 1, j = b.length - 1; 
        while (i >= 0 || j >= 0 || s == 1) 
        { 
              
            // Comput sum of last  
            // digits and carry 
            s += ((i >= 0)? a.charAt(i) - '0': 0); 
            s += ((j >= 0)? b.charAt(j) - '0': 0); 
  
            
            result = (s % 2 + '0') + result; 
  
            // Compute carry 
            s /= 2; 
  
            // Move to next digits 
            i--; j--; 
        } 
          
    return result; 
} 
console.log(addBinary("1101","100"))
