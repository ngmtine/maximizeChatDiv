// ==UserScript==
// @name         maximize chat div
// @namespace    https://github.com/ngmtine/maximizeChatDiv
// @version      0.1
// @description  maximize chat div for chat gpt
// @author       ngmtine
// @match        https://chat.openai.com/*
// @grant        none
// @updateURL    https://github.com/ngmtine/maximizeChatDiv/raw/main/src/maximizeChatDiv.user.js
// @downloadURL  https://github.com/ngmtine/maximizeChatDiv/raw/main/src/maximizeChatDiv.user.js
// @supportURL   https://github.com/ngmtine/maximizeChatDiv
// ==/UserScript==

(() => {
	"use strict";
	const styleTag = document.createElement("style");
	styleTag.innerHTML = `
        div.text-base {max-width: 95%}
        `;
	document.head.appendChild(styleTag);
})();
