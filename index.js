module.exports = BookBinding;

var defaults = {
	image:'build/bookbinding/bookbg.png',
	padding:{
		left:10,
		right:10,
		top:10,
		bottom:10
	}
}

function BookBinding (book, opts) {
  if (!(this instanceof BookBinding)) return new BookBinding(opts);
  opts = opts || {}
  Object.keys(defaults || {}).forEach(function(key){
  	if(!opts[key]){
  		opts[key] = defaults[key]
  	}
  })
  Object.keys(opts || {}).forEach(function(key){
  	if(key.indexOf('padding')==0){
  		var val = opts[key]
  		key = key.replace(/^padding/, '').toLowerCase()
  		opts.padding[key] = val
  	}
  })
  this.element = document.createElement('div')
  this.element.style.backgroundImage = 'url(' + this.opts.image + ')'
  Object.keys(this.opts.padding || {}).forEach(function(key){
              
  })
}

BookBinding.prototype.appendTo = function (target) {
  if (typeof target === 'string') target = document.querySelector(target);
  target.appendChild(this.element);
};