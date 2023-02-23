// ==UserScript==
// @name         maximize chat div
// @namespace    https://github.com/ngmtine
// @version      0.1
// @description  maximize chat div for chat gpt
// @author       ngmtine
// @match        https://chat.openai.com/*
// @grant        none
// ==/UserScript==

(function () {
    "use strict";
    const styleTag = document.createElement("style");
    styleTag.innerHTML = `
        div.text-base {max-width: 95%}
        div:has(>div.flex.h-full.min-h-0.flex-col) {display: none}
        div.flex.h-full.flex-1.flex-col {display: contents}
        `;
    document.head.appendChild(styleTag);
})();

