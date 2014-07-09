var percent = require('percent-string')

module.exports = BookBinding;

var defaults = {
  image:'build/binocarlos-bookbinding/bookbg.png',
  padding:{
    left:10,
    right:10,
    top:10,
    bottom:10
  }
}

function BookBinding (opts) {
  if (!(this instanceof BookBinding)) return new BookBinding(opts);
  var self = this;
  this.opts = opts = opts || {}
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
  this.element.style.backgroundSize = 'contain'
  this.element.style.backgroundRepeat = 'no-repeat'
  this.element.style.backgroundPosition = 'center top'
  this.element.style.width = '100%'
  this.element.style.height = '100%'
  /*
  Object.keys(this.opts.padding || {}).forEach(function(key){
    self.element.style['padding-' + key] = percent(self.opts.padding[key])
  })*/
}

BookBinding.prototype.appendChild = function (child) {
  this.element.appendChild(child)
}

BookBinding.prototype.appendTo = function (target) {
  if (typeof target === 'string') target = document.querySelector(target)
  target.appendChild(this.element)
};