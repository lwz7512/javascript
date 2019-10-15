(function(){
  console.log('this is a IIFE...')
  var name = "Barry";
})();

// 抛出错误："Uncaught ReferenceError: name is not defined"
// console.log(name)

var result = (function () { 
  var name = "Barry"; 
  return name; 
})(); 
// IIFE 执行后返回的结果：
result; // "Barry"