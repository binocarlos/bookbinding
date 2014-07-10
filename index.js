var percent = require('percent-string')
var resize = require('resize')

module.exports = BookBinding;

var defaults = {
  image:'build/binocarlos-bookbinding/bookbg.png',
  imageWidth:939,
  imageHeight:570,
  left:'3.2%',
  top:'2.8%',
  width:'94%',
  height:'94%'
}

var fields = ['left', 'top', 'width', 'height']

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

  fields.forEach(function(prop){
    self.content.style[prop] = percent(opts[prop])
  })

  this.element.appendChild(this.content)

  function runResize(){
    setTimeout(self.adjustContentHeight.bind(self),1)  
  }

  resize.bind(this.element, runResize)

  runResize()
}

BookBinding.prototype.adjustContentHeight = function(){
  var width = this.element.offsetWidth
  var widthPercent = width / this.opts.imageWidth
  var newHeight = this.opts.imageHeight * widthPercent
  this.element.style.height = newHeight + 'px'
}

BookBinding.prototype.appendChild = function (child) {
  this.content.appendChild(child)
}

BookBinding.prototype.appendTo = function (target) {
  if (typeof target === 'string') target = document.querySelector(target)
  target.appendChild(this.element)
};