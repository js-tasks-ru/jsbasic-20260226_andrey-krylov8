function truncate(str, maxlength) {
  if(str.length > maxlength){
    return String(str.slice(0,maxlength-1)) + `${"…"}`;
  } else {
    return str;
  }
}
