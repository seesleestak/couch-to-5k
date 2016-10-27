'use strict';

const remote = require('remote');
const electron = remote.getCurrentWindow();

window.onload = function() {
    bindEvents();
}

function bindEvents() {
    const toolbarControls = document.querySelector('.toolbar');

    toolbarControls.addEventListener(
        'click',
        toolbarHandler
    );
}

function toolbarHandler(el) {
    switch (el.target.className) {
        case 'closeButton':
            electron.close();
            break;
        case 'minimizeButton':
            electron.minimize();
            break;
        default: 
            break;
    }
}
