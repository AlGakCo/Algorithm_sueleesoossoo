function solution(baseball) {
  
  let hubo = new Array(1000)
  .fill()
  .map( value => false);
  
  for (let possibleNumber = 123; possibleNumber<1000; possibleNumber++){
      
    if( isNotOk(possibleNumber) ){
        continue;
    }

    let count = 0;
    for(const question of baseball){
      let currentStrike = 0;
      let currentBall = 0;
      const number = question[0];
      const strike = question[1];
      const ball = question[2];
      
      const numberStrings = String(number).split("");
      const currentStrings = String(possibleNumber).split("");
      
      for (let i = 0; i< currentStrings.length; i++) {
        for (let j =0 ; j< numberStrings.length; j++) {
          if ( currentStrings[i] === numberStrings[j] && i === j) {
            currentStrike+=1;
          }
          if ( currentStrings[i] === numberStrings[j] && i !== j) {
            currentBall+=1;
          }
        }
      }
        
      if ( currentStrike === strike && currentBall === ball ) {
        count++;
      }
      
      if ( count === baseball.length ) {
        hubo[possibleNumber] = true;
      } else {
        hubo[possibleNumber] = false;
      }
    }
  }
  
  for ( let possibleNumber = 123; possibleNumber < 1000; possibleNumber++ ) {
    if ( hubo[possibleNumber] ) {
      answer += 1;
    }
  }
  return answer;
}

function isNotOk (number) {
  let res = false;
  let check = {};
  const numberStrings = String(number).split("");
  
  for (const element of numberStrings) {
    if(element === "0"){
      res = true;
      break;
    }          
    
    if( !check[element] ){
      check[element] = true;
    }else{
      res = true;
      break;
    }
  }
  return res;
}