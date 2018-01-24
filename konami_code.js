const code = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65]

function init(e) {
  let index = 0;
  const key = document.getElementByTagName('script')[0];
    key.addEventListener('keydown', function(e)) {
      console.log(e.detail || e.which);

        if (key === code[index]) {
        index++;

          if (index === code.length) {
          return alert("Hurray!");

          index = 0;
      } else {
      index = 0;
    }
  }
}


/* function init(e) {
  let index = 0;
  const key = parseInt(e.detail || e.which);

  if (key === code[index]) {
    index++;

    if (index === code.length) {
      alert("Hurray!");

      index = 0;
    }
  } else {
    index = 0;
  }
}
  for (let i = 0; 1 = key.length; i < 1; i++) {
const key = document.getElementByTagName('script')[0];
*/
