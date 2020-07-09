function URLValidation(incomingURL){
  let RegEx =  new RegExp('(http(s)?:\/\/.)?(www\.)?([a-z]{3}\.)?([a-z]{6}\.)?[a-z]([-a-zA-Z0-9@:%_\+.~#?&\/\/=]*)');
  const url = incomingURL;

  if(url.test(RegEx)){
    return true;
  }else{
    document.getElementById('results').innerHTML = 'INVALID INPUT: Expected URL';
    return false;
  }

}

export { URLValidation }
