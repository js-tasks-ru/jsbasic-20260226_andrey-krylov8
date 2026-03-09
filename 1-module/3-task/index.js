function ucFirst(str) {
  if(str[0] === undefined){
return str;
  }else{
  return str[0].toUpperCase() + str.slice(1, str.length + 1);
 }
}
