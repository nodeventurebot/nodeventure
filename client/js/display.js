/*
 * Nodeventure client JS
 *
 * Display code that runs in the context of the iframe
 */

(function () {
  "use strict";

  function DisplayAPI() {
    this.iframe = null;
    this.reset();
  }
  
  DisplayAPI.prototype.reset = function () {
    if (this.iframe) {
      this.iframe.parentNode.removeChild(this.iframe);
    }
    
    var parent = document.querySelector('#display');
    this.iframe = document.createElement('iframe');
    parent.appendChild(this.iframe);
    this.doc = this.iframe.contentDocument;
    this.win = this.iframe.contentWindow;
    this.win.display = this;
  };

  DisplayAPI.prototype.eval = function (string) {
    this.win.eval(string);
  };

  
  // id, x and y are optional
  DisplayAPI.prototype.show = function (imageUrl, id, style) {
    if (id != null) {
      var el = this.doc.getElementById(id)
      if (el) {
        el.parentNode.removeChild(el);
      }
    }
    var img = this.doc.createElement('img');
    img.src = imageUrl;
    img.style.position = 'absolute';
    this.doc.body.appendChild(img);
    for(var s in style) {
      img.style[s] = style[s];
    }
    if (id != null) {
      img.id = id;
    }
  };

  window.display = new DisplayAPI();
})();
