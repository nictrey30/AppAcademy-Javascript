let listItems = $('li');

// filter the selection to only items with a class of 'special'
let special = listItems.filter('.special');

// filter the selection to only items without a class of 'special'
let notSpecial = listItems.not('.special');

// filter the selection to only items that contain a span
let hasSpans = listItems.has('span');

// get the first list item on the page
let listItem = $('li').first(); // also: .last()

// get the siblings of the list item
let siblings = listItem.siblings();

// get the next sibling of the list item
let nextSibling = listItem.next(); // also: .prev()

// get the list item's parent
let list = listItem.parent();

// get the list items that are immediate children of the list
// let listItems = list.children();

// get ALL list items in the list, including nested ones
let allListItems = list.find('li');

// find all ancestors of the list item that have a class of "module"
let modules = listItem.parents('.module');

// find the closest ancestor of the list item that has a class of "module"
let module = listItem.closest('.module');
