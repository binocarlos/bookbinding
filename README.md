bookbinding
===========

Create a book binding style background for some HTML content

## installation

```
$ component install binocarlos/bookbinding
```

## example

Create a binding and append a HTML element before adding the binding to the page

```js
var BookBinding = require('bookbinding')
var binding = BookBinding()

// build your content element anyhow
var content = document.createElement('div')

binding.appendChild(content)
binding.appendTo(document.querySelector('#container'))
```

## api

### `var binding = BookBinding(opts)`

The options object has the following properties:

 * image - a background image for the binding
 * padding - an object with left,right,top,bottom properties
 * paddingLeft
 * paddingTop
 * paddingRight
 * paddingBottom
 
The padding controls how much of the background image is viewable content.

The content element occupies the center as defined by the padding.

They are in percentages and default to 0

```js
var binding = BookBinding({
	image:'myimage.png',
	// all paddings get converted to percentages
	padding:{
		left:10, // this means 10%
		top:'12%',
		right:10,
		bottom:12
	}
})

binding.appendTo(document.querySelector('#container'))
```

### `binding.appendTo(target)`

Append the binding element to a DOM element or selector string

### `binding.appendChild(contentElement)`

Append a content element to the book-binding background.

## licence
MIT