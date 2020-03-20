let listItems = $('li');
let listItem = listItems[0];

// you cannot call jQuery methods on raw DOM elements. So, the following will not work:
/*
var listItems = $('li');
var rawListItem = listItems[0];
var html = rawListItem.html();
*/
// Object #<HTMLInputElement> has no method 'html'

// Testing a selection
// We can determine whether a selection meets certain criteria using the .is() method. The most common way to use this method is to provide a selector as its sole argument. It returns true or false depending on whether the selection matches the selector:
console.log(
  $('li')
    .eq(0)
    .is('.special')
); // false
console.log(
  $('li')
    .eq(1)
    .is('.special')
); // true

//  This function's return value is used as the new value, and it receives two arguments: the index of the element in the selection, and the old value of the thing you're trying to change. This is useful when you need information about an element's current state in order to properly set the new state.
$('li').html(function(index, oldHtml) {
  return oldHtml + ' !';
});

// Explicit iteration
$('li').each(function(index, elem) {
  // this: the current, raw DOM element
  // index: the current element's index in the selection
  // elem: the current, raw DOM element (same as this)
  $(elem).prepend('<b>' + index + ': </b>');
});

// method chaining
$('li')
  .click(function() {
    $(this).addClass('clicked');
  })
  .find('span')
  .attr('title', 'Hover over me');
