const array = [1,4,5,66,7,555,3,333,3,3332,22,2,111]

array.forEach((element) => console.log(element));

// FOREACH - 

function myForeach(array, callBack) {
    for (let index = 0; index < array.length; index++){
        const element = array[index];

    }
}

myForeach(array, (element, index, array) => console.log(element, index, array));

function MyMap(array, callBack) {
    //const newArray = 
}

function getMostPopularWordl(string) {
    const words = string.toLowerCase().split(' ');
    const wordMap = words.reduce((acc, word) => {
      if (word in acc) {
        acc[word] += 1;
      } else {
        acc[word] = 1;
      }
  
      return acc
    }, {});
  
    let mostPopularWord = {value: '', count: 0 };
  
    for (const word in wordMap) {
      const countOfWord = wordMap[word];
     
      if (countOfWord > mostPopularWord.count) {
        mostPopularWord = {
          value: word,
          count: countOfWord,
        }
      }
    }
  
    return mostPopularWord.value;
  }
  
  console.log(getMostPopularWordl("Hello world Hello everyone This is a test Test test test is a a a a a "));