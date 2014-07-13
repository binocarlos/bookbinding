var percent = require('percent-string')
var resize = require('resize')

module.exports = BookBinding;

var defaults = {
  image:'build/binocarlos-bookbinding/bookbg.png',
  imageWidth:939,
  imageHeight:570,
  left:3.2,
  top:3.4,
  width:94,
  height:94
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
  this.contentElement = document.createElement('div')
  this.imageElement = document.createElement('div')
  this.image = document.createElement('img')
  
  this.imageElement.style.position = 'absolute'
  this.imageElement.style.width = '100%'
  this.imageElement.style.height = '100%'

  this.image.setAttribute('src', this.opts.image)
  this.image.style.width = '100%'

  this.image.isLoaded = false;
  
  this.image.onload = function(){
      self.image.isLoaded = true;
      self.adjustContentHeight()
  }
  if(this.image.isLoaded){
    self.adjustContentHeight()
  }

  this.element.style.position = 'absolute'
  this.element.style.width = '100%'
  this.element.style.height = '100%'
  
  this.contentElement.style.position = 'absolute'

  this.imageElement.appendChild(this.image)
  this.element.appendChild(this.imageElement)
  this.element.appendChild(this.contentElement)

  function runResize(){
    setTimeout(function(){
      self.adjustContentHeight()
    }, 2)
  }

  resize.bind(this.element, runResize)

  runResize()
}

BookBinding.prototype.adjustContentHeight = function(){
  var self = this;
  var width = this.element.offsetWidth
  var widthPercent = width / this.opts.imageWidth
  var newHeight = this.opts.imageHeight * widthPercent
  this.image.style.height = newHeight + 'px'
  this.element.style.height = newHeight + 'px'

  this.contentElement.style.width = '100%'
  this.contentElement.style.height = '100%'
  fields.forEach(function(prop){
    console.log(prop)
    console.log(percent(self.opts[prop]))
    self.contentElement.style[prop] = percent(self.opts[prop])
  })

}

BookBinding.prototype.appendChild = function (child) {
  this.contentElement.appendChild(child)
}

BookBinding.prototype.appendTo = function (target) {
  if (typeof target === 'string') target = document.querySelector(target)
  target.appendChild(this.element)
};