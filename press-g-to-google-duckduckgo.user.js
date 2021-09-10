// ==UserScript==
// @name         Press "g" to Google (DuckDuckGo)
// @namespace    https://wiki.gslin.org/wiki/Google
// @version      0.20210908.0
// @description  Press "g" to Google in DuckDuckGo
// @author       Gea-Suan Lin
// @match        https://duckduckgo.com/*
// @grant        GM_addStyle
// @grant        GM_getValue
// @grant        GM_openInTab
// @grant        GM_registerMenuCommand
// @grant        GM_setValue
// @require      https://greasyfork.org/scripts/38445-monkeyconfig/code/MonkeyConfig.js?version=251319
// @license      MIT
// ==/UserScript==

(function() {
    'use strict';

    const cfg = new MonkeyConfig({
        menuCommand: true,
        params: {
            search_engine: {
                type: 'text',
                default: 'https://www.google.com/search?q=',
            },
        },
        title: 'Press "g" to Google in DuckDuckGo',
    });

    document.addEventListener('keyup', function(event) {
        if ('input' === document.activeElement.tagName.toLowerCase()) {
            return;
        }
        if ('g' !== event.key) {
            return;
        }

        let q = document.getElementById('search_form_input').value;
        let q_encoded = encodeURIComponent(q).replace(/%20/g, '+');
        let url = cfg.get('search_engine') + q_encoded;

        document.location = url;
    });
})();
