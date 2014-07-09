var percent = require('percent-string')

module.exports = BookBinding;

var defaults = {
  image:'build/binocarlos-bookbinding/bookbg.png',
  left:'3.6%',
  top:'2.8%',
  width:'93.3%',
  height:'93.2%'
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
  this.element = document.createElement('div')
  this.element.style.backgroundImage = 'url(' + this.opts.image + ')'
  this.element.style.backgroundSize = 'contain'
  this.element.style.backgroundRepeat = 'no-repeat'
  this.element.style.backgroundPosition = 'center top'
  this.element.style.position = 'absolute'
  this.element.style.width = '100%'
  this.element.style.height = '100%'
  
  this.content = document.createElement('div')
  this.content.style.position = 'absolute'

  ['left', 'top', 'width', 'height'].forEach(function(prop){
    self.content.style[prop] = percent(opts[prop])
  })

  this.element.appendChild(this.content)
}

BookBinding.prototype.appendChild = function (child) {
  this.content.appendChild(child)
}

BookBinding.prototype.appendTo = function (target) {
  if (typeof target === 'string') target = document.querySelector(target)
  target.appendChild(this.element)
};