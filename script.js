// ==UserScript==
// @name         CDC Logo template
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the canvas!
// @author       vegoon
// @match        https://hot-potato.reddit.com/embed*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=reddit.com
// @grant        none
// Based on oralekin's script.
// ==/UserScript==

const imgUrl = "https://raw.githubusercontent.com/vegoon/cdcplace/main/overlay.png";
const width = 2000;
const height = 1000;

function getImg(url, w, h) {
  console.log("getting image");
  const i = document.createElement("img");
  i.src = url;
  i.style = "position: absolute;left: 0;top: 0;image-rendering: pixelated;width: " + w + "px;height: " + h +"px;";
  return i;
}

if (window.top !== window.self) {
  console.log("[CDC Template Script]");
  window.addEventListener('load', function() {
    const elem = document.getElementsByTagName("mona-lisa-embed")[0].shadowRoot.children[0].getElementsByTagName("mona-lisa-canvas")[0].shadowRoot.children[0];
    const overlayObject = getImg(imgUrl, width, height);
    elem.appendChild(overlayObject);
    console.log("CDC overlay added.");
    console.log("[/CDC Template Script]");
  });
}
