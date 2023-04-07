import Big from 'big.js'

import {isNumber} from './isNumber.js'
import operate from './operate.js'


const isOperator=(btnName)=>{
    const operands=['+','-','*','/','=']
    const op=operands.includes(btnName)
    return op
}



export const calculate=(btnName,total,setNext,setTotal,next,operation,setOperation)=>{
    if(isNumber(btnName)){
        if(btnName==0 & next==0){
            return total
        }
        if(operation){
            if(next){
                setNext(()=>next+btnName)
            }
            setNext(btnName)
        }
        if(next){
            const newNext=next==0? btnName : next+btnName
            setNext(newNext)
            setTotal(null)
        }
    }

    if(btnName=='%'){
        if(operation && next){
            const result=operate(total,next,operation)
            setTotal(Big(result).div(Big("100")).toString())
            setNext(null)
            setOperation(null)
        }
         if (next) {setNext(Big(next).div(Big("100")).toString())};
         return total
        }



    if (btnName === ".") {
    if (next) {
      // ignore a . if the next number already has one
      if (next.includes(".")) {
        return next;
      }
      setNext(next + "." );
    }
    setNext("0.")} 

    if (btnName == "=") {
    if (next && operation) {
      setTotal(()=>operate(total, next, operation))
      setNext(null)
      setOperation(null)
      
    } else {
      return total;
    }
  }

  if (btnName === "+/-") {
    if (next) {
        setNext(-1 * parseFloat(next)).toString()
    }
    if (total) {
      setTotal(-1 * parseFloat(total)).toString()
    }
    return total;
  }
   if (operation) {
    setTotal(operate(total,next,operation))
    setNext(null)
    setOperation(btnName)
   
  }


  if (!next) {
    setOperation(btnName)
  }



    setTotal(next);
    setNext(null);
    setOperation(btnName)

}
