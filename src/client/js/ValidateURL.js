function URLValidation(incomingURL){
  // @cowboy (1241 chars) Regex  --> https://mathiasbynens.be/demo/url-regex
  let RegEx =  /https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,4}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/g;
  const url = incomingURL;

  if(RegEx.test(url)){
    return true;
  }else{
    return false;
  }

}

export { URLValidation }
