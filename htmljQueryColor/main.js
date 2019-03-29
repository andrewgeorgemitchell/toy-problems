$(function() {
  // --------------STEP 1--------------
  // wrap every word in every `<p>` tag with a `<span>` tag.
  // for example: <p>Hey there</p>
  // becomes: <p><span>Hey</span><span>there</span></p>
  // HINT: the `split` array method is your friend

  // Assign Paragraphs for easy access
  var $paragraphs = $('body p')

  for (let i = 0; i < $paragraphs.length; i++) {
    // Grab and split inner text of each p tag
    var innerText = $paragraphs[i].innerText
    var innerTextArray = innerText.split(' ');
    $paragraphs[i].innerText = "";
    for (let b = 0; b < innerTextArray.length; b++) {

      let newSpan = document.createElement( "span" )
      newSpan.innerText = innerTextArray[b] + ' ';
      $paragraphs[i].append(newSpan);
    }
  }


  // --------------STEP 2--------------
  // Next, change spans to random colors, once per second

  // TODO: your code here!


  let randomColor = () => {
    var rand = Math.random();
    if (rand <= .10) {
      return '#f44336';
    } else if ( rand <= .20) {
      return '#e91e63';
    } else if ( rand <= .30) {
      return '#9c27b0';
    } else if ( rand <= .40) {
      return '#673ab7';
    } else if ( rand <= .50) {
      return '#3f51b5';
    } else if ( rand <= .60) {
      return '#2196f3'
    } else if ( rand <= .70) {
      return '#03a9f4'
    } else if ( rand <= .80) {
      return '#00bcd4'
    } else if ( rand <= .90) {
      return '#009688'
    } else {
      return '#4caf50'
    }
  }

  var $spans = $('body p span')

  setInterval(() => {
    for (let i = 0; i < $spans.length; i++) {
      let hexColor = randomColor();
      $spans[i].style['color'] = hexColor;
    }
  }, 1000)
  

});