function applyPredicate(elements, predicate){ 
      //create empty Array
    let newArr = [];
      //make for loop to check if predicate pattern with values of elements length
    for(let i = 0; i < elements.length; i++){
        if(predicate(elements[i])){
            //push i of elements into new Array and return them
            newArr.push(elements[i])
        }
    }
    return newArr
  }

  
  /* Weryfikacja */
  
  function verify(input, goal) {
    const inputAsString = JSON.stringify(input);
    const goalAsString = JSON.stringify(goal);
  
    if (inputAsString === goalAsString) {
      console.log('Gratulacje!');
    } else {
      console.log(`Niestety, oczekiwano - ${goalAsString}, otrzymano - ${inputAsString}`);
    }
  }
  
  verify(applyPredicate([1, 2, 3], element => element > 2), [3]);
  verify(applyPredicate(['a', 'b', 'c'], element => ['b', 'c'].includes(element)), ['b', 'c']);
  verify(applyPredicate(['x', 'y'], element => element === 'z'), []);