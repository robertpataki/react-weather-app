// function getTempCallback(location, callback) {
//   callback(undefined, 78);

//   callback('City not found')
// }

// getTempCallback('Philadeplhia', function(err, temp) {
//   if(err) {
//     console.log('error', err);
//   } else {
//     console.log('success', temp);
//   }
// });

// function getTempPromise(location) {
//   return new Promise(function(resolve, reject) {
//     setTimeout(function(){
//       resolve(79);
//       reject('City not found');
//     }, 1000);
//   })
// }

// getTempPromise('Philadelphia').then(function(temp) {
//   console.log('promise success', temp);
// }, function(err) {
//   console.log('promise error', err);
// })

// Challenge Area
function addPromise(a, b) {
  return new Promise(function(resolve, reject) {
    if(typeof a !== 'number' || typeof b !== 'number') {
      reject('One of the passed arguments is not a number');
    } else {
      resolve(a + b);
    }
  })
}

addPromise(1, 1).then(function(sum) {
  console.log('Success, here is the sum: ', sum);
}, function(err) {
  console.log('Error: ', err);
}); // 2
addPromise('a', 1).then(function(sum) {
  console.log('Success, here is the sum: ', sum);
}, function(err) {
  console.log('Error: ', err);
}); // Error
addPromise('a', 'b').then(function(sum) {
  console.log('Success, here is the sum: ', sum);
}, function(err) {
  console.log('Error: ', err);
}); // Error
addPromise(1, 'b').then(function(sum) {
  console.log('Success, here is the sum: ', sum);
}, function(err) {
  console.log('Error: ', err);
}); // Error