module.exports = function check(str, bracketsConfig) {
  for (let i = 0; i < bracketsConfig.length; i++) {
    let bracket = bracketsConfig[i].join('');
    if (str.includes(bracket)) {
        str = str.replace(bracket, '');
        i = -1;
    } 
  }
  let res = str.length ? false : true;
  return res;
}
