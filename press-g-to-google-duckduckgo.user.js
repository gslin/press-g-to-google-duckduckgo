// ==UserScript==
// @name         Press "g" to Google (DuckDuckGo)
// @namespace    https://wiki.gslin.org/wiki/Press_G_to_Google_DuckDuckGo
// @version      0.20180626.0
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

        var q = document.getElementById('search_form_input');
        var url = 'https://www.google.com/search?q=' + encodeURIComponent(q.value);

        document.location = url;
    });
})();
