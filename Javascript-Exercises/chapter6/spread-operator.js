function addPrefix(prefix,...words) {
  const prefixedWords = [];
  for(let i=0; i < words.length; i++) {
    prefixedWords[i] = prefix + words[i];
  }

  return prefixedWords;
}

addPrefix("con", "verse", "vex");

// nasty! I like this! that spread operator is so dope!~
