var spiralOrder = function(matrix) {
    let res = []
    
    while(matrix.length){
        res = [...res, ...matrix.shift()]
        
        for(let i = 0; i < matrix.length; i++){
           if(!matrix[i].length) matrix.splice(i, 1)
           else res.push(matrix[i].pop())
        }
        
        if(matrix.length){
            res = [...res, ...matrix.pop().reverse()]
        
            for(let i = matrix.length - 1; i >= 0; i--){
                if(!matrix[i].length) matrix.splice(i, 1)
                else res.push(matrix[i].shift())
            }
        }
    }
    
    return res
};
