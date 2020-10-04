module.exports = function reverse (n) {
    n = n.toString().replace("-","");
    let reversed = "";
  for (let i = n.length-1; i >=0 ; --i){
    reversed = reversed + n[i];
  }
  return reversed;
}
