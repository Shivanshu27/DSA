function alphabetPosition(text) {
    let result = "";
    for (let i = 0; i < text.length; i++) {
      let charCode = text.toUpperCase().charCodeAt(i);
      console.log(charCode)
      if (charCode >= 65 && charCode <= 90) {
        result += (charCode - 64) + " ";
        console.log(result)
      }
    }
    return result.trim();
  }

  console.log(alphabetPosition("The sunset sets at twelve o' clock."))