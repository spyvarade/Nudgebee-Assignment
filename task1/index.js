function uncompress(s) {
  let stack = [];
  let currentString = "";
  let num = 0;
  // Iterate through each character in the input string
  for (let i = 0; i < s.length; i++) {
    const char = s[i];
    // If the character is a digit, update the repeat count
    if (!isNaN(char)) {
      num = num * 10 + parseInt(char);
    } else if (char === "(") {
      // Push the current string
      stack.push([currentString, num]);
      // Reset the current string
      currentString = "";
      num = 0;
    } else if (char === ")") {
      // Pop the previous string
      const [prevString, repeatTimes] = stack.pop();
      // Concatenate the current string
      currentString = prevString + currentString.repeat(repeatTimes);
    } else {
      currentString += char;
    }
  }
  return currentString;
}

console.log(uncompress("3(ab)"));
console.log(uncompress("3(ab2(c))"));
