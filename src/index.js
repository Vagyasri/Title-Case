import './style.css';

function titleCase(str) {
    let arr = str.toLowerCase().split(' ');
    let newArr =[];
    for(let i =0; i < arr.length; i++) {
    newArr[i] = arr[i].replace(arr[i].charAt(0), arr[i].charAt(0).toUpperCase());
    }
    return newArr.join(' ');
  }
  
  console.log(titleCase("I'm a little tea pot")); // I'm A Little Tea Pot
  console.log(titleCase("sHoRt AnD sToUt")); // Short And Stout
  console.log(titleCase("HERE IS MY HANDLE HERE IS MY SPOUT")); // Here Is My Handle Here Is My Spout