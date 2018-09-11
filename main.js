var A = [-1, 3, -4, 5, 1, -6, 2, 1];
function solution(A) {
    var equilibriumIndex;
    A.forEach(function(el, index) {
        console.log('start') 
        var leftVal = 0;
        var rightVal = 0;
        for (let i = 0; i < index; i++) {
            leftVal += A[i];
        }
        for (let j = index + 1; j < A.length; j++) {
            rightVal += A[j]; 
        }
        if (leftVal === rightVal) {
            equilibriumIndex = index; 
        }
    });
    if (!equilibriumIndex) { equilibriumIndex = -1 }
    return equilibriumIndex;
};
console.log('solution for A = ', solution(A));

// var B = [-1, 3, -4, 5, 1, -6, 2, 1];
// function solutionB(A) {
//     var equilibriumIndex = A.find(function(el, index) {
//         console.log('start')
//         var leftVal = 0;
//         var rightVal = 0;
//         for (let i = 0; i < index; i++) {
//             leftVal += A[i];
//         }
//         for (let j = index + 1; j < A.length; j++) {
//             rightVal += A[j]; 
//         }
//         return (leftVal === rightVal);
//     });
//     // wrong it could be more than 1 elem with value equilibrium...
//     return A.indexOf(equilibriumIndex);
// };
// console.log('solution for B = ', solutionB(B));

var C = [-1, 3, -4, 5, 1, -6, 2, 1];
function solutionC(A) {
  var indexes = [];
  var elements = A.filter(function(el, index) {
    console.log('start')
    var leftVal = 0;
    var rightVal = 0;
    for (let i = 0; i < index; i++) {
        leftVal += A[i];
    }
    for (let j = index + 1; j < A.length; j++) {
        rightVal += A[j]; 
    }
    if (leftVal === rightVal) {
      indexes.push(index);
    }
    return (leftVal === rightVal);
  });
  
  // !!! wrong in this case indexOf(1) is first index when 1 is element
  // return elements.map(function(el) {
  //   return A.indexOf(el);
  // });
  return indexes;
};
console.log('solution for C = ', solutionC(C));

var D = [-1, 3, -4, 5, 1, -6, 2, 1];
function solutionD(A) {
    var equilibriumIndex = A.findIndex(function(el, index) {
        console.log('start')
        var leftVal = 0;
        var rightVal = 0;
        for (let i = 0; i < index; i++) {
            leftVal += A[i];
        }
        for (let j = index + 1; j < A.length; j++) {
            rightVal += A[j]; 
        }
        return (leftVal === rightVal);
    });
    // wrong it could be more than 1 elem with value equilibrium...
    return equilibriumIndex;
};
console.log('solution for D = ', solutionD(D));

// highest possible hour in 24h format
var E = [2, 8, 5, 1];
function permutation(a){

  let res = [];
  for(let i=0; i<a.length; i++){
    let restA = a.slice(0,i).concat(a.slice(i+1));
    let rest = permutation( restA);
    if(rest.length === 0){
      res.push([a[i]]);
    }else{
      for(let j=0; j<rest.length; j++){
        res.push([a[i]].concat(rest[j]));
      }
    }
  }
  var result = res.map(function(el) {
    return el.join('');
  });

  return result;
}
var combinations = permutation(E);

function findTopHour(arr) {
  var correctHours = arr.filter(function (el) {
    // start at index 0 and get 2 elems
    // var hour = el.substr(0, 2);
    var hour = el.slice(0, 2);
    // start at index 2 and get all with higher index
    // var minutes = el.substr(2);
    var minutes = el.slice(2)
    return (hour >= 0 && hour <= 23 && minutes >= 0 && minutes <= 59);
  });
  if (correctHours.length === 0) {
    return 'Lack of possibility';
  }
  var highest = Math.max.apply(Math, correctHours).toString();
  function pad (str, max) {
    return str.length < max ? pad("0" + str, max) : str;
  }
  var result = [pad(highest, 4).slice(0, 2), ':', pad(highest, 4).slice(2)].join('');
  return result;
};
// console.log('permutation of E = ', permutation(E))
console.log('correct hours = ', findTopHour(combinations))

function setLocalstorage(attr, value) {
  localStorage.setItem(attr, value);
}
setLocalstorage('myName', 'Kuba');
