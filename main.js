import aweasome from "./src/aweasome.js";
console.log(aweasome.sause());

let title = document.getElementById("title");
let content = document.createTextNode(aweasome.sause());
title.appendChild(content);
