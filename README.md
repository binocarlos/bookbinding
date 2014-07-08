bookbinding
===========

Create a book binding style background for a [pagemaker](https://github.com/binocarlos/pagemaker) book

## installation

```
$ component install binocarlos/bookbinding
```

## example

Create a [pagemaker](https://github.com/binocarlos/pagemaker) book and pass it to bookbinding

```js
var PageMaker = require('pagemaker')
var BookBinding = require('bookbinding')
var data = {
	title:"My Cool Book",
	pages:[{
		title:"Intro",
		html:"<p>This is the first page</p>"
	},
	...]
}

var book = PageMaker(data)
var binding = BookBinding(book)

binding.appendTo(document.querySelector('#container'))
```

## api

### `var binding = BookBinding(book, opts)`

Create a new book binding by passing in a [pagemaker](https://github.com/binocarlos/pagemaker) book and an options object.

The options object has the following properties:

 * image - a background image for the binding
 * padding - an object with left,right,top,bottom properties
 * paddingLeft
 * paddingTop
 * paddingRight
 * paddingBottom
 
The padding controls how much of the image is viewable content - the book itself will be rendered into the inner container.

```js
var binding = BookBinding(book, {
	image:'myimage.png',
	padding:{
		left:10,
		top:12,
		right:10,
		bottom:12
	}
})

binding.appendTo(document.querySelector('#container'))
```

## licence
MIT