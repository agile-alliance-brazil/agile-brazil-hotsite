var App = (function () {
    "use strict";
    var module = {
        hasClass: function (el, name) {
            return new RegExp('(\\s|^)' + name + '(\\s|$)').test(el.className);
        },
        addClass: function (el, name) {
            var self = this;

            if (!self.hasClass(el, name)) {
                el.className += (el.className ? ' ' : '') + name;
            }
        },
        ready: function () {
            module.currentLink();
        }
    };

    return {
        ready: module.ready
    };
}());

App.ready();