exports = typeof window === 'undefined' ? global : window;

exports.arraysAnswers = {
  indexOf: function(arr, item) {
    // let result;
    // arr.forEach((x, i) => {
    //   if (x === item){
    //     result = i;
    //   }
    //   return result;
    // });
    return arr.indexOf(item)
  },

  sum: function(arr) {
    let total = 0;
    arr.forEach(x => {
      total += x
    })
    return total;
  },

  remove: function(arr, item) {
    let ans = [];
    for(let i = 0; i < arr.length; i++){
      if(arr[i] != item){
        ans.push(arr[i])
      }
    }
    return ans;
  },

  removeWithoutCopy: function(arr, item) {
    for(let i = 0; i < arr.length; i++){
      if (arr[i] === item) {
        arr.splice(i, 1)
        i--
      }
    }
    return arr
  },

  append: function(arr, item) {
    return arr.concat(item)
  },

  truncate: function(arr) {
    const ray = [];
    arr.forEach(x => {
      if(x !== arr[arr.length - 1]){
        ray.push(x);
      }
    })
    return ray
  },

  prepend: function(arr, item) {
    arr.unshift(item)
    // console.log(arr)
    return arr;
  },

  curtail: function(arr) {
    arr.shift()
    return arr
  },

  concat: function(arr1, arr2) {
    return arr1.concat(...arr2)
  },

  insert: function(arr, item, index) {
    arr.splice(index, 0, item);
    return arr
    // for(let i = 0; i < arr.length; i++){
    //   if(i === index){
    //     arr.splice(index, 0, item)
    //   }
    // }
  },

  count: function(arr, item) {
    let cunt = 0;
    arr.forEach(x => {
      if(x === item) {
        cunt++;
      } else {
        console.log('sup')
      }
      })
      return cunt;
  },

  duplicates: function(arr) {
  
  },

  square: function(arr) {
    return arr.map(x => x*x)
  },

  findAllOccurrences: function(arr, target) {
    const res = [];
    arr.forEach((x, i) => {
      if(x === target){
        res.push(i)
      }
    })
    return res
  }
};
