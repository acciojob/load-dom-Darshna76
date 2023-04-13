//your JS code here. If required.
var loading=document.getElementByTagName("body");
loading.addEventListener(load, function() {
  loading.innerHtml="<p>DOM load success</p>"
});