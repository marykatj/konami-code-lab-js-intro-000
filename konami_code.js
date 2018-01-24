const code = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65]

function init(e) {
  let index = 0;
  const key = document.body('script')
  parseInt(e.detail || e.which);
    key.addEventListener('keydown', function(e)) {

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
*/
