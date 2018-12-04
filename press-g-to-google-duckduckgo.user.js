// ==UserScript==
// @name         Press "g" to Google (DuckDuckGo)
// @namespace    https://wiki.gslin.org/wiki/Google
// @version      0.20181204.0
// @description  Press "g" to Google in DuckDuckGo
// @author       Gea-Suan Lin
// @match        https://duckduckgo.com/*
// @grant        none
// @license      MIT
// ==/UserScript==

(function() {
    'use strict';

    document.addEventListener('keyup', function(event) {
        if ('input' === document.activeElement.tagName.toLowerCase()) {
            return;
        }
        if ('g' !== event.key) {
            return;
        }

        let q = document.getElementById('search_form_input').value;
        let q_encoded = encodeURIComponent(q).replace(/%20/g, '+');
        let url = 'https://www.google.com/search?q=' + q_encoded;

        document.location = url;
    });
})();
