(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["material-component-material-module"],{

/***/ "./node_modules/ngx-color-picker/dist/ngx-color-picker.es5.js":
/*!********************************************************************!*\
  !*** ./node_modules/ngx-color-picker/dist/ngx-color-picker.es5.js ***!
  \********************************************************************/
/*! exports provided: Cmyk, Hsla, Hsva, Rgba, TextDirective, SliderDirective, ColorPickerComponent, ColorPickerDirective, ColorPickerModule, ColorPickerService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Cmyk", function() { return Cmyk; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Hsla", function() { return Hsla; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Hsva", function() { return Hsva; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Rgba", function() { return Rgba; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TextDirective", function() { return TextDirective; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SliderDirective", function() { return SliderDirective; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ColorPickerComponent", function() { return ColorPickerComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ColorPickerDirective", function() { return ColorPickerDirective; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ColorPickerModule", function() { return ColorPickerModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ColorPickerService", function() { return ColorPickerService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");



/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @enum {number} */
var ColorFormats = {
    HEX: 0,
    RGBA: 1,
    HSLA: 2,
};
ColorFormats[ColorFormats.HEX] = 'HEX';
ColorFormats[ColorFormats.RGBA] = 'RGBA';
ColorFormats[ColorFormats.HSLA] = 'HSLA';
var Cmyk = /** @class */ (function () {
    function Cmyk(c, m, y, k) {
        this.c = c;
        this.m = m;
        this.y = y;
        this.k = k;
    }
    return Cmyk;
}());
var Hsla = /** @class */ (function () {
    function Hsla(h, s, l, a) {
        this.h = h;
        this.s = s;
        this.l = l;
        this.a = a;
    }
    return Hsla;
}());
var Hsva = /** @class */ (function () {
    function Hsva(h, s, v, a) {
        this.h = h;
        this.s = s;
        this.v = v;
        this.a = a;
    }
    return Hsva;
}());
var Rgba = /** @class */ (function () {
    function Rgba(r, g, b, a) {
        this.r = r;
        this.g = g;
        this.b = b;
        this.a = a;
    }
    return Rgba;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @return {?}
 */
function detectIE() {
    /** @type {?} */
    var ua = '';
    if (typeof navigator !== 'undefined') {
        ua = navigator.userAgent.toLowerCase();
    }
    /** @type {?} */
    var msie = ua.indexOf('msie ');
    if (msie > 0) {
        // IE 10 or older => return version number
        return parseInt(ua.substring(msie + 5, ua.indexOf('.', msie)), 10);
    }
    // Other browser
    return false;
}
var TextDirective = /** @class */ (function () {
    function TextDirective() {
        this.newValue = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    /**
     * @param {?} event
     * @return {?}
     */
    TextDirective.prototype.inputChange = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        /** @type {?} */
        var value = event.target.value;
        if (this.rg === undefined) {
            this.newValue.emit(value);
        }
        else {
            /** @type {?} */
            var numeric = parseFloat(value);
            if (!isNaN(numeric) && numeric >= 0 && numeric <= this.rg) {
                this.newValue.emit({ v: numeric, rg: this.rg });
            }
        }
    };
    TextDirective.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"], args: [{
                    selector: '[text]'
                },] }
    ];
    TextDirective.propDecorators = {
        rg: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        text: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        newValue: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
        inputChange: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"], args: ['input', ['$event'],] }]
    };
    return TextDirective;
}());
var SliderDirective = /** @class */ (function () {
    function SliderDirective(elRef) {
        var _this = this;
        this.elRef = elRef;
        this.dragEnd = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.dragStart = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.newValue = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.listenerMove = function (event) { return _this.move(event); };
        this.listenerStop = function () { return _this.stop(); };
    }
    /**
     * @param {?} event
     * @return {?}
     */
    SliderDirective.prototype.mouseDown = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        this.start(event);
    };
    /**
     * @param {?} event
     * @return {?}
     */
    SliderDirective.prototype.touchStart = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        this.start(event);
    };
    /**
     * @private
     * @param {?} event
     * @return {?}
     */
    SliderDirective.prototype.move = /**
     * @private
     * @param {?} event
     * @return {?}
     */
    function (event) {
        event.preventDefault();
        this.setCursor(event);
    };
    /**
     * @private
     * @param {?} event
     * @return {?}
     */
    SliderDirective.prototype.start = /**
     * @private
     * @param {?} event
     * @return {?}
     */
    function (event) {
        this.setCursor(event);
        document.addEventListener('mouseup', this.listenerStop);
        document.addEventListener('touchend', this.listenerStop);
        document.addEventListener('mousemove', this.listenerMove);
        document.addEventListener('touchmove', this.listenerMove);
        this.dragStart.emit();
    };
    /**
     * @private
     * @return {?}
     */
    SliderDirective.prototype.stop = /**
     * @private
     * @return {?}
     */
    function () {
        document.removeEventListener('mouseup', this.listenerStop);
        document.removeEventListener('touchend', this.listenerStop);
        document.removeEventListener('mousemove', this.listenerMove);
        document.removeEventListener('touchmove', this.listenerMove);
        this.dragEnd.emit();
    };
    /**
     * @private
     * @param {?} event
     * @return {?}
     */
    SliderDirective.prototype.getX = /**
     * @private
     * @param {?} event
     * @return {?}
     */
    function (event) {
        /** @type {?} */
        var position = this.elRef.nativeElement.getBoundingClientRect();
        /** @type {?} */
        var pageX = (event.pageX !== undefined) ? event.pageX : event.touches[0].pageX;
        return pageX - position.left - window.pageXOffset;
    };
    /**
     * @private
     * @param {?} event
     * @return {?}
     */
    SliderDirective.prototype.getY = /**
     * @private
     * @param {?} event
     * @return {?}
     */
    function (event) {
        /** @type {?} */
        var position = this.elRef.nativeElement.getBoundingClientRect();
        /** @type {?} */
        var pageY = (event.pageY !== undefined) ? event.pageY : event.touches[0].pageY;
        return pageY - position.top - window.pageYOffset;
    };
    /**
     * @private
     * @param {?} event
     * @return {?}
     */
    SliderDirective.prototype.setCursor = /**
     * @private
     * @param {?} event
     * @return {?}
     */
    function (event) {
        /** @type {?} */
        var width = this.elRef.nativeElement.offsetWidth;
        /** @type {?} */
        var height = this.elRef.nativeElement.offsetHeight;
        /** @type {?} */
        var x = Math.max(0, Math.min(this.getX(event), width));
        /** @type {?} */
        var y = Math.max(0, Math.min(this.getY(event), height));
        if (this.rgX !== undefined && this.rgY !== undefined) {
            this.newValue.emit({ s: x / width, v: (1 - y / height), rgX: this.rgX, rgY: this.rgY });
        }
        else if (this.rgX === undefined && this.rgY !== undefined) {
            this.newValue.emit({ v: y / height, rgY: this.rgY });
        }
        else if (this.rgX !== undefined && this.rgY === undefined) {
            this.newValue.emit({ v: x / width, rgX: this.rgX });
        }
    };
    SliderDirective.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"], args: [{
                    selector: '[slider]'
                },] }
    ];
    /** @nocollapse */
    SliderDirective.ctorParameters = function () { return [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"] }
    ]; };
    SliderDirective.propDecorators = {
        rgX: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        rgY: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        slider: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        dragEnd: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
        dragStart: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
        newValue: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
        mouseDown: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"], args: ['mousedown', ['$event'],] }],
        touchStart: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"], args: ['touchstart', ['$event'],] }]
    };
    return SliderDirective;
}());
var SliderPosition = /** @class */ (function () {
    function SliderPosition(h, s, v, a) {
        this.h = h;
        this.s = s;
        this.v = v;
        this.a = a;
    }
    return SliderPosition;
}());
var SliderDimension = /** @class */ (function () {
    function SliderDimension(h, s, v, a) {
        this.h = h;
        this.s = s;
        this.v = v;
        this.a = a;
    }
    return SliderDimension;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var ColorPickerService = /** @class */ (function () {
    function ColorPickerService() {
        this.active = null;
    }
    /**
     * @param {?} active
     * @return {?}
     */
    ColorPickerService.prototype.setActive = /**
     * @param {?} active
     * @return {?}
     */
    function (active) {
        if (this.active && this.active !== active && this.active.cpDialogDisplay !== 'inline') {
            this.active.closeDialog();
        }
        this.active = active;
    };
    /**
     * @param {?} hsva
     * @return {?}
     */
    ColorPickerService.prototype.hsva2hsla = /**
     * @param {?} hsva
     * @return {?}
     */
    function (hsva) {
        /** @type {?} */
        var h = hsva.h;
        /** @type {?} */
        var s = hsva.s;
        /** @type {?} */
        var v = hsva.v;
        /** @type {?} */
        var a = hsva.a;
        if (v === 0) {
            return new Hsla(h, 0, 0, a);
        }
        else if (s === 0 && v === 1) {
            return new Hsla(h, 1, 1, a);
        }
        else {
            /** @type {?} */
            var l = v * (2 - s) / 2;
            return new Hsla(h, v * s / (1 - Math.abs(2 * l - 1)), l, a);
        }
    };
    /**
     * @param {?} hsla
     * @return {?}
     */
    ColorPickerService.prototype.hsla2hsva = /**
     * @param {?} hsla
     * @return {?}
     */
    function (hsla) {
        /** @type {?} */
        var h = Math.min(hsla.h, 1);
        /** @type {?} */
        var s = Math.min(hsla.s, 1);
        /** @type {?} */
        var l = Math.min(hsla.l, 1);
        /** @type {?} */
        var a = Math.min(hsla.a, 1);
        if (l === 0) {
            return new Hsva(h, 0, 0, a);
        }
        else {
            /** @type {?} */
            var v = l + s * (1 - Math.abs(2 * l - 1)) / 2;
            return new Hsva(h, 2 * (v - l) / v, v, a);
        }
    };
    /**
     * @param {?} hsva
     * @return {?}
     */
    ColorPickerService.prototype.hsvaToRgba = /**
     * @param {?} hsva
     * @return {?}
     */
    function (hsva) {
        /** @type {?} */
        var r;
        /** @type {?} */
        var g;
        /** @type {?} */
        var b;
        /** @type {?} */
        var h = hsva.h;
        /** @type {?} */
        var s = hsva.s;
        /** @type {?} */
        var v = hsva.v;
        /** @type {?} */
        var a = hsva.a;
        /** @type {?} */
        var i = Math.floor(h * 6);
        /** @type {?} */
        var f = h * 6 - i;
        /** @type {?} */
        var p = v * (1 - s);
        /** @type {?} */
        var q = v * (1 - f * s);
        /** @type {?} */
        var t = v * (1 - (1 - f) * s);
        switch (i % 6) {
            case 0:
                r = v, g = t, b = p;
                break;
            case 1:
                r = q, g = v, b = p;
                break;
            case 2:
                r = p, g = v, b = t;
                break;
            case 3:
                r = p, g = q, b = v;
                break;
            case 4:
                r = t, g = p, b = v;
                break;
            case 5:
                r = v, g = p, b = q;
                break;
            default:
                r = 0, g = 0, b = 0;
        }
        return new Rgba(r, g, b, a);
    };
    /**
     * @param {?} rgba
     * @return {?}
     */
    ColorPickerService.prototype.rgbaToCmyk = /**
     * @param {?} rgba
     * @return {?}
     */
    function (rgba) {
        /** @type {?} */
        var k = 1 - Math.max(rgba.r, rgba.g, rgba.b);
        if (k === 1) {
            return new Cmyk(0, 0, 0, 1);
        }
        else {
            /** @type {?} */
            var c = (1 - rgba.r - k) / (1 - k);
            /** @type {?} */
            var m = (1 - rgba.g - k) / (1 - k);
            /** @type {?} */
            var y = (1 - rgba.b - k) / (1 - k);
            return new Cmyk(c, m, y, k);
        }
    };
    /**
     * @param {?} rgba
     * @return {?}
     */
    ColorPickerService.prototype.rgbaToHsva = /**
     * @param {?} rgba
     * @return {?}
     */
    function (rgba) {
        /** @type {?} */
        var h;
        /** @type {?} */
        var s;
        /** @type {?} */
        var r = Math.min(rgba.r, 1);
        /** @type {?} */
        var g = Math.min(rgba.g, 1);
        /** @type {?} */
        var b = Math.min(rgba.b, 1);
        /** @type {?} */
        var a = Math.min(rgba.a, 1);
        /** @type {?} */
        var max = Math.max(r, g, b);
        /** @type {?} */
        var min = Math.min(r, g, b);
        /** @type {?} */
        var v = max;
        /** @type {?} */
        var d = max - min;
        s = (max === 0) ? 0 : d / max;
        if (max === min) {
            h = 0;
        }
        else {
            switch (max) {
                case r:
                    h = (g - b) / d + (g < b ? 6 : 0);
                    break;
                case g:
                    h = (b - r) / d + 2;
                    break;
                case b:
                    h = (r - g) / d + 4;
                    break;
                default:
                    h = 0;
            }
            h /= 6;
        }
        return new Hsva(h, s, v, a);
    };
    /**
     * @param {?} rgba
     * @param {?=} allowHex8
     * @return {?}
     */
    ColorPickerService.prototype.rgbaToHex = /**
     * @param {?} rgba
     * @param {?=} allowHex8
     * @return {?}
     */
    function (rgba, allowHex8) {
        /* tslint:disable:no-bitwise */
        /** @type {?} */
        var hex = '#' + ((1 << 24) | (rgba.r << 16) | (rgba.g << 8) | rgba.b).toString(16).substr(1);
        if (allowHex8) {
            hex += ((1 << 8) | Math.round(rgba.a * 255)).toString(16).substr(1);
        }
        /* tslint:enable:no-bitwise */
        return hex;
    };
    /**
     * @param {?} rgba
     * @return {?}
     */
    ColorPickerService.prototype.denormalizeRGBA = /**
     * @param {?} rgba
     * @return {?}
     */
    function (rgba) {
        return new Rgba(Math.round(rgba.r * 255), Math.round(rgba.g * 255), Math.round(rgba.b * 255), rgba.a);
    };
    /**
     * @param {?=} colorString
     * @param {?=} allowHex8
     * @return {?}
     */
    ColorPickerService.prototype.stringToHsva = /**
     * @param {?=} colorString
     * @param {?=} allowHex8
     * @return {?}
     */
    function (colorString, allowHex8) {
        if (colorString === void 0) { colorString = ''; }
        if (allowHex8 === void 0) { allowHex8 = false; }
        /** @type {?} */
        var hsva = null;
        colorString = (colorString || '').toLowerCase();
        /** @type {?} */
        var stringParsers = [
            {
                re: /(rgb)a?\(\s*(\d{1,3})\s*,\s*(\d{1,3})\s*%?,\s*(\d{1,3})\s*%?(?:,\s*(\d+(?:\.\d+)?)\s*)?\)/,
                parse: function (execResult) {
                    return new Rgba(parseInt(execResult[2], 10) / 255, parseInt(execResult[3], 10) / 255, parseInt(execResult[4], 10) / 255, isNaN(parseFloat(execResult[5])) ? 1 : parseFloat(execResult[5]));
                }
            }, {
                re: /(hsl)a?\(\s*(\d{1,3})\s*,\s*(\d{1,3})%\s*,\s*(\d{1,3})%\s*(?:,\s*(\d+(?:\.\d+)?)\s*)?\)/,
                parse: function (execResult) {
                    return new Hsla(parseInt(execResult[2], 10) / 360, parseInt(execResult[3], 10) / 100, parseInt(execResult[4], 10) / 100, isNaN(parseFloat(execResult[5])) ? 1 : parseFloat(execResult[5]));
                }
            }
        ];
        if (allowHex8) {
            stringParsers.push({
                re: /#([a-fA-F0-9]{2})([a-fA-F0-9]{2})([a-fA-F0-9]{2})([a-fA-F0-9]{2})?$/,
                parse: function (execResult) {
                    return new Rgba(parseInt(execResult[1], 16) / 255, parseInt(execResult[2], 16) / 255, parseInt(execResult[3], 16) / 255, parseInt(execResult[4] || 'FF', 16) / 255);
                }
            });
        }
        else {
            stringParsers.push({
                re: /#([a-fA-F0-9]{2})([a-fA-F0-9]{2})([a-fA-F0-9]{2})$/,
                parse: function (execResult) {
                    return new Rgba(parseInt(execResult[1], 16) / 255, parseInt(execResult[2], 16) / 255, parseInt(execResult[3], 16) / 255, 1);
                }
            });
        }
        stringParsers.push({
            re: /#([a-fA-F0-9])([a-fA-F0-9])([a-fA-F0-9])$/,
            parse: function (execResult) {
                return new Rgba(parseInt(execResult[1] + execResult[1], 16) / 255, parseInt(execResult[2] + execResult[2], 16) / 255, parseInt(execResult[3] + execResult[3], 16) / 255, 1);
            }
        });
        for (var key in stringParsers) {
            if (stringParsers.hasOwnProperty(key)) {
                /** @type {?} */
                var parser = stringParsers[key];
                /** @type {?} */
                var match = parser.re.exec(colorString);
                /** @type {?} */
                var color = match && parser.parse(match);
                if (color) {
                    if (color instanceof Rgba) {
                        hsva = this.rgbaToHsva(color);
                    }
                    else if (color instanceof Hsla) {
                        hsva = this.hsla2hsva(color);
                    }
                    return hsva;
                }
            }
        }
        return hsva;
    };
    /**
     * @param {?} hsva
     * @param {?} outputFormat
     * @param {?} alphaChannel
     * @return {?}
     */
    ColorPickerService.prototype.outputFormat = /**
     * @param {?} hsva
     * @param {?} outputFormat
     * @param {?} alphaChannel
     * @return {?}
     */
    function (hsva, outputFormat, alphaChannel) {
        if (outputFormat === 'auto') {
            outputFormat = hsva.a < 1 ? 'rgba' : 'hex';
        }
        switch (outputFormat) {
            case 'hsla':
                /** @type {?} */
                var hsla = this.hsva2hsla(hsva);
                /** @type {?} */
                var hslaText = new Hsla(Math.round((hsla.h) * 360), Math.round(hsla.s * 100), Math.round(hsla.l * 100), Math.round(hsla.a * 100) / 100);
                if (hsva.a < 1 || alphaChannel === 'always') {
                    return 'hsla(' + hslaText.h + ',' + hslaText.s + '%,' + hslaText.l + '%,' +
                        hslaText.a + ')';
                }
                else {
                    return 'hsl(' + hslaText.h + ',' + hslaText.s + '%,' + hslaText.l + '%)';
                }
            case 'rgba':
                /** @type {?} */
                var rgba = this.denormalizeRGBA(this.hsvaToRgba(hsva));
                if (hsva.a < 1 || alphaChannel === 'always') {
                    return 'rgba(' + rgba.r + ',' + rgba.g + ',' + rgba.b + ',' +
                        Math.round(rgba.a * 100) / 100 + ')';
                }
                else {
                    return 'rgb(' + rgba.r + ',' + rgba.g + ',' + rgba.b + ')';
                }
            default:
                /** @type {?} */
                var allowHex8 = (alphaChannel === 'always' || alphaChannel === 'forced');
                return this.rgbaToHex(this.denormalizeRGBA(this.hsvaToRgba(hsva)), allowHex8);
        }
    };
    ColorPickerService.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"] }
    ];
    /** @nocollapse */
    ColorPickerService.ctorParameters = function () { return []; };
    return ColorPickerService;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var ColorPickerComponent = /** @class */ (function () {
    function ColorPickerComponent(elRef, cdRef, service) {
        this.elRef = elRef;
        this.cdRef = cdRef;
        this.service = service;
        this.isIE10 = false;
        this.dialogArrowSize = 10;
        this.dialogArrowOffset = 15;
        this.dialogInputFields = [
            ColorFormats.HEX,
            ColorFormats.RGBA,
            ColorFormats.HSLA
        ];
        this.useRootViewContainer = false;
    }
    /**
     * @param {?} event
     * @return {?}
     */
    ColorPickerComponent.prototype.handleEsc = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        if (this.show && this.cpDialogDisplay === 'popup') {
            this.onCancelColor(event);
        }
    };
    /**
     * @param {?} event
     * @return {?}
     */
    ColorPickerComponent.prototype.handleEnter = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        if (this.show && this.cpDialogDisplay === 'popup') {
            this.onAcceptColor(event);
        }
    };
    /**
     * @return {?}
     */
    ColorPickerComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this.slider = new SliderPosition(0, 0, 0, 0);
        /** @type {?} */
        var hueWidth = this.hueSlider.nativeElement.offsetWidth || 140;
        /** @type {?} */
        var alphaWidth = this.alphaSlider.nativeElement.offsetWidth || 140;
        this.sliderDimMax = new SliderDimension(hueWidth, this.cpWidth, 130, alphaWidth);
        if (this.cpOutputFormat === 'rgba') {
            this.format = ColorFormats.RGBA;
        }
        else if (this.cpOutputFormat === 'hsla') {
            this.format = ColorFormats.HSLA;
        }
        else {
            this.format = ColorFormats.HEX;
        }
        this.listenerMouseDown = function (event) { _this.onMouseDown(event); };
        this.listenerResize = function () { _this.onResize(); };
        this.openDialog(this.initialColor, false);
    };
    /**
     * @return {?}
     */
    ColorPickerComponent.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        this.closeDialog();
    };
    /**
     * @return {?}
     */
    ColorPickerComponent.prototype.ngAfterViewInit = /**
     * @return {?}
     */
    function () {
        if (this.cpWidth !== 230 || this.cpDialogDisplay === 'inline') {
            /** @type {?} */
            var hueWidth = this.hueSlider.nativeElement.offsetWidth || 140;
            /** @type {?} */
            var alphaWidth = this.alphaSlider.nativeElement.offsetWidth || 140;
            this.sliderDimMax = new SliderDimension(hueWidth, this.cpWidth, 130, alphaWidth);
            this.updateColorPicker(false);
            this.cdRef.detectChanges();
        }
    };
    /**
     * @param {?} color
     * @param {?=} emit
     * @return {?}
     */
    ColorPickerComponent.prototype.openDialog = /**
     * @param {?} color
     * @param {?=} emit
     * @return {?}
     */
    function (color, emit) {
        if (emit === void 0) { emit = true; }
        this.service.setActive(this);
        if (!this.width) {
            this.cpWidth = this.directiveElementRef.nativeElement.offsetWidth;
        }
        if (!this.height) {
            this.height = 320;
        }
        this.setInitialColor(color);
        this.setColorFromString(color, emit);
        this.openColorPicker();
    };
    /**
     * @return {?}
     */
    ColorPickerComponent.prototype.closeDialog = /**
     * @return {?}
     */
    function () {
        this.closeColorPicker();
    };
    /**
     * @param {?} instance
     * @param {?} elementRef
     * @param {?} color
     * @param {?} cpWidth
     * @param {?} cpHeight
     * @param {?} cpDialogDisplay
     * @param {?} cpFallbackColor
     * @param {?} cpColorMode
     * @param {?} cpAlphaChannel
     * @param {?} cpOutputFormat
     * @param {?} cpDisableInput
     * @param {?} cpIgnoredElements
     * @param {?} cpSaveClickOutside
     * @param {?} cpUseRootViewContainer
     * @param {?} cpPosition
     * @param {?} cpPositionOffset
     * @param {?} cpPositionRelativeToArrow
     * @param {?} cpPresetLabel
     * @param {?} cpPresetColors
     * @param {?} cpMaxPresetColorsLength
     * @param {?} cpPresetEmptyMessage
     * @param {?} cpPresetEmptyMessageClass
     * @param {?} cpOKButton
     * @param {?} cpOKButtonClass
     * @param {?} cpOKButtonText
     * @param {?} cpCancelButton
     * @param {?} cpCancelButtonClass
     * @param {?} cpCancelButtonText
     * @param {?} cpAddColorButton
     * @param {?} cpAddColorButtonClass
     * @param {?} cpAddColorButtonText
     * @param {?} cpRemoveColorButtonClass
     * @return {?}
     */
    ColorPickerComponent.prototype.setupDialog = /**
     * @param {?} instance
     * @param {?} elementRef
     * @param {?} color
     * @param {?} cpWidth
     * @param {?} cpHeight
     * @param {?} cpDialogDisplay
     * @param {?} cpFallbackColor
     * @param {?} cpColorMode
     * @param {?} cpAlphaChannel
     * @param {?} cpOutputFormat
     * @param {?} cpDisableInput
     * @param {?} cpIgnoredElements
     * @param {?} cpSaveClickOutside
     * @param {?} cpUseRootViewContainer
     * @param {?} cpPosition
     * @param {?} cpPositionOffset
     * @param {?} cpPositionRelativeToArrow
     * @param {?} cpPresetLabel
     * @param {?} cpPresetColors
     * @param {?} cpMaxPresetColorsLength
     * @param {?} cpPresetEmptyMessage
     * @param {?} cpPresetEmptyMessageClass
     * @param {?} cpOKButton
     * @param {?} cpOKButtonClass
     * @param {?} cpOKButtonText
     * @param {?} cpCancelButton
     * @param {?} cpCancelButtonClass
     * @param {?} cpCancelButtonText
     * @param {?} cpAddColorButton
     * @param {?} cpAddColorButtonClass
     * @param {?} cpAddColorButtonText
     * @param {?} cpRemoveColorButtonClass
     * @return {?}
     */
    function (instance, elementRef, color, cpWidth, cpHeight, cpDialogDisplay, cpFallbackColor, cpColorMode, cpAlphaChannel, cpOutputFormat, cpDisableInput, cpIgnoredElements, cpSaveClickOutside, cpUseRootViewContainer, cpPosition, cpPositionOffset, cpPositionRelativeToArrow, cpPresetLabel, cpPresetColors, cpMaxPresetColorsLength, cpPresetEmptyMessage, cpPresetEmptyMessageClass, cpOKButton, cpOKButtonClass, cpOKButtonText, cpCancelButton, cpCancelButtonClass, cpCancelButtonText, cpAddColorButton, cpAddColorButtonClass, cpAddColorButtonText, cpRemoveColorButtonClass) {
        this.setInitialColor(color);
        this.setColorMode(cpColorMode);
        this.isIE10 = (detectIE() === 10);
        this.directiveInstance = instance;
        this.directiveElementRef = elementRef;
        this.cpDisableInput = cpDisableInput;
        this.cpAlphaChannel = cpAlphaChannel;
        this.cpOutputFormat = cpOutputFormat;
        this.cpDialogDisplay = cpDialogDisplay;
        this.cpIgnoredElements = cpIgnoredElements;
        this.cpSaveClickOutside = cpSaveClickOutside;
        this.useRootViewContainer = cpUseRootViewContainer;
        this.width = this.cpWidth = parseInt(cpWidth, 10);
        this.height = this.cpHeight = parseInt(cpHeight, 10);
        this.cpPosition = cpPosition;
        this.cpPositionOffset = parseInt(cpPositionOffset, 10);
        this.cpOKButton = cpOKButton;
        this.cpOKButtonText = cpOKButtonText;
        this.cpOKButtonClass = cpOKButtonClass;
        this.cpCancelButton = cpCancelButton;
        this.cpCancelButtonText = cpCancelButtonText;
        this.cpCancelButtonClass = cpCancelButtonClass;
        this.fallbackColor = cpFallbackColor || '#fff';
        this.setPresetConfig(cpPresetLabel, cpPresetColors);
        this.cpMaxPresetColorsLength = cpMaxPresetColorsLength;
        this.cpPresetEmptyMessage = cpPresetEmptyMessage;
        this.cpPresetEmptyMessageClass = cpPresetEmptyMessageClass;
        this.cpAddColorButton = cpAddColorButton;
        this.cpAddColorButtonText = cpAddColorButtonText;
        this.cpAddColorButtonClass = cpAddColorButtonClass;
        this.cpRemoveColorButtonClass = cpRemoveColorButtonClass;
        if (!cpPositionRelativeToArrow) {
            this.dialogArrowOffset = 0;
        }
        if (cpDialogDisplay === 'inline') {
            this.dialogArrowSize = 0;
            this.dialogArrowOffset = 0;
        }
        if (cpOutputFormat === 'hex' &&
            cpAlphaChannel !== 'always' && cpAlphaChannel !== 'forced') {
            this.cpAlphaChannel = 'disabled';
        }
    };
    /**
     * @param {?} mode
     * @return {?}
     */
    ColorPickerComponent.prototype.setColorMode = /**
     * @param {?} mode
     * @return {?}
     */
    function (mode) {
        switch (mode.toString().toUpperCase()) {
            case '1':
            case 'C':
            case 'COLOR':
                this.cpColorMode = 1;
                break;
            case '2':
            case 'G':
            case 'GRAYSCALE':
                this.cpColorMode = 2;
                break;
            case '3':
            case 'P':
            case 'PRESETS':
                this.cpColorMode = 3;
                break;
            default:
                this.cpColorMode = 1;
        }
    };
    /**
     * @param {?} color
     * @return {?}
     */
    ColorPickerComponent.prototype.setInitialColor = /**
     * @param {?} color
     * @return {?}
     */
    function (color) {
        this.initialColor = color;
    };
    /**
     * @param {?} cpPresetLabel
     * @param {?} cpPresetColors
     * @return {?}
     */
    ColorPickerComponent.prototype.setPresetConfig = /**
     * @param {?} cpPresetLabel
     * @param {?} cpPresetColors
     * @return {?}
     */
    function (cpPresetLabel, cpPresetColors) {
        this.cpPresetLabel = cpPresetLabel;
        this.cpPresetColors = cpPresetColors;
    };
    /**
     * @param {?} value
     * @param {?=} emit
     * @param {?=} update
     * @return {?}
     */
    ColorPickerComponent.prototype.setColorFromString = /**
     * @param {?} value
     * @param {?=} emit
     * @param {?=} update
     * @return {?}
     */
    function (value, emit, update) {
        if (emit === void 0) { emit = true; }
        if (update === void 0) { update = true; }
        /** @type {?} */
        var hsva;
        if (this.cpAlphaChannel === 'always' || this.cpAlphaChannel === 'forced') {
            hsva = this.service.stringToHsva(value, true);
            if (!hsva && !this.hsva) {
                hsva = this.service.stringToHsva(value, false);
            }
        }
        else {
            hsva = this.service.stringToHsva(value, false);
        }
        if (!hsva && !this.hsva) {
            hsva = this.service.stringToHsva(this.fallbackColor, false);
        }
        if (hsva) {
            this.hsva = hsva;
            this.sliderH = this.hsva.h;
            this.updateColorPicker(emit, update);
        }
    };
    /**
     * @return {?}
     */
    ColorPickerComponent.prototype.onResize = /**
     * @return {?}
     */
    function () {
        if (this.position === 'fixed') {
            this.setDialogPosition();
        }
        else if (this.cpDialogDisplay !== 'inline') {
            this.closeColorPicker();
        }
    };
    /**
     * @param {?} slider
     * @return {?}
     */
    ColorPickerComponent.prototype.onDragEnd = /**
     * @param {?} slider
     * @return {?}
     */
    function (slider) {
        this.directiveInstance.sliderDragEnd({ slider: slider, color: this.outputColor });
    };
    /**
     * @param {?} slider
     * @return {?}
     */
    ColorPickerComponent.prototype.onDragStart = /**
     * @param {?} slider
     * @return {?}
     */
    function (slider) {
        this.directiveInstance.sliderDragStart({ slider: slider, color: this.outputColor });
    };
    /**
     * @param {?} event
     * @return {?}
     */
    ColorPickerComponent.prototype.onMouseDown = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        if (!this.isIE10 && this.cpDialogDisplay === 'popup' &&
            event.target !== this.directiveElementRef.nativeElement &&
            !this.isDescendant(this.elRef.nativeElement, event.target) &&
            !this.isDescendant(this.directiveElementRef.nativeElement, event.target) &&
            this.cpIgnoredElements.filter(function (item) { return item === event.target; }).length === 0) {
            if (!this.cpSaveClickOutside) {
                this.setColorFromString(this.initialColor, false);
                this.directiveInstance.colorChanged(this.initialColor);
            }
            this.closeColorPicker();
        }
    };
    /**
     * @param {?} event
     * @return {?}
     */
    ColorPickerComponent.prototype.onAcceptColor = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        event.stopPropagation();
        if (this.cpDialogDisplay === 'popup') {
            this.closeColorPicker();
        }
        if (this.outputColor) {
            this.directiveInstance.colorSelected(this.outputColor);
        }
    };
    /**
     * @param {?} event
     * @return {?}
     */
    ColorPickerComponent.prototype.onCancelColor = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        event.stopPropagation();
        this.setColorFromString(this.initialColor, true);
        if (this.cpDialogDisplay === 'popup') {
            this.directiveInstance.colorChanged(this.initialColor, true);
            this.closeColorPicker();
        }
        this.directiveInstance.colorCanceled();
    };
    /**
     * @param {?} change
     * @return {?}
     */
    ColorPickerComponent.prototype.onFormatToggle = /**
     * @param {?} change
     * @return {?}
     */
    function (change) {
        /** @type {?} */
        var availableFormats = this.dialogInputFields.length;
        /** @type {?} */
        var nextFormat = (((this.dialogInputFields.indexOf(this.format) + change) %
            availableFormats) + availableFormats) % availableFormats;
        this.format = this.dialogInputFields[nextFormat];
    };
    /**
     * @param {?} value
     * @return {?}
     */
    ColorPickerComponent.prototype.onColorChange = /**
     * @param {?} value
     * @return {?}
     */
    function (value) {
        this.hsva.s = value.s / value.rgX;
        this.hsva.v = value.v / value.rgY;
        this.updateColorPicker();
        this.directiveInstance.sliderChanged({
            slider: 'lightness',
            value: this.hsva.v,
            color: this.outputColor
        });
        this.directiveInstance.sliderChanged({
            slider: 'saturation',
            value: this.hsva.s,
            color: this.outputColor
        });
    };
    /**
     * @param {?} value
     * @return {?}
     */
    ColorPickerComponent.prototype.onHueChange = /**
     * @param {?} value
     * @return {?}
     */
    function (value) {
        this.hsva.h = value.v / value.rgX;
        this.sliderH = this.hsva.h;
        this.updateColorPicker();
        this.directiveInstance.sliderChanged({
            slider: 'hue',
            value: this.hsva.h,
            color: this.outputColor
        });
    };
    /**
     * @param {?} value
     * @return {?}
     */
    ColorPickerComponent.prototype.onValueChange = /**
     * @param {?} value
     * @return {?}
     */
    function (value) {
        this.hsva.v = value.v / value.rgX;
        this.updateColorPicker();
        this.directiveInstance.sliderChanged({
            slider: 'value',
            value: this.hsva.v,
            color: this.outputColor
        });
    };
    /**
     * @param {?} value
     * @return {?}
     */
    ColorPickerComponent.prototype.onAlphaChange = /**
     * @param {?} value
     * @return {?}
     */
    function (value) {
        this.hsva.a = value.v / value.rgX;
        this.updateColorPicker();
        this.directiveInstance.sliderChanged({
            slider: 'alpha',
            value: this.hsva.a,
            color: this.outputColor
        });
    };
    /**
     * @param {?} value
     * @return {?}
     */
    ColorPickerComponent.prototype.onHexInput = /**
     * @param {?} value
     * @return {?}
     */
    function (value) {
        if (value === null) {
            this.updateColorPicker();
        }
        else {
            if (value && value[0] !== '#') {
                value = '#' + value;
            }
            /** @type {?} */
            var validHex = /^#([a-f0-9]{3}|[a-f0-9]{6})$/gi;
            if (this.cpAlphaChannel === 'always') {
                validHex = /^#([a-f0-9]{3}|[a-f0-9]{6}|[a-f0-9]{8})$/gi;
            }
            if (validHex.test(value)) {
                if (value.length < 5) {
                    value = '#' + value.substring(1)
                        .split('')
                        .map(function (c) { return c + c; })
                        .join('');
                }
                if (this.cpAlphaChannel === 'forced') {
                    value += Math.round(this.hsva.a * 255).toString(16);
                }
                this.setColorFromString(value, true, false);
                this.directiveInstance.inputChanged({
                    input: 'hex',
                    value: value,
                    color: this.outputColor
                });
            }
        }
    };
    /**
     * @param {?} value
     * @return {?}
     */
    ColorPickerComponent.prototype.onRedInput = /**
     * @param {?} value
     * @return {?}
     */
    function (value) {
        /** @type {?} */
        var rgba = this.service.hsvaToRgba(this.hsva);
        rgba.r = value.v / value.rg;
        this.hsva = this.service.rgbaToHsva(rgba);
        this.sliderH = this.hsva.h;
        this.updateColorPicker();
        this.directiveInstance.inputChanged({
            input: 'red',
            value: rgba.r,
            color: this.outputColor
        });
    };
    /**
     * @param {?} value
     * @return {?}
     */
    ColorPickerComponent.prototype.onBlueInput = /**
     * @param {?} value
     * @return {?}
     */
    function (value) {
        /** @type {?} */
        var rgba = this.service.hsvaToRgba(this.hsva);
        rgba.b = value.v / value.rg;
        this.hsva = this.service.rgbaToHsva(rgba);
        this.sliderH = this.hsva.h;
        this.updateColorPicker();
        this.directiveInstance.inputChanged({
            input: 'blue',
            value: rgba.b,
            color: this.outputColor
        });
    };
    /**
     * @param {?} value
     * @return {?}
     */
    ColorPickerComponent.prototype.onGreenInput = /**
     * @param {?} value
     * @return {?}
     */
    function (value) {
        /** @type {?} */
        var rgba = this.service.hsvaToRgba(this.hsva);
        rgba.g = value.v / value.rg;
        this.hsva = this.service.rgbaToHsva(rgba);
        this.sliderH = this.hsva.h;
        this.updateColorPicker();
        this.directiveInstance.inputChanged({
            input: 'green',
            value: rgba.g,
            color: this.outputColor
        });
    };
    /**
     * @param {?} value
     * @return {?}
     */
    ColorPickerComponent.prototype.onHueInput = /**
     * @param {?} value
     * @return {?}
     */
    function (value) {
        this.hsva.h = value.v / value.rg;
        this.sliderH = this.hsva.h;
        this.updateColorPicker();
        this.directiveInstance.inputChanged({
            input: 'hue',
            value: this.hsva.h,
            color: this.outputColor
        });
    };
    /**
     * @param {?} value
     * @return {?}
     */
    ColorPickerComponent.prototype.onValueInput = /**
     * @param {?} value
     * @return {?}
     */
    function (value) {
        this.hsva.v = value.v / value.rg;
        this.updateColorPicker();
        this.directiveInstance.inputChanged({
            input: 'value',
            value: this.hsva.v,
            color: this.outputColor
        });
    };
    /**
     * @param {?} value
     * @return {?}
     */
    ColorPickerComponent.prototype.onAlphaInput = /**
     * @param {?} value
     * @return {?}
     */
    function (value) {
        this.hsva.a = value.v / value.rg;
        this.updateColorPicker();
        this.directiveInstance.inputChanged({
            input: 'alpha',
            value: this.hsva.a,
            color: this.outputColor
        });
    };
    /**
     * @param {?} value
     * @return {?}
     */
    ColorPickerComponent.prototype.onLightnessInput = /**
     * @param {?} value
     * @return {?}
     */
    function (value) {
        /** @type {?} */
        var hsla = this.service.hsva2hsla(this.hsva);
        hsla.l = value.v / value.rg;
        this.hsva = this.service.hsla2hsva(hsla);
        this.sliderH = this.hsva.h;
        this.updateColorPicker();
        this.directiveInstance.inputChanged({
            input: 'lightness',
            value: hsla.l,
            color: this.outputColor
        });
    };
    /**
     * @param {?} value
     * @return {?}
     */
    ColorPickerComponent.prototype.onSaturationInput = /**
     * @param {?} value
     * @return {?}
     */
    function (value) {
        /** @type {?} */
        var hsla = this.service.hsva2hsla(this.hsva);
        hsla.s = value.v / value.rg;
        this.hsva = this.service.hsla2hsva(hsla);
        this.sliderH = this.hsva.h;
        this.updateColorPicker();
        this.directiveInstance.inputChanged({
            input: 'saturation',
            value: hsla.s,
            color: this.outputColor
        });
    };
    /**
     * @param {?} event
     * @param {?} value
     * @return {?}
     */
    ColorPickerComponent.prototype.onAddPresetColor = /**
     * @param {?} event
     * @param {?} value
     * @return {?}
     */
    function (event, value) {
        event.stopPropagation();
        if (!this.cpPresetColors.filter(function (color) { return (color === value); }).length) {
            this.cpPresetColors = this.cpPresetColors.concat(value);
            this.directiveInstance.presetColorsChanged(this.cpPresetColors);
        }
    };
    /**
     * @param {?} event
     * @param {?} value
     * @return {?}
     */
    ColorPickerComponent.prototype.onRemovePresetColor = /**
     * @param {?} event
     * @param {?} value
     * @return {?}
     */
    function (event, value) {
        event.stopPropagation();
        this.cpPresetColors = this.cpPresetColors.filter(function (color) { return (color !== value); });
        this.directiveInstance.presetColorsChanged(this.cpPresetColors);
    };
    // Private helper functions for the color picker dialog status
    // Private helper functions for the color picker dialog status
    /**
     * @private
     * @return {?}
     */
    ColorPickerComponent.prototype.openColorPicker = 
    // Private helper functions for the color picker dialog status
    /**
     * @private
     * @return {?}
     */
    function () {
        var _this = this;
        if (!this.show) {
            this.show = true;
            this.hidden = true;
            setTimeout(function () {
                _this.hidden = false;
                _this.setDialogPosition();
                _this.cdRef.detectChanges();
            }, 0);
            this.directiveInstance.stateChanged(true);
            if (!this.isIE10) {
                document.addEventListener('mousedown', this.listenerMouseDown);
            }
            window.addEventListener('resize', this.listenerResize);
        }
    };
    /**
     * @private
     * @return {?}
     */
    ColorPickerComponent.prototype.closeColorPicker = /**
     * @private
     * @return {?}
     */
    function () {
        if (this.show) {
            this.show = false;
            this.directiveInstance.stateChanged(false);
            if (!this.isIE10) {
                document.removeEventListener('mousedown', this.listenerMouseDown);
            }
            window.removeEventListener('resize', this.listenerResize);
            if (!this.cdRef['destroyed']) {
                this.cdRef.detectChanges();
            }
        }
    };
    /**
     * @private
     * @param {?=} emit
     * @param {?=} update
     * @return {?}
     */
    ColorPickerComponent.prototype.updateColorPicker = /**
     * @private
     * @param {?=} emit
     * @param {?=} update
     * @return {?}
     */
    function (emit, update) {
        if (emit === void 0) { emit = true; }
        if (update === void 0) { update = true; }
        if (this.sliderDimMax) {
            if (this.cpColorMode === 2) {
                this.hsva.s = 0;
            }
            /** @type {?} */
            var lastOutput = this.outputColor;
            /** @type {?} */
            var hsla = this.service.hsva2hsla(this.hsva);
            /** @type {?} */
            var rgba = this.service.denormalizeRGBA(this.service.hsvaToRgba(this.hsva));
            /** @type {?} */
            var hue = this.service.denormalizeRGBA(this.service.hsvaToRgba(new Hsva(this.sliderH || this.hsva.h, 1, 1, 1)));
            if (update) {
                this.hslaText = new Hsla(Math.round((hsla.h) * 360), Math.round(hsla.s * 100), Math.round(hsla.l * 100), Math.round(hsla.a * 100) / 100);
                this.rgbaText = new Rgba(rgba.r, rgba.g, rgba.b, Math.round(rgba.a * 100) / 100);
                /** @type {?} */
                var allowHex8 = this.cpAlphaChannel === 'always';
                this.hexText = this.service.rgbaToHex(rgba, allowHex8);
                this.hexAlpha = this.rgbaText.a;
            }
            if (this.cpOutputFormat === 'auto') {
                if (this.hsva.a < 1) {
                    this.format = this.hsva.a < 1 ? ColorFormats.RGBA : ColorFormats.HEX;
                }
            }
            this.hueSliderColor = 'rgb(' + hue.r + ',' + hue.g + ',' + hue.b + ')';
            this.alphaSliderColor = 'rgb(' + rgba.r + ',' + rgba.g + ',' + rgba.b + ')';
            this.outputColor = this.service.outputFormat(this.hsva, this.cpOutputFormat, this.cpAlphaChannel);
            this.selectedColor = this.service.outputFormat(this.hsva, 'rgba', null);
            this.slider = new SliderPosition((this.sliderH || this.hsva.h) * this.sliderDimMax.h - 8, this.hsva.s * this.sliderDimMax.s - 8, (1 - this.hsva.v) * this.sliderDimMax.v - 8, this.hsva.a * this.sliderDimMax.a - 8);
            if (emit && lastOutput !== this.outputColor) {
                this.directiveInstance.colorChanged(this.outputColor);
            }
        }
    };
    // Private helper functions for the color picker dialog positioning
    // Private helper functions for the color picker dialog positioning
    /**
     * @private
     * @return {?}
     */
    ColorPickerComponent.prototype.setDialogPosition = 
    // Private helper functions for the color picker dialog positioning
    /**
     * @private
     * @return {?}
     */
    function () {
        if (this.cpDialogDisplay === 'inline') {
            this.position = 'relative';
        }
        else {
            /** @type {?} */
            var position = 'static';
            /** @type {?} */
            var transform = '';
            /** @type {?} */
            var style = void 0;
            /** @type {?} */
            var parentNode = null;
            /** @type {?} */
            var transformNode = null;
            /** @type {?} */
            var node = this.directiveElementRef.nativeElement.parentNode;
            /** @type {?} */
            var dialogHeight = this.dialogElement.nativeElement.offsetHeight;
            while (node !== null && node.tagName !== 'HTML') {
                style = window.getComputedStyle(node);
                position = style.getPropertyValue('position');
                transform = style.getPropertyValue('transform');
                if (position !== 'static' && parentNode === null) {
                    parentNode = node;
                }
                if (transform && transform !== 'none' && transformNode === null) {
                    transformNode = node;
                }
                if (position === 'fixed') {
                    parentNode = transformNode;
                    break;
                }
                node = node.parentNode;
            }
            /** @type {?} */
            var boxDirective = this.createDialogBox(this.directiveElementRef.nativeElement, (position !== 'fixed'));
            if (this.useRootViewContainer || (position === 'fixed' &&
                (!parentNode || parentNode instanceof HTMLUnknownElement))) {
                this.top = boxDirective.top;
                this.left = boxDirective.left;
            }
            else {
                if (parentNode === null) {
                    parentNode = node;
                }
                /** @type {?} */
                var boxParent = this.createDialogBox(parentNode, (position !== 'fixed'));
                this.top = boxDirective.top - boxParent.top;
                this.left = boxDirective.left - boxParent.left;
            }
            if (position === 'fixed') {
                this.position = 'fixed';
            }
            if (this.cpPosition === 'left') {
                this.top += boxDirective.height * this.cpPositionOffset / 100 - this.dialogArrowOffset;
                this.left -= this.cpWidth + this.dialogArrowSize - 2;
            }
            else if (this.cpPosition === 'top') {
                this.arrowTop = dialogHeight - 1;
                this.top -= dialogHeight + this.dialogArrowSize;
                this.left += this.cpPositionOffset / 100 * boxDirective.width - this.dialogArrowOffset;
            }
            else if (this.cpPosition === 'bottom') {
                this.top += boxDirective.height + this.dialogArrowSize;
                this.left += this.cpPositionOffset / 100 * boxDirective.width - this.dialogArrowOffset;
            }
            else {
                this.top += boxDirective.height * this.cpPositionOffset / 100 - this.dialogArrowOffset;
                this.left += boxDirective.width + this.dialogArrowSize - 2;
            }
        }
    };
    // Private helper functions for the color picker dialog positioning and opening
    // Private helper functions for the color picker dialog positioning and opening
    /**
     * @private
     * @param {?} parent
     * @param {?} child
     * @return {?}
     */
    ColorPickerComponent.prototype.isDescendant = 
    // Private helper functions for the color picker dialog positioning and opening
    /**
     * @private
     * @param {?} parent
     * @param {?} child
     * @return {?}
     */
    function (parent, child) {
        /** @type {?} */
        var node = child.parentNode;
        while (node !== null) {
            if (node === parent) {
                return true;
            }
            node = node.parentNode;
        }
        return false;
    };
    /**
     * @private
     * @param {?} element
     * @param {?} offset
     * @return {?}
     */
    ColorPickerComponent.prototype.createDialogBox = /**
     * @private
     * @param {?} element
     * @param {?} offset
     * @return {?}
     */
    function (element, offset) {
        return {
            top: element.getBoundingClientRect().top + (offset ? window.pageYOffset : 0),
            left: element.getBoundingClientRect().left + (offset ? window.pageXOffset : 0),
            width: element.offsetWidth,
            height: element.offsetHeight
        };
    };
    ColorPickerComponent.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"], args: [{
                    selector: 'color-picker',
                    template: "<div #dialogPopup class=\"color-picker\" [style.visibility]=\"hidden || !show ? 'hidden' : 'visible'\" [style.top.px]=\"top\" [style.left.px]=\"left\" [style.position]=\"position\" [style.height.px]=\"cpHeight\" [style.width.px]=\"cpWidth\" (click)=\"$event.stopPropagation()\">\n  <div *ngIf=\"cpDialogDisplay=='popup'\" class=\"arrow arrow-{{cpPosition}}\" [style.top.px]=\"arrowTop\"></div>\n\n  <div *ngIf=\"(cpColorMode ||\u00A01) === 1\" class=\"saturation-lightness\" [slider] [rgX]=\"1\" [rgY]=\"1\" [style.background-color]=\"hueSliderColor\" (newValue)=\"onColorChange($event)\" (dragStart)=\"onDragStart('saturation-lightness')\" (dragEnd)=\"onDragEnd('saturation-lightness')\">\n    <div class=\"cursor\" [style.top.px]=\"slider?.v\" [style.left.px]=\"slider?.s\"></div>\n  </div>\n\n  <div class=\"hue-alpha box\">\n    <div class=\"left\">\n      <div class=\"selected-color-background\"></div>\n\n      <div class=\"selected-color\" [style.background-color]=\"selectedColor\"></div>\n\n      <button *ngIf=\"cpAddColorButton\" class=\"{{cpAddColorButtonClass}}\" [disabled]=\"cpPresetColors && cpPresetColors.length >= cpMaxPresetColorsLength\" (click)=\"onAddPresetColor($event, selectedColor)\">\n        {{cpAddColorButtonText}}\n      </button>\n    </div>\n\n    <div class=\"right\">\n      <div *ngIf=\"cpAlphaChannel==='disabled'\" style=\"height: 16px;\"></div>\n\n      <div #hueSlider class=\"hue\" [slider] [rgX]=\"1\" [style.display]=\"(cpColorMode ||\u00A01) === 1 ? 'block' : 'none'\" (newValue)=\"onHueChange($event)\" (dragStart)=\"onDragStart('hue')\" (dragEnd)=\"onDragEnd('hue')\">\n        <div class=\"cursor\" [style.left.px]=\"slider?.h\"></div>\n      </div>\n\n      <div #valueSlider class=\"value\" [slider] [rgX]=\"1\" [style.display]=\"(cpColorMode ||\u00A01) === 2 ? 'block': 'none'\" (newValue)=\"onValueChange($event)\" (dragStart)=\"onDragStart('value')\" (dragEnd)=\"onDragEnd('value')\">\n        <div class=\"cursor\" [style.right.px]=\"slider?.v\"></div>\n      </div>\n\n      <div #alphaSlider class=\"alpha\" [slider] [rgX]=\"1\" [style.display]=\"cpAlphaChannel === 'disabled' ? 'none' : 'block'\" [style.background-color]=\"alphaSliderColor\" (newValue)=\"onAlphaChange($event)\" (dragStart)=\"onDragStart('alpha')\" (dragEnd)=\"onDragEnd('alpha')\">\n        <div class=\"cursor\" [style.left.px]=\"slider?.a\"></div>\n      </div>\n    </div>\n  </div>\n\n  <div *ngIf=\"!cpDisableInput && (cpColorMode ||\u00A01) === 1 \" class=\"hsla-text\" [style.display]=\"format !== 2 ? 'none' : 'block'\">\n    <div class=\"box\">\n      <input type=\"number\" pattern=\"[0-9]*\" min=\"0\" max=\"360\" [text] [rg]=\"360\" [value]=\"hslaText?.h\" (keyup.enter)=\"onAcceptColor($event)\" (newValue)=\"onHueInput($event)\" />\n      <input type=\"number\" pattern=\"[0-9]*\" min=\"0\" max=\"100\" [text] [rg]=\"100\" [value]=\"hslaText?.s\" (keyup.enter)=\"onAcceptColor($event)\" (newValue)=\"onSaturationInput($event)\" />\n      <input type=\"number\" pattern=\"[0-9]*\" min=\"0\" max=\"100\" [text] [rg]=\"100\" [value]=\"hslaText?.l\" (keyup.enter)=\"onAcceptColor($event)\" (newValue)=\"onLightnessInput($event)\" />\n      <input *ngIf=\"cpAlphaChannel!=='disabled'\" type=\"number\" pattern=\"[0-9]+([\\.,][0-9]{1,2})?\" min=\"0\" max=\"1\" step=\"0.1\" [text] [rg]=\"1\" [value]=\"hslaText?.a\" (keyup.enter)=\"onAcceptColor($event)\" (newValue)=\"onAlphaInput($event)\" />\n    </div>\n\n    <div class=\"box\">\n      <div>H</div><div>S</div><div>L</div><div *ngIf=\"cpAlphaChannel!=='disabled'\">A</div>\n    </div>\n  </div>\n\n  <div *ngIf=\"!cpDisableInput && (cpColorMode ||\u00A01) === 1 \" [style.display]=\"format !== 1 ? 'none' : 'block'\" class=\"rgba-text\">\n    <div class=\"box\">\n      <input type=\"number\" pattern=\"[0-9]*\" min=\"0\" max=\"255\" [text] [rg]=\"255\" [value]=\"rgbaText?.r\" (keyup.enter)=\"onAcceptColor($event)\" (newValue)=\"onRedInput($event)\" />\n      <input type=\"number\" pattern=\"[0-9]*\" min=\"0\" max=\"255\" [text] [rg]=\"255\" [value]=\"rgbaText?.g\" (keyup.enter)=\"onAcceptColor($event)\" (newValue)=\"onGreenInput($event)\" />\n      <input type=\"number\" pattern=\"[0-9]*\" min=\"0\" max=\"255\" [text] [rg]=\"255\" [value]=\"rgbaText?.b\" (keyup.enter)=\"onAcceptColor($event)\" (newValue)=\"onBlueInput($event)\" />\n      <input *ngIf=\"cpAlphaChannel!=='disabled'\" type=\"number\" pattern=\"[0-9]+([\\.,][0-9]{1,2})?\" min=\"0\" max=\"1\" step=\"0.1\" [text] [rg]=\"1\" [value]=\"rgbaText?.a\" (keyup.enter)=\"onAcceptColor($event)\" (newValue)=\"onAlphaInput($event)\" />\n    </div>\n\n    <div class=\"box\">\n      <div>R</div><div>G</div><div>B</div><div *ngIf=\"cpAlphaChannel!=='disabled'\" >A</div>\n    </div>\n  </div>\n\n  <div *ngIf=\"!cpDisableInput && (cpColorMode ||\u00A01) === 1\" class=\"hex-text\" [class.hex-alpha]=\"cpAlphaChannel==='forced'\"\n    [style.display]=\"format !== 0 ? 'none' : 'block'\">\n    <div class=\"box\">\n      <input [text] [value]=\"hexText\" (blur)=\"onHexInput(null)\" (keyup.enter)=\"onAcceptColor($event)\" (newValue)=\"onHexInput($event)\"/>\n      <input *ngIf=\"cpAlphaChannel==='forced'\" type=\"number\" pattern=\"[0-9]+([\\.,][0-9]{1,2})?\" min=\"0\" max=\"1\" step=\"0.1\" [text] [rg]=\"1\" [value]=\"hexAlpha\" (keyup.enter)=\"onAcceptColor($event)\" (newValue)=\"onAlphaInput($event)\"/>\n    </div>\n\n    <div class=\"box\">\n      <div>Hex</div>\n      <div *ngIf=\"cpAlphaChannel==='forced'\">A</div>\n    </div>\n  </div>\n\n  <div *ngIf=\"!cpDisableInput && (cpColorMode ||\u00A01) === 2\" class=\"value-text\">\n    <div class=\"box\">\n      <input type=\"number\" pattern=\"[0-9]*\" min=\"0\" max=\"100\" [text] [rg]=\"100\" [value]=\"hslaText?.l\" (keyup.enter)=\"onAcceptColor($event)\" (newValue)=\"onValueInput($event)\" />\n      <input *ngIf=\"cpAlphaChannel!=='disabled'\" type=\"number\" pattern=\"[0-9]+([\\.,][0-9]{1,2})?\" min=\"0\" max=\"1\" step=\"0.1\"  [text] [rg]=\"1\" [value]=\"hslaText?.a\" (keyup.enter)=\"onAcceptColor($event)\" (newValue)=\"onAlphaInput($event)\" />\n    </div>\n\n    <div class=\"box\">\n      <div>V</div><div>A</div>\n    </div>\n  </div>\n\n  <div *ngIf=\"!cpDisableInput && (cpColorMode ||\u00A01) === 1\" class=\"type-policy\">\n    <span class=\"type-policy-arrow\" (click)=\"onFormatToggle(1)\"></span>\n    <span class=\"type-policy-arrow\" (click)=\"onFormatToggle(-1)\"></span>\n  </div>\n\n  <div *ngIf=\"cpPresetColors?.length || cpAddColorButton\" class=\"preset-area\">\n    <hr>\n\n    <div class=\"preset-label\">{{cpPresetLabel}}</div>\n\n    <div *ngIf=\"cpPresetColors?.length\">\n      <div *ngFor=\"let color of cpPresetColors\" class=\"preset-color\" [style.backgroundColor]=\"color\" (click)=\"setColorFromString(color)\">\n        <span *ngIf=\"cpAddColorButton\" class=\"{{cpRemoveColorButtonClass}}\" (click)=\"onRemovePresetColor($event, color)\"></span>\n      </div>\n    </div>\n\n    <div *ngIf=\"!cpPresetColors?.length && cpAddColorButton\" class=\"{{cpPresetEmptyMessageClass}}\">{{cpPresetEmptyMessage}}</div>\n  </div>\n\n  <div *ngIf=\"cpOKButton || cpCancelButton\" class=\"button-area\">\n    <button *ngIf=\"cpCancelButton\" type=\"button\" class=\"{{cpCancelButtonClass}}\" (click)=\"onCancelColor($event)\">{{cpCancelButtonText}}</button>\n\n    <button *ngIf=\"cpOKButton\" type=\"button\" class=\"{{cpOKButtonClass}}\" (click)=\"onAcceptColor($event)\">{{cpOKButtonText}}</button>\n  </div>\n</div>\n",
                    encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None,
                    styles: [".color-picker {\n  position: absolute;\n  z-index: 100000;\n\n  width: 230px;\n  height: auto;\n  border: #777 solid 1px;\n\n  cursor: default;\n\n  -webkit-user-select: none;\n  -khtml-user-select: none;\n  -moz-user-select: none;\n  -ms-user-select: none;\n\n  user-select: none;\n  background-color: #fff;\n}\n\n.color-picker * {\n  -webkit-box-sizing: border-box;\n  -moz-box-sizing: border-box;\n\n  box-sizing: border-box;\n  margin: 0;\n\n  font-size: 11px;\n}\n\n.color-picker input {\n  width: 0;\n  height: 26px;\n  min-width: 0;\n\n  font-size: 13px;\n  text-align: center;\n  color: #000;\n}\n\n.color-picker input:invalid,\n.color-picker input:-moz-ui-invalid,\n.color-picker input:-moz-submit-invalid {\n  box-shadow: none;\n}\n\n.color-picker input::-webkit-inner-spin-button,\n.color-picker input::-webkit-outer-spin-button {\n  margin: 0;\n\n  -webkit-appearance: none;\n}\n\n.color-picker .arrow {\n  position: absolute;\n  z-index: 999999;\n\n  width: 0;\n  height: 0;\n  border-style: solid;\n}\n\n.color-picker .arrow.arrow-top {\n  left: 8px;\n\n  border-width: 10px 5px;\n  border-color: #777 rgba(0, 0, 0, 0) rgba(0, 0, 0, 0) rgba(0, 0, 0, 0);\n}\n\n.color-picker .arrow.arrow-left {\n  top: 8px;\n  left: 100%;\n\n  border-width: 5px 10px;\n  border-color: rgba(0, 0, 0, 0) rgba(0, 0, 0, 0) rgba(0, 0, 0, 0) #777;\n}\n\n.color-picker .arrow.arrow-right {\n  top: 8px;\n  left: -20px;\n\n  border-width: 5px 10px;\n  border-color: rgba(0, 0, 0, 0) #777 rgba(0, 0, 0, 0) rgba(0, 0, 0, 0);\n}\n\n.color-picker .arrow.arrow-bottom {\n  top: -20px;\n  left: 8px;\n\n  border-width: 10px 5px;\n  border-color: rgba(0, 0, 0, 0) rgba(0, 0, 0, 0) #777 rgba(0, 0, 0, 0);\n}\n\n.color-picker .cursor {\n  position: relative;\n\n  width: 16px;\n  height: 16px;\n  border: #222 solid 2px;\n  border-radius: 50%;\n\n  cursor: default;\n}\n\n.color-picker .box {\n  display: flex;\n  padding: 4px 8px;\n}\n\n.color-picker .left {\n  position: relative;\n\n  padding: 16px 8px;\n}\n\n.color-picker .right {\n  -webkit-flex: 1 1 auto;\n  -ms-flex: 1 1 auto;\n\n  flex: 1 1 auto;\n\n  padding: 12px 8px;\n}\n\n.color-picker .button-area {\n  padding: 0 16px 16px;\n\n  text-align: right;\n}\n\n.color-picker .preset-area {\n  padding: 4px 15px;\n}\n\n.color-picker .preset-area .preset-label {\n  overflow: hidden;\n  width: 100%;\n  padding: 4px;\n\n  font-size: 11px;\n  white-space: nowrap;\n  text-align: left;\n  text-overflow: ellipsis;\n  color: #555;\n}\n\n.color-picker .preset-area .preset-color {\n  position: relative;\n\n  display: inline-block;\n  width: 18px;\n  height: 18px;\n  margin: 4px 6px 8px;\n  border: #a9a9a9 solid 1px;\n  border-radius: 25%;\n\n  cursor: pointer;\n}\n\n.color-picker .preset-area .preset-empty-message {\n  min-height: 18px;\n  margin-top: 4px;\n  margin-bottom: 8px;\n\n  font-style: italic;\n  text-align: center;\n}\n\n.color-picker .hex-text {\n  width: 100%;\n  padding: 4px 8px;\n\n  font-size: 11px;\n}\n\n.color-picker .hex-text .box {\n  padding: 0 24px 8px 8px;\n}\n\n.color-picker .hex-text .box div {\n  float: left;\n\n  -webkit-flex: 1 1 auto;\n  -ms-flex: 1 1 auto;\n\n  flex: 1 1 auto;\n\n  text-align: center;\n  color: #555;\n  clear: left;\n}\n\n.color-picker .hex-text .box input {\n  -webkit-flex: 1 1 auto;\n  -ms-flex: 1 1 auto;\n\n  flex: 1 1 auto;\n  padding: 1px;\n  border: #a9a9a9 solid 1px;\n}\n\n.color-picker .hex-alpha .box div:first-child,\n.color-picker .hex-alpha .box input:first-child {\n  flex-grow: 3;\n  margin-right: 8px;\n}\n\n.color-picker .hsla-text,\n.color-picker .rgba-text,\n.color-picker .value-text {\n  width: 100%;\n  padding: 4px 8px;\n\n  font-size: 11px;\n}\n\n.color-picker .hsla-text .box,\n.color-picker .rgba-text .box {\n  padding: 0 24px 8px 8px;\n}\n\n.color-picker .value-text .box {\n  padding: 0 8px 8px;\n}\n\n.color-picker .hsla-text .box div,\n.color-picker .rgba-text .box div,\n.color-picker .value-text .box div {\n  -webkit-flex: 1 1 auto;\n  -ms-flex: 1 1 auto;\n\n  flex: 1 1 auto;\n  margin-right: 8px;\n\n  text-align: center;\n  color: #555;\n}\n\n.color-picker .hsla-text .box div:last-child,\n.color-picker .rgba-text .box div:last-child,\n.color-picker .value-text .box div:last-child {\n  margin-right: 0;\n}\n\n.color-picker .hsla-text .box input,\n.color-picker .rgba-text .box input,\n.color-picker .value-text .box input {\n  float: left;\n\n  -webkit-flex: 1;\n  -ms-flex: 1;\n\n  flex: 1;\n  padding: 1px;\n  margin: 0 8px 0 0;\n  border: #a9a9a9 solid 1px;\n}\n\n.color-picker .hsla-text .box input:last-child,\n.color-picker .rgba-text .box input:last-child,\n.color-picker .value-text .box input:last-child {\n  margin-right: 0;\n}\n\n.color-picker .hue-alpha {\n  align-items: center;\n  margin-bottom: 3px;\n}\n\n.color-picker .hue {\n  direction: ltr;\n\n  width: 100%;\n  height: 16px;\n  margin-bottom: 16px;\n  border: none;\n\n  cursor: pointer;\n  background-size: 100% 100%;\n  background-image: url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAJYAAAAQCAYAAAD06IYnAAAABmJLR0QA/wD/AP+gvaeTAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAB3RJTUUH4AIWDwkUFWbCCAAAAFxJREFUaN7t0kEKg0AQAME2x83/n2qu5qCgD1iDhCoYdpnbQC9bbY1qVO/jvc6k3ad91s7/7F1/csgPrujuQ17BDYSFsBAWwgJhISyEBcJCWAgLhIWwEBYIi2f7Ar/1TCgFH2X9AAAAAElFTkSuQmCC');\n}\n\n.color-picker .value {\n  direction: rtl;\n\n  width: 100%;\n  height: 16px;\n  margin-bottom: 16px;\n  border: none;\n\n  cursor: pointer;\n  background-size: 100% 100%;\n  background-image: url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAJYAAAAQCAYAAAD06IYnAAACTklEQVR42u3SYUcrABhA4U2SkmRJMmWSJklKJiWZZpKUJJskKUmaTFImKZOUzMySpGRmliRNJilJSpKSJEtmSpIpmWmSdO736/6D+x7OP3gUCoWCv1cqlSQlJZGcnExKSgqpqamkpaWRnp5ORkYGmZmZqFQqsrKyyM7OJicnh9zcXNRqNXl5eeTn56PRaCgoKKCwsJCioiK0Wi3FxcWUlJRQWlpKWVkZ5eXlVFRUUFlZiU6no6qqiurqampqaqitraWurg69Xk99fT0GgwGj0UhDQwONjY00NTXR3NxMS0sLra2ttLW10d7ejslkwmw209HRQWdnJ11dXXR3d9PT00Nvby99fX309/czMDDA4OAgFouFoaEhrFYrw8PDjIyMMDo6ytjYGDabjfHxcSYmJpicnGRqagq73c709DQzMzPMzs4yNzfH/Pw8DocDp9OJy+XC7XazsLDA4uIiS0tLLC8vs7KywurqKmtra3g8HrxeLz6fD7/fz/r6OhsbG2xubrK1tcX29jaBQICdnR2CwSC7u7vs7e2xv7/PwcEBh4eHHB0dcXx8zMnJCaenp5ydnXF+fs7FxQWXl5dcXV1xfX3Nzc0Nt7e33N3dEQqFuL+/5+HhgXA4TCQS4fHxkaenJ56fn3l5eeH19ZVoNMrb2xvv7+98fHwQi8WIx+N8fn6SSCT4+vri+/ubn58ffn9/+VcKgSWwBJbAElgCS2AJLIElsASWwBJYAktgCSyBJbAElsASWAJLYAksgSWwBJbAElgCS2AJLIElsP4/WH8AmJ5Z6jHS4h8AAAAASUVORK5CYII=');\n}\n\n.color-picker .alpha {\n  direction: ltr;\n\n  width: 100%;\n  height: 16px;\n  border: none;\n\n  cursor: pointer;\n  background-size: 100% 100%;\n  background-image: url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAJYAAAAQCAYAAAD06IYnAAAABmJLR0QA/wD/AP+gvaeTAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAB3RJTUUH4AIWDwYQlZMa3gAAAWVJREFUaN7tmEGO6jAQRCsOArHgBpyAJYGjcGocxAm4A2IHpmoWE0eBH+ezmFlNvU06shJ3W6VEelWMUQAIIF9f6qZpimsA1LYtS2uF51/u27YVAFZVRUkEoGHdPV/sIcbIEIIkUdI/9Xa7neyv61+SWFUVAVCSct00TWn2fv6u3+Ecfd3tXzy/0+nEUu+SPjo/kqzrmiQpScN6v98XewfA8/lMkiLJ2WxGSUopcT6fM6U0NX9/frfbjev1WtfrlZfLhYfDQQHG/AIOlnGwjINlHCxjHCzjYJm/TJWdCwquJXseFFzGwDNNeiKMOJTO8xQdDQaeB29+K9efeLaBo9J7vdvtJj1RjFFjfiv7qv95tjx/7leSQgh93e1ffMeIp6O+YQjho/N791t1XVOSSI7N//K+4/GoxWLBx+PB5/Op5XLJ+/3OlJJWqxU3m83ovv5iGf8KjYNlHCxjHCzjYBkHy5gf5gusvQU7U37jTAAAAABJRU5ErkJggg==');\n}\n\n.color-picker .type-policy {\n  position: absolute;\n  top: 218px;\n  right: 12px;\n\n  width: 16px;\n  height: 24px;\n\n  background-size: 8px 16px;\n  background-image: url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABIAAAAgCAYAAAAffCjxAAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAACewAAAnsB01CO3AAAABl0RVh0U29mdHdhcmUAd3d3Lmlua3NjYXBlLm9yZ5vuPBoAAAIASURBVEiJ7ZY9axRRFIafsxMStrLQJpAgpBFhi+C9w1YSo00I6RZ/g9vZpBf/QOr4GyRgkSKNSrAadsZqQGwCkuAWyRZJsySwvhZ7N/vhzrgbLH3Ld8597jlzz50zJokyxXH8DqDVar0qi6v8BbItqSGpEcfxdlmsFWXkvX8AfAVWg3UKPEnT9GKujMzsAFgZsVaCN1VTQd77XUnrgE1kv+6935268WRpzrnHZvYRWC7YvC3pRZZl3wozqtVqiyH9IgjAspkd1Gq1xUJQtVrdB9ZKIAOthdg/Qc65LUk7wNIMoCVJO865rYFhkqjX6/d7vV4GPJwBMqofURS5JEk6FYBer/eeYb/Mo9WwFnPOvQbeAvfuAAK4BN4sAJtAG/gJIElmNuiJyba3EGNmZiPeZuEVmVell/Y/6N+CzDn3AXhEOOo7Hv/3BeAz8IzQkMPnJbuPx1wC+yYJ7/0nYIP5S/0FHKdp+rwCEEXRS/rf5Hl1Gtb2M0iSpCOpCZzPATmX1EySpHMLAsiy7MjMDoHrGSDXZnaYZdnRwBh7J91utwmczAA6CbG3GgPleX4jqUH/a1CktqRGnuc3hSCAMB32gKspkCtgb3KCQMmkjeP4WNJThrNNZval1WptTIsv7JtQ4tmIdRa8qSoEpWl6YWZNoAN0zKxZNPehpLSBZv2t+Q0CJ9lLnARQLAAAAABJRU5ErkJggg==');\n  background-repeat: no-repeat;\n  background-position: center;\n}\n\n.color-picker .type-policy .type-policy-arrow {\n  display: block;\n\n  width: 100%;\n  height: 50%;\n}\n\n.color-picker .selected-color {\n  position: absolute;\n  top: 16px;\n  left: 8px;\n\n  width: 40px;\n  height: 40px;\n  border: 1px solid #a9a9a9;\n  border-radius: 50%;\n}\n\n.color-picker .selected-color-background {\n  width: 40px;\n  height: 40px;\n  border-radius: 50%;\n\n  background-image: url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoCAYAAACM/rhtAAAAh0lEQVRYR+2W0QlAMQgD60zdfwOdqa8TmI/wQMr5K0I5bZLIzLOa2nt37VVVbd+dDx5obgCC3KBLwJ2ff4PnVidkf+ucIhw80HQaCLo3DMH3CRK3iFsmAWVl6hPNDwt8EvNE5q+YuEXcMgkonVM6SdyCoEvAnZ8v1Hjx817MilmxSUB5rdLJDycZgUAZUch/AAAAAElFTkSuQmCC');\n}\n\n.color-picker .saturation-lightness {\n  direction: ltr;\n\n  width: 100%;\n  height: 130px;\n  border: none;\n\n  cursor: pointer;\n  background-size: 100% 100%;\n  background-image: url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOYAAACCCAYAAABSD7T3AAAABmJLR0QA/wD/AP+gvaeTAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAB3RJTUUH4AIWDwksPWR6lgAAIABJREFUeNrtnVuT47gRrAHN+P//Or/61Y5wONZ7mZ1u3XAeLMjJZGZVgdKsfc5xR3S0RIIUW+CHzCpc2McYo7XGv3ex7UiZd57rjyzzv+v+33X/R/+3r/f7vR386Y+TvKNcf/wdhTLPcv9qU2wZd74uth0t1821jkIZLPcsI/6nWa4XvutquU0Z85mnx80S/ZzgpnLnOtHNt7/ofx1TKXcSNzN/7qbMQ3ju7rNQmMYYd/4s2j9aa+P+gGaMcZrb1M/tdrvf7/d2v99P9/t93O/3cbvdxu12G9frdVwul3E+n8c///nP+2+//Xb66aefxl//+tfx5z//2YK5Al2rgvf4UsbpdGrB52bAvArXpuzjmiqAVSGz5eDmGYXzhbAZmCrnmzddpUU+8Y1dAOYeXCtDUwVwV7YCGH6uAmyMcZ9l5vkUaBPGMUZ7/J5w/792/fvv9Xq93263dr/fTxPECeME8nK5jM/Pz/HTTz/dv337dvrll1/GP/7xj/G3v/1t/OUvfwkVswongjdOp9PzH3U3D3zmWGnZVXn4jCqs7wC2BKP4/8tAzkZsoWx6XrqeHZymvp4ABCBJhTQwKfDT8gzrZCIqi5AhiACjBfEB2rP8/X63MM7f6/V6v9/v7Xa7bYC83W7jcrlsVHIq5ffv30+//fbb+OWXX8ZPP/00/v73v4+ff/75JSvbeu+bL2WMMaFbAlpBNM85QX+ct6qoSqkPAwuQlBVKqGNFSUOAA3Bmu7gC5hNOd15nSwvAOUW7C4giUCV8Sgn5L9hNFIqTsp0GxI0ysioyjAjkY/tGJVEpz+fz+OWXX+7fv38//f777+Pbt2/j119/HT///PP49ddfx8fHRwrmTjV779EXu2px2xhjwtdJZQcAWQIPLPISsMJaSwiD8gzIKrwSyATE5j5nAbR5c1dBUwBlsEWW0h6LqiYsqFPAQxCyRZ3wOSARxmlXMX5k64pQfvv27f75+dk+Pj5OHx8f4/v37+Pbt2/jt99+G9++fRsfHx/jcrmUFLO31gYDWblxRIs/TqfT7ousxJsAxXA2Gc7TA9XdgfdoHbFsj76X2+1WArgI1ageGwA3qupqoHsmcbI6Fu93quggFa9d7LeDtgKfAFHBJ+NEByIkcJ5KervdTmhhGcgJJSZ5vn//fj+fz+18Pp8+Pz/H5+fnmGD+/vvv4/v37+Pj42N8fn6O2+1Ws7JjjP6wraMI5E4RZ8x2vV5TSwkquotV7/d7Tz6HFWsD/qNcdw0CQ3q/321c686TwDVIdbuy73zNldhSHb8I2klZznm+InBS4U6n0302aBFsLhHDAKJVJVglfI9jhvu53W53sLANYNxAiDA6MCeUHx8f9+v12i6XS7tcLqcZW57P5yeY8/fz83Ocz+fnsSmYUyknWEG85WBst9stzSLyMdfr9Qi08iY15UZ0LlDGLhR3o5zK2j7OPUTD0E+nU3tk7Xb/16NFbhloAMuY1zjLUOO3BKeIDe+Z8s3/J4gFo4TM5jPmuRg28foUKKVSwo16TgA5npywcWLHgYl/Pz8/73/605/ab7/91m63W7tcLie0sZj4mao5gTyfz88E0f1+j8EcYzwTPEG2cqjyfHNF0M8fuqEiaOVnRzZZQNh5fwQyHg/HDGfJo89Q1zb/quu5XC6773I2XKfTqd/v9+d3wuqWva/YTdUdEV3fhIv/Viyps6YE3x3r43K5bJQS66zaxVGFsvd+//j4aF+/fm3fv39vt9utff36tf3+++/tdrudvn37ZuNLBaaCMgUzC+rZRiFowxUuJI8YMqcCp9Opq5vagaYU6lGJA1XQqejchw6Cj0Gw5nYBrGw01A2O206n04BGouNNyTfp/FwElhUey6nXrIKw7QQWddxuN2ldL5fL839gSPF8ahu/JvBO48CPSuqMf8Vp9/P53L58+dLu93s7n8/tfr8/39/v9/b5+TkhPJ3P56mQ436/j+/fv+/iSgbzer0+AZx/5+88bv6OMda6S5z6kd21fYC9dxv7cIJJ2d9AOS30fPMzyHiTM8B4DF6XUlYHp4KQW3W+1t77MNB1vGHxWq7Xa7vf78+y5/N5A+H1et29xuP5dbYtyaRu4AksbPq6936fjRzXRxBbPr/b+b18+fKljTHaBBBfn8/n0/1+H1++fBnn8zm0sB8fH5u4cr5GuBhMVk0EEn9RsctgVhM+ixlJtMA23R8B6yysAstBOgFXIKKCMIgToMqNEu2fYMH7ztc732dQKkCj1ytAZtY0Kx8pIr8GGJ+AT3V+2Hirhl++fBmXy2Wz73w+b17P8p+fn8/tUwGVleVkTyUb68DkfayWY4zxNRihU4EpLJPZVrK+u7J4/mgfKqeLW9X2REWlItL1diynbDDb3+jXgYjQqn0rrxWc+NkILP7F7xIbMvx7vV53x40xnlbWJF12ZSag/N0pW6t+ZzmOMzHjajKwDfond78zYTdfq18up97zr2q8v3IioBprRtBl0EZ9og5WBRGOdOHjIjXF7UotFbgOWnXzIJyzYvjG5IYgsmMOxHkz8OsMSrVNWeq5T8DaOcbEv1Od5rbs9aO7YvMet63EkF++fMExq+MRl4/L5bLZN/+ez+fnZ6KazuMqXSQVO5spJXflHAIzes/xJseckRJiDMog9d6VfRrqXMr6KpVV27jRwJacGovOAM1zMdQMnwK1AubK63kdCChvI1C7g0z9nf/D+Xze2Vj8H7Gx4P9duQlsYCrqyN8XqG3Hm/10Oj3jw/n+crlstuM+jPmmxT2dTuPz83Pzt2pn1XsEHX/bnPaVqVmh0xwOt0o6XLLAHePUU203wHfcrspCwmV3TryB5s0Mseeg97x/BwzCjBlbB+pRAPla0BVQuT6V6QHdBlj3d0KG147b+DqxQeUymDO43W4dQar+TIjwmAd0z8/h65vf0/yLv3Pb5XLpru/ydDo9s7ET0I+Pj6dKK9VUEIeKWQWPAOrJ8LKd4vE+t91Y3e7UFlWatg2VwJnb+HPmtvm/sfK59/OaWF3x/eP1UPHvA5DDYDpYXfb0drv1V2DkBkxtw/tEWVVlXWdC9pFYs5/jfh9dS/16vW7s6lTG+TfqsxSJHxkXXq/Xdr1eu4LsfD6P3vsT3N77DkL+zPm5jSdKL4zR3AxQd6rHkLkYlSowsrq7znzu6wSwdsMJOXmA5fBcjxtgMGBYHlr5zokhtsMCTgXLQOW4XC6dEyEMprL8mAQzXRgduix2yZzorxkYsDn3hB1VeMLGsXsVtgl2pW8S3svk0vw7R4hNaHvv4cACl5HFzwIH0Kc6zu4XjDPR/jpAVxWzO1Xk2DDb3vTcxeGU1iWZHkmIDWziWKvirCJ4Dravs6IJ/GG6cTqWdXDy+fArQDVVkLqkVjAoZIITdmmIqXwqa95N3+MGYoZQdRVNO53Y1xRkhO16vY7eu507Ca9lJnbGpxOemQhSw/AQsmmp5zU9BiU8G6wvX76M6/U6Pj4+do0Bz4CpgiknTUeDqwlKBmg3u4OVjrZ1A+rAcgaejWq6eJCvCYFDONSwOgHX4EQRw8lxbzDOdEK6gZ3Hk1b+8g2o1JFtKXyv/fEdTXuWjWXdAZiBp6ADeDrCFiim7B6ZFneeI7Gvm/PMkUDX67W7xI8b0D7/v8dA9qfN5oaCf74WZjH0mf1cmfY1Y0JUFmVrTWu8uzkNcLtEj7u5FXBTkfC6GOA5q8YMxO8KVvF6sAVGdcrUbsKODcQKkLMOMdmlxum642YrPm26AlhZW1YB1R+rrGswE8TaYAWeUMxdf+WjwSvZ2Ef3ytOyfn5+PpVPAaqOn43MtNBqvmjjxbjM4lZjZY4gqNMI5ktaW/sYKNwS+9lFQzGihmMCKPa7+Z0V6Eb0GRmobtpX8JljWu5FMLN5ja6hG9kwQgZqf5+1NH5UxzkFReCdWhJ8XdlGUkxO7HRlYRm4mVO43W7ter12TPJEw/rmEN3L5SKHIWZg9mz+pUoKOYq5bJTJdX2gme1UcxMZQFaEQIlHct32M+Y1BzGkGuzfiyAN9z+ugplZ1symCrDCYYkGxDTpI9RzBy0rHyeDUC1nWaeUaD9n4xkNyYMBDZtzZ3B++fJlY21XFDOcARJlabOyiS3uCpLI9jrZjCDkaVvcCCjwognKShWdzXZWlZMvVTgD8LpqlCLrqgbcB+qYwrgKYpT0ccCqbKyCValkEabn/FynogCrPKfqf51xJ7sGB2ZXcZmxoSOztjx300DZi7a0/2AIR0UlBag9SuDw6KcAzlaB7vHZvWpjK90dyrq6bKyDUZQbR0B05biLQkHIcSUmgIK+SwuqgHCnoio2RQU1yj+BnBy9pphVKLGyC7ZzFK1pxWK+E8IhVCWLN/uLtnUU4ayoYLoaANz8FdtaSvY4pV0BEW2ls61czqllBKpTyKgMAhrZ1cdc1RROtPmvWNkdcKZ7ZKxaWjiPLJMpp7OZKxA+rqG/oJLjxf0pnJlqLoDZo3gyU0mKGys2taKecj/d1C+rJSplBqlTyAqgR+D8KjKlmRL2gtUcAdCtsL+ijCNT1oqqqkH2OHEbG5sDFnUg5Aa+yLou2VU1ptj1S2ZQqv1ORZN9IWzRfgaRBxKoBE8UWyqlJFtrIc0AxNjSjed99CTY/XDfSzCz5M0IZoVEsWnPFNTsl8ooVC1TzbGgqFZNDSgVwKK+1sGDMKqxZCWGVMDysiEr1jVSQJUYwj5iHOlThdHt44SQg9CN+nl8D90NMIgAdgr46JqRiR9I8vRdFvbr17m/yxUMKjNLMiVUADwu2CWGhhi+F55TWM9M9cogzms1dnM4uOF/LAEYWdcqnM7yFmyq3IfwmOROd7Y1iFWtOjoY8To41mTV5IysgFFuRzsbWFGbNIIJCDv1dOo4lZG7jWBwRFtVTKuWyeCByJKOan8oZ3ep9XddNl0tDuaywLz9cXPYeDAA0SpkBO9sbVcTOVWldPv4uyzEkzxHtjvonHoSkFEWNoo1d8DhcQputd2ppNon4BzoAiJ1hBFQg0dVtdbGHHDQWushmNEQukLM2QO1G2Y8bgTXqFhcBJj7EjPgcPts8US8qPpPB/dXznOh5Z438tzH5ec6QgrOKrRRfKmysBmUDB+PhYabMlVPER+GCSITTzr7am2tArH3bgcEzPJm+cr5jJ4NnHNFDVrFXcI5Le9k5Jnw+bedbV+FfRzZIHaOOaOsLY0/7UGs58DjrGwKMIMFIGzOEW1/jGsdAtCN6hEAI4hBe9YXeRROBSVPAVPAqvIM5bx5hVKWAMP6zBRy3iescridVdFBinBxXDnG2GRY2XbCvp1lhvGtO9Bxu5h908XQu42lnSArMFdizMim8uwRCxPGnnOS8lwpnbOiDqTAjsrRN/PcoAScCbaACqVM40ylnjjTBs+bwWlAG23/UKbdkiwKWIQPGzWaczpoSlxPEj822cNWkpS7FyzsDrqpfgpG3jahw2vgbaSQAxuLWZYt7JzyNe8JoZpNAcvDFOdw0wqYT9AK1rZz/DdbSlLPp0ryIxgQJlK9AZlEq7IOXpohg9PIhrCng88JsOxiV4ZWAYfg4sikx/8ky2Z9l862uqwrfscIH8+ugTmVGyiddeVYUgEMn4GZzg14EwIsh9sx2cKKiWXReuOE5gzGOQgdlRKVVdlevqb279Xq0Qnsts2VDaBO0coezsruWtHApu6sKG4IBhN0aGU2kLrMKGRTN3HmbCDwKV14zvkMEDG4QfZVspVlaNU2mhc5TEZ3N1h/zqTheuLpW05ZWTGVjb3dbnNmxKZBnN8JqidaVLKAOyARNLS+MB54Z2+VaqoMLKroVBlngefnTPAcoHNWCSvlfA8CI0HEmBNBnBlXyMrzU7A7WVm94PPqQ2gmqKx+WDGsnvilmcSOBJqOK1nYyAIzuAyesq3UdSK3KfWcYKD95HmfYOU3qser2CtYEUA+FpfqdNvgPBZUBhDrGONRVlQsh8rLcaUCykHG0OOUwTlLBrsh5soEMGezi1E4HRVt1icp5wZEFXdibCkG8Y8vX75sbO4E0iom9z+hjSiOfy3DhpXItpVhE+UGQdvoWjtChmrGHf4YAzKgBNnGtuJxFCeGdhUAfQLLK8kBYAP6gvFJZajMG3Xkycy8KuC0q4Eyymwtwdxdv2M0mIBtK0LKnf640j00Auq4gUkdWGlhs22qJc6dZCsL19oxnlTJG4SYVRIGpD8TPFBuM6OElbS1pldid4mGAyN6ZIupbC5bXJN9fdpbThSxLUaI8IG1XIYBxW3Tjs6KQosKcxfxcQmdnwRGM10GnFcCy2XYunLMyAkdgk4mePiczsLygthcBut6goOqS7YVFXADLjaosB6s6ofcZWAZSIRYqSUkizYwttYab3vUOQ9w2HRxIIg8WwRVeE68xi4UtL3zRphxplzwuZrcqYCq1I3jPI5dnJIygEohMbPqVJSzrwzxBJTs5zN+ReUSgxikPQVF3JVBeNQxbHENrEMNvEdFZVV9lH9+ORGEsNZQpyTNc4C3AG7XF4ngzq+DrO2zbuaaOXgdaFcdkEotoSFBVX2qJ0C8OWZeG4KGlpghA0XfTOPCqV2qqwQ26QWfF2PMLhI2w1lVAa2aPsYd0za25MQRwgcZN6uQDCi+ZxiD4XEM2kZxOT41FnZnaRlcpZouzlRqqdbQVWopQoSB58RV50lBNrHi/AwXS5LrwDVlpY3Fc3ByiYGc52Trist6kOXdwInAQtJpp5QchyaquYOV7Su+fxVMaV3dc0RE2S6mUY0gLt2pMcYqrKIQ9w2l1gpQUMtQYcmmbt5DTNxdhnUCjQqtbK9SUSzvrC0mmhhE1e2FS2+oxypy/ZASutkmtjx3vcBC24PX65nbqkBCRhfjS9kIYPnee8cMagVOhI/3T1fAmdtAWZsCswTJCkQVNa0qWKSKPOpHAUhD9DrbVcyoYkwqhvh17vYAayXLQyKGYdxlUDFp494rBXRjYgO17DDYetNIUj/ezp6S0lnlpEwsWmJMkOwsKXeZKEAjIHn0EQJISaRBcO6UMINz7p/bEjjnw4ft+xmDvksxX4G2rIris7qaeKwAFMP2Oi7n4criuZwtpSUwpfLxSnORSrIqusc5ZFaXysqRWjiZ2DyAWEIL35tVSoQElFACjOeGGSE7AHEQgdo/LSvCOgGBvkxsmDbvlS3Fp5vhaB2TAGqRKrKKMrhLVpaGzEVjZ0OQxDhaCTA+QyRR1d15aQzrJntL3RibsipjG6jlgL4yqbS0sNYg1e84vhbBVrElK64CUcWYXDfKxhpIuxiVJZUxsbMy/uRBKTNRQ4kQ3LdRYLS0rJjRPlTPqY6gdJsEDc+aQXAn+HgsNUCbRuF0Oj0zwnA7bWDkbhO5Ens00qeQhS1laBMl5M/cAaxsLF8rKyql+Tf7ELLEGu/ixiimdCvo0TjfpjKwaggen4eh5v7LokLKbLuyvHhcZG8dhGrEDx7Hg93ZppJF7qBqO3iVveXEDQNInzeoe8Yq6ePaZBZ2JviM3W2UAGotekRCAGq4EkF1X3DOnR11yRsBL1tRa0PVcZiNFXZ2c34FskvomInQQ6lzpJoZbJxk43NwKJFBquJSsrByHydxKOnTxQASBmS3j+JMnsHSla3Ec6K9VWoJVn9zfjwOM7hqYAAqJQwE2a3nA48J2QGegRkpZNivSY+ys3EkKd4oJIwsvIHl3cWgLt5k4NH6OmtLWdpurOkwEMupYc7eMtDRhOcI2ui5JhVIzXzLyto/GAPuZoyo8wkoduVgJglCt7OhGbgID4Mq4si+63zUS1FuFFXFlqyaj2emHlLMcBqYu0FMuR28BbB7lOxRMSiCQXFhCKuwkhZ+pYDiGSgbsKKV8MiSRsuHSIWM9rklRiIlZZuqXjsQK8ooYJMgq3JKWVkhHbhsVxFUzthOWPkYijcbx54IKsSdT+uLr3crGKyoYgFiGR9iBk4kfloUX+JIlQRQqabmpgnhqtpQpb6RVQ1WH5DnrS4hEoGZqaerQ2dhFbz8XePxShmDbo70eISjoorO2vK8SJXI4SUmEU4zWKDzUDtWTYw7xXlbSTEj4FRg7zKnKoGRALv0Gs9Tgc1BpCywGZRQAtqVz2xrBcAMzEpfZwFSa2G5W0QBFjSMapWAEFa3HcGN7CxDzECyIkJ97qwrqWNTWVo876PPsjPkj2wvgroM5lLZKMETKVql/CvnWVFiFa/SzJUQwkoZsr67Y6vlSRV3/2tmNTOY3vnaxYwMuoPKqdzR1w7IqHymlPxaAThfU7Ko2ZXYj4AYJHL+kNdKwRQYESTRa5fsUZ/rVC1TMTyWVyYoqNtuzaHsMyv2tvoarxdfqwYgU1axFo/cnql1FGsqK+uAROV8BX4GU8WcZTATi2q7Qcyi0O0V+GhWBMNRUkn8H1SsWVE5By3Gi0ECqUeJoBfAtDa4amkdXG37AGP5Ggeb84p7UazpoKRzdFzeQ8HkoHGxprKy/Hpm5t12p47J6xTYDEz7uINEXSuxYXvFskYAc+ySxH9sf5ftKzU6IbwVBcUGg5e5FMCEXSErZR0wGayV19woM9guPjTqJdVTqR4uE4nJnLldWVkECCZLd2VLF+xtamex7IpiriSDUpvrpn9lrwGMCHyppMH+ps6LILsuFGUj1XEOXiqbqSHPUKnClpWV68kqtURVNDY4TNaocykoYeTU5ngGEQa/S1DnnE4AeXMcKjHPAmFVjCBENaeyLVNHfr3px8xUstJ94hIpfH4HKE/eDaArK6lSyVVFbdt1gxTIVk3pppVlFXi4pEhVBTObquohU85MLXn1iahvUkHJjSCMc01tLFveVVBx0DodM6jftCu7DOtIzYxrc0qp1JGP2ayYFz2Gb6HvMrO8cnGtV6Gjm3uImSfD2GpWK6uowbZGMxFKQCo1pOMtcMXFpRst+hXGoAomF3sSTBGgTglbBKWwsQ3tZqaYSp0Z1CimRDWFcCJUPYJ00BI5FkKYNoifuQxmN88SWVXWLMaUqqqgC0BmQJR6sk3u9NCf6jYLXxAfqsYEgVLAhRY2AtgtflZNFmFyhxdrLkAdWlk4D88M2ixHyepIdhMHrG/iR1ZGtq0MGpbDbRPYOXeSY1M6Ny4ZstvGSktK+XbFPATj2D371saPEsAMXhXrsZ0km/XStkhhMyBfsa6uXFZe2VCe+YMr1+GKgwrQyNYq1VRrB+EizAow6NsdNKcyVEkYeM73ys6q4kAHp6BiFklTkIrVC5oYV7uzwOGCz4UJ0Stq2lWMJy4wtb+RetL6tZFicnJmBw5UjCvXXMZVJX2MQkbf+XN5EWd78Vz8/JEsMZTBiKNzsm1inLRUQ74H4NidaqI68j5sAFgxcRveC7ieLJXfQYxjZZ2CsiWFewZXJmBIlZ1tdtrX4hSuateKso/RZOtOKW2nmq1oTzeK6dRWAWu2NRVb4hq0SXm1GvtugHrbr5IXqmSktg5CuDE2MSlPwsY5kNE2Wp3AqiZbWVLAxiBF+2iBZbuNj6MB6rsMLC7FyasaYDyo7KkoPyEtw3pEMXfPvxAJi2jAQQgjrz0rLIZSWZlIoNhwd5xK4AR9mYNjWAaLrnuImJeBVN9zBORObVvbr+mTTfFSEJLSRnHo7hEJoIi8MFqjxmvgmF5URZz4zLFgZZ8Ctu2X7ggVccKm9gVxIsOHqxXgNMKnFWZYnf1dBnOhayXq17QwFlWW09eNKyVJFmXqaONGA5aCegMbJ3UUkGY1ic3nKWgjq8qfVYGQG1gRt6rs62a6HiqqUOqdesK5NmX4nGofJoiE1d0dF9lVVkvT1/kEEaaCoYOwFpcVcoLM+7669PxC9rWqktH0sWUYld0VCpuBZ/stVRcGgy9WX2+U1Qthi9SzAqSxzZsy+OiFzBYnySGV6Gku44rD8BCOZBV3BvD5+AKRHNwMEsB6EzHnJpkTAeiUlEGkcECeB6GDZTp5YEJTlvdrknxYjTllMkfNtXwDjM7uVjK5JXUUn43rrqpK2jytaxHW0M5G8DC8rtHMYs7KSgduVQMGTYFqFvVS6rkD3sDJ46afdYFwoq11AOKCBLhvwoUgc8IGANycR6knZrdJPdsuxnyjfd3FovTlRMdEdtOl5CMV5EHsXQBis7TOwvIDZaGj2Vnpbh7cpK63VwYEMLwqbjzyl699sawFFkF1yqjUU31HfC6sW1ZFVFuXVXVgz9keEaw0ys1lWfm+azQAQSWA+hKYVfsZjPncAcUB9oIayy/UZXRNckDGji77GsWbvBo6tPrWPqOyVkBUq+INeqpzNdYs/u0ifh5qmpqIW+33JVSUcwY70KL4U9lYdU6ljtSls7lmfi9g3YzeQfVkaGFaV3ODCnaD2N8wsEDFklE3RzM3ZghdYkWHsszq70FIecnKkVkt8ezMzRq9bkGuKojRLBVSod3Y1yPqKgYW7JRQTPVyy5xIYLjOgxgT52RKJUY1dOrIiRd4futQx/A5AcSmEjz0vFWrkLzvbWAu9HOWbGgxFk1VNTpnBKk6TgwisI/HcxYXP1uAWO72ULFlBTq+aSu2VTUs6hrxM2CF+hEor1VIA9ZmFUaab1lSSgZsVs4sxzHlVLoJHr9H4DhONTkI1XC0/wiY2NoWAG5RlnHFnq6oLccpQddMuJ/O17JVA5OHLi0BqCztq7Y1++ucCd98qLI8MIHBV/cKjxQTme3hFBS3MyCqnDsuym2o80HjvFFTtrURmNaGJsmVahImjTsUXKtQZTAVs7Mvv8/+fzUrZAXcLJ6M4koe6XP0b6SmWWNDzyUpQ8bl+LtWx4tuqZ36cRYV3yuVxPNwvIiqiQCSmu7srgTzR6nkyhpCarXwFy1vGd5iP2cY06lFr5Njhhg1Y6+NB28ftbK83s8rf7kLJbKwDFPbLg25a0AdZJEiqr5phixKMDlRUtcssq1hriLqGoH+zeNgVm9OemjsETV8JdF0NHnkIFxWY1OB4Yrp7rtWJ7NgAAAPXklEQVQ3oNs5nplyVf8u2FoLu1JrHveaZWQjqAkshtFa2gzsSG3Zpkbvg3HafF9slPPlldjFlK80Gysm8Mr4MPhneNWENPGjAIpmilTPATdTRTXlCBYHYAQuPwA36xIpWtGN4q3Y2MhiGsUpuSSnlEJRD8PorC7CFYVw+F51qThgabxsTxWzCGY0ZSsb3lfqAy0OPNjNy8xiQQKsHYFQ2HBZVvVbBuq3m1oWKajqaonsM6uZUr6CjXWNZ0l5E3h3jURma6kP3MJIiy1Lm+kahQq41N2iZja5sjtlLYNZHZrH6qUGm4vMbDp6Rw2CFmvuyFkrBcCyMtFqBaECmsHoK9BZ2LA/lJcRqSaDqnaWbrZdGaz3DLgIvBln4woGztbyJGqslwxkhhHrTjTYFXCtOoKS8uLdofVdAbOylGU6nlYpXWZts4nXBq6WxJitMNokHUJnbnJplQm+aGpY2a5GMV2QD1hRubBPFKdumf5OHkLHz0F9luE5kjBjRa0nFE5CUGqHw32MmjZ6xkgINVnSnZ1VZStK2qKlRaLlQgK7uTq7JFXJwM+3SOEKyhZNI+tJ0I5qMYy9k2qJD7dVWdqKXa0CKNR0Ccjg+B2IYu2fcBZJZkMFgM11r0X92wilghFGgzVnexlqB7xL9mS29SiYUVY2nXOZjNBRsyDsQPRWW5hrZ4XcdC4HVWRbjgJr4sFofK5SzjQ7rhI1UebdPdEbj6sqIvTZQZ5va08rABsAW0UxeWytAk7A2KJ9ZpxzCioB24XFtYAeXYxr6anSqhLgppEqWbGwLunTgrV+IjWlL29ljaAl4EQMGsErp4apeZiquwRXLXAqOCeru32mmydc6oWTSWpFAGdzeTB8RTHVMEtlM90CbbQCYhPjq3egYr1FGdYIQjiuDGZ5zZ/AzobKGOyLxti6c4Rwtv2anyWlLICnlLhxJRXt6A5ebDBWFNONbxWZ2d02mnu4S9YECpeppV1zSWRBWxHYzVIv1CXSouwqqX3jBBBDZdYQbpTQW4ZQlS8r5kH4suSRmg2++3JN10x1PaAmEkmtYlEdeGpJEM6kOuCqCR22oSujj5IV2HdT0zj5prLKTjXFAPjdQlyq7xIBxAQP5yMczG4VxAKw0n6ilZ2QBce2pLulkuxxqnoIzFfgqyqjil9S1VNwBrFmeyeops8yOjZUybZdfS8CuaTIJumzs5tODaNtLpFDQ/PcJGweLhmeL1nB0KqiUDScsiUVD89Di3HtrKtSULw3RLiygZD+7sF8JTObgYsrGvDNUFRGl1iy0Ll1YkUc2aJYMog920I8qW6YDCg1Mqk0JHJFKXkbgbRreI+qpYNOZHrVcDUba7pjsphSJNtK6upgRNAVoOS0mugBeN4bIZgHhuPZ/s1ENaX6KsVr+YNrh1Nb7ipR0PE5zbNRegCbrHRUw6Yf07dLBJl1f8KB9as2V1nNqAsl62LBBhehwalerkHmB1JFIEZKSEusdl5JQj1nJlHXSCF342gJ9CYGrXelknJIXqVP8sD+qtplCR3XH2qfKq0ygMp+KnVkKxNlZ8m2YkIlVMiCnXUwl7qznBKSvQz3m3Pt6oQbXO5b5FixCh/fHxUQW/AEcK6zCNqKQnL9sywqmKuwvqSYzT/aPVNNpVyhvRW21aqciCsjdWvBwILUvh5VyCzbWoC1pJjJ680CWsl+udKB6T5RwG1mlohnlpbg47iz5U9ha0FGtmRLFYBtO99y97Ap0z+ZDTAog6kSLZsMHg/IFkkgp6CpvU2U0cYVSdnmkjwBdOmXbxTWNWzuIbipMioVxEckZEoahSOiy2M3K0jcC1LhVDwaqG0ZvkcWqCnrG4GIxykrqlbWdw6LQyBaZR8HmLRIhQWsHswD42ZXVLNkf9l+FlW0HVQ2lwFsC/Z1FdzlQR0KaPfo+Fdfu+/dwVRICu1CGR7AEIiAhc+AZUF0kOBaPxmUqg4i64vQnU4nFDYJ9Nz+1fVXveH9qmr+kPILx8oKcRV/BFbxbE0JMT0kSD4w6L/lNY8ocsqagVdU3A3MjxhxcGuqzsPH4irpaow1q6OyrVjvp9Npc59E91LldboYVzJWdimWfAW2SNEKcDaX2FmBLLA/uKxlmhh613Is1URQApbKfttwxL02q6Onx5pQxSbPojAg+v5hAnN6LHVRDXIsvKtRjiS0qJUyZTAXVbAK82ElFJWaQdVoqUC1Unt7BVaTQudM6SuqexjQJN4+0icaxv/utbKv83ETbT8H8gjcOKxOJmbUa6OOVXht3dFY6rHv9XoNzFLceEA1o8+pKm0LAHPHZ2rYKjFq0hfZFixsqHJgD3eD5n+U0kb1mFjXkn2lvMSSOsNE/CdIAKF0Sytq6urOHUN5gwg4GZosgbmggM5ucra2qrS2Ig1cbiBBcxYzgzUDNLCvL8GbZXNp6ORy3LmS+Kk83zRIAK6A1ioKa2I9NapIuiUFdfC9766PFZUtqUr6KbWk+zZU1a/ZrIXEztrjTOfz7hwKziCeXIaraHtbZIMz+2pGgazCmw4qWAFvEdhodYp0Xq0pV7G1YWYWbO4qhGq42+Z8BYtrLWvluNPpZAeaFFS1vubPgbgxsqcpnAaszBovKaFoDQ8BGtjfUOl4NAG2nmQV04feJgumvX2fsrQEWZghL0JnVdYkn3DOZIeRN86RqPWCmsvGVqEMRnwxQAxwS8EMYo3IzmY2+BCcLp4MKiuyuhImamlbZFcNoNl7tp+RHd18ZjQIRKyXdFRhN98/hyKqwXWNo7O1wiaXoHN108REZZWEq6grnIfjzeg8jdRf1XEL4kkXa5bBjKxoKaljBjeHlVxQ4GaycpW4lDOAKtnTxHAtOfzOtZwHAM7sqVXkV6yu6kap1nHkXKqWF/4XHqjenNKqBjpR3l1ch3Ejg1+EsgdQhsdG0B4FM9sWAVWpuAyiwTPleZxt9VyZVS2qXfReWqTAilpr9ApoWTjxymit7NwV4JTriZyOA9B0k7HFfULourmKYHVnRQvqGL5HMHdqFcR2qWpmcK6eTwx2dipWrviDilr+fKWq3OWRWdHKwA4eu8wjchbeRzFilqjjZN3ufCpfkJ0/scVpnYk6L0PI77lxdWCZ87WiWm7B/AGquQSnujGKsB8CJmiJq8q1pKIVWyqOiTK66r18BN8r74/AE71fdC3yPS2MxdOpnE1tlVxD9JmVOoggN+r4PjAXVFPa3Eg5jVJGFVUGNolH20GVrUB7BOySWq6WqYQdWR92pcFMYMwckbSgCKCqD67DiiWu1g8MQC9ByfcFqW1L+jL714qNCuznoSxt0da2gtWN1G8F0BK0NN0nuimelUF9dIdAfjO44UT3CjQLoUeLHJFTO3gmpRuIIOvwBQCbqNeo3qtZ9iF6xVK13GRlo4zqimq+CGdTiR1uRY8oqgE02hZBa79kZXPMquxRHKla2saZWN4mRqZUj0vLCKhkjKnqOQHNuSZVJoKvAqS1wpEquvWDC1B2ypwrCPsRMEPVTODMLJMDv6qeKXwi2JYV5Sq4qKyvgGsHCLiuj2jR59V8gMqSJ2FJZRXEHVRHj3sFPrct6OpqlW1GpatQdt0GvwfM6n63InsGVFhJGaBqgqqIV6IsXllZgySPq4R3bnt3wi5cv+cN2yqQLW1T95KYVsWWtKk4cB9W53WQQflQYR6Wl4HaJZjvVE0D5yvq+RKgZCs5qdBEP5sD94cAvQLlSgNaSMAtHx88BuNQ41zdFsX30zKbcs0MLD/ihkpQzl0wiTqKLTfbKmCmyYICnK0IbaieC4CG9iSyLQ7cIMGQwau6TKoq60Apl3WN40LZpca1CKKK9VQyyIEn8w0F8F6CL2h8o3ixGwC7s7EWzCOqmcApYxYD4jsAzVS0sl2t98pA7vrKophCVSonbYpgH6mvSn24pTBV4sdtV3BtMq5k82y+IADvUJ0uAlkCVTxIaPm+UNu/qkV4F1TzHXCGrXIAqItBKypqK99VtAOVs64O4ObX7pHLVCpYHcRmwvLR7TvYAKBBN58LGVzDuFz+hQbWgncQyCZAk+VbsPSouf93261iZgmfCpwRbAvqmSqriU2PwhjaoOyYqtIegVXViTsmyta6bGySpY3gyRrpIyAeaWDDxtpsXwKyalMDKNP7YBXMqEskUsi2uC8FNAPxAKTVfT1o6VzM0E0jF+1rWcUuHvdyg7vgoFplX8HpvHpMCOMRUPHzZkInsqlFKNX/EIO52E0SxSzOwob2VmRLW5D1XIU0rbgM1AzWgyC7fe8G7xUAK/taEBat7luqtyP7EmsaJQOj5F+mrnZfCuYCfBUAWwShyd6pMY/vAHG1UqOYpbI/gy5T0CMKm+UO3gFuC85dgfDVeguPDfITrIBLsLrcgdh3CFgFZjaKJ4Iv3F8ANEqvuxR1tVKOgLoCa1jxboBAkj6v7j/icFbA7f4rfRnQDLRViG13i0vqBQrYVqBbADZT0ZpiHoSzvQpopKIFS3sE1HfBWlHXd0H7LnArqvougMtljHBgZnh3Eoz/BKjLML4Z2Aq0+hEJr9jaVUBbvNzCIUiroC7AWmmFw4o5AK3MtB5VypZMSFgs05JyGVwlwBqsEGAAa2ZU1CjUexXGsE4rKriilBvFzOKKo3AuAroE6QFQU3u8YpNXwS5k+1TZt5UrwouN4KiUEw+k3ZWDp1RXHNRqXb21Ts39945yZSg3VnZFNQ9CF3XeZyr5DgBXKiwCMa2MxeTDYXgP1Fsf9QNKZc0k81RJk3r6EQ3rCmBVyLL75EjZ1pIVDHoFtiOAHoB0BdTVylqBsKKKS+AeBXJVLY+CXASuGvO/Auq7GuEjDfGKg1oKa1z/dmmi9I9SUGNhl0AtfulHAawoYrnSkmNXAVuGEhrEVXvUF+A5Ct2PqNOjDetyna4CmeUolmeXLN4Aq7C5Sj10Q7yjgl+t6CNxSRHmI5X+CpwreYB3Qfdqna4q21KdBuc4GoZsn49ZOOiVinwHqK9WzjvgeweEh2AU5+vtxZ9Cd9Wqkh49V18E5oj6vVyn0RStAyGIO5edXRKd5B0VGVXq2yr3xYp+5Ut+C4QJ4P1N339pQMjRejj4vb/Dcr6rQc3O/0rjmtZpeYCBiCHfCemRbNhbK/pNUPc3wfKy5f2D7OlL3/uPhve/oU4T0F8f+VNM2vyoiv0jK+KHQfdHq+0bncz4oz73/+Y6LbKw1o/5B7eOf1Rl/0du9B9tn/9bvrf/j+v0h6ttn2tp/r/4819y4/zv5391uvzzfwDifz6phT1MPgAAAABJRU5ErkJggg==');\n}\n\n.color-picker .cp-add-color-button-class {\n  position: absolute;\n\n  display: inline;\n  padding: 0;\n  margin: 3px -3px;\n  border: 0;\n\n  cursor: pointer;\n  background: transparent;\n}\n\n.color-picker .cp-add-color-button-class:hover {\n  text-decoration: underline;\n}\n\n.color-picker .cp-add-color-button-class:disabled {\n  cursor: not-allowed;\n  color: #999;\n}\n\n.color-picker .cp-add-color-button-class:disabled:hover {\n  text-decoration: none;\n}\n\n.color-picker .cp-remove-color-button-class {\n  position: absolute;\n  top: -5px;\n  right: -5px;\n\n  display: block;\n  width: 10px;\n  height: 10px;\n  border-radius: 50%;\n\n  cursor: pointer;\n  text-align: center;\n  background: #fff;\n\n  box-shadow: 1px 1px 5px #333;\n}\n\n.color-picker .cp-remove-color-button-class::before {\n  content: 'x';\n\n  position: relative;\n  bottom: 3.5px;\n\n  display: inline-block;\n\n  font-size: 10px;\n}\n"]
                }] }
    ];
    /** @nocollapse */
    ColorPickerComponent.ctorParameters = function () { return [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"] },
        { type: ColorPickerService }
    ]; };
    ColorPickerComponent.propDecorators = {
        dialogElement: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"], args: ['dialogPopup',] }],
        hueSlider: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"], args: ['hueSlider',] }],
        alphaSlider: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"], args: ['alphaSlider',] }],
        handleEsc: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"], args: ['document:keyup.esc', ['$event'],] }],
        handleEnter: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"], args: ['document:keyup.enter', ['$event'],] }]
    };
    return ColorPickerComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var ColorPickerDirective = /** @class */ (function () {
    function ColorPickerDirective(injector, cfr, appRef, vcRef, elRef, _service) {
        this.injector = injector;
        this.cfr = cfr;
        this.appRef = appRef;
        this.vcRef = vcRef;
        this.elRef = elRef;
        this._service = _service;
        this.dialogCreated = false;
        this.ignoreChanges = false;
        this.cpWidth = '230px';
        this.cpHeight = 'auto';
        this.cpToggle = false;
        this.cpDisabled = false;
        this.cpIgnoredElements = [];
        this.cpFallbackColor = '';
        this.cpColorMode = 'color';
        this.cpOutputFormat = 'auto';
        this.cpAlphaChannel = 'enabled';
        this.cpDisableInput = false;
        this.cpDialogDisplay = 'popup';
        this.cpSaveClickOutside = true;
        this.cpUseRootViewContainer = false;
        this.cpPosition = 'right';
        this.cpPositionOffset = '0%';
        this.cpPositionRelativeToArrow = false;
        this.cpOKButton = false;
        this.cpOKButtonText = 'OK';
        this.cpOKButtonClass = 'cp-ok-button-class';
        this.cpCancelButton = false;
        this.cpCancelButtonText = 'Cancel';
        this.cpCancelButtonClass = 'cp-cancel-button-class';
        this.cpPresetLabel = 'Preset colors';
        this.cpMaxPresetColorsLength = 6;
        this.cpPresetEmptyMessage = 'No colors added';
        this.cpPresetEmptyMessageClass = 'preset-empty-message';
        this.cpAddColorButton = false;
        this.cpAddColorButtonText = 'Add color';
        this.cpAddColorButtonClass = 'cp-add-color-button-class';
        this.cpRemoveColorButtonClass = 'cp-remove-color-button-class';
        this.cpInputChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"](true);
        this.cpToggleChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"](true);
        this.cpSliderChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"](true);
        this.cpSliderDragEnd = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"](true);
        this.cpSliderDragStart = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"](true);
        this.colorPickerOpen = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"](true);
        this.colorPickerClose = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"](true);
        this.colorPickerCancel = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"](true);
        this.colorPickerSelect = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"](true);
        this.colorPickerChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"](false);
        this.cpPresetColorsChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"](true);
    }
    /**
     * @return {?}
     */
    ColorPickerDirective.prototype.handleClick = /**
     * @return {?}
     */
    function () {
        this.inputFocus();
    };
    /**
     * @return {?}
     */
    ColorPickerDirective.prototype.handleFocus = /**
     * @return {?}
     */
    function () {
        this.inputFocus();
    };
    /**
     * @param {?} event
     * @return {?}
     */
    ColorPickerDirective.prototype.handleInput = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        this.inputChange(event);
    };
    /**
     * @return {?}
     */
    ColorPickerDirective.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        if (this.cmpRef !== undefined) {
            this.cmpRef.destroy();
        }
    };
    /**
     * @param {?} changes
     * @return {?}
     */
    ColorPickerDirective.prototype.ngOnChanges = /**
     * @param {?} changes
     * @return {?}
     */
    function (changes) {
        if (changes.cpToggle && !this.cpDisabled) {
            if (changes.cpToggle.currentValue) {
                this.openDialog();
            }
            else if (!changes.cpToggle.currentValue) {
                this.closeDialog();
            }
        }
        if (changes.colorPicker) {
            if (this.dialog && !this.ignoreChanges) {
                if (this.cpDialogDisplay === 'inline') {
                    this.dialog.setInitialColor(changes.colorPicker.currentValue);
                }
                this.dialog.setColorFromString(changes.colorPicker.currentValue, false);
                if (this.cpUseRootViewContainer && this.cpDialogDisplay !== 'inline') {
                    this.cmpRef.changeDetectorRef.detectChanges();
                }
            }
            this.ignoreChanges = false;
        }
        if (changes.cpPresetLabel || changes.cpPresetColors) {
            if (this.dialog) {
                this.dialog.setPresetConfig(this.cpPresetLabel, this.cpPresetColors);
            }
        }
    };
    /**
     * @return {?}
     */
    ColorPickerDirective.prototype.openDialog = /**
     * @return {?}
     */
    function () {
        if (!this.dialogCreated) {
            /** @type {?} */
            var vcRef = this.vcRef;
            this.dialogCreated = true;
            if (this.cpUseRootViewContainer && this.cpDialogDisplay !== 'inline') {
                /** @type {?} */
                var classOfRootComponent = this.appRef.componentTypes[0];
                /** @type {?} */
                var appInstance = this.injector.get(classOfRootComponent);
                vcRef = appInstance.vcRef || appInstance.viewContainerRef || this.vcRef;
                if (vcRef === this.vcRef) {
                    console.warn('You are using cpUseRootViewContainer, ' +
                        'but the root component is not exposing viewContainerRef!' +
                        'Please expose it by adding \'public vcRef: ViewContainerRef\' to the constructor.');
                }
            }
            /** @type {?} */
            var compFactory = this.cfr.resolveComponentFactory(ColorPickerComponent);
            /** @type {?} */
            var injector = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ReflectiveInjector"].fromResolvedProviders([], vcRef.parentInjector);
            this.cmpRef = vcRef.createComponent(compFactory, 0, injector, []);
            this.cmpRef.instance.setupDialog(this, this.elRef, this.colorPicker, this.cpWidth, this.cpHeight, this.cpDialogDisplay, this.cpFallbackColor, this.cpColorMode, this.cpAlphaChannel, this.cpOutputFormat, this.cpDisableInput, this.cpIgnoredElements, this.cpSaveClickOutside, this.cpUseRootViewContainer, this.cpPosition, this.cpPositionOffset, this.cpPositionRelativeToArrow, this.cpPresetLabel, this.cpPresetColors, this.cpMaxPresetColorsLength, this.cpPresetEmptyMessage, this.cpPresetEmptyMessageClass, this.cpOKButton, this.cpOKButtonClass, this.cpOKButtonText, this.cpCancelButton, this.cpCancelButtonClass, this.cpCancelButtonText, this.cpAddColorButton, this.cpAddColorButtonClass, this.cpAddColorButtonText, this.cpRemoveColorButtonClass);
            this.dialog = this.cmpRef.instance;
            if (this.vcRef !== vcRef) {
                this.cmpRef.changeDetectorRef.detectChanges();
            }
        }
        else if (this.dialog) {
            this.dialog.openDialog(this.colorPicker);
        }
    };
    /**
     * @return {?}
     */
    ColorPickerDirective.prototype.closeDialog = /**
     * @return {?}
     */
    function () {
        if (this.dialog && this.cpDialogDisplay === 'popup') {
            this.dialog.closeDialog();
        }
    };
    /**
     * @param {?} state
     * @return {?}
     */
    ColorPickerDirective.prototype.stateChanged = /**
     * @param {?} state
     * @return {?}
     */
    function (state) {
        this.cpToggleChange.emit(state);
        if (state) {
            this.colorPickerOpen.emit(this.colorPicker);
        }
        else {
            this.colorPickerClose.emit(this.colorPicker);
        }
    };
    /**
     * @param {?} value
     * @param {?=} ignore
     * @return {?}
     */
    ColorPickerDirective.prototype.colorChanged = /**
     * @param {?} value
     * @param {?=} ignore
     * @return {?}
     */
    function (value, ignore) {
        if (ignore === void 0) { ignore = true; }
        this.ignoreChanges = ignore;
        this.colorPickerChange.emit(value);
    };
    /**
     * @return {?}
     */
    ColorPickerDirective.prototype.colorCanceled = /**
     * @return {?}
     */
    function () {
        this.colorPickerCancel.emit();
    };
    /**
     * @param {?} value
     * @return {?}
     */
    ColorPickerDirective.prototype.colorSelected = /**
     * @param {?} value
     * @return {?}
     */
    function (value) {
        this.colorPickerSelect.emit(value);
    };
    /**
     * @return {?}
     */
    ColorPickerDirective.prototype.inputFocus = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var element = this.elRef.nativeElement;
        /** @type {?} */
        var ignored = this.cpIgnoredElements.filter(function (item) { return item === element; });
        if (!this.cpDisabled && !ignored.length) {
            if (typeof document !== 'undefined' && element === document.activeElement) {
                this.openDialog();
            }
            else if (!this.dialog || !this.dialog.show) {
                this.openDialog();
            }
            else {
                this.closeDialog();
            }
        }
    };
    /**
     * @param {?} event
     * @return {?}
     */
    ColorPickerDirective.prototype.inputChange = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        if (this.dialog) {
            this.dialog.setColorFromString(event.target.value, true);
        }
        else {
            this.colorPicker = event.target.value;
            this.colorPickerChange.emit(this.colorPicker);
        }
    };
    /**
     * @param {?} event
     * @return {?}
     */
    ColorPickerDirective.prototype.inputChanged = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        this.cpInputChange.emit(event);
    };
    /**
     * @param {?} event
     * @return {?}
     */
    ColorPickerDirective.prototype.sliderChanged = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        this.cpSliderChange.emit(event);
    };
    /**
     * @param {?} event
     * @return {?}
     */
    ColorPickerDirective.prototype.sliderDragEnd = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        this.cpSliderDragEnd.emit(event);
    };
    /**
     * @param {?} event
     * @return {?}
     */
    ColorPickerDirective.prototype.sliderDragStart = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        this.cpSliderDragStart.emit(event);
    };
    /**
     * @param {?} value
     * @return {?}
     */
    ColorPickerDirective.prototype.presetColorsChanged = /**
     * @param {?} value
     * @return {?}
     */
    function (value) {
        this.cpPresetColorsChange.emit(value);
    };
    ColorPickerDirective.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"], args: [{
                    selector: '[colorPicker]',
                    exportAs: 'ngxColorPicker'
                },] }
    ];
    /** @nocollapse */
    ColorPickerDirective.ctorParameters = function () { return [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ComponentFactoryResolver"] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ApplicationRef"] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"] },
        { type: ColorPickerService }
    ]; };
    ColorPickerDirective.propDecorators = {
        colorPicker: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        cpWidth: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        cpHeight: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        cpToggle: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        cpDisabled: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        cpIgnoredElements: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        cpFallbackColor: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        cpColorMode: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        cpOutputFormat: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        cpAlphaChannel: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        cpDisableInput: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        cpDialogDisplay: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        cpSaveClickOutside: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        cpUseRootViewContainer: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        cpPosition: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        cpPositionOffset: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        cpPositionRelativeToArrow: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        cpOKButton: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        cpOKButtonText: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        cpOKButtonClass: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        cpCancelButton: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        cpCancelButtonText: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        cpCancelButtonClass: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        cpPresetLabel: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        cpPresetColors: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        cpMaxPresetColorsLength: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        cpPresetEmptyMessage: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        cpPresetEmptyMessageClass: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        cpAddColorButton: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        cpAddColorButtonText: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        cpAddColorButtonClass: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        cpRemoveColorButtonClass: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        cpInputChange: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
        cpToggleChange: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
        cpSliderChange: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
        cpSliderDragEnd: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
        cpSliderDragStart: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
        colorPickerOpen: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
        colorPickerClose: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
        colorPickerCancel: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
        colorPickerSelect: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
        colorPickerChange: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
        cpPresetColorsChange: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
        handleClick: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"], args: ['click',] }],
        handleFocus: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"], args: ['focus',] }],
        handleInput: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"], args: ['input', ['$event'],] }]
    };
    return ColorPickerDirective;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var ColorPickerModule = /** @class */ (function () {
    function ColorPickerModule() {
    }
    ColorPickerModule.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"], args: [{
                    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]],
                    exports: [ColorPickerDirective],
                    providers: [ColorPickerService],
                    declarations: [ColorPickerComponent, ColorPickerDirective, TextDirective, SliderDirective],
                    entryComponents: [ColorPickerComponent]
                },] }
    ];
    return ColorPickerModule;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */


//# sourceMappingURL=ngx-color-picker.es5.js.map


/***/ }),

/***/ "./src/app/gestor/acabamento/acabamento.service.ts":
/*!*********************************************************!*\
  !*** ./src/app/gestor/acabamento/acabamento.service.ts ***!
  \*********************************************************/
/*! exports provided: AcabamentoService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AcabamentoService", function() { return AcabamentoService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../config */ "./src/app/config.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var httpOptions = {
    headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({ 'Content-Type': 'application/json' })
};
var AcabamentoService = /** @class */ (function () {
    function AcabamentoService(httpClient) {
        this.httpClient = httpClient;
        //private url = 'https://sic20181106055047.azurewebsites.net/api/Acabamento';
        this.url = _config__WEBPACK_IMPORTED_MODULE_4__["Config"].sicGcUrl + 'Acabamento';
    }
    AcabamentoService.prototype.getAcabamentos = function () {
        return this.httpClient.get(this.url).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(this.extractData));
    };
    AcabamentoService.prototype.extractData = function (res) {
        return res || {};
    };
    AcabamentoService.prototype.handleError = function (err) {
        if (err.error instanceof ErrorEvent) {
            console.error('An error occurred: ', err.error.message);
        }
        else {
            console.error("Web Api returned code " + err.status + ", " + (" Response body was: " + err.error));
        }
        return rxjs__WEBPACK_IMPORTED_MODULE_2__["Observable"].throw(err);
    };
    AcabamentoService.prototype.addAcabamento = function (acabamento) {
        return this.httpClient.post(this.url, acabamento, httpOptions);
    };
    AcabamentoService.prototype.updateAcabamento = function (id, acabamento) {
        return this.httpClient.put(this.url + '/' + id, acabamento, httpOptions);
    };
    AcabamentoService.prototype.deleteAcabamento = function (acabamento) {
        return this.httpClient.delete(this.url + '/' + acabamento.id, httpOptions);
    };
    AcabamentoService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], AcabamentoService);
    return AcabamentoService;
}());



/***/ }),

/***/ "./src/app/gestor/acabamento/acabamento.ts":
/*!*************************************************!*\
  !*** ./src/app/gestor/acabamento/acabamento.ts ***!
  \*************************************************/
/*! exports provided: Acabamento */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Acabamento", function() { return Acabamento; });
var Acabamento = /** @class */ (function () {
    function Acabamento() {
    }
    return Acabamento;
}());



/***/ }),

/***/ "./src/app/gestor/agregacao/agregacao.service.ts":
/*!*******************************************************!*\
  !*** ./src/app/gestor/agregacao/agregacao.service.ts ***!
  \*******************************************************/
/*! exports provided: AgregacaoService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AgregacaoService", function() { return AgregacaoService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../config */ "./src/app/config.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var httpOptions = {
    headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({ 'Content-Type': 'application/json' })
};
var AgregacaoService = /** @class */ (function () {
    function AgregacaoService(httpClient) {
        this.httpClient = httpClient;
        this.url = _config__WEBPACK_IMPORTED_MODULE_4__["Config"].sicGcUrl + 'produtoproduto/';
    }
    AgregacaoService.prototype.getAgregacoes = function () {
        return this.httpClient.get(this.url).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(this.extractData));
    };
    AgregacaoService.prototype.getAgregacaoId = function (idPai, idFilho) {
        return this.httpClient.get(this.url + idPai + "/" + idFilho).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(this.extractData));
    };
    AgregacaoService.prototype.getAgregacaoDePai = function (idPai) {
        return this.httpClient.get(this.url + idPai + "/" + "produtosFilho").pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(this.extractData));
    };
    AgregacaoService.prototype.extractData = function (res) {
        return res || {};
    };
    AgregacaoService.prototype.handleError = function (err) {
        if (err.error instanceof ErrorEvent) {
            console.error('An error occurred: ', err.error.message);
        }
        else {
            console.error("Web Api returned code " + err.status + ", " + (" Response body was: " + err.error));
        }
        return rxjs__WEBPACK_IMPORTED_MODULE_2__["Observable"].throw(err);
    };
    AgregacaoService.prototype.addagregacao = function (agregacao) {
        return this.httpClient.post(this.url, agregacao, httpOptions);
    };
    AgregacaoService.prototype.deleteAgregacao = function (idPai, idFilho) {
        return this.httpClient.delete(this.url + idPai + "/" + idFilho, httpOptions);
    };
    AgregacaoService.prototype.updateAgregacao = function (idPai, idFilho, agregacao) {
        return this.httpClient.put(this.url + "/" + idFilho, agregacao, httpOptions);
    };
    AgregacaoService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], AgregacaoService);
    return AgregacaoService;
}());



/***/ }),

/***/ "./src/app/gestor/agregacao/agregacao.ts":
/*!***********************************************!*\
  !*** ./src/app/gestor/agregacao/agregacao.ts ***!
  \***********************************************/
/*! exports provided: Agregacao */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Agregacao", function() { return Agregacao; });
var Agregacao = /** @class */ (function () {
    function Agregacao(produtoIdPai, produtoIdFilho, confirmation) {
        this.produtoIdPai = produtoIdPai;
        this.produtoIdFilho = produtoIdFilho;
        this.confirmation = confirmation;
    }
    return Agregacao;
}());



/***/ }),

/***/ "./src/app/gestor/agregacao/restricao.service.ts":
/*!*******************************************************!*\
  !*** ./src/app/gestor/agregacao/restricao.service.ts ***!
  \*******************************************************/
/*! exports provided: RestricaoService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RestricaoService", function() { return RestricaoService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../config */ "./src/app/config.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var httpOptions = {
    headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({ 'Content-Type': 'application/json' })
};
var RestricaoService = /** @class */ (function () {
    function RestricaoService(httpClient) {
        this.httpClient = httpClient;
        this.url = _config__WEBPACK_IMPORTED_MODULE_4__["Config"].sicGcUrl + 'restricao/';
    }
    RestricaoService.prototype.getRestricoes = function () {
        return this.httpClient.get(this.url).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(this.extractData));
    };
    RestricaoService.prototype.getRestricaoId = function (idPai, idFilho) {
        return this.httpClient.get(this.url + idPai + "/" + idFilho).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(this.extractData));
    };
    RestricaoService.prototype.extractData = function (res) {
        return res || {};
    };
    RestricaoService.prototype.handleError = function (err) {
        if (err.error instanceof ErrorEvent) {
            console.error('An error occurred: ', err.error.message);
        }
        else {
            console.error("Web Api returned code " + err.status + ", " + (" Response body was: " + err.error));
        }
        return rxjs__WEBPACK_IMPORTED_MODULE_2__["Observable"].throw(err);
    };
    RestricaoService.prototype.addRestricao = function (Restricao) {
        return this.httpClient.post(this.url, Restricao, httpOptions);
    };
    RestricaoService.prototype.deleteRestricao = function (id) {
        return this.httpClient.delete(this.url + id, httpOptions);
    };
    RestricaoService.prototype.deleteRestricoesDeProduto = function (id) {
        return this.httpClient.delete(this.url + id + "/restricoes", httpOptions);
    };
    RestricaoService.prototype.updateRestricao = function (id, Restricao) {
        return this.httpClient.put(this.url + id, Restricao, httpOptions);
    };
    RestricaoService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], RestricaoService);
    return RestricaoService;
}());



/***/ }),

/***/ "./src/app/gestor/agregacao/restricao.ts":
/*!***********************************************!*\
  !*** ./src/app/gestor/agregacao/restricao.ts ***!
  \***********************************************/
/*! exports provided: Restricao */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Restricao", function() { return Restricao; });
var Restricao = /** @class */ (function () {
    function Restricao(tipoRes, params, produtoIdPai, produtoIdFilho) {
        this.tipoRes = tipoRes;
        this.params = params;
        this.produtoProdutoIdPai = produtoIdPai;
        this.produtoProdutoIdFilho = produtoIdFilho;
    }
    return Restricao;
}());



/***/ }),

/***/ "./src/app/gestor/agregacao/tipo-restricao.ts":
/*!****************************************************!*\
  !*** ./src/app/gestor/agregacao/tipo-restricao.ts ***!
  \****************************************************/
/*! exports provided: TipoRestricao */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TipoRestricao", function() { return TipoRestricao; });
var TipoRestricao;
(function (TipoRestricao) {
    TipoRestricao[TipoRestricao["Volume"] = 0] = "Volume";
    TipoRestricao[TipoRestricao["EqualProducts"] = 1] = "EqualProducts";
})(TipoRestricao || (TipoRestricao = {}));


/***/ }),

/***/ "./src/app/gestor/catalogo/catalogo.service.ts":
/*!*****************************************************!*\
  !*** ./src/app/gestor/catalogo/catalogo.service.ts ***!
  \*****************************************************/
/*! exports provided: CatalogoService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CatalogoService", function() { return CatalogoService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../config */ "./src/app/config.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var httpOptions = {
    headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({ 'Content-Type': 'application/json' })
};
var CatalogoService = /** @class */ (function () {
    function CatalogoService(httpClient) {
        this.httpClient = httpClient;
        this.url = _config__WEBPACK_IMPORTED_MODULE_4__["Config"].sicGcUrl + 'catalogo/';
    }
    /*getCatalogos(): Observable<any> {
      return this.httpClient.get(this.url).pipe(
        map(this.extractData));
    
    }*/
    CatalogoService.prototype.getCatalogos = function () {
        return this.httpClient.get(this.url).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError));
        ;
    };
    CatalogoService.prototype.extractData = function (res) {
        return res || {};
    };
    CatalogoService.prototype.handleError = function (err) {
        if (err.error instanceof ErrorEvent) {
            console.error('An error occurred: ', err.error.message);
        }
        else {
            console.error("Web Api returned code " + err.status + ", " + (" Response body was: " + err.error));
        }
        return rxjs__WEBPACK_IMPORTED_MODULE_2__["Observable"].throw(err);
    };
    CatalogoService.prototype.getProdutos = function (id) {
        return this.httpClient.get(this.url + id + '/produtos').pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError));
        ;
    };
    CatalogoService.prototype.addCatalogo = function (catalogo) {
        return this.httpClient.post(this.url, catalogo, httpOptions);
    };
    CatalogoService.prototype.updateCatalogo = function (id, catalogo) {
        return this.httpClient.put(this.url + id, catalogo, httpOptions);
    };
    CatalogoService.prototype.deleteCatalogo = function (id) {
        return this.httpClient.delete(this.url + id, httpOptions);
    };
    CatalogoService.prototype.deleteProduto = function (idC, idP) {
        return this.httpClient.delete(this.url + idC + '/produto=' + idP);
    };
    CatalogoService.prototype.adicionarProduto = function (idC, idP) {
        return this.httpClient.put(this.url + idC + '/produto=' + idP, httpOptions);
    };
    CatalogoService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], CatalogoService);
    return CatalogoService;
}());



/***/ }),

/***/ "./src/app/gestor/catalogo/catalogo.ts":
/*!*********************************************!*\
  !*** ./src/app/gestor/catalogo/catalogo.ts ***!
  \*********************************************/
/*! exports provided: Catalogo */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Catalogo", function() { return Catalogo; });
var Catalogo = /** @class */ (function () {
    function Catalogo(nome) {
        this.nome = nome;
    }
    return Catalogo;
}());



/***/ }),

/***/ "./src/app/gestor/categoria/categoria.service.ts":
/*!*******************************************************!*\
  !*** ./src/app/gestor/categoria/categoria.service.ts ***!
  \*******************************************************/
/*! exports provided: CategoriaService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CategoriaService", function() { return CategoriaService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../config */ "./src/app/config.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var httpOptions = {
    headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({ 'Content-Type': 'application/json' })
};
var CategoriaService = /** @class */ (function () {
    function CategoriaService(httpClient) {
        this.httpClient = httpClient;
        this.url = _config__WEBPACK_IMPORTED_MODULE_4__["Config"].sicGcUrl + 'categoria/';
    }
    CategoriaService.prototype.getCategorias = function () {
        return this.httpClient.get(this.url).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(this.extractData));
    };
    CategoriaService.prototype.extractData = function (res) {
        return res || {};
    };
    CategoriaService.prototype.handleError = function (err) {
        if (err.error instanceof ErrorEvent) {
            console.error('An error occurred: ', err.error.message);
        }
        else {
            console.error("Web Api returned code " + err.status + ", " + (" Response body was: " + err.error));
        }
        return rxjs__WEBPACK_IMPORTED_MODULE_2__["Observable"].throw(err);
    };
    CategoriaService.prototype.addCategoria = function (categoria) {
        return this.httpClient.post(this.url, categoria, httpOptions);
    };
    CategoriaService.prototype.updateCategoria = function (id, categoria) {
        return this.httpClient.put(this.url + id, categoria, httpOptions);
    };
    CategoriaService.prototype.deleteCategoria = function (id) {
        return this.httpClient.delete(this.url + id, httpOptions);
    };
    CategoriaService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], CategoriaService);
    return CategoriaService;
}());



/***/ }),

/***/ "./src/app/gestor/categoria/categoria.ts":
/*!***********************************************!*\
  !*** ./src/app/gestor/categoria/categoria.ts ***!
  \***********************************************/
/*! exports provided: Categoria */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Categoria", function() { return Categoria; });
var Categoria = /** @class */ (function () {
    function Categoria() {
    }
    return Categoria;
}());



/***/ }),

/***/ "./src/app/gestor/colecao/colecao.service.ts":
/*!***************************************************!*\
  !*** ./src/app/gestor/colecao/colecao.service.ts ***!
  \***************************************************/
/*! exports provided: ColecaoService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ColecaoService", function() { return ColecaoService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../config */ "./src/app/config.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var httpOptions = {
    headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({ 'Content-Type': 'application/json' })
};
var ColecaoService = /** @class */ (function () {
    function ColecaoService(httpClient) {
        this.httpClient = httpClient;
        this.url = _config__WEBPACK_IMPORTED_MODULE_4__["Config"].sicGcUrl + 'colecao';
    }
    ColecaoService.prototype.getColecoes = function () {
        return this.httpClient.get(this.url).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError));
        ;
    };
    ColecaoService.prototype.extractData = function (res) {
        return res || {};
    };
    ColecaoService.prototype.handleError = function (err) {
        if (err.error instanceof ErrorEvent) {
            console.error('An error occurred: ', err.error.message);
        }
        else {
            console.error("Web Api returned code " + err.status + ", " + (" Response body was: " + err.error));
        }
        return rxjs__WEBPACK_IMPORTED_MODULE_2__["Observable"].throw(err);
    };
    ColecaoService.prototype.getProdutos = function (id) {
        return this.httpClient.get(this.url + id + 'produto').pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(this.extractData));
    };
    ColecaoService.prototype.addColecao = function (colecao) {
        return this.httpClient.post(this.url, colecao, httpOptions);
    };
    ColecaoService.prototype.updateColecao = function (id, colecao) {
        alert("Foi editada uma colecao");
        return this.httpClient.put(this.url + id, colecao, httpOptions);
    };
    ColecaoService.prototype.deleteColecao = function (id) {
        return this.httpClient.delete(this.url + id, httpOptions);
    };
    ColecaoService.prototype.deleteProduto = function (idC, idP) {
        return this.httpClient.delete(this.url + idC + '/produto=' + idP);
    };
    ColecaoService.prototype.adicionarProduto = function (idC, idP) {
        return this.httpClient.put(this.url + idC + '/produto=' + idP, httpOptions);
    };
    ColecaoService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], ColecaoService);
    return ColecaoService;
}());



/***/ }),

/***/ "./src/app/gestor/colecao/colecao.ts":
/*!*******************************************!*\
  !*** ./src/app/gestor/colecao/colecao.ts ***!
  \*******************************************/
/*! exports provided: Colecao */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Colecao", function() { return Colecao; });
var Colecao = /** @class */ (function () {
    function Colecao(nome) {
        this.nome = nome;
    }
    return Colecao;
}());



/***/ }),

/***/ "./src/app/gestor/entregas/entrega.service.ts":
/*!****************************************************!*\
  !*** ./src/app/gestor/entregas/entrega.service.ts ***!
  \****************************************************/
/*! exports provided: EntregaService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EntregaService", function() { return EntregaService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../config */ "./src/app/config.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var httpOptions = {
    headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({ 'Content-Type': 'application/json' })
};
var EntregaService = /** @class */ (function () {
    function EntregaService(httpClient) {
        this.httpClient = httpClient;
        this.entregasUrl = _config__WEBPACK_IMPORTED_MODULE_4__["Config"].sicEntregasUrl;
        this.encomendasUrl = _config__WEBPACK_IMPORTED_MODULE_4__["Config"].sicEncomendasUrl;
    }
    EntregaService.prototype.getItinerarios = function () {
        return this.httpClient.get(this.encomendasUrl + 'itinerario').pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError));
    };
    EntregaService.prototype.getCidades = function () {
        return this.httpClient.get(this.entregasUrl + 'listar_cidades');
    };
    EntregaService.prototype.extractData = function (res) {
        return res || {};
    };
    EntregaService.prototype.handleError = function (err) {
        if (err.error instanceof ErrorEvent) {
            console.error('An error occurred: ', err.error.message);
        }
        else {
            console.error("Web Api returned code " + err.status + ", " + (" Response body was: " + err.error));
        }
        return rxjs__WEBPACK_IMPORTED_MODULE_2__["Observable"].throw(err);
    };
    EntregaService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], EntregaService);
    return EntregaService;
}());



/***/ }),

/***/ "./src/app/gestor/historico/historico-material.service.ts":
/*!****************************************************************!*\
  !*** ./src/app/gestor/historico/historico-material.service.ts ***!
  \****************************************************************/
/*! exports provided: HistoricoMaterialService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HistoricoMaterialService", function() { return HistoricoMaterialService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../config */ "./src/app/config.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var httpOptions = {
    headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({ 'Content-Type': 'application/json' })
};
var HistoricoMaterialService = /** @class */ (function () {
    function HistoricoMaterialService(httpClient) {
        this.httpClient = httpClient;
        this.url = _config__WEBPACK_IMPORTED_MODULE_3__["Config"].sicGcUrl + 'HistoricoPrecosMaterial';
    }
    HistoricoMaterialService.prototype.getHistoricoPrecosMaterial = function () {
        return this.httpClient.get(this.url);
    };
    HistoricoMaterialService.prototype.extractData = function (res) {
        return res || {};
    };
    HistoricoMaterialService.prototype.handleError = function (err) {
        if (err.error instanceof ErrorEvent) {
            console.error('An error occurred: ', err.error.message);
        }
        else {
            console.error("Web Api returned code " + err.status + ", " + (" Response body was: " + err.error));
        }
        return rxjs__WEBPACK_IMPORTED_MODULE_2__["Observable"].throw(err);
    };
    HistoricoMaterialService.prototype.addHistoricoPrecosMaterial = function (historicoPrecosMaterial) {
        return this.httpClient.post(this.url, historicoPrecosMaterial, httpOptions);
    };
    HistoricoMaterialService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], HistoricoMaterialService);
    return HistoricoMaterialService;
}());



/***/ }),

/***/ "./src/app/gestor/produto/dimensao.ts":
/*!********************************************!*\
  !*** ./src/app/gestor/produto/dimensao.ts ***!
  \********************************************/
/*! exports provided: Dimensao */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Dimensao", function() { return Dimensao; });
var Dimensao = /** @class */ (function () {
    function Dimensao(listaValores, tipo, unidade) {
        this.listaValores = listaValores;
        this.tipo = tipo;
        this.unidade = unidade;
    }
    return Dimensao;
}());



/***/ }),

/***/ "./src/app/gestor/produto/produto-material.service.ts":
/*!************************************************************!*\
  !*** ./src/app/gestor/produto/produto-material.service.ts ***!
  \************************************************************/
/*! exports provided: ProdutoMaterialService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProdutoMaterialService", function() { return ProdutoMaterialService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../config */ "./src/app/config.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var httpOptions = {
    headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({ 'Content-Type': 'application/json' })
};
var ProdutoMaterialService = /** @class */ (function () {
    function ProdutoMaterialService(httpClient) {
        this.httpClient = httpClient;
        this.url = _config__WEBPACK_IMPORTED_MODULE_4__["Config"].sicGcUrl + 'ProdutoMaterial/';
    }
    ProdutoMaterialService.prototype.getProdutosMateriais = function () {
        return this.httpClient.get(this.url).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(this.extractData));
    };
    ProdutoMaterialService.prototype.getProdutoMaterialId = function (idProduto, idMaterial) {
        return this.httpClient.get(this.url + idProduto + "/" + idMaterial).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(this.extractData));
    };
    ProdutoMaterialService.prototype.getProdutoMaterialDeProduto = function (idProduto) {
        return this.httpClient.get(this.url + idProduto + "/" + "Materiais").pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(this.extractData));
    };
    ProdutoMaterialService.prototype.extractData = function (res) {
        return res || {};
    };
    ProdutoMaterialService.prototype.handleError = function (err) {
        if (err.error instanceof ErrorEvent) {
            console.error('An error occurred: ', err.error.message);
        }
        else {
            console.error("Web Api returned code " + err.status + ", " + (" Response body was: " + err.error));
        }
        return rxjs__WEBPACK_IMPORTED_MODULE_2__["Observable"].throw(err);
    };
    ProdutoMaterialService.prototype.addProdutoMaterial = function (produtoMaterial) {
        return this.httpClient.post(this.url, produtoMaterial, httpOptions);
    };
    ProdutoMaterialService.prototype.deleteProdutoMaterial = function (idProduto, idMaterial) {
        return this.httpClient.delete(this.url + idProduto + "/" + idMaterial, httpOptions);
    };
    ProdutoMaterialService.prototype.deleteProdutoMaterialDeProduto = function (idProduto) {
        return this.httpClient.delete(this.url + idProduto + "/" + "Materiais", httpOptions);
    };
    ProdutoMaterialService.prototype.updateProdutoMaterial = function (idProduto, idMaterial, produtoMaterial) {
        return this.httpClient.put(this.url + idProduto + "/" + idMaterial, produtoMaterial, httpOptions);
    };
    ProdutoMaterialService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], ProdutoMaterialService);
    return ProdutoMaterialService;
}());



/***/ }),

/***/ "./src/app/gestor/produto/produto-material.ts":
/*!****************************************************!*\
  !*** ./src/app/gestor/produto/produto-material.ts ***!
  \****************************************************/
/*! exports provided: ProdutoMaterial */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProdutoMaterial", function() { return ProdutoMaterial; });
var ProdutoMaterial = /** @class */ (function () {
    function ProdutoMaterial(produtoId, materialId) {
        this.produtoId = produtoId;
        this.materialId = materialId;
    }
    return ProdutoMaterial;
}());



/***/ }),

/***/ "./src/app/gestor/produto/produto.ts":
/*!*******************************************!*\
  !*** ./src/app/gestor/produto/produto.ts ***!
  \*******************************************/
/*! exports provided: Produto */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Produto", function() { return Produto; });
var Produto = /** @class */ (function () {
    function Produto(nome, categoria, altura, largura, profundidade, tipo) {
        this.nome = nome;
        this.categoria = categoria;
        this.altura = altura;
        this.largura = largura;
        this.profundidade = profundidade;
        this.tipo = tipo;
    }
    return Produto;
}());



/***/ }),

/***/ "./src/app/gestor/produto/tipo-dimensao.ts":
/*!*************************************************!*\
  !*** ./src/app/gestor/produto/tipo-dimensao.ts ***!
  \*************************************************/
/*! exports provided: TipoDimensao */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TipoDimensao", function() { return TipoDimensao; });
var TipoDimensao;
(function (TipoDimensao) {
    TipoDimensao[TipoDimensao["Discretos"] = 0] = "Discretos";
    TipoDimensao[TipoDimensao["Continuos"] = 1] = "Continuos";
})(TipoDimensao || (TipoDimensao = {}));


/***/ }),

/***/ "./src/app/material-component/consultar-historico/consultar-historico.component.css":
/*!******************************************************************************************!*\
  !*** ./src/app/material-component/consultar-historico/consultar-historico.component.css ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "table {\r\n    width: 100%;\r\n  }\r\n\r\n    #main{\r\n    display: table;\r\n    width: 100%;\r\n    height: 100vh;\r\n    text-align: center;\r\n}\r\n\r\n    .fof{\r\n\t  display: table-cell;\r\n\t  vertical-align: middle;\r\n}\r\n\r\n    .fof h1{\r\n\t  font-size: 50px;\r\n\t  display: inline-block;\r\n\t  padding-right: 12px;\r\n\t  -webkit-animation: type .5s alternate infinite;\r\n\t          animation: type .5s alternate infinite;\r\n}\r\n\r\n    @-webkit-keyframes type{\r\n\t  from{box-shadow: inset -3px 0px 0px #888;}\r\n\t  to{box-shadow: inset -3px 0px 0px transparent;}\r\n}\r\n\r\n    @keyframes type{\r\n\t  from{box-shadow: inset -3px 0px 0px #888;}\r\n\t  to{box-shadow: inset -3px 0px 0px transparent;}\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWF0ZXJpYWwtY29tcG9uZW50L2NvbnN1bHRhci1oaXN0b3JpY28vY29uc3VsdGFyLWhpc3Rvcmljby5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksWUFBWTtHQUNiOztJQUVDO0lBQ0EsZUFBZTtJQUNmLFlBQVk7SUFDWixjQUFjO0lBQ2QsbUJBQW1CO0NBQ3RCOztJQUVEO0dBQ0csb0JBQW9CO0dBQ3BCLHVCQUF1QjtDQUN6Qjs7SUFFRDtHQUNHLGdCQUFnQjtHQUNoQixzQkFBc0I7R0FDdEIsb0JBQW9CO0dBQ3BCLCtDQUF1QztXQUF2Qyx1Q0FBdUM7Q0FDekM7O0lBRUQ7R0FDRyxLQUFLLG9DQUFvQyxDQUFDO0dBQzFDLEdBQUcsMkNBQTJDLENBQUM7Q0FDakQ7O0lBSEQ7R0FDRyxLQUFLLG9DQUFvQyxDQUFDO0dBQzFDLEdBQUcsMkNBQTJDLENBQUM7Q0FDakQiLCJmaWxlIjoic3JjL2FwcC9tYXRlcmlhbC1jb21wb25lbnQvY29uc3VsdGFyLWhpc3Rvcmljby9jb25zdWx0YXItaGlzdG9yaWNvLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJ0YWJsZSB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICB9XHJcblxyXG4gICAgI21haW57XHJcbiAgICBkaXNwbGF5OiB0YWJsZTtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiAxMDB2aDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5cclxuLmZvZntcclxuXHQgIGRpc3BsYXk6IHRhYmxlLWNlbGw7XHJcblx0ICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xyXG59XHJcblxyXG4uZm9mIGgxe1xyXG5cdCAgZm9udC1zaXplOiA1MHB4O1xyXG5cdCAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG5cdCAgcGFkZGluZy1yaWdodDogMTJweDtcclxuXHQgIGFuaW1hdGlvbjogdHlwZSAuNXMgYWx0ZXJuYXRlIGluZmluaXRlO1xyXG59XHJcblxyXG5Aa2V5ZnJhbWVzIHR5cGV7XHJcblx0ICBmcm9te2JveC1zaGFkb3c6IGluc2V0IC0zcHggMHB4IDBweCAjODg4O31cclxuXHQgIHRve2JveC1zaGFkb3c6IGluc2V0IC0zcHggMHB4IDBweCB0cmFuc3BhcmVudDt9XHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/material-component/consultar-historico/consultar-historico.component.html":
/*!*******************************************************************************************!*\
  !*** ./src/app/material-component/consultar-historico/consultar-historico.component.html ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"!flagServer\">\r\n  <div class=\"mat-elevation-z8\">\r\n    <table mat-table [dataSource]=\"dataSource\">\r\n\r\n      <!-- Nome Material -->\r\n      <ng-container matColumnDef=\"nomeMaterial\">\r\n        <th mat-header-cell *matHeaderCellDef> Nome do Material </th>\r\n        <td mat-cell *matCellDef=\"let element\"> {{element.nomeMaterial}} </td>\r\n      </ng-container>\r\n\r\n      <!-- Preço Material -->\r\n      <ng-container matColumnDef=\"preco\">\r\n        <th mat-header-cell *matHeaderCellDef> Alterações de Preços (€) </th>\r\n        <td mat-cell *matCellDef=\"let element\"> {{element.preco}} </td>\r\n      </ng-container>\r\n\r\n      <!-- Nome Acabamento -->\r\n      <ng-container matColumnDef=\"nomeAcabamento\">\r\n        <th mat-header-cell *matHeaderCellDef> Nome do Acabamento </th>\r\n        <td mat-cell *matCellDef=\"let element\"> {{element.nomeAcabamento}} </td>\r\n      </ng-container>\r\n\r\n      <!-- Preço Acabamento -->\r\n      <ng-container matColumnDef=\"precoAcabamento\">\r\n        <th mat-header-cell *matHeaderCellDef> Incremento de Preço (€) </th>\r\n        <td mat-cell *matCellDef=\"let element\"> {{element.precoAcabamento}} </td>\r\n      </ng-container>\r\n\r\n      <!-- Hora Alterado -->\r\n      <ng-container matColumnDef=\"horaAlterado\">\r\n        <th mat-header-cell *matHeaderCellDef> Hora da alteração </th>\r\n        <td mat-cell *matCellDef=\"let element\"> {{element.horaAlterado}} </td>\r\n      </ng-container>\r\n\r\n      <!-- Data Alterado -->\r\n      <ng-container matColumnDef=\"dataAlterado\">\r\n        <th mat-header-cell *matHeaderCellDef> Data da alteração </th>\r\n        <td mat-cell *matCellDef=\"let element\"> {{element.dataAlterado}} </td>\r\n      </ng-container>\r\n\r\n      <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\r\n      <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\"></tr>\r\n    </table>\r\n\r\n    <mat-paginator [pageSizeOptions]=\"[15,30]\" showFirstLastButtons></mat-paginator>\r\n  </div>\r\n</div>\r\n<div *ngIf=\"flagServer\">\r\n  <div id=\"main\">\r\n    <div class=\"fof\">\r\n      <h1>Não foi possível aceder ao servidor.</h1>\r\n    </div>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "./src/app/material-component/consultar-historico/consultar-historico.component.ts":
/*!*****************************************************************************************!*\
  !*** ./src/app/material-component/consultar-historico/consultar-historico.component.ts ***!
  \*****************************************************************************************/
/*! exports provided: ConsultarHistoricoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConsultarHistoricoComponent", function() { return ConsultarHistoricoComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _gestor_historico_historico_material_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../gestor/historico/historico-material.service */ "./src/app/gestor/historico/historico-material.service.ts");
/* harmony import */ var _gestor_material_material_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../gestor/material/material.service */ "./src/app/gestor/material/material.service.ts");
/* harmony import */ var _gestor_acabamento_acabamento_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../gestor/acabamento/acabamento.service */ "./src/app/gestor/acabamento/acabamento.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var ConsultarHistoricoComponent = /** @class */ (function () {
    function ConsultarHistoricoComponent(historicoMaterial, materialService, acabamentoService) {
        this.historicoMaterial = historicoMaterial;
        this.materialService = materialService;
        this.acabamentoService = acabamentoService;
        this.flagServer = false;
        this.displayedColumns = ['nomeMaterial', 'preco', 'nomeAcabamento', 'precoAcabamento', 'horaAlterado', 'dataAlterado'];
        this.dataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatTableDataSource"]();
        this.rows = [];
        this.historicoMateriaisList = [];
    }
    ConsultarHistoricoComponent.prototype.ngOnInit = function () {
        this.getMateriais();
        this.dataSource.paginator = this.paginator;
    };
    ConsultarHistoricoComponent.prototype.getHistoricoPrecosMaterial = function (listaMateriais, listaAcabamentos) {
        var _this = this;
        this.historicoMaterial.getHistoricoPrecosMaterial().subscribe(function (listaPrecosTodosMateriais) {
            //Ordena por id Material
            listaPrecosTodosMateriais.sort(function (a, b) {
                return a.materialId - b.materialId;
            });
            var linhaAux = null;
            listaPrecosTodosMateriais.forEach(function (linha) {
                var nomeMaterial = "[MATERIAL APAGADO]";
                var nomeAcabamento = "[ACABAMENTO APAGADO]";
                //Material foi removido da bd
                listaMateriais.find(function (m) { return m.id == linha.materialId; }) ? nomeMaterial = listaMateriais.find(function (m) { return m.id == linha.materialId; }).tipo : nomeMaterial = "[MATERIAL APAGADO]";
                //Acabamento foi removido da bd
                listaAcabamentos.find(function (a) { return a.id == linha.acabamentoId; }) ? nomeAcabamento = listaAcabamentos.find(function (a) { return a.id == linha.acabamentoId; }).tipo : nomeAcabamento = "[ACABAMENTO APAGADO]";
                var parts = linha.dataRegisto.toString().split('T');
                var data = parts[0];
                var time = parts[1];
                if (linhaAux != null) {
                    //Mesmo material que o anterior
                    if (linhaAux.materialId == linha.materialId) {
                        _this.rows.push({ nomeMaterial: "", preco: linha.precoBase, nomeAcabamento: nomeAcabamento, precoAcabamento: linha.incrementoPreco, horaAlterado: time, dataAlterado: data });
                    }
                    else {
                        //Outro Material
                        _this.rows.push({ nomeMaterial: nomeMaterial, preco: linha.precoBase, nomeAcabamento: nomeAcabamento, precoAcabamento: linha.incrementoPreco, horaAlterado: time, dataAlterado: data });
                    }
                }
                else {
                    // 1ª Linha
                    _this.rows.push({ nomeMaterial: nomeMaterial, preco: linha.precoBase, nomeAcabamento: nomeAcabamento, precoAcabamento: linha.incrementoPreco, horaAlterado: time, dataAlterado: data });
                }
                linhaAux = linha;
            });
            _this.dataSource.data = _this.rows;
        }, function (_) { _this.statusMessage = "Error: Service Unavailable"; });
    };
    // FUNCTIONS DE BDDAD
    ConsultarHistoricoComponent.prototype.getMateriais = function () {
        var _this = this;
        this.materialService.getMateriais().subscribe(function (listaMateriais) {
            _this.getAcabamentos(listaMateriais);
        }, function (_) {
            _this.flagServer = true;
            _this.statusMessage = "Error: Service Unavailable";
        });
    };
    ConsultarHistoricoComponent.prototype.getAcabamentos = function (listaMateriais) {
        var _this = this;
        this.acabamentoService.getAcabamentos().subscribe(function (listaAcabamentos) {
            _this.getHistoricoPrecosMaterial(listaMateriais, listaAcabamentos);
        });
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_1__["MatPaginator"]),
        __metadata("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatPaginator"])
    ], ConsultarHistoricoComponent.prototype, "paginator", void 0);
    ConsultarHistoricoComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-consultar-historico',
            template: __webpack_require__(/*! ./consultar-historico.component.html */ "./src/app/material-component/consultar-historico/consultar-historico.component.html"),
            styles: [__webpack_require__(/*! ./consultar-historico.component.css */ "./src/app/material-component/consultar-historico/consultar-historico.component.css")]
        }),
        __metadata("design:paramtypes", [_gestor_historico_historico_material_service__WEBPACK_IMPORTED_MODULE_2__["HistoricoMaterialService"],
            _gestor_material_material_service__WEBPACK_IMPORTED_MODULE_3__["MaterialService"],
            _gestor_acabamento_acabamento_service__WEBPACK_IMPORTED_MODULE_4__["AcabamentoService"]])
    ], ConsultarHistoricoComponent);
    return ConsultarHistoricoComponent;
}());



/***/ }),

/***/ "./src/app/material-component/entregas/entregas.component.css":
/*!********************************************************************!*\
  !*** ./src/app/material-component/entregas/entregas.component.css ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "table {\r\n  width: 100%;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWF0ZXJpYWwtY29tcG9uZW50L2VudHJlZ2FzL2VudHJlZ2FzLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxZQUFZO0NBQ2IiLCJmaWxlIjoic3JjL2FwcC9tYXRlcmlhbC1jb21wb25lbnQvZW50cmVnYXMvZW50cmVnYXMuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbInRhYmxlIHtcclxuICB3aWR0aDogMTAwJTtcclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/material-component/entregas/entregas.component.html":
/*!*********************************************************************!*\
  !*** ./src/app/material-component/entregas/entregas.component.html ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<table mat-table [dataSource]=\"itinerarios\" class=\"mat-elevation-z8\">\r\n\r\n  <ng-container matColumnDef=\"fabrica\">\r\n    <th mat-header-cell *matHeaderCellDef> FÃ¡brica </th>\r\n    <td mat-cell *matCellDef=\"let itinerario\"> {{itinerario.fabrica}} </td>\r\n  </ng-container>\r\n\r\n  <ng-container matColumnDef=\"itinerario\">\r\n    <th mat-header-cell *matHeaderCellDef> ItinerÃ¡rio </th>\r\n    <td mat-cell *matCellDef=\"let itinerario\"> {{itinerario.itinerario}} </td>\r\n  </ng-container>\r\n\r\n  <ng-container matColumnDef=\"custo\">\r\n    <th mat-header-cell *matHeaderCellDef> DistÃ¢ncia (Km)</th>\r\n    <td mat-cell *matCellDef=\"let itinerario\"> {{itinerario.custo}} </td>\r\n  </ng-container>\r\n\r\n  <ng-container matColumnDef=\"data\">\r\n    <th mat-header-cell *matHeaderCellDef> Data </th>\r\n    <td mat-cell *matCellDef=\"let itinerario\"> {{itinerario.data}} </td>\r\n  </ng-container>\r\n\r\n  <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\r\n  <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\"></tr>\r\n\r\n</table>"

/***/ }),

/***/ "./src/app/material-component/entregas/entregas.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/material-component/entregas/entregas.component.ts ***!
  \*******************************************************************/
/*! exports provided: EntregasComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EntregasComponent", function() { return EntregasComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _gestor_entregas_entrega_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../gestor/entregas/entrega.service */ "./src/app/gestor/entregas/entrega.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var EntregasComponent = /** @class */ (function () {
    function EntregasComponent(entregaService) {
        this.entregaService = entregaService;
        this.displayedColumns = ['fabrica', 'itinerario', 'custo', 'data'];
    }
    EntregasComponent.prototype.ngOnInit = function () {
        this.getItinerarios();
    };
    EntregasComponent.prototype.getItinerarios = function () {
        var _this = this;
        this.entregaService.getItinerarios()
            .subscribe(function (itinerarios) { return _this.itinerarios = itinerarios; });
    };
    EntregasComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-entregas',
            template: __webpack_require__(/*! ./entregas.component.html */ "./src/app/material-component/entregas/entregas.component.html"),
            styles: [__webpack_require__(/*! ./entregas.component.css */ "./src/app/material-component/entregas/entregas.component.css")]
        }),
        __metadata("design:paramtypes", [_gestor_entregas_entrega_service__WEBPACK_IMPORTED_MODULE_1__["EntregaService"]])
    ], EntregasComponent);
    return EntregasComponent;
}());



/***/ }),

/***/ "./src/app/material-component/gerir-acabamento/gerir-acabamento.component.css":
/*!************************************************************************************!*\
  !*** ./src/app/material-component/gerir-acabamento/gerir-acabamento.component.css ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".color-title {\r\n    text-align: center;\r\n    font-size: 20px;\r\n}\r\n\r\n.padding-left {\r\n    padding-left:1em\r\n}\r\n\r\n.padding-right {\r\n    padding-right:1em\r\n}\r\n\r\n.button-center {\r\n    text-align:center;\r\n}\r\n\r\n#main{\r\n    display: table;\r\n    width: 100%;\r\n    height: 100vh;\r\n    text-align: center;\r\n}\r\n\r\n.fof{\r\n\t  display: table-cell;\r\n\t  vertical-align: middle;\r\n}\r\n\r\n.fof h1{\r\n\t  font-size: 50px;\r\n\t  display: inline-block;\r\n\t  padding-right: 12px;\r\n\t  -webkit-animation: type .5s alternate infinite;\r\n\t          animation: type .5s alternate infinite;\r\n}\r\n\r\n@-webkit-keyframes type{\r\n\t  from{box-shadow: inset -3px 0px 0px #888;}\r\n\t  to{box-shadow: inset -3px 0px 0px transparent;}\r\n}\r\n\r\n@keyframes type{\r\n\t  from{box-shadow: inset -3px 0px 0px #888;}\r\n\t  to{box-shadow: inset -3px 0px 0px transparent;}\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWF0ZXJpYWwtY29tcG9uZW50L2dlcmlyLWFjYWJhbWVudG8vZ2VyaXItYWNhYmFtZW50by5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksbUJBQW1CO0lBQ25CLGdCQUFnQjtDQUNuQjs7QUFFRDtJQUNJLGdCQUFnQjtDQUNuQjs7QUFFRDtJQUNJLGlCQUFpQjtDQUNwQjs7QUFFRDtJQUNJLGtCQUFrQjtDQUNyQjs7QUFFQztJQUNFLGVBQWU7SUFDZixZQUFZO0lBQ1osY0FBYztJQUNkLG1CQUFtQjtDQUN0Qjs7QUFFRDtHQUNHLG9CQUFvQjtHQUNwQix1QkFBdUI7Q0FDekI7O0FBRUQ7R0FDRyxnQkFBZ0I7R0FDaEIsc0JBQXNCO0dBQ3RCLG9CQUFvQjtHQUNwQiwrQ0FBdUM7V0FBdkMsdUNBQXVDO0NBQ3pDOztBQUVEO0dBQ0csS0FBSyxvQ0FBb0MsQ0FBQztHQUMxQyxHQUFHLDJDQUEyQyxDQUFDO0NBQ2pEOztBQUhEO0dBQ0csS0FBSyxvQ0FBb0MsQ0FBQztHQUMxQyxHQUFHLDJDQUEyQyxDQUFDO0NBQ2pEIiwiZmlsZSI6InNyYy9hcHAvbWF0ZXJpYWwtY29tcG9uZW50L2dlcmlyLWFjYWJhbWVudG8vZ2VyaXItYWNhYmFtZW50by5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNvbG9yLXRpdGxlIHtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGZvbnQtc2l6ZTogMjBweDtcclxufVxyXG5cclxuLnBhZGRpbmctbGVmdCB7XHJcbiAgICBwYWRkaW5nLWxlZnQ6MWVtXHJcbn1cclxuXHJcbi5wYWRkaW5nLXJpZ2h0IHtcclxuICAgIHBhZGRpbmctcmlnaHQ6MWVtXHJcbn1cclxuXHJcbi5idXR0b24tY2VudGVyIHtcclxuICAgIHRleHQtYWxpZ246Y2VudGVyO1xyXG59XHJcblxyXG4gICNtYWlue1xyXG4gICAgZGlzcGxheTogdGFibGU7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogMTAwdmg7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuXHJcbi5mb2Z7XHJcblx0ICBkaXNwbGF5OiB0YWJsZS1jZWxsO1xyXG5cdCAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcclxufVxyXG5cclxuLmZvZiBoMXtcclxuXHQgIGZvbnQtc2l6ZTogNTBweDtcclxuXHQgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuXHQgIHBhZGRpbmctcmlnaHQ6IDEycHg7XHJcblx0ICBhbmltYXRpb246IHR5cGUgLjVzIGFsdGVybmF0ZSBpbmZpbml0ZTtcclxufVxyXG5cclxuQGtleWZyYW1lcyB0eXBle1xyXG5cdCAgZnJvbXtib3gtc2hhZG93OiBpbnNldCAtM3B4IDBweCAwcHggIzg4ODt9XHJcblx0ICB0b3tib3gtc2hhZG93OiBpbnNldCAtM3B4IDBweCAwcHggdHJhbnNwYXJlbnQ7fVxyXG59Il19 */"

/***/ }),

/***/ "./src/app/material-component/gerir-acabamento/gerir-acabamento.component.html":
/*!*************************************************************************************!*\
  !*** ./src/app/material-component/gerir-acabamento/gerir-acabamento.component.html ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"!flagServer\">\r\n  <div fxLayout=\"row\" fxLayoutWrap=\"wrap\">\r\n    <div fxFlex.gt-sm=\"100%\" fxFlex=\"100\">\r\n      <!-- CRIAR UM ACABAMENTO -->\r\n      <mat-card>\r\n        <mat-card-content>\r\n          <mat-card-title> Criar um acabamento </mat-card-title>\r\n          <mat-card-subtitle> Por favor escolha as opções disponíveis para criar um acabamento (nome é obrigatório).\r\n            Todas as outras opções permitem criar diversas combinações de acabamentos.\r\n            Caso não sejam indicadas opções e apenas o nome, o acabamento será criado com valores padrão.</mat-card-subtitle>\r\n          <mat-grid-list cols=\"4\" fxLayoutWrap=\"wrap\" rowHeight=\"50px\">\r\n            <mat-grid-tile *ngFor=\"let tile of tiles;let i = index;\" [colspan]=\"tile.cols\" [rowspan]=\"tile.rows\"\r\n              [style.background]=\"tile.color\">\r\n              {{tile.text}}\r\n\r\n              <span *ngIf=\"i==4\" [style.background]=\"arrayColorsCriar[selectedColorCriar]\" [cpToggle]=\"true\"\r\n                [cpDialogDisplay]=\"'inline'\" [(colorPicker)]=\"arrayColorsCriar[selectedColorCriar]\" [cpOutputFormat]=\"'hex'\"></span>\r\n\r\n              <span *ngIf=\"i==5\">\r\n                <span class=\"padding-right\">0</span>\r\n                <mat-slider [(ngModel)]=\"sliderMetalCriar\" [thumbLabel]=\"true\" color=\"primary\" value=\"0\" step=\"0.01\"\r\n                  max=\"1\" min=\"0\"></mat-slider>\r\n                <span class=\"padding-left\">1</span>\r\n              </span>\r\n\r\n              <span *ngIf=\"i==6\">\r\n                <span class=\"padding-right\">0</span>\r\n                <mat-slider [(ngModel)]=\"sliderRugoCriar\" [thumbLabel]=\"true\" color=\"primary\" value=\"0\" step=\"0.01\" max=\"1\"\r\n                  min=\"0\"></mat-slider>\r\n                <span class=\"padding-left\">1</span>\r\n              </span>\r\n\r\n              <span *ngIf=\"i==7\">\r\n                <form [formGroup]=\"criarFormGroup\">\r\n                  <mat-form-field>\r\n                    <input matInput placeholder=\"Nome do acabamento\" formControlName=\"criarCtrl\" required>\r\n                  </mat-form-field>\r\n                </form>\r\n              </span>\r\n\r\n            </mat-grid-tile>\r\n          </mat-grid-list>\r\n          <p class=\"button-center\">\r\n            <button mat-raised-button color=\"primary\" (click)=\"botaoCriarEvent()\">Criar</button>\r\n          </p>\r\n        </mat-card-content>\r\n      </mat-card>\r\n      <!-- EDITAR UM ACABAMENTO -->\r\n      <mat-card>\r\n        <mat-card-content>\r\n          <mat-card-title> Editar um acabamento </mat-card-title>\r\n          <mat-card-subtitle> Por favor escolha um acabamento da lista para poder editar.\r\n            Se não existirem acabamentos disponíveis, crie um acabamento na opção acima. </mat-card-subtitle>\r\n          <mat-grid-list cols=\"4\" fxLayoutWrap=\"wrap\" rowHeight=\"50px\">\r\n            <mat-grid-tile *ngFor=\"let tile of tiles2;let i = index;\" [colspan]=\"tile.cols\" [rowspan]=\"tile.rows\"\r\n              [style.background]=\"tile.color\">\r\n              {{tile.text}}\r\n\r\n              <span *ngIf=\"i==4\">\r\n                <mat-form-field *ngIf=\"disabledAcabamentosList==false\">\r\n                  <mat-select placeholder=\"{{acabamentoTextEditar}}\">\r\n                    <mat-option *ngFor=\"let acabamento of acabamentosList\" (click)=\"acabamentoSelecionadoEvent(acabamento)\">\r\n                      {{acabamento.tipo}}\r\n                    </mat-option>\r\n                  </mat-select>\r\n                </mat-form-field>\r\n                <label *ngIf=\"disabledAcabamentosList==true\">\r\n                  Não existem acabamentos!\r\n                </label>\r\n              </span>\r\n\r\n              <span *ngIf=\"i==5\">\r\n                <span [style.background]=\"arrayColorsEditar[selectedColorEditar]\" [cpToggle]=\"true\" [cpDialogDisplay]=\"'inline'\"\r\n                  [(colorPicker)]=\"arrayColorsEditar[selectedColorEditar]\" [cpOutputFormat]=\"'hex'\"></span>\r\n              </span>\r\n\r\n              <span *ngIf=\"i==6\">\r\n                <span class=\"padding-right\">0</span>\r\n                <mat-slider [(ngModel)]=\"sliderMetalEditar\" [thumbLabel]=\"true\" color=\"primary\" value=\"sliderMetalEditar\"\r\n                  step=\"0.01\" max=\"1\" min=\"0\" [disabled]=\"disableAllEditar\"></mat-slider>\r\n                <span class=\"padding-left\">1</span>\r\n                <p></p>\r\n                <span class=\"padding-right\">0</span>\r\n                <mat-slider [(ngModel)]=\"sliderRugoEditar\" [thumbLabel]=\"true\" color=\"primary\" value=\"sliderRugoEditar\"\r\n                  step=\"0.01\" max=\"1\" min=\"0\" [disabled]=\"disableAllEditar\"></mat-slider>\r\n                <span class=\"padding-left\">1</span>\r\n              </span>\r\n\r\n          </mat-grid-tile>\r\n        </mat-grid-list>\r\n        <p class=\"button-center\">\r\n          <button [disabled]=\"disableCriarButton\" mat-raised-button color=\"primary\" (click)=\"botaoCriarEvent()\">Criar</button>\r\n        </p>\r\n      </mat-card-content>\r\n    </mat-card>\r\n    <!-- EDITAR UM ACABAMENTO -->\r\n    <mat-card>\r\n      <mat-card-content>\r\n        <mat-card-title> Editar um acabamento </mat-card-title>\r\n        <mat-card-subtitle> Por favor escolha um acabamento da lista para poder editar.\r\n          Se não existirem acabamentos disponíveis, crie um acabamento na opção acima. </mat-card-subtitle>\r\n        <mat-grid-list cols=\"4\" fxLayoutWrap=\"wrap\" rowHeight=\"50px\">\r\n          <mat-grid-tile *ngFor=\"let tile of tiles2;let i = index;\" [colspan]=\"tile.cols\" [rowspan]=\"tile.rows\"\r\n            [style.background]=\"tile.color\">\r\n            {{tile.text}}\r\n\r\n            </mat-grid-tile>\r\n          </mat-grid-list>\r\n          <p class=\"button-center\">\r\n            <button [disabled]=\"disableAllEditar\" mat-raised-button color=\"primary\" (click)=\"botaoEditarEvent()\">Editar</button>\r\n          </p>\r\n        </mat-card-content>\r\n      </mat-card>\r\n      <!-- ELIMINAR UM ACABAMENTO -->\r\n      <div fxLayout=\"row\">\r\n        <div fxFlex.gt-sm=\"50%\">\r\n          <mat-card>\r\n            <mat-card-content>\r\n              <mat-card-title> Eliminar um acabamento </mat-card-title>\r\n              <mat-card-subtitle> Por favor escolha um acabamento da lista abaixo para ser eiminado.\r\n              </mat-card-subtitle>\r\n              <mat-form-field *ngIf=\"disabledAcabamentosList==false\">\r\n                <mat-select placeholder=\"{{acabamentoTextEliminar}}\">\r\n                  <mat-option *ngFor=\"let acabamento of acabamentosList\" (click)=\"acabamentoEliminarEvent(acabamento)\">\r\n                    {{acabamento.tipo}}\r\n                  </mat-option>\r\n                </mat-select>\r\n              </mat-form-field>\r\n              <label *ngIf=\"disabledAcabamentosList==true\">\r\n                Não existem acabamentos!\r\n              </label>\r\n\r\n              <p class=\"button-center\">\r\n                <button [disabled]=\"disableEliminar\" mat-raised-button color=\"primary\" (click)=\"botaoEliminarEvent()\">Eliminar</button>\r\n              </p>\r\n            </mat-card-content>\r\n          </mat-card>\r\n        </div>\r\n        <!-- LISTAR ACABAMENTOS -->\r\n        <div fxFlex.gt-sm=\"50%\">\r\n          <mat-card>\r\n            <mat-card-content>\r\n              <mat-card-title> Listar acabamentos </mat-card-title>\r\n              <mat-card-subtitle> Listagem de todos os acabamentos existentes/disponíveis e todas as suas\r\n                características. </mat-card-subtitle>\r\n              <p class=\"button-center\">\r\n                <button *ngIf=\"disabledAcabamentosList==false\" mat-raised-button style=\"column-width: 100%\"\r\n                  [matMenuTriggerFor]=\"acabamentos\">Clique aqui para ver a listagem\r\n                  de acabamentos</button>\r\n              </p>\r\n              <mat-menu #acabamentos=\"matMenu\">\r\n                <button mat-menu-item [matMenuTriggerFor]=\"acabamentoDescription\" *ngFor=\"let acabamento of acabamentosList; let i = index;\">\r\n                  {{i+1}} : {{acabamento.tipo}}\r\n                  <mat-menu #acabamentoDescription=\"matMenu\">\r\n                    <button mat-menu-item>\r\n                      Emissividade: {{acabamento.emissividade}}\r\n                    </button>\r\n                    <button mat-menu-item>\r\n                      Metalicidade: {{acabamento.metalicidade}}\r\n                    </button>\r\n                    <button mat-menu-item>\r\n                      Rugosidade: {{acabamento.rugosidade}}\r\n                    </button>\r\n                  </mat-menu>\r\n                </button>\r\n              </mat-menu>\r\n\r\n              <label *ngIf=\"disabledAcabamentosList==true\">\r\n                Não existem acabamentos!\r\n              </label>\r\n            </mat-card-content>\r\n          </mat-card>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n\r\n</div>\r\n<div *ngIf=\"flagServer\">\r\n  <div id=\"main\">\r\n    <div class=\"fof\">\r\n      <h1>Não foi possível aceder ao servidor.</h1>\r\n    </div>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "./src/app/material-component/gerir-acabamento/gerir-acabamento.component.ts":
/*!***********************************************************************************!*\
  !*** ./src/app/material-component/gerir-acabamento/gerir-acabamento.component.ts ***!
  \***********************************************************************************/
/*! exports provided: GerirAcabamentoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GerirAcabamentoComponent", function() { return GerirAcabamentoComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var ngx_color_picker__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ngx-color-picker */ "./node_modules/ngx-color-picker/dist/ngx-color-picker.es5.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _gestor_acabamento_acabamento__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../gestor/acabamento/acabamento */ "./src/app/gestor/acabamento/acabamento.ts");
/* harmony import */ var _gestor_acabamento_acabamento_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../gestor/acabamento/acabamento.service */ "./src/app/gestor/acabamento/acabamento.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var GerirAcabamentoComponent = /** @class */ (function () {
    function GerirAcabamentoComponent(vcRef, cpService, _formBuilder, snackBar, acabamentoService) {
        this.vcRef = vcRef;
        this.cpService = cpService;
        this._formBuilder = _formBuilder;
        this.snackBar = snackBar;
        this.acabamentoService = acabamentoService;
        this.flagServer = false;
        this.acabamentoTextEditar = "Escolha um acabamento";
        this.acabamentoTextEliminar = "Escolha um acabamento";
        this.sliderMetalCriar = 0;
        this.sliderRugoCriar = 0;
        this.sliderMetalEditar = 0;
        this.sliderRugoEditar = 0;
        this.selectedAcabamentoEditar = null;
        this.selectedAcabamentoEliminar = null;
        // LISTAS
        this.acabamentosList = [];
        // FLAGS
        this.disabledAcabamentosList = false;
        this.disableAllEditar = true;
        this.disableEliminar = true;
        this.disableCriarButton = false;
        this.arrayColorsCriar = {
            color0: '#000000',
            color1: '#2883e9',
            color2: '#e920e9',
            color3: 'rgb(255,245,0)',
            color4: 'rgb(236,64,64)',
            color5: 'rgba(45,208,45,1)'
        };
        this.arrayColorsEditar = {
            color0: '#000000',
            color1: '#2883e9',
            color2: '#e920e9',
            color3: 'rgb(255,245,0)',
            color4: 'rgb(236,64,64)',
            color5: 'rgba(45,208,45,1)'
        };
        this.selectedColorCriar = 'color0';
        this.selectedColorEditar = 'color0';
        this.color0 = '#000000';
        this.color1 = '#2889e9';
        this.color2 = '#e920e9';
        this.color3 = '#fff500';
        this.color4 = 'rgb(236,64,64)';
        this.color5 = 'rgba(45,208,45,1)';
        this.color6 = '#1973c0';
        this.color7 = '#f200bd';
        this.color8 = '#a8ff00';
        this.color9 = '#278ce2';
        this.color10 = '#0a6211';
        this.color11 = '#f2ff00';
        this.color12 = '#f200bd';
        this.color13 = 'rgb(0,255,255)';
        this.color14 = 'rgb(255,0,0)';
        this.color15 = '#a51ad633';
        this.color16 = '#666666';
        this.color17 = '#ff0000';
        this.cmykColor = new ngx_color_picker__WEBPACK_IMPORTED_MODULE_1__["Cmyk"](0, 0, 0, 0);
        this.tiles = [
            {
                text: '1) Escolha a emissividade:',
                cols: 1,
                rows: 1,
                color: 'lightblue'
            },
            {
                text: '2) Escolha a metalicidade:',
                cols: 1,
                rows: 1,
                color: 'lightblue'
            },
            {
                text: '3) Escolha a rugosidade:',
                cols: 1,
                rows: 1,
                color: 'lightblue'
            },
            {
                text: '4) Escolha o nome:',
                cols: 1,
                rows: 1,
                color: 'lightblue'
            },
            {
                cols: 1,
                rows: 6,
                color: 'lightblue'
            },
            {
                cols: 1,
                rows: 6,
                color: 'lightblue'
            },
            {
                cols: 1,
                rows: 6,
                color: 'lightblue'
            },
            {
                cols: 1,
                rows: 6,
                color: 'lightblue'
            },
        ];
        this.tiles2 = [
            {
                text: '1) Escolha o acabamento:',
                cols: 1,
                rows: 1,
                color: 'lightblue'
            },
            {
                text: '2) Escolha a emissividade:',
                cols: 1,
                rows: 1,
                color: 'lightblue'
            },
            {
                text: '3) Escolha a metalicidade/rugosidade:',
                cols: 1,
                rows: 1,
                color: 'lightblue'
            },
            {
                text: '4) Escolha o nome:',
                cols: 1,
                rows: 1,
                color: 'lightblue'
            },
            {
                cols: 1,
                rows: 6,
                color: 'lightblue'
            },
            {
                cols: 1,
                rows: 6,
                color: 'lightblue'
            },
            {
                cols: 1,
                rows: 6,
                color: 'lightblue'
            },
            {
                cols: 1,
                rows: 6,
                color: 'lightblue'
            },
        ];
    }
    GerirAcabamentoComponent.prototype.ngOnInit = function () {
        this.criarFormGroup = this._formBuilder.group({
            criarCtrl: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]
        });
        this.editarFormGroup = this._formBuilder.group({
            editarCtrl: [{ value: '', disabled: true }, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]
        });
        this.getAcabamentos();
    };
    GerirAcabamentoComponent.prototype.onEventLog = function (event, data) {
        console.log(event, data);
    };
    GerirAcabamentoComponent.prototype.onChangeColorCmyk = function (color) {
        var hsva = this.cpService.stringToHsva(color);
        if (hsva) {
            var rgba = this.cpService.hsvaToRgba(hsva);
            return this.cpService.rgbaToCmyk(rgba);
        }
        return new ngx_color_picker__WEBPACK_IMPORTED_MODULE_1__["Cmyk"](0, 0, 0, 0);
    };
    GerirAcabamentoComponent.prototype.onChangeColorHex8 = function (color) {
        var hsva = this.cpService.stringToHsva(color, true);
        if (hsva) {
            return this.cpService.outputFormat(hsva, 'rgba', null);
        }
        return '';
    };
    // EVENTS HANDLER
    GerirAcabamentoComponent.prototype.acabamentoSelecionadoEvent = function (acabamento) {
        this.selectedAcabamentoEditar = acabamento;
        this.acabamentoTextEditar = acabamento.tipo;
        this.arrayColorsEditar[this.selectedColorEditar] = acabamento.emissividade;
        this.sliderMetalEditar = acabamento.metalicidade;
        this.sliderRugoEditar = acabamento.rugosidade;
        this.unlockEditar();
    };
    GerirAcabamentoComponent.prototype.acabamentoEliminarEvent = function (acabamento) {
        this.selectedAcabamentoEliminar = acabamento;
        this.acabamentoTextEliminar = acabamento.tipo;
        this.unlockEliminar();
    };
    // FUNCTIONS DE UTILIDADE
    GerirAcabamentoComponent.prototype.resetCriar = function () {
        this.sliderMetalCriar = 0;
        this.sliderRugoCriar = 0;
        this.arrayColorsCriar[this.selectedColorCriar] = this.color0;
        this.criarFormGroup.reset();
    };
    GerirAcabamentoComponent.prototype.resetEditar = function () {
        this.sliderMetalEditar = 0;
        this.sliderRugoEditar = 0;
        this.arrayColorsEditar[this.selectedColorEditar] = this.color0;
        this.editarFormGroup.reset();
        this.acabamentoTextEditar = "Escolha um acabamento";
        this.editarFormGroup.disable();
        this.selectedAcabamentoEditar = null;
        this.lockEditarAll();
    };
    GerirAcabamentoComponent.prototype.resetEliminar = function () {
        this.acabamentoTextEliminar = "Escolha um acabamento";
        this.selectedAcabamentoEliminar = null;
        this.lockEliminar();
    };
    GerirAcabamentoComponent.prototype.lockEditarList = function () {
        this.disabledAcabamentosList = true;
        this.disableAllEditar = true;
    };
    GerirAcabamentoComponent.prototype.lockEditarAll = function () {
        this.disableAllEditar = true;
        this.editarFormGroup.disable();
    };
    GerirAcabamentoComponent.prototype.lockEliminar = function () {
        this.disableEliminar = true;
    };
    GerirAcabamentoComponent.prototype.unlockEditar = function () {
        this.disabledAcabamentosList = false;
        this.disableAllEditar = false;
        this.editarFormGroup.enable();
    };
    GerirAcabamentoComponent.prototype.unlockEliminar = function () {
        this.disableEliminar = false;
    };
    GerirAcabamentoComponent.prototype.fireSnackBar = function (type, message) {
        this.snackBar.open(type, message, {
            duration: 4000
        });
    };
    // FUNCTIONS DE BDDAD
    GerirAcabamentoComponent.prototype.getAcabamentos = function () {
        var _this = this;
        this.acabamentoService.getAcabamentos().subscribe(function (data) {
            _this.acabamentosList = data;
            if (_this.acabamentosList.length == 0) {
                _this.lockEditarList();
            }
            else {
                _this.unlockEditar();
                _this.lockEditarAll();
            }
        }, function (_) {
            _this.flagServer = true;
            _this.statusMessage = "Error: Service Unavailable";
        });
    };
    GerirAcabamentoComponent.prototype.addAcabamento = function (tipo, emissividade, metalicidade, rugosidade) {
        var _this = this;
        tipo = tipo.trim();
        emissividade = emissividade.trim();
        this.disableCriarButton = true;
        this.acabamentoService.addAcabamento({ tipo: tipo, emissividade: emissividade, metalicidade: metalicidade, rugosidade: rugosidade })
            .subscribe(function (_) {
            _this.getAcabamentos();
            _this.fireSnackBar("Sucesso!", "Acabamento criado com sucesso!");
            _this.disableCriarButton = false;
            _this.resetCriar();
        }, function (_) {
            alert("Serviço indisponível!");
            _this.disableCriarButton = false;
        });
    };
    GerirAcabamentoComponent.prototype.updateAcabamento = function (tipo, emissividade, metalicidade, rugosidade) {
        var _this = this;
        var acabamentoFinal = new _gestor_acabamento_acabamento__WEBPACK_IMPORTED_MODULE_4__["Acabamento"];
        acabamentoFinal.id = this.selectedAcabamentoEditar.id;
        acabamentoFinal.tipo = tipo;
        acabamentoFinal.emissividade = emissividade;
        acabamentoFinal.metalicidade = metalicidade;
        acabamentoFinal.rugosidade = rugosidade;
        this.lockEditarAll();
        this.acabamentoService.updateAcabamento(this.selectedAcabamentoEditar.id, acabamentoFinal)
            .subscribe(function (_) {
            _this.getAcabamentos();
            _this.fireSnackBar("Sucesso!", "Acabamento alterado com sucesso!");
            _this.resetEditar();
        }, function (_) {
            alert("Serviço indisponível!");
            _this.unlockEditar();
        });
    };
    GerirAcabamentoComponent.prototype.deleteAcabamento = function () {
        var _this = this;
        this.lockEliminar();
        this.acabamentoService.deleteAcabamento(this.selectedAcabamentoEliminar).
            subscribe(function (_) {
            _this.getAcabamentos();
            _this.fireSnackBar("Sucesso!", "Acabamento eliminado com sucesso!");
            _this.resetEliminar();
        }, function (_) {
            alert("Serviço indisponível!");
            _this.unlockEliminar();
        });
    };
    // FUNCTIONS DE BUTTONS
    GerirAcabamentoComponent.prototype.botaoEditarEvent = function () {
        if (this.disableAllEditar == true) {
            this.snackBar.open("Erro!", "Não foi escolhido nenhum acabamento!", {
                duration: 4000
            });
        }
        if (!this.editarFormGroup.invalid) {
            //Acabamento válido
            var tipo = this.editarFormGroup.controls['editarCtrl'].value;
            var emissividade = this.arrayColorsEditar[this.selectedColorEditar];
            var metalicidade = this.sliderMetalEditar;
            var rugosidade = this.sliderRugoEditar;
            this.updateAcabamento(tipo, emissividade, metalicidade, rugosidade);
        }
        else {
            this.snackBar.open("Erro!", "Insira um nome válido!", {
                duration: 4000
            });
        }
    };
    GerirAcabamentoComponent.prototype.botaoCriarEvent = function () {
        if (!this.criarFormGroup.invalid) {
            //Acabamento válido
            var tipo = this.criarFormGroup.controls['criarCtrl'].value;
            var emissividade = this.arrayColorsCriar[this.selectedColorCriar];
            var metalicidade = this.sliderMetalCriar;
            var rugosidade = this.sliderRugoCriar;
            this.addAcabamento(tipo, emissividade, metalicidade, rugosidade);
        }
        else {
            this.snackBar.open("Erro!", "Insira um nome válido!", {
                duration: 4000
            });
        }
    };
    GerirAcabamentoComponent.prototype.botaoEliminarEvent = function () {
        this.deleteAcabamento();
    };
    GerirAcabamentoComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-gerir-acabamento',
            template: __webpack_require__(/*! ./gerir-acabamento.component.html */ "./src/app/material-component/gerir-acabamento/gerir-acabamento.component.html"),
            styles: [__webpack_require__(/*! ./gerir-acabamento.component.css */ "./src/app/material-component/gerir-acabamento/gerir-acabamento.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"],
            ngx_color_picker__WEBPACK_IMPORTED_MODULE_1__["ColorPickerService"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"],
            _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatSnackBar"],
            _gestor_acabamento_acabamento_service__WEBPACK_IMPORTED_MODULE_5__["AcabamentoService"]])
    ], GerirAcabamentoComponent);
    return GerirAcabamentoComponent;
}());



/***/ }),

/***/ "./src/app/material-component/gerir-catalogos/gerir-catalogos.component.css":
/*!**********************************************************************************!*\
  !*** ./src/app/material-component/gerir-catalogos/gerir-catalogos.component.css ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "    /* Application-wide Styles */\r\n    h1 {\r\n        color: rgb(0, 0, 0);\r\n        font-family: Arial, Helvetica, sans-serif;\r\n        font-size: 250%;\r\n      }\r\n    h2, h3 {\r\n        color: rgb(0, 0, 0);\r\n        font-family: Arial, Helvetica, sans-serif;\r\n        font-weight: lighter;\r\n      }\r\n    body {\r\n        margin: 2em;\r\n      }\r\n    body, input[type=\"text\"], button {\r\n        color: rgb(255, 255, 255);\r\n        font-family: Cambria, Georgia;\r\n      }\r\n    /* everywhere else */\r\n    * {\r\n        color: rgb(0, 0, 0);\r\n        font-family: Cambria, Georgia;\r\n      }\r\n    nav a {\r\n        padding: 5px 10px;\r\n        text-decoration: none;\r\n        margin-top: 10px;\r\n        display: inline-block;\r\n        background-color: #eee;\r\n        border-radius: 4px;\r\n      }\r\n    nav a:visited, a:link {\r\n        color: #607D8B;\r\n      }\r\n    nav a:hover {\r\n        color: #039be5;\r\n        background-color: #CFD8DC;\r\n      }\r\n    nav a.active {\r\n        color: #039be5;\r\n      }\r\n    #main{\r\n    display: table;\r\n    width: 100%;\r\n    height: 100vh;\r\n    text-align: center;\r\n}\r\n    .fof{\r\n\t  display: table-cell;\r\n\t  vertical-align: middle;\r\n}\r\n    .fof h1{\r\n\t  font-size: 50px;\r\n\t  display: inline-block;\r\n\t  padding-right: 12px;\r\n\t  -webkit-animation: type .5s alternate infinite;\r\n\t          animation: type .5s alternate infinite;\r\n}\r\n    @-webkit-keyframes type{\r\n\t  from{box-shadow: inset -3px 0px 0px #888;}\r\n\t  to{box-shadow: inset -3px 0px 0px transparent;}\r\n}\r\n    @keyframes type{\r\n\t  from{box-shadow: inset -3px 0px 0px #888;}\r\n\t  to{box-shadow: inset -3px 0px 0px transparent;}\r\n}\r\n\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWF0ZXJpYWwtY29tcG9uZW50L2dlcmlyLWNhdGFsb2dvcy9nZXJpci1jYXRhbG9nb3MuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiSUFBSSw2QkFBNkI7SUFDN0I7UUFDSSxvQkFBb0I7UUFDcEIsMENBQTBDO1FBQzFDLGdCQUFnQjtPQUNqQjtJQUNEO1FBQ0Usb0JBQW9CO1FBQ3BCLDBDQUEwQztRQUMxQyxxQkFBcUI7T0FDdEI7SUFDRDtRQUNFLFlBQVk7T0FDYjtJQUNEO1FBQ0UsMEJBQTBCO1FBQzFCLDhCQUE4QjtPQUMvQjtJQUNELHFCQUFxQjtJQUNyQjtRQUNFLG9CQUFvQjtRQUNwQiw4QkFBOEI7T0FDL0I7SUFFRDtRQUNFLGtCQUFrQjtRQUNsQixzQkFBc0I7UUFDdEIsaUJBQWlCO1FBQ2pCLHNCQUFzQjtRQUN0Qix1QkFBdUI7UUFDdkIsbUJBQW1CO09BQ3BCO0lBQ0Q7UUFDRSxlQUFlO09BQ2hCO0lBQ0Q7UUFDRSxlQUFlO1FBQ2YsMEJBQTBCO09BQzNCO0lBQ0Q7UUFDRSxlQUFlO09BQ2hCO0lBRUw7SUFDRSxlQUFlO0lBQ2YsWUFBWTtJQUNaLGNBQWM7SUFDZCxtQkFBbUI7Q0FDdEI7SUFFRDtHQUNHLG9CQUFvQjtHQUNwQix1QkFBdUI7Q0FDekI7SUFFRDtHQUNHLGdCQUFnQjtHQUNoQixzQkFBc0I7R0FDdEIsb0JBQW9CO0dBQ3BCLCtDQUF1QztXQUF2Qyx1Q0FBdUM7Q0FDekM7SUFFRDtHQUNHLEtBQUssb0NBQW9DLENBQUM7R0FDMUMsR0FBRywyQ0FBMkMsQ0FBQztDQUNqRDtJQUhEO0dBQ0csS0FBSyxvQ0FBb0MsQ0FBQztHQUMxQyxHQUFHLDJDQUEyQyxDQUFDO0NBQ2pEIiwiZmlsZSI6InNyYy9hcHAvbWF0ZXJpYWwtY29tcG9uZW50L2dlcmlyLWNhdGFsb2dvcy9nZXJpci1jYXRhbG9nb3MuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIiAgICAvKiBBcHBsaWNhdGlvbi13aWRlIFN0eWxlcyAqL1xyXG4gICAgaDEge1xyXG4gICAgICAgIGNvbG9yOiByZ2IoMCwgMCwgMCk7XHJcbiAgICAgICAgZm9udC1mYW1pbHk6IEFyaWFsLCBIZWx2ZXRpY2EsIHNhbnMtc2VyaWY7XHJcbiAgICAgICAgZm9udC1zaXplOiAyNTAlO1xyXG4gICAgICB9XHJcbiAgICAgIGgyLCBoMyB7XHJcbiAgICAgICAgY29sb3I6IHJnYigwLCAwLCAwKTtcclxuICAgICAgICBmb250LWZhbWlseTogQXJpYWwsIEhlbHZldGljYSwgc2Fucy1zZXJpZjtcclxuICAgICAgICBmb250LXdlaWdodDogbGlnaHRlcjtcclxuICAgICAgfVxyXG4gICAgICBib2R5IHtcclxuICAgICAgICBtYXJnaW46IDJlbTtcclxuICAgICAgfVxyXG4gICAgICBib2R5LCBpbnB1dFt0eXBlPVwidGV4dFwiXSwgYnV0dG9uIHtcclxuICAgICAgICBjb2xvcjogcmdiKDI1NSwgMjU1LCAyNTUpO1xyXG4gICAgICAgIGZvbnQtZmFtaWx5OiBDYW1icmlhLCBHZW9yZ2lhO1xyXG4gICAgICB9XHJcbiAgICAgIC8qIGV2ZXJ5d2hlcmUgZWxzZSAqL1xyXG4gICAgICAqIHtcclxuICAgICAgICBjb2xvcjogcmdiKDAsIDAsIDApO1xyXG4gICAgICAgIGZvbnQtZmFtaWx5OiBDYW1icmlhLCBHZW9yZ2lhO1xyXG4gICAgICB9XHJcblxyXG4gICAgICBuYXYgYSB7XHJcbiAgICAgICAgcGFkZGluZzogNXB4IDEwcHg7XHJcbiAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gICAgICAgIG1hcmdpbi10b3A6IDEwcHg7XHJcbiAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNlZWU7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNHB4O1xyXG4gICAgICB9XHJcbiAgICAgIG5hdiBhOnZpc2l0ZWQsIGE6bGluayB7XHJcbiAgICAgICAgY29sb3I6ICM2MDdEOEI7XHJcbiAgICAgIH1cclxuICAgICAgbmF2IGE6aG92ZXIge1xyXG4gICAgICAgIGNvbG9yOiAjMDM5YmU1O1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNDRkQ4REM7XHJcbiAgICAgIH1cclxuICAgICAgbmF2IGEuYWN0aXZlIHtcclxuICAgICAgICBjb2xvcjogIzAzOWJlNTtcclxuICAgICAgfVxyXG5cclxuICAjbWFpbntcclxuICAgIGRpc3BsYXk6IHRhYmxlO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDEwMHZoO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcblxyXG4uZm9me1xyXG5cdCAgZGlzcGxheTogdGFibGUtY2VsbDtcclxuXHQgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XHJcbn1cclxuXHJcbi5mb2YgaDF7XHJcblx0ICBmb250LXNpemU6IDUwcHg7XHJcblx0ICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcblx0ICBwYWRkaW5nLXJpZ2h0OiAxMnB4O1xyXG5cdCAgYW5pbWF0aW9uOiB0eXBlIC41cyBhbHRlcm5hdGUgaW5maW5pdGU7XHJcbn1cclxuXHJcbkBrZXlmcmFtZXMgdHlwZXtcclxuXHQgIGZyb217Ym94LXNoYWRvdzogaW5zZXQgLTNweCAwcHggMHB4ICM4ODg7fVxyXG5cdCAgdG97Ym94LXNoYWRvdzogaW5zZXQgLTNweCAwcHggMHB4IHRyYW5zcGFyZW50O31cclxufVxyXG5cclxuIl19 */"

/***/ }),

/***/ "./src/app/material-component/gerir-catalogos/gerir-catalogos.component.html":
/*!***********************************************************************************!*\
  !*** ./src/app/material-component/gerir-catalogos/gerir-catalogos.component.html ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"!flagServer\">\r\n  <div fxLayout=\"row\" fxLayoutWrap=\"wrap\">\r\n    <div fxFlex.gt-sm=\"100%\" fxFlex=\"100\">\r\n      <mat-card>\r\n        <mat-card-content>\r\n          <div style=\"text-align:left\">\r\n            <h1>Gestão de Catálogos</h1>\r\n            <mat-tab-group (focusChange)=\"clear()\">\r\n\r\n              <mat-tab label=\"Criar Catálogo\">\r\n                <div style=\"text-align: left\">\r\n                  <h2>Criar Novo Catálogo</h2>\r\n                  <mat-form-field>\r\n                    <input matInput placeholder=\"Nome Catálogo\" autocomplete=\"off\" [(ngModel)]=\"nomeCatalogo\">\r\n                  </mat-form-field>\r\n                  <button mat-raised-button color=\"primary\" (click)=\"addCatalogo()\">Criar</button>\r\n\r\n                  <p></p>\r\n                  <h2>Selecionar Produtos</h2>\r\n                  <mat-form-field>\r\n                    <mat-select placeholder=\"Selecionar\" [(ngModel)]=\"selectedProd\">\r\n                      <mat-option *ngFor=\"let prod of allProdutos\" [value]=\"prod\" (click)=\"selectProduto(prod)\">\r\n                        {{prod.nome}}\r\n                      </mat-option>\r\n                    </mat-select>\r\n                  </mat-form-field>\r\n                  <div style=\"text-align:left\">\r\n                    <nav>\r\n                      <button mat-raised-button color=\"warn\" (click)=\"addProduto()\">Adicionar produto</button>\r\n                    </nav>\r\n                  </div>\r\n                </div>\r\n              </mat-tab>\r\n\r\n              <mat-tab label=\"Editar Catálogo\">\r\n                <div style=\"text-align: left\">\r\n                  <h2>Selecione um Catálogo</h2>\r\n                  <mat-form-field>\r\n                    <mat-select placeholder=\"Selecionar\" [(ngModel)]=\"selectedCatalogo\">\r\n                      <mat-option *ngFor=\"let cat of allCatalogos\" [value]=\"cat\" (click)=\"selecionarCatalogo(cat)\">\r\n                        {{cat.nome}}\r\n                      </mat-option>\r\n                    </mat-select>\r\n                  </mat-form-field>\r\n                  <h2>Editar Catálogo</h2>\r\n                  <p></p>\r\n                  <mat-form-field>\r\n                    <input matInput placeholder=\"Novo Nome\" [(ngModel)]=\"nomeUpdate\">\r\n                  </mat-form-field>\r\n                  <p></p>\r\n                  <div style=\"text-align:left\">\r\n                    <nav>\r\n                      <button mat-raised-button color=\"primary\" (click)=\"updateCatalogoHTML()\">Editar</button>\r\n                      <button mat-raised-button color=\"warn\" (click)=\"deleteCatalogo()\">Eliminar</button>\r\n                    </nav>\r\n                  </div>\r\n                </div>\r\n                <div fxLayout=\"row\">\r\n                  <div fxFlex.gt-sm=\"100%\">\r\n                    <mat-card>\r\n                      <mat-card-content>\r\n                        <mat-card-title> Eliminar um produto </mat-card-title>\r\n                        <mat-card-subtitle> Por favor escolha um produto da lista abaixo para ser eliminado.\r\n                        </mat-card-subtitle>\r\n                        <mat-form-field *ngIf=\"disabledProdutosList==false\">\r\n                          <mat-select placeholder=\"{{produtoTextEliminar}}\" [(ngModel)]=\"selectedProduto\">\r\n                            <mat-option *ngFor=\"let prod of produtosCatalogo\" [value]=\"prod\" (click)=\"selecionarProduto(prod)\">\r\n                              {{prod.nome}}\r\n                            </mat-option>\r\n                          </mat-select>\r\n                        </mat-form-field>\r\n                        <label *ngIf=\"disabledProdutosList==true\">\r\n                          Não existem produtos!\r\n                        </label>\r\n\r\n                        <p class=\"button-center\">\r\n                          <button mat-raised-button color=\"warn\" (click)=\"deleteProduto()\">Eliminar</button>\r\n                        </p>\r\n                      </mat-card-content>\r\n                    </mat-card>\r\n                  </div>\r\n                </div>\r\n\r\n                <div fxLayout=\"row\">\r\n                  <div fxFlex.gt-sm=\"100%\">\r\n                    <mat-card>\r\n                      <mat-card-content>\r\n                        <mat-card-title> Adicionar um produto </mat-card-title>\r\n                        <mat-card-subtitle> Por favor escolha um produto da lista abaixo para ser adicionado.\r\n                        </mat-card-subtitle>\r\n                        <mat-form-field *ngIf=\"disabledProdutosList==false\">\r\n                          <mat-select placeholder=\"{{produtoTextAdicionar}}\" [(ngModel)]=\"selectedProduto\">\r\n                            <mat-option *ngFor=\"let prod of allProdutos\" [value]=\"prod\" (click)=\"selecionarProduto(prod)\">\r\n                              {{prod.nome}}\r\n                            </mat-option>\r\n                          </mat-select>\r\n                        </mat-form-field>\r\n                        <label *ngIf=\"disabledProdutosList==true\">\r\n                          Não existem produtos!\r\n                        </label>\r\n\r\n                        <p class=\"button-center\">\r\n                          <button mat-raised-button color=\"primary\" (click)=\"adicionarProduto()\">Adicionar</button>\r\n                        </p>\r\n                      </mat-card-content>\r\n                    </mat-card>\r\n                  </div>\r\n                </div>\r\n              </mat-tab>\r\n\r\n              <mat-tab label=\"Listar Catálogos\">\r\n                <div style=\"text-align: left\">\r\n                  <h2>Listar Catálogos</h2>\r\n                  <mat-form-field>\r\n                    <mat-select placeholder=\"Lista de Catálogos\" [(ngModel)]=\"selectedCatalogo\">\r\n                      <mat-option *ngFor=\"let cat of allCatalogos\" [value]=\"cat\" (click)=\"selecionarCatalogo(cat)\">\r\n                        {{cat.nome}}\r\n                      </mat-option>\r\n                    </mat-select>\r\n                  </mat-form-field>\r\n                  <h3>Produtos do Catálogo:</h3>\r\n                  <mat-list>\r\n                    <mat-list-item *ngFor=\"let prod of produtosCatalogo\">\r\n                      <h3>{{prod.nome}}</h3>\r\n                    </mat-list-item>\r\n                  </mat-list>\r\n                </div>\r\n              </mat-tab>\r\n\r\n            </mat-tab-group>\r\n            <ng-template #noError>\r\n            </ng-template>\r\n          </div>\r\n        </mat-card-content>\r\n      </mat-card>\r\n    </div>\r\n  </div>\r\n\r\n</div>\r\n<div *ngIf=\"flagServer\">\r\n  <div id=\"main\">\r\n    <div class=\"fof\">\r\n      <h1>Não foi possível aceder ao servidor.</h1>\r\n    </div>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "./src/app/material-component/gerir-catalogos/gerir-catalogos.component.ts":
/*!*********************************************************************************!*\
  !*** ./src/app/material-component/gerir-catalogos/gerir-catalogos.component.ts ***!
  \*********************************************************************************/
/*! exports provided: GerirCatalogosComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GerirCatalogosComponent", function() { return GerirCatalogosComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _gestor_catalogo_catalogo__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../gestor/catalogo/catalogo */ "./src/app/gestor/catalogo/catalogo.ts");
/* harmony import */ var _gestor_catalogo_catalogo_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../gestor/catalogo/catalogo.service */ "./src/app/gestor/catalogo/catalogo.service.ts");
/* harmony import */ var _gestor_produto_produto_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../gestor/produto/produto.service */ "./src/app/gestor/produto/produto.service.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var GerirCatalogosComponent = /** @class */ (function () {
    function GerirCatalogosComponent(catalogoSrv, produtoSrv, _formBuilder, snackBar) {
        this.catalogoSrv = catalogoSrv;
        this.produtoSrv = produtoSrv;
        this._formBuilder = _formBuilder;
        this.snackBar = snackBar;
        this.flagServer = false;
        //view toggles
        this.criarCatalogo = false;
        this.editarCatalogo = false;
        this.adicionaProduto = false;
        this.listarCatalogos = false;
        //update
        this.selectedCatalogo = null;
        this.newCatalogo = null;
        this.selectedProduto = null;
        this.selectedProd = null;
        this.nomeCatalogo = "";
        this.nomeUpdate = "";
        this.disabledProdutosList = false;
        this.produtoTextEliminar = "Escolha um produto";
        this.disableEliminar = true;
        this.disableAdicionar = true;
        this.produtoTextAdicionar = "Escolha um produto";
    }
    GerirCatalogosComponent.prototype.ngOnInit = function () {
        this.adicionarFormGroup = this._formBuilder.group({
            adicionarCtrl: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required]
        });
        this.getCatalogos();
        this.getProdutos();
    };
    GerirCatalogosComponent.prototype.clear = function () {
        this.nomeCatalogo = '';
        this.nomeUpdate = '';
        this.selectedCatalogo = null;
        this.selectedProduto = null;
        this.newCatalogo = null;
        this.selectedProd = null;
        this.produtosCatalogo = [];
    };
    GerirCatalogosComponent.prototype.getCatalogos = function () {
        var _this = this;
        this.catalogoSrv.getCatalogos().subscribe(function (catalogos) {
            _this.allCatalogos = catalogos;
        }, function (error) {
            _this.flagServer = true;
            _this.statusMessage = "Error: Service Unavailable";
        });
    };
    GerirCatalogosComponent.prototype.getProdutos = function () {
        var _this = this;
        this.produtoSrv.getProdutos().subscribe(function (produtos) {
            _this.allProdutos = produtos;
        }, function (error) {
            _this.flagServer = true;
            _this.statusMessage = "Error: Service Unavailable";
        });
    };
    GerirCatalogosComponent.prototype.getProdutosCatalogo = function () {
        var _this = this;
        var id = this.selectedCatalogo.id;
        this.catalogoSrv.getProdutos(id).subscribe(function (produtos) {
            _this.produtosCatalogo = produtos;
        }, function (error) { _this.statusMessage = "Error: Service Unavailable"; });
    };
    GerirCatalogosComponent.prototype.selecionarCatalogo = function (cat) {
        this.nomeUpdate = cat.nome;
        this.getProdutosCatalogo();
    };
    GerirCatalogosComponent.prototype.selecionarProduto = function (prod) {
        this.selectedProduto = prod;
    };
    GerirCatalogosComponent.prototype.selectProduto = function (prod) {
        this.selectedProd = prod;
    };
    GerirCatalogosComponent.prototype.updateCatalogoHTML = function () {
        var _this = this;
        if (this.selectedCatalogo == null) {
            this.snackBar.open("Erro!", "Selecione um Catálogo", { duration: 4000 });
            return;
        }
        var catalogoFinal = new _gestor_catalogo_catalogo__WEBPACK_IMPORTED_MODULE_1__["Catalogo"](this.selectedCatalogo.nome);
        catalogoFinal.id = this.selectedCatalogo.id;
        catalogoFinal.nome = this.selectedCatalogo.nome;
        if (!catalogoFinal.nome) {
            this.snackBar.open("Erro!", "Insira um nome", { duration: 4000 });
            return;
        }
        this.catalogoSrv.updateCatalogo(this.selectedCatalogo.id, catalogoFinal)
            .subscribe(function (catalogo) {
            _this.snackBar.open("Sucesso!", "Catálogo Editado", { duration: 4000 });
            _this.getCatalogos();
            _this.nomeUpdate = '';
            _this.selectedCatalogo = null;
        }, function (erro) {
            _this.snackBar.open("Erro!", "Ocurreu um erro", { duration: 4000 });
            console.log(erro);
        });
    };
    GerirCatalogosComponent.prototype.addCatalogo = function () {
        var _this = this;
        var nome = this.nomeCatalogo;
        nome = nome.trim();
        if (!nome) {
            this.snackBar.open("Erro!", "Insira um nome", { duration: 4000 });
            return;
        }
        if (!nome) {
            return;
        }
        var catalogo = new _gestor_catalogo_catalogo__WEBPACK_IMPORTED_MODULE_1__["Catalogo"](nome);
        this.catalogoSrv.addCatalogo(catalogo)
            .subscribe(function (catalogo) {
            _this.allCatalogos.push(catalogo);
            _this.snackBar.open("Sucesso!", "Catálogo Adicionado", { duration: 4000 });
            _this.getCatalogos();
            //this.nomeCatalogo = '';
            _this.newCatalogo = catalogo;
        }, function (erro) {
            _this.snackBar.open("Erro!", "Ocurreu um erro", { duration: 4000 });
            console.log(erro);
        });
    };
    GerirCatalogosComponent.prototype.addProduto = function () {
        if (this.newCatalogo == null) {
            this.snackBar.open("Erro!", "Selecione um catálogo", { duration: 4000 });
            return;
        }
        if (this.selectedProd == null) {
            this.snackBar.open("Erro!", "Selecione um produto", { duration: 4000 });
            return;
        }
        //this.produtosSelecionados[0] = this.selectedProd;
        this.catalogoSrv.adicionarProduto(this.newCatalogo.id, this.selectedProd.id).subscribe();
        this.snackBar.open("", "Produto " + this.selectedProd.nome + " adicionado", { duration: 4000 });
    };
    GerirCatalogosComponent.prototype.deleteCatalogo = function () {
        var _this = this;
        if (this.selectedCatalogo == null) {
            this.snackBar.open("Erro!", "Selecione um catálogo", { duration: 4000 });
            return;
        }
        this.catalogoSrv.deleteCatalogo(this.selectedCatalogo.id).subscribe(function (catalogo) {
            console.log(catalogo);
            _this.allCatalogos = _this.allCatalogos.filter(function (h) { return h.id != _this.selectedCatalogo.id; });
            _this.snackBar.open("Catálogo " + _this.selectedCatalogo.nome + " eliminado");
            _this.getCatalogos();
            _this.nomeUpdate = '';
        }, function (error) {
            _this.snackBar.open("Erro!", "Ocurreu um erro", { duration: 4000 });
            console.log(error);
        });
    };
    /*botaoEliminarEvent() {
       if (this.selectedProduto == null) {
        this.snackBar.open("Erro!", "Selecione um produto", { duration: 4000 });
        return;
      }
      this.deleteProduto();
    }*/
    GerirCatalogosComponent.prototype.botaoAdicionarEvent = function () {
        if (this.selectedProduto == null) {
            this.snackBar.open("Erro!", "Selecione um produto", { duration: 4000 });
            return;
        }
        this.adicionarProduto();
    };
    GerirCatalogosComponent.prototype.deleteProduto = function () {
        this.catalogoSrv.deleteProduto(this.selectedCatalogo.id, this.selectedProduto.id).subscribe();
        this.snackBar.open("", "Produto " + this.selectedProduto.nome + " eliminado", { duration: 4000 });
        this.getProdutosCatalogo();
        this.resetEliminar();
    };
    GerirCatalogosComponent.prototype.adicionarProduto = function () {
        this.catalogoSrv.adicionarProduto(this.selectedCatalogo.id, this.selectedProduto.id).subscribe();
        this.snackBar.open("", "Produto " + this.selectedProduto.nome + " adicionado", { duration: 4000 });
        this.getProdutosCatalogo();
        this.resetAdicionar();
    };
    /*produtoEliminarEvent(produto: Produto) {
      this.selectedProduto = produto;
      this.catalogoSrv.deleteProduto(this.selectedCatalogo.id,produto.id).subscribe();
      alert("Produto " + this.selectedProduto.nome + " eliminado!");
      this.getProdutosCatalogo();
    }*/
    /*produtoAdicionarEvent(produto: Produto){
      this.selectedProduto = produto;
      this.produtoSrv.addProduto(produto).subscribe();
    }*/
    /*lockEliminar() {
      this.disableEliminar = true;
    }
  
    unlockEliminar() {
      this.disableEliminar = false;
    }
  
    lockAdicionar(){
      this.disableAdicionar = true;
    }
  
    unlockAdicionar(){
      this.disableAdicionar = false;
    }*/
    GerirCatalogosComponent.prototype.resetEliminar = function () {
        this.produtoTextEliminar = "Escolha um produto";
        this.selectedProduto = null;
        this.getProdutosCatalogo();
        //this.lockEliminar();
    };
    GerirCatalogosComponent.prototype.resetAdicionar = function () {
        this.produtoTextAdicionar = "Escolha um produto";
        this.selectedProduto = null;
        this.getProdutosCatalogo();
        //this.lockAdicionar();
    };
    GerirCatalogosComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-gerir-catalogos',
            template: __webpack_require__(/*! ./gerir-catalogos.component.html */ "./src/app/material-component/gerir-catalogos/gerir-catalogos.component.html"),
            styles: [__webpack_require__(/*! ./gerir-catalogos.component.css */ "./src/app/material-component/gerir-catalogos/gerir-catalogos.component.css")]
        }),
        __metadata("design:paramtypes", [_gestor_catalogo_catalogo_service__WEBPACK_IMPORTED_MODULE_2__["CatalogoService"], _gestor_produto_produto_service__WEBPACK_IMPORTED_MODULE_3__["ProdutoService"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormBuilder"], _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatSnackBar"]])
    ], GerirCatalogosComponent);
    return GerirCatalogosComponent;
}());



/***/ }),

/***/ "./src/app/material-component/gerir-categoria/gerir-categoria.component.css":
/*!**********************************************************************************!*\
  !*** ./src/app/material-component/gerir-categoria/gerir-categoria.component.css ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/* Application-wide Styles */\r\nh1 {\r\n    color: rgb(0, 0, 0);\r\n    font-family: Arial, Helvetica, sans-serif;\r\n    font-size: 250%;\r\n    }\r\nh2, h3 {\r\n    color: rgb(0, 0, 0);\r\n    font-family: Arial, Helvetica, sans-serif;\r\n    font-weight: lighter;\r\n    }\r\nbody {\r\n    margin: 2em;\r\n}\r\nbody, input[type=\"text\"], button {\r\n    color: rgb(255, 255, 255);\r\n    font-family: Cambria, Georgia;\r\n}\r\n/* everywhere else */\r\n* {\r\n    color: rgb(0, 0, 0);\r\n    font-family: Cambria, Georgia;\r\n}\r\nnav a {\r\n    padding: 5px 10px;\r\n    text-decoration: none;\r\n    margin-top: 10px;\r\n    display: inline-block;\r\n    background-color: #eee;\r\n    border-radius: 4px;\r\n}\r\nnav a:visited, a:link {\r\n    color: #607D8B;\r\n}\r\nnav a:hover {\r\n    color: #039be5;\r\n    background-color: #CFD8DC;\r\n    }\r\nnav a.active {\r\n    color: #039be5;\r\n}\r\n#main{\r\n    display: table;\r\n    width: 100%;\r\n    height: 100vh;\r\n    text-align: center;\r\n}\r\n.fof{\r\n\t  display: table-cell;\r\n\t  vertical-align: middle;\r\n}\r\n.fof h1{\r\n\t  font-size: 50px;\r\n\t  display: inline-block;\r\n\t  padding-right: 12px;\r\n\t  -webkit-animation: type .5s alternate infinite;\r\n\t          animation: type .5s alternate infinite;\r\n}\r\n@-webkit-keyframes type{\r\n\t  from{box-shadow: inset -3px 0px 0px #888;}\r\n\t  to{box-shadow: inset -3px 0px 0px transparent;}\r\n}\r\n@keyframes type{\r\n\t  from{box-shadow: inset -3px 0px 0px #888;}\r\n\t  to{box-shadow: inset -3px 0px 0px transparent;}\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWF0ZXJpYWwtY29tcG9uZW50L2dlcmlyLWNhdGVnb3JpYS9nZXJpci1jYXRlZ29yaWEuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSw2QkFBNkI7QUFDN0I7SUFDSSxvQkFBb0I7SUFDcEIsMENBQTBDO0lBQzFDLGdCQUFnQjtLQUNmO0FBQ0w7SUFDSSxvQkFBb0I7SUFDcEIsMENBQTBDO0lBQzFDLHFCQUFxQjtLQUNwQjtBQUNMO0lBQ0ksWUFBWTtDQUNmO0FBQ0Q7SUFDSSwwQkFBMEI7SUFDMUIsOEJBQThCO0NBQ2pDO0FBQ0QscUJBQXFCO0FBQ3JCO0lBQ0ksb0JBQW9CO0lBQ3BCLDhCQUE4QjtDQUNqQztBQUVEO0lBQ0ksa0JBQWtCO0lBQ2xCLHNCQUFzQjtJQUN0QixpQkFBaUI7SUFDakIsc0JBQXNCO0lBQ3RCLHVCQUF1QjtJQUN2QixtQkFBbUI7Q0FDdEI7QUFDRDtJQUNJLGVBQWU7Q0FDbEI7QUFDRDtJQUNJLGVBQWU7SUFDZiwwQkFBMEI7S0FDekI7QUFDTDtJQUNJLGVBQWU7Q0FDbEI7QUFFQTtJQUNHLGVBQWU7SUFDZixZQUFZO0lBQ1osY0FBYztJQUNkLG1CQUFtQjtDQUN0QjtBQUVEO0dBQ0csb0JBQW9CO0dBQ3BCLHVCQUF1QjtDQUN6QjtBQUVEO0dBQ0csZ0JBQWdCO0dBQ2hCLHNCQUFzQjtHQUN0QixvQkFBb0I7R0FDcEIsK0NBQXVDO1dBQXZDLHVDQUF1QztDQUN6QztBQUVEO0dBQ0csS0FBSyxvQ0FBb0MsQ0FBQztHQUMxQyxHQUFHLDJDQUEyQyxDQUFDO0NBQ2pEO0FBSEQ7R0FDRyxLQUFLLG9DQUFvQyxDQUFDO0dBQzFDLEdBQUcsMkNBQTJDLENBQUM7Q0FDakQiLCJmaWxlIjoic3JjL2FwcC9tYXRlcmlhbC1jb21wb25lbnQvZ2VyaXItY2F0ZWdvcmlhL2dlcmlyLWNhdGVnb3JpYS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLyogQXBwbGljYXRpb24td2lkZSBTdHlsZXMgKi9cclxuaDEge1xyXG4gICAgY29sb3I6IHJnYigwLCAwLCAwKTtcclxuICAgIGZvbnQtZmFtaWx5OiBBcmlhbCwgSGVsdmV0aWNhLCBzYW5zLXNlcmlmO1xyXG4gICAgZm9udC1zaXplOiAyNTAlO1xyXG4gICAgfVxyXG5oMiwgaDMge1xyXG4gICAgY29sb3I6IHJnYigwLCAwLCAwKTtcclxuICAgIGZvbnQtZmFtaWx5OiBBcmlhbCwgSGVsdmV0aWNhLCBzYW5zLXNlcmlmO1xyXG4gICAgZm9udC13ZWlnaHQ6IGxpZ2h0ZXI7XHJcbiAgICB9XHJcbmJvZHkge1xyXG4gICAgbWFyZ2luOiAyZW07XHJcbn1cclxuYm9keSwgaW5wdXRbdHlwZT1cInRleHRcIl0sIGJ1dHRvbiB7XHJcbiAgICBjb2xvcjogcmdiKDI1NSwgMjU1LCAyNTUpO1xyXG4gICAgZm9udC1mYW1pbHk6IENhbWJyaWEsIEdlb3JnaWE7XHJcbn1cclxuLyogZXZlcnl3aGVyZSBlbHNlICovXHJcbioge1xyXG4gICAgY29sb3I6IHJnYigwLCAwLCAwKTtcclxuICAgIGZvbnQtZmFtaWx5OiBDYW1icmlhLCBHZW9yZ2lhO1xyXG59XHJcblxyXG5uYXYgYSB7XHJcbiAgICBwYWRkaW5nOiA1cHggMTBweDtcclxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICAgIG1hcmdpbi10b3A6IDEwcHg7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWVlO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNHB4O1xyXG59XHJcbm5hdiBhOnZpc2l0ZWQsIGE6bGluayB7XHJcbiAgICBjb2xvcjogIzYwN0Q4QjtcclxufVxyXG5uYXYgYTpob3ZlciB7XHJcbiAgICBjb2xvcjogIzAzOWJlNTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNDRkQ4REM7XHJcbiAgICB9XHJcbm5hdiBhLmFjdGl2ZSB7XHJcbiAgICBjb2xvcjogIzAzOWJlNTtcclxufVxyXG5cclxuICNtYWlue1xyXG4gICAgZGlzcGxheTogdGFibGU7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogMTAwdmg7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuXHJcbi5mb2Z7XHJcblx0ICBkaXNwbGF5OiB0YWJsZS1jZWxsO1xyXG5cdCAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcclxufVxyXG5cclxuLmZvZiBoMXtcclxuXHQgIGZvbnQtc2l6ZTogNTBweDtcclxuXHQgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuXHQgIHBhZGRpbmctcmlnaHQ6IDEycHg7XHJcblx0ICBhbmltYXRpb246IHR5cGUgLjVzIGFsdGVybmF0ZSBpbmZpbml0ZTtcclxufVxyXG5cclxuQGtleWZyYW1lcyB0eXBle1xyXG5cdCAgZnJvbXtib3gtc2hhZG93OiBpbnNldCAtM3B4IDBweCAwcHggIzg4ODt9XHJcblx0ICB0b3tib3gtc2hhZG93OiBpbnNldCAtM3B4IDBweCAwcHggdHJhbnNwYXJlbnQ7fVxyXG59Il19 */"

/***/ }),

/***/ "./src/app/material-component/gerir-categoria/gerir-categoria.component.html":
/*!***********************************************************************************!*\
  !*** ./src/app/material-component/gerir-categoria/gerir-categoria.component.html ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"!flagServer\">\r\n  <div fxLayout=\"row\" fxLayoutWrap=\"wrap\">\r\n    <div fxFlex.gt-sm=\"100%\" fxFlex=\"100\">\r\n      <mat-card>\r\n        <mat-card-content>\r\n          <div style=\"text-align:left\">\r\n            <h1>Gestão de Categorias</h1>\r\n            <mat-tab-group>\r\n              <mat-tab label=\"Criar Categoria\">\r\n                <div *ngIf=\"flag\" style=\"text-align: left\">\r\n                  <h2>Criar Categoria</h2>\r\n                  <mat-form-field>\r\n                    <input matInput placeholder=\"Descrição Categoria\" autocomplete=\"off\" #categoriaDescricaoUpdate>\r\n                  </mat-form-field>\r\n                  <mat-form-field>\r\n                    <mat-select [(value)]=\"selected\" placeholder=\"Categoria Pai\" #selectCategoriaCriar>\r\n                      <mat-option [value]=\"0\">Sem Categoria Pai</mat-option>\r\n                      <mat-option *ngFor=\"let cat of allCategorias\" [value]=\"cat.id\">\r\n                        ID: {{cat.id}} - {{cat.descricao}}\r\n                      </mat-option>\r\n                    </mat-select>\r\n                  </mat-form-field>\r\n                  <p></p>\r\n                  <div style=\"text-align:left\">\r\n                    <nav>\r\n                      <button mat-raised-button color=\"primary\" (click)=\"addCategoriaHTML(categoriaDescricaoUpdate.value,selectCategoriaCriar.value);categoriaDescricaoUpdate.value=''\">Criar</button>\r\n                    </nav>\r\n                  </div>\r\n                </div>\r\n              </mat-tab>\r\n\r\n              <mat-tab label=\"Editar Categoria\">\r\n                <div *ngIf=\"flag\" style=\"text-align: left\">\r\n                  <h2>Selecione a Categoria</h2>\r\n                  <mat-form-field>\r\n                    <mat-select placeholder=\"Categoria Selecionada\" [(ngModel)]=\"selectedCategoria\">\r\n                      <mat-option *ngFor=\"let cat of allCategorias\" [value]=\"cat\" (click)=\"selecionarCategoria(cat)\">\r\n                        ID: {{cat.id}} - {{cat.descricao}}\r\n                      </mat-option>\r\n                    </mat-select>\r\n                  </mat-form-field>\r\n                  <h2>Editar Categoria</h2>\r\n                  <p></p>\r\n                  <mat-form-field>\r\n                    <input matInput placeholder=\"Nova Descrição\" autocomplete=\"off\" [(ngModel)]=\"categoriaDescricaoUpdate\">\r\n                  </mat-form-field>\r\n                  <mat-form-field>\r\n                    <mat-select placeholder=\"Categoria Pai\" [(ngModel)]=\"selectedCategoriaPaiId\">\r\n                      <mat-option [value]=\"0\">Sem Categoria Pai</mat-option>\r\n                      <mat-option *ngFor=\"let cat of allCategorias\" [value]=\"cat.id\">\r\n                        ID: {{cat.id}} - {{cat.descricao}}\r\n                      </mat-option>\r\n                    </mat-select>\r\n                  </mat-form-field>\r\n                  <p></p>\r\n                  <div style=\"text-align:left\">\r\n                    <nav>\r\n                      <button mat-raised-button color=\"primary\" (click)=\"updateCategoriaHTML()\">Editar</button>\r\n                      <button mat-raised-button color=\"warn\" (click)=\"deleteCategoria()\">Eliminar</button>\r\n                    </nav>\r\n                  </div>\r\n                </div>\r\n              </mat-tab>\r\n\r\n              <mat-tab label=\"Listar Categorias\">\r\n                <div *ngIf=\"flag\" style=\"text-align: left\">\r\n                  <h2>Listar Categorias</h2>\r\n                  <mat-form-field>\r\n                    <mat-select placeholder=\"Lista de Categorias\">\r\n                      <mat-option *ngFor=\"let cat of allCategorias\" id=\"{{cat.id}}\" value=\"\">\r\n                        ID: {{cat.id}} - Descrição: {{cat.descricao}}\r\n                      </mat-option>\r\n                    </mat-select>\r\n                  </mat-form-field>\r\n                </div>\r\n\r\n              </mat-tab>\r\n            </mat-tab-group>\r\n\r\n\r\n\r\n            <ng-template #noError>\r\n\r\n\r\n\r\n\r\n\r\n            </ng-template>\r\n          </div>\r\n        </mat-card-content>\r\n      </mat-card>\r\n    </div>\r\n  </div>\r\n</div>\r\n<div *ngIf=\"flagServer\">\r\n  <div id=\"main\">\r\n    <div class=\"fof\">\r\n      <h1>Não foi possível aceder ao servidor.</h1>\r\n    </div>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "./src/app/material-component/gerir-categoria/gerir-categoria.component.ts":
/*!*********************************************************************************!*\
  !*** ./src/app/material-component/gerir-categoria/gerir-categoria.component.ts ***!
  \*********************************************************************************/
/*! exports provided: GerirCategoriaComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GerirCategoriaComponent", function() { return GerirCategoriaComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _gestor_categoria_categoria__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../gestor/categoria/categoria */ "./src/app/gestor/categoria/categoria.ts");
/* harmony import */ var _gestor_categoria_categoria_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../gestor/categoria/categoria.service */ "./src/app/gestor/categoria/categoria.service.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var GerirCategoriaComponent = /** @class */ (function () {
    function GerirCategoriaComponent(categoriaSrv, snackBar) {
        this.categoriaSrv = categoriaSrv;
        this.snackBar = snackBar;
        this.flagServer = false;
        this.flag = true;
        this.selectedCategoriaPaiId = 0;
        this.selectedCategoria = null;
        this.categoriaDescricaoUpdate = "";
    }
    GerirCategoriaComponent.prototype.ngOnInit = function () {
        this.getCategorias();
    };
    GerirCategoriaComponent.prototype.getCategorias = function () {
        var _this = this;
        this.categoriaSrv.getCategorias().subscribe(function (data) {
            _this.allCategorias = data;
        }, function (error) {
            _this.flagServer = true;
            console.log(error);
        });
    };
    GerirCategoriaComponent.prototype.addCategoriaHTML = function (descricao, categoriaPaiId) {
        var _this = this;
        descricao = descricao.trim();
        if (!descricao) {
            this.snackBar.open("Erro!", "Insira uma descrição", { duration: 4000 });
            return;
        }
        if (!descricao) {
            return;
        }
        this.categoriaSrv.addCategoria({ descricao: descricao, categoriaPaiId: categoriaPaiId })
            .subscribe(function (categoria) {
            _this.allCategorias.push(categoria);
            _this.snackBar.open("Sucesso!", "Categoria Adicionada", { duration: 4000 });
        }, function (erro) {
            _this.snackBar.open("Erro!", "Ocurreu um erro", { duration: 4000 });
            console.log(erro);
        });
    };
    GerirCategoriaComponent.prototype.selecionarCategoria = function (cat) {
        this.categoriaDescricaoUpdate = cat.descricao;
        this.selectedCategoriaPaiId = cat.categoriaPaiId;
    };
    GerirCategoriaComponent.prototype.updateCategoriaHTML = function () {
        var _this = this;
        if (this.selectedCategoria == null) {
            this.snackBar.open("Erro!", "Selecione uma Categoria", { duration: 4000 });
            return;
        }
        var categoriaFinal = new _gestor_categoria_categoria__WEBPACK_IMPORTED_MODULE_1__["Categoria"];
        categoriaFinal.id = this.selectedCategoria.id;
        categoriaFinal.descricao = this.categoriaDescricaoUpdate.trim();
        categoriaFinal.categoriaPaiId = this.selectedCategoriaPaiId;
        if (!categoriaFinal.descricao) {
            this.snackBar.open("Erro!", "Insira uma descrição", { duration: 4000 });
            return;
        }
        if (categoriaFinal.id == categoriaFinal.categoriaPaiId) {
            this.snackBar.open("Erro!", "A Categoria Pai não pode ser a própria Categoria", { duration: 4000 });
            return;
        }
        this.categoriaSrv.updateCategoria(this.selectedCategoria.id, categoriaFinal)
            .subscribe(function (categoria) {
            _this.snackBar.open("Sucesso!", "Categoria Editada", { duration: 4000 });
            _this.getCategorias();
            _this.categoriaDescricaoUpdate = '';
            _this.selectedCategoria = null;
        }, function (erro) {
            _this.snackBar.open("Erro!", "Ocurreu um erro", { duration: 4000 });
            console.log(erro);
        });
    };
    GerirCategoriaComponent.prototype.deleteCategoria = function () {
        var _this = this;
        if (this.selectedCategoria == null) {
            this.snackBar.open("Erro!", "Selecione uma Categoria", { duration: 4000 });
            return;
        }
        this.categoriaSrv.deleteCategoria(this.selectedCategoria.id).subscribe(function (categoria) {
            _this.snackBar.open("Sucesso!", "Categoria Eliminada", { duration: 4000 });
            _this.getCategorias();
            _this.categoriaDescricaoUpdate = '';
            _this.selectedCategoria = null;
        }, function (erro) {
            _this.snackBar.open("Erro!", erro.error, { duration: 4000 });
            console.log(erro);
        });
    };
    GerirCategoriaComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-gerir-categoria',
            template: __webpack_require__(/*! ./gerir-categoria.component.html */ "./src/app/material-component/gerir-categoria/gerir-categoria.component.html"),
            styles: [__webpack_require__(/*! ./gerir-categoria.component.css */ "./src/app/material-component/gerir-categoria/gerir-categoria.component.css")]
        }),
        __metadata("design:paramtypes", [_gestor_categoria_categoria_service__WEBPACK_IMPORTED_MODULE_2__["CategoriaService"], _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatSnackBar"]])
    ], GerirCategoriaComponent);
    return GerirCategoriaComponent;
}());



/***/ }),

/***/ "./src/app/material-component/gerir-colecoes/gerir-colecoes.component.css":
/*!********************************************************************************!*\
  !*** ./src/app/material-component/gerir-colecoes/gerir-colecoes.component.css ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "    /* Application-wide Styles */\r\n    h1 {\r\n        color: rgb(0, 0, 0);\r\n        font-family: Arial, Helvetica, sans-serif;\r\n        font-size: 250%;\r\n      }\r\n    h2, h3 {\r\n        color: rgb(0, 0, 0);\r\n        font-family: Arial, Helvetica, sans-serif;\r\n        font-weight: lighter;\r\n      }\r\n    body {\r\n        margin: 2em;\r\n      }\r\n    body, input[type=\"text\"], button {\r\n        color: rgb(255, 255, 255);\r\n        font-family: Cambria, Georgia;\r\n      }\r\n    /* everywhere else */\r\n    * {\r\n        color: rgb(0, 0, 0);\r\n        font-family: Cambria, Georgia;\r\n      }\r\n    nav a {\r\n        padding: 5px 10px;\r\n        text-decoration: none;\r\n        margin-top: 10px;\r\n        display: inline-block;\r\n        background-color: #eee;\r\n        border-radius: 4px;\r\n      }\r\n    nav a:visited, a:link {\r\n        color: #607D8B;\r\n      }\r\n    nav a:hover {\r\n        color: #039be5;\r\n        background-color: #CFD8DC;\r\n      }\r\n    nav a.active {\r\n        color: #039be5;\r\n      }\r\n    #main{\r\n    display: table;\r\n    width: 100%;\r\n    height: 100vh;\r\n    text-align: center;\r\n}\r\n    .fof{\r\n\t  display: table-cell;\r\n\t  vertical-align: middle;\r\n}\r\n    .fof h1{\r\n\t  font-size: 50px;\r\n\t  display: inline-block;\r\n\t  padding-right: 12px;\r\n\t  -webkit-animation: type .5s alternate infinite;\r\n\t          animation: type .5s alternate infinite;\r\n}\r\n    @-webkit-keyframes type{\r\n\t  from{box-shadow: inset -3px 0px 0px #888;}\r\n\t  to{box-shadow: inset -3px 0px 0px transparent;}\r\n}\r\n    @keyframes type{\r\n\t  from{box-shadow: inset -3px 0px 0px #888;}\r\n\t  to{box-shadow: inset -3px 0px 0px transparent;}\r\n}\r\n\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWF0ZXJpYWwtY29tcG9uZW50L2dlcmlyLWNvbGVjb2VzL2dlcmlyLWNvbGVjb2VzLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IklBQUksNkJBQTZCO0lBQzdCO1FBQ0ksb0JBQW9CO1FBQ3BCLDBDQUEwQztRQUMxQyxnQkFBZ0I7T0FDakI7SUFDRDtRQUNFLG9CQUFvQjtRQUNwQiwwQ0FBMEM7UUFDMUMscUJBQXFCO09BQ3RCO0lBQ0Q7UUFDRSxZQUFZO09BQ2I7SUFDRDtRQUNFLDBCQUEwQjtRQUMxQiw4QkFBOEI7T0FDL0I7SUFDRCxxQkFBcUI7SUFDckI7UUFDRSxvQkFBb0I7UUFDcEIsOEJBQThCO09BQy9CO0lBRUQ7UUFDRSxrQkFBa0I7UUFDbEIsc0JBQXNCO1FBQ3RCLGlCQUFpQjtRQUNqQixzQkFBc0I7UUFDdEIsdUJBQXVCO1FBQ3ZCLG1CQUFtQjtPQUNwQjtJQUNEO1FBQ0UsZUFBZTtPQUNoQjtJQUNEO1FBQ0UsZUFBZTtRQUNmLDBCQUEwQjtPQUMzQjtJQUNEO1FBQ0UsZUFBZTtPQUNoQjtJQUVMO0lBQ0UsZUFBZTtJQUNmLFlBQVk7SUFDWixjQUFjO0lBQ2QsbUJBQW1CO0NBQ3RCO0lBRUQ7R0FDRyxvQkFBb0I7R0FDcEIsdUJBQXVCO0NBQ3pCO0lBRUQ7R0FDRyxnQkFBZ0I7R0FDaEIsc0JBQXNCO0dBQ3RCLG9CQUFvQjtHQUNwQiwrQ0FBdUM7V0FBdkMsdUNBQXVDO0NBQ3pDO0lBRUQ7R0FDRyxLQUFLLG9DQUFvQyxDQUFDO0dBQzFDLEdBQUcsMkNBQTJDLENBQUM7Q0FDakQ7SUFIRDtHQUNHLEtBQUssb0NBQW9DLENBQUM7R0FDMUMsR0FBRywyQ0FBMkMsQ0FBQztDQUNqRCIsImZpbGUiOiJzcmMvYXBwL21hdGVyaWFsLWNvbXBvbmVudC9nZXJpci1jb2xlY29lcy9nZXJpci1jb2xlY29lcy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiICAgIC8qIEFwcGxpY2F0aW9uLXdpZGUgU3R5bGVzICovXHJcbiAgICBoMSB7XHJcbiAgICAgICAgY29sb3I6IHJnYigwLCAwLCAwKTtcclxuICAgICAgICBmb250LWZhbWlseTogQXJpYWwsIEhlbHZldGljYSwgc2Fucy1zZXJpZjtcclxuICAgICAgICBmb250LXNpemU6IDI1MCU7XHJcbiAgICAgIH1cclxuICAgICAgaDIsIGgzIHtcclxuICAgICAgICBjb2xvcjogcmdiKDAsIDAsIDApO1xyXG4gICAgICAgIGZvbnQtZmFtaWx5OiBBcmlhbCwgSGVsdmV0aWNhLCBzYW5zLXNlcmlmO1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiBsaWdodGVyO1xyXG4gICAgICB9XHJcbiAgICAgIGJvZHkge1xyXG4gICAgICAgIG1hcmdpbjogMmVtO1xyXG4gICAgICB9XHJcbiAgICAgIGJvZHksIGlucHV0W3R5cGU9XCJ0ZXh0XCJdLCBidXR0b24ge1xyXG4gICAgICAgIGNvbG9yOiByZ2IoMjU1LCAyNTUsIDI1NSk7XHJcbiAgICAgICAgZm9udC1mYW1pbHk6IENhbWJyaWEsIEdlb3JnaWE7XHJcbiAgICAgIH1cclxuICAgICAgLyogZXZlcnl3aGVyZSBlbHNlICovXHJcbiAgICAgICoge1xyXG4gICAgICAgIGNvbG9yOiByZ2IoMCwgMCwgMCk7XHJcbiAgICAgICAgZm9udC1mYW1pbHk6IENhbWJyaWEsIEdlb3JnaWE7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIG5hdiBhIHtcclxuICAgICAgICBwYWRkaW5nOiA1cHggMTBweDtcclxuICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgICAgICAgbWFyZ2luLXRvcDogMTBweDtcclxuICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2VlZTtcclxuICAgICAgICBib3JkZXItcmFkaXVzOiA0cHg7XHJcbiAgICAgIH1cclxuICAgICAgbmF2IGE6dmlzaXRlZCwgYTpsaW5rIHtcclxuICAgICAgICBjb2xvcjogIzYwN0Q4QjtcclxuICAgICAgfVxyXG4gICAgICBuYXYgYTpob3ZlciB7XHJcbiAgICAgICAgY29sb3I6ICMwMzliZTU7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI0NGRDhEQztcclxuICAgICAgfVxyXG4gICAgICBuYXYgYS5hY3RpdmUge1xyXG4gICAgICAgIGNvbG9yOiAjMDM5YmU1O1xyXG4gICAgICB9XHJcblxyXG4gICNtYWlue1xyXG4gICAgZGlzcGxheTogdGFibGU7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogMTAwdmg7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuXHJcbi5mb2Z7XHJcblx0ICBkaXNwbGF5OiB0YWJsZS1jZWxsO1xyXG5cdCAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcclxufVxyXG5cclxuLmZvZiBoMXtcclxuXHQgIGZvbnQtc2l6ZTogNTBweDtcclxuXHQgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuXHQgIHBhZGRpbmctcmlnaHQ6IDEycHg7XHJcblx0ICBhbmltYXRpb246IHR5cGUgLjVzIGFsdGVybmF0ZSBpbmZpbml0ZTtcclxufVxyXG5cclxuQGtleWZyYW1lcyB0eXBle1xyXG5cdCAgZnJvbXtib3gtc2hhZG93OiBpbnNldCAtM3B4IDBweCAwcHggIzg4ODt9XHJcblx0ICB0b3tib3gtc2hhZG93OiBpbnNldCAtM3B4IDBweCAwcHggdHJhbnNwYXJlbnQ7fVxyXG59XHJcblxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/material-component/gerir-colecoes/gerir-colecoes.component.html":
/*!*********************************************************************************!*\
  !*** ./src/app/material-component/gerir-colecoes/gerir-colecoes.component.html ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"!flagServer\"> \r\n  <div fxLayout=\"row\" fxLayoutWrap=\"wrap\">\r\n    <div fxFlex.gt-sm=\"100%\" fxFlex=\"100\">\r\n      <mat-card>\r\n        <mat-card-content>\r\n          <div style=\"text-align:left\">\r\n            <h1>Gestão de Coleções</h1>\r\n            <mat-tab-group>\r\n\r\n              <mat-tab label=\"Criar Colecao\">\r\n                <div style=\"text-align: left\">\r\n                  <h2>Criar Nova Coleção</h2>\r\n                  <mat-form-field>\r\n                    <input matInput placeholder=\"Nome Colecao\" autocomplete=\"off\" [(ngModel)]=\"nomeColecao\">\r\n                  </mat-form-field>\r\n                  <button mat-raised-button color=\"primary\" (click)=\"addColecao()\">Criar</button>\r\n\r\n                  <p></p>\r\n                  <h2>Selecionar Produtos</h2>\r\n                  <mat-form-field>\r\n                    <mat-select placeholder=\"Selecionar\" [(ngModel)]=\"selectedProduto\">\r\n                      <mat-option *ngFor=\"let prod of allProdutos\" [value]=\"prod\" (click)=\"selectProduto(prod)\">\r\n                        {{prod.nome}}\r\n                      </mat-option>\r\n                    </mat-select>\r\n                  </mat-form-field>\r\n                  <div style=\"text-align:left\">\r\n                    <nav>\r\n                      <button mat-raised-button color=\"primary\" (click)=\"addProduto()\">Adicionar Produto</button>\r\n                    </nav>\r\n                  </div>\r\n                </div>\r\n              </mat-tab>\r\n\r\n              <mat-tab label=\"Editar Colecao\">\r\n                <div style=\"text-align: left\">\r\n                  <h2>Selecione uma Coleção</h2>\r\n                  <mat-form-field>\r\n                    <mat-select placeholder=\"Selecionar\" [(ngModel)]=\"selectedColecao\">\r\n                      <mat-option *ngFor=\"let col of allColecoes\" [value]=\"col\" (click)=\"selecionarColecao(col)\">\r\n                        {{col.nome}}\r\n                      </mat-option>\r\n                    </mat-select>\r\n                  </mat-form-field>\r\n                  <h2>Editar Coleção</h2>\r\n                  <p></p>\r\n                  <mat-form-field>\r\n                    <input matInput placeholder=\"Editar Nome\" [(ngModel)]=\"nomeUpdate\">\r\n                  </mat-form-field>\r\n                  <p></p>\r\n                  <div style=\"text-align:left\">\r\n                    <nav>\r\n                      <button mat-raised-button color=\"primary\" (click)=\"updateColecaoHTML()\">Editar</button>\r\n                      <button mat-raised-button color=\"warn\" (click)=\"deleteColecao()\">Eliminar</button>\r\n                    </nav>\r\n                  </div>\r\n                </div>\r\n\r\n                <div fxLayout=\"row\">\r\n                  <div fxFlex.gt-sm=\"100%\">\r\n                    <mat-card>\r\n                      <mat-card-content>\r\n                        <mat-card-title> Eliminar um produto </mat-card-title>\r\n                        <mat-card-subtitle> Por favor escolha um produto da lista abaixo para ser eliminado.\r\n                        </mat-card-subtitle>\r\n                        <mat-form-field *ngIf=\"disabledProdutosList==false\">\r\n                          <mat-select placeholder=\"{{produtoTextEliminar}}\"  [(ngModel)]=\"selectedProduto\">\r\n                            <mat-option *ngFor=\"let prod of allProdutos\" [value]=\"prod\" (click)=\"selecionarProduto(prod)\">\r\n                              {{prod.nome}}\r\n                            </mat-option>\r\n                          </mat-select>\r\n                        </mat-form-field>\r\n                        <label *ngIf=\"disabledProdutosList==true\">\r\n                          Não existem produtos!\r\n                        </label>\r\n\r\n                        <p class=\"button-center\">\r\n                          <button mat-raised-button color=\"warn\" (click)=\"deleteProduto()\">Eliminar</button>\r\n                        </p>\r\n                      </mat-card-content>\r\n                    </mat-card>\r\n                  </div>\r\n                </div>\r\n\r\n                <div fxLayout=\"row\">\r\n                  <div fxFlex.gt-sm=\"100%\">\r\n                    <mat-card>\r\n                      <mat-card-content>\r\n                        <mat-card-title> Adicionar um produto </mat-card-title>\r\n                        <mat-card-subtitle> Por favor escolha um produto da lista abaixo para ser adicionado.\r\n                        </mat-card-subtitle>\r\n                        <mat-form-field *ngIf=\"disabledProdutosList==false\">\r\n                          <mat-select placeholder=\"{{produtoTextAdicionar}} \" [(ngModel)]=\"selectedProduto\">\r\n                            <mat-option *ngFor=\"let prod of allProdutos\" [value]=\"prod\" (click)=\"selecionarProduto(prod)\">\r\n                              {{prod.nome}}\r\n                            </mat-option>\r\n                          </mat-select>\r\n                        </mat-form-field>\r\n                        <label *ngIf=\"disabledProdutosList==true\">\r\n                          Não existem produtos!\r\n                        </label>\r\n\r\n                        <p class=\"button-center\">\r\n                          <button mat-raised-button color=\"primary\" (click)=\"adicionarProduto()\">Adicionar</button>\r\n                        </p>\r\n                      </mat-card-content>\r\n                    </mat-card>\r\n                  </div>\r\n                </div>\r\n              </mat-tab>\r\n\r\n              <mat-tab label=\"Listar Colecoes\">\r\n                <div style=\"text-align: left\">\r\n                  <h2>Listar Coleções</h2>\r\n                  <mat-form-field>\r\n                    <mat-select placeholder=\"Lista de Colecoes\" [(ngModel)]=\"selectedCatalogo\">\r\n                      <mat-option *ngFor=\"let col of allColecoes\" [value]=\"col\" (click)=\"selecionarColecao(col)\">\r\n                        {{col.nome}}\r\n                      </mat-option>\r\n                    </mat-select>\r\n                  </mat-form-field>\r\n                  <h3>Produtos da Coleção:</h3>\r\n                  <mat-list>\r\n                    <mat-list-item *ngFor=\"let prod of produtosColecao\">\r\n                      <h3>{{prod.nome}}</h3>\r\n                    </mat-list-item>\r\n                  </mat-list>\r\n                </div>\r\n\r\n              </mat-tab>\r\n            </mat-tab-group>\r\n            <ng-template #noError>\r\n            </ng-template>\r\n          </div>\r\n        </mat-card-content>\r\n      </mat-card>\r\n    </div>\r\n  </div>\r\n</div>\r\n<div *ngIf=\"flagServer\">\r\n  <div id=\"main\">\r\n    <div class=\"fof\">\r\n      <h1>Não foi possível aceder ao servidor.</h1>\r\n    </div>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "./src/app/material-component/gerir-colecoes/gerir-colecoes.component.ts":
/*!*******************************************************************************!*\
  !*** ./src/app/material-component/gerir-colecoes/gerir-colecoes.component.ts ***!
  \*******************************************************************************/
/*! exports provided: GerirColecoesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GerirColecoesComponent", function() { return GerirColecoesComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _gestor_colecao_colecao__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../gestor/colecao/colecao */ "./src/app/gestor/colecao/colecao.ts");
/* harmony import */ var _gestor_colecao_colecao_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../gestor/colecao/colecao.service */ "./src/app/gestor/colecao/colecao.service.ts");
/* harmony import */ var _gestor_produto_produto_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../gestor/produto/produto.service */ "./src/app/gestor/produto/produto.service.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var GerirColecoesComponent = /** @class */ (function () {
    function GerirColecoesComponent(colecaoSrv, produtoSrv, _formBuilder, snackBar) {
        this.colecaoSrv = colecaoSrv;
        this.produtoSrv = produtoSrv;
        this._formBuilder = _formBuilder;
        this.snackBar = snackBar;
        this.flagServer = false;
        //view toggles
        this.criarColecao = false;
        this.editarColecao = false;
        this.adicionaProduto = false;
        this.listarColecoes = false;
        //update
        this.selectedColecao = null;
        this.newColecao = null;
        this.selectedProduto = null;
        this.selectedProd = null;
        this.nomeColecao = "";
        this.nomeUpdate = "";
        this.disabledProdutosList = false;
        this.produtoTextEliminar = "Escolha um produto";
        this.disableEliminar = true;
        this.disableAdicionar = true;
        this.produtoTextAdicionar = "Escolha um produto";
    }
    GerirColecoesComponent.prototype.ngOnInit = function () {
        this.adicionarFormGroup = this._formBuilder.group({
            adicionarCtrl: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required]
        });
        this.getColecoes();
        this.getProdutos();
    };
    GerirColecoesComponent.prototype.clear = function () {
        this.nomeColecao = '';
        this.nomeUpdate = '';
        this.selectedColecao = null;
        this.selectedProduto = null;
        this.newColecao = null;
        this.selectedProd = null;
        this.produtosColecao = [];
    };
    GerirColecoesComponent.prototype.getColecoes = function () {
        var _this = this;
        this.colecaoSrv.getColecoes().subscribe(function (colecoes) {
            _this.allColecoes = colecoes;
        }, function (error) {
            _this.flagServer = true;
            _this.statusMessage = "Error: Service Unavailable";
        });
    };
    GerirColecoesComponent.prototype.getProdutos = function () {
        var _this = this;
        this.produtoSrv.getProdutos().subscribe(function (produtos) {
            _this.allProdutos = produtos;
        }, function (error) {
            _this.flagServer = true;
            _this.statusMessage = "Error: Service Unavailable";
        });
    };
    GerirColecoesComponent.prototype.getProdutosColecao = function () {
        var _this = this;
        var id = this.selectedColecao.id;
        this.colecaoSrv.getProdutos(id).subscribe(function (produtos) {
            _this.produtosColecao = produtos;
        }, function (error) { _this.statusMessage = "Error: Service Unavailable"; });
    };
    GerirColecoesComponent.prototype.selecionarColecao = function (col) {
        this.nomeUpdate = col.nome;
        this.getProdutosColecao();
    };
    GerirColecoesComponent.prototype.selecionarProduto = function (prod) {
        this.selectedProduto = prod;
    };
    GerirColecoesComponent.prototype.selectProduto = function (prod) {
        this.selectedProd = prod;
    };
    GerirColecoesComponent.prototype.updateColecaoHTML = function () {
        var _this = this;
        if (this.selectedColecao == null) {
            this.snackBar.open("Erro!", "Selecione um Colecao", { duration: 4000 });
            return;
        }
        var colecaoFinal = new _gestor_colecao_colecao__WEBPACK_IMPORTED_MODULE_1__["Colecao"](this.selectedColecao.nome);
        colecaoFinal.id = this.selectedColecao.id;
        colecaoFinal.nome = this.selectedColecao.nome;
        if (!colecaoFinal.nome) {
            this.snackBar.open("Erro!", "Insira um nome", { duration: 4000 });
            return;
        }
        this.colecaoSrv.updateColecao(this.selectedColecao.id, colecaoFinal)
            .subscribe(function (colecao) {
            _this.snackBar.open("Sucesso!", "Coleção Editada", { duration: 4000 });
            _this.getColecoes();
            _this.nomeUpdate = '';
            _this.selectedColecao = null;
        }, function (erro) {
            _this.snackBar.open("Erro!", "Ocurreu um erro", { duration: 4000 });
            console.log(erro);
        });
    };
    GerirColecoesComponent.prototype.addColecao = function () {
        var _this = this;
        var nome = this.nomeColecao;
        nome = nome.trim();
        if (!nome) {
            this.snackBar.open("Erro!", "Insira um nome", { duration: 4000 });
            return;
        }
        if (!nome) {
            return;
        }
        var colecao = new _gestor_colecao_colecao__WEBPACK_IMPORTED_MODULE_1__["Colecao"](nome);
        this.colecaoSrv.addColecao(colecao)
            .subscribe(function (colecao) {
            _this.allColecoes.push(colecao);
            _this.snackBar.open("Sucesso!", "Colecção Adicionada", { duration: 4000 });
            _this.getColecoes();
            _this.newColecao = colecao;
        }, function (erro) {
            _this.snackBar.open("Erro!", "Ocurreu um erro", { duration: 4000 });
            console.log(erro);
        });
    };
    GerirColecoesComponent.prototype.addProduto = function () {
        if (this.newColecao == null) {
            this.snackBar.open("Erro!", "C", { duration: 4000 });
            return;
        }
        if (this.selectedProd == null) {
            this.snackBar.open("Erro!", "Selecione um produto", { duration: 4000 });
            return;
        }
        //this.produtosSelecionados[0] = this.selectedProd;
        this.colecaoSrv.adicionarProduto(this.newColecao.id, this.selectedProd.id).subscribe();
        this.snackBar.open("", "Produto " + this.selectedProd.nome + " adicionado", { duration: 4000 });
    };
    GerirColecoesComponent.prototype.deleteColecao = function () {
        if (this.selectedColecao == null) {
            this.snackBar.open("Erro!", "Selecione uma Coleção", { duration: 4000 });
            return;
        }
        console.log(this.selectedColecao);
        this.colecaoSrv.deleteColecao(this.selectedColecao.id).subscribe();
        this.getColecoes();
        this.nomeUpdate = '';
    };
    GerirColecoesComponent.prototype.botaoAdicionarEvent = function () {
        if (this.selectedProduto == null) {
            this.snackBar.open("Erro!", "Selecione um produto", { duration: 4000 });
            return;
        }
        this.adicionarProduto();
    };
    GerirColecoesComponent.prototype.deleteProduto = function () {
        this.colecaoSrv.deleteProduto(this.selectedColecao.id, this.selectedProduto.id).subscribe();
        this.snackBar.open("", "Produto " + this.selectedProduto.nome + " eliminado", { duration: 4000 });
        this.getProdutosColecao();
        this.resetEliminar();
    };
    GerirColecoesComponent.prototype.adicionarProduto = function () {
        this.colecaoSrv.adicionarProduto(this.selectedColecao.id, this.selectedProduto.id).subscribe();
        this.snackBar.open("", "Produto " + this.selectedProduto.nome + " adicionado", { duration: 4000 });
        this.getProdutosColecao();
        this.resetAdicionar();
    };
    GerirColecoesComponent.prototype.resetEliminar = function () {
        this.produtoTextEliminar = "Escolha um produto";
        this.selectedProduto = null;
        this.getProdutosColecao();
        //this.lockEliminar();
    };
    GerirColecoesComponent.prototype.resetAdicionar = function () {
        this.produtoTextAdicionar = "Escolha um produto";
        this.selectedProduto = null;
        this.getProdutosColecao();
        //this.lockAdicionar();
    };
    GerirColecoesComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-gerir-colecoes',
            template: __webpack_require__(/*! ./gerir-colecoes.component.html */ "./src/app/material-component/gerir-colecoes/gerir-colecoes.component.html"),
            styles: [__webpack_require__(/*! ./gerir-colecoes.component.css */ "./src/app/material-component/gerir-colecoes/gerir-colecoes.component.css")]
        }),
        __metadata("design:paramtypes", [_gestor_colecao_colecao_service__WEBPACK_IMPORTED_MODULE_2__["ColecaoService"], _gestor_produto_produto_service__WEBPACK_IMPORTED_MODULE_3__["ProdutoService"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormBuilder"], _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatSnackBar"]])
    ], GerirColecoesComponent);
    return GerirColecoesComponent;
}());



/***/ }),

/***/ "./src/app/material-component/gerir-encomendas/gerir-encomendas.component.css":
/*!************************************************************************************!*\
  !*** ./src/app/material-component/gerir-encomendas/gerir-encomendas.component.css ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "    /* Application-wide Styles */\r\n    h1 {\r\n        color: rgb(0, 0, 0);\r\n        font-family: Arial, Helvetica, sans-serif;\r\n        font-size: 250%;\r\n      }\r\n    h2, h3 {\r\n        color: rgb(0, 0, 0);\r\n        font-family: Arial, Helvetica, sans-serif;\r\n        font-weight: lighter;\r\n      }\r\n    body {\r\n        margin: 2em;\r\n      }\r\n    body, input[type=\"text\"], button {\r\n        color: rgb(255, 255, 255);\r\n        font-family: Cambria, Georgia;\r\n      }\r\n    /* everywhere else */\r\n    * {\r\n        color: rgb(0, 0, 0);\r\n        font-family: Cambria, Georgia;\r\n      }\r\n    nav a {\r\n        padding: 5px 10px;\r\n        text-decoration: none;\r\n        margin-top: 10px;\r\n        display: inline-block;\r\n        background-color: #eee;\r\n        border-radius: 4px;\r\n      }\r\n    nav a:visited, a:link {\r\n        color: #607D8B;\r\n      }\r\n    nav a:hover {\r\n        color: #039be5;\r\n        background-color: #CFD8DC;\r\n      }\r\n    nav a.active {\r\n        color: #039be5;\r\n      }\r\n    #main{\r\n    display: table;\r\n    width: 100%;\r\n    height: 100vh;\r\n    text-align: center;\r\n}\r\n    .fof{\r\n\t  display: table-cell;\r\n\t  vertical-align: middle;\r\n}\r\n    .fof h1{\r\n\t  font-size: 50px;\r\n\t  display: inline-block;\r\n\t  padding-right: 12px;\r\n\t  -webkit-animation: type .5s alternate infinite;\r\n\t          animation: type .5s alternate infinite;\r\n}\r\n    @-webkit-keyframes type{\r\n\t  from{box-shadow: inset -3px 0px 0px #888;}\r\n\t  to{box-shadow: inset -3px 0px 0px transparent;}\r\n}\r\n    @keyframes type{\r\n\t  from{box-shadow: inset -3px 0px 0px #888;}\r\n\t  to{box-shadow: inset -3px 0px 0px transparent;}\r\n}\r\n\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWF0ZXJpYWwtY29tcG9uZW50L2dlcmlyLWVuY29tZW5kYXMvZ2VyaXItZW5jb21lbmRhcy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJJQUFJLDZCQUE2QjtJQUM3QjtRQUNJLG9CQUFvQjtRQUNwQiwwQ0FBMEM7UUFDMUMsZ0JBQWdCO09BQ2pCO0lBQ0Q7UUFDRSxvQkFBb0I7UUFDcEIsMENBQTBDO1FBQzFDLHFCQUFxQjtPQUN0QjtJQUNEO1FBQ0UsWUFBWTtPQUNiO0lBQ0Q7UUFDRSwwQkFBMEI7UUFDMUIsOEJBQThCO09BQy9CO0lBQ0QscUJBQXFCO0lBQ3JCO1FBQ0Usb0JBQW9CO1FBQ3BCLDhCQUE4QjtPQUMvQjtJQUVEO1FBQ0Usa0JBQWtCO1FBQ2xCLHNCQUFzQjtRQUN0QixpQkFBaUI7UUFDakIsc0JBQXNCO1FBQ3RCLHVCQUF1QjtRQUN2QixtQkFBbUI7T0FDcEI7SUFDRDtRQUNFLGVBQWU7T0FDaEI7SUFDRDtRQUNFLGVBQWU7UUFDZiwwQkFBMEI7T0FDM0I7SUFDRDtRQUNFLGVBQWU7T0FDaEI7SUFFTDtJQUNFLGVBQWU7SUFDZixZQUFZO0lBQ1osY0FBYztJQUNkLG1CQUFtQjtDQUN0QjtJQUVEO0dBQ0csb0JBQW9CO0dBQ3BCLHVCQUF1QjtDQUN6QjtJQUVEO0dBQ0csZ0JBQWdCO0dBQ2hCLHNCQUFzQjtHQUN0QixvQkFBb0I7R0FDcEIsK0NBQXVDO1dBQXZDLHVDQUF1QztDQUN6QztJQUVEO0dBQ0csS0FBSyxvQ0FBb0MsQ0FBQztHQUMxQyxHQUFHLDJDQUEyQyxDQUFDO0NBQ2pEO0lBSEQ7R0FDRyxLQUFLLG9DQUFvQyxDQUFDO0dBQzFDLEdBQUcsMkNBQTJDLENBQUM7Q0FDakQiLCJmaWxlIjoic3JjL2FwcC9tYXRlcmlhbC1jb21wb25lbnQvZ2VyaXItZW5jb21lbmRhcy9nZXJpci1lbmNvbWVuZGFzLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIgICAgLyogQXBwbGljYXRpb24td2lkZSBTdHlsZXMgKi9cclxuICAgIGgxIHtcclxuICAgICAgICBjb2xvcjogcmdiKDAsIDAsIDApO1xyXG4gICAgICAgIGZvbnQtZmFtaWx5OiBBcmlhbCwgSGVsdmV0aWNhLCBzYW5zLXNlcmlmO1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMjUwJTtcclxuICAgICAgfVxyXG4gICAgICBoMiwgaDMge1xyXG4gICAgICAgIGNvbG9yOiByZ2IoMCwgMCwgMCk7XHJcbiAgICAgICAgZm9udC1mYW1pbHk6IEFyaWFsLCBIZWx2ZXRpY2EsIHNhbnMtc2VyaWY7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IGxpZ2h0ZXI7XHJcbiAgICAgIH1cclxuICAgICAgYm9keSB7XHJcbiAgICAgICAgbWFyZ2luOiAyZW07XHJcbiAgICAgIH1cclxuICAgICAgYm9keSwgaW5wdXRbdHlwZT1cInRleHRcIl0sIGJ1dHRvbiB7XHJcbiAgICAgICAgY29sb3I6IHJnYigyNTUsIDI1NSwgMjU1KTtcclxuICAgICAgICBmb250LWZhbWlseTogQ2FtYnJpYSwgR2VvcmdpYTtcclxuICAgICAgfVxyXG4gICAgICAvKiBldmVyeXdoZXJlIGVsc2UgKi9cclxuICAgICAgKiB7XHJcbiAgICAgICAgY29sb3I6IHJnYigwLCAwLCAwKTtcclxuICAgICAgICBmb250LWZhbWlseTogQ2FtYnJpYSwgR2VvcmdpYTtcclxuICAgICAgfVxyXG5cclxuICAgICAgbmF2IGEge1xyXG4gICAgICAgIHBhZGRpbmc6IDVweCAxMHB4O1xyXG4gICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICAgICAgICBtYXJnaW4tdG9wOiAxMHB4O1xyXG4gICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWVlO1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDRweDtcclxuICAgICAgfVxyXG4gICAgICBuYXYgYTp2aXNpdGVkLCBhOmxpbmsge1xyXG4gICAgICAgIGNvbG9yOiAjNjA3RDhCO1xyXG4gICAgICB9XHJcbiAgICAgIG5hdiBhOmhvdmVyIHtcclxuICAgICAgICBjb2xvcjogIzAzOWJlNTtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjQ0ZEOERDO1xyXG4gICAgICB9XHJcbiAgICAgIG5hdiBhLmFjdGl2ZSB7XHJcbiAgICAgICAgY29sb3I6ICMwMzliZTU7XHJcbiAgICAgIH1cclxuXHJcbiAgI21haW57XHJcbiAgICBkaXNwbGF5OiB0YWJsZTtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiAxMDB2aDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5cclxuLmZvZntcclxuXHQgIGRpc3BsYXk6IHRhYmxlLWNlbGw7XHJcblx0ICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xyXG59XHJcblxyXG4uZm9mIGgxe1xyXG5cdCAgZm9udC1zaXplOiA1MHB4O1xyXG5cdCAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG5cdCAgcGFkZGluZy1yaWdodDogMTJweDtcclxuXHQgIGFuaW1hdGlvbjogdHlwZSAuNXMgYWx0ZXJuYXRlIGluZmluaXRlO1xyXG59XHJcblxyXG5Aa2V5ZnJhbWVzIHR5cGV7XHJcblx0ICBmcm9te2JveC1zaGFkb3c6IGluc2V0IC0zcHggMHB4IDBweCAjODg4O31cclxuXHQgIHRve2JveC1zaGFkb3c6IGluc2V0IC0zcHggMHB4IDBweCB0cmFuc3BhcmVudDt9XHJcbn1cclxuXHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/material-component/gerir-encomendas/gerir-encomendas.component.html":
/*!*************************************************************************************!*\
  !*** ./src/app/material-component/gerir-encomendas/gerir-encomendas.component.html ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div fxLayout=\"row\" fxLayoutWrap=\"wrap\">\r\n    <div fxFlex.gt-sm=\"100%\" fxFlex=\"100\">\r\n      <mat-card>\r\n        <mat-card-content>\r\n          <div style=\"text-align:left\">\r\n            <h1>Encomendas Efetuadas e Respetivos Estados</h1>\r\n  <!--\r\n            <mat-tab-group>\r\n              <mat-tab label=\"\">\r\n                <label>Selecionar Encomenda\r\n                    <mat-select placeholder=\"Selecione Encomenda\" [(ngModel)]=\"encomendaSelecionada\">\r\n                        <mat-option *ngFor=\"let encomenda of encomendas\" [value]=\"encomenda\">\r\n                            {{encomenda._id}} : Estado - {{encomenda.estado}}\r\n                        </mat-option>\r\n                    </mat-select>\r\n                </label>\r\n              </mat-tab>\r\n            </mat-tab-group>  -->\r\n\r\n            <mat-tab-group>\r\n              <mat-tab label=\"\">\r\n                <label>\r\n                  <mat-list>\r\n                    <a mat-list-item href=\"encomenda\" *ngFor=\"let encomenda of encomendas\">\r\n                      {{encomenda._id}} : Estado - {{encomenda.estado}}\r\n                    </a>\r\n                  </mat-list>\r\n                </label>\r\n              </mat-tab>\r\n            </mat-tab-group>\r\n  \r\n            <ng-template #noError>\r\n            </ng-template>\r\n          </div>\r\n        </mat-card-content>\r\n      </mat-card>\r\n    </div>\r\n  </div> "

/***/ }),

/***/ "./src/app/material-component/gerir-encomendas/gerir-encomendas.component.ts":
/*!***********************************************************************************!*\
  !*** ./src/app/material-component/gerir-encomendas/gerir-encomendas.component.ts ***!
  \***********************************************************************************/
/*! exports provided: GerirEncomendasComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GerirEncomendasComponent", function() { return GerirEncomendasComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _cliente_encomenda_encomenda__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../cliente/encomenda/encomenda */ "./src/app/cliente/encomenda/encomenda.ts");
/* harmony import */ var _cliente_encomenda_encomenda_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../cliente/encomenda/encomenda.service */ "./src/app/cliente/encomenda/encomenda.service.ts");
/* harmony import */ var _gestor_entregas_entrega_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../gestor/entregas/entrega.service */ "./src/app/gestor/entregas/entrega.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var GerirEncomendasComponent = /** @class */ (function () {
    function GerirEncomendasComponent(encomendaService, entregaService, snackBar) {
        this.encomendaService = encomendaService;
        this.entregaService = entregaService;
        this.snackBar = snackBar;
        this.encomendaSelecionada = new _cliente_encomenda_encomenda__WEBPACK_IMPORTED_MODULE_2__["Encomenda"]();
    }
    GerirEncomendasComponent.prototype.ngOnInit = function () {
        this.getEncomendas();
    };
    GerirEncomendasComponent.prototype.getEncomendas = function () {
        var _this = this;
        this.encomendaService.getEncomendas()
            .subscribe(function (encomendas) { return _this.encomendas = encomendas; });
    };
    GerirEncomendasComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-gerir-encomendas',
            template: __webpack_require__(/*! ./gerir-encomendas.component.html */ "./src/app/material-component/gerir-encomendas/gerir-encomendas.component.html"),
            styles: [__webpack_require__(/*! ./gerir-encomendas.component.css */ "./src/app/material-component/gerir-encomendas/gerir-encomendas.component.css")]
        }),
        __metadata("design:paramtypes", [_cliente_encomenda_encomenda_service__WEBPACK_IMPORTED_MODULE_3__["EncomendaService"],
            _gestor_entregas_entrega_service__WEBPACK_IMPORTED_MODULE_4__["EntregaService"],
            _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatSnackBar"]])
    ], GerirEncomendasComponent);
    return GerirEncomendasComponent;
}());



/***/ }),

/***/ "./src/app/material-component/gerir-material/gerir-material.component.css":
/*!********************************************************************************!*\
  !*** ./src/app/material-component/gerir-material/gerir-material.component.css ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".image-padding-left {\r\n    padding-left: 1em;\r\n    height: 128px;\r\n    width: 100%;\r\n    padding-right: 1em;\r\n}\r\n\r\n.image-compressed {\r\n    height: 50%;\r\n    width: 100%;\r\n}\r\n\r\n.button-center {\r\n    text-align: center;\r\n}\r\n\r\n.button-padding {\r\n    padding-left: 1em;\r\n    padding-right: 1em;\r\n}\r\n\r\n.form-nome {\r\n    width: 75%;\r\n    text-align: center;\r\n}\r\n\r\n.chkbox {\r\n    padding-right: 1em;\r\n    padding-left: 1em;\r\n}\r\n\r\n.mat-form-field.mat{\r\n    width: 120px;\r\n    height: 6px;\r\n    float: right;\r\n    text-align: left;\r\n}\r\n\r\n.align-text {\r\n    padding-left: 1em;\r\n    text-align: left;\r\n}\r\n\r\n.mat-divider.style-fix {\r\n    height: 36px;\r\n}\r\n\r\n.preco-padding {\r\n    padding-left: 1em;\r\n    padding-right: 1em;\r\n}\r\n\r\n#main{\r\n    display: table;\r\n    width: 100%;\r\n    height: 100vh;\r\n    text-align: center;\r\n}\r\n\r\n.fof{\r\n\t  display: table-cell;\r\n\t  vertical-align: middle;\r\n}\r\n\r\n.fof h1{\r\n\t  font-size: 50px;\r\n\t  display: inline-block;\r\n\t  padding-right: 12px;\r\n\t  -webkit-animation: type .5s alternate infinite;\r\n\t          animation: type .5s alternate infinite;\r\n}\r\n\r\n.right-align-acabamento{\r\n    text-align: right;\r\n    width: 100%;\r\n    padding-right: 1em;\r\n    padding-left: 1em;\r\n}\r\n\r\n.my-btn{\r\n    min-width: 280px;\r\n    padding: 0;\r\n    align-items: left;\r\n    justify-content: left;\r\n}\r\n\r\n.grid-tile .mat-figure{\r\n    justify-content: left!important;\r\n    overflow: overlay;\r\n    height: 100%\r\n}\r\n\r\n.icon-width{\r\n    max-width: 0;\r\n}\r\n\r\n@-webkit-keyframes type{\r\n\t  from{box-shadow: inset -3px 0px 0px #888;}\r\n\t  to{box-shadow: inset -3px 0px 0px transparent;}\r\n}\r\n\r\n@keyframes type{\r\n\t  from{box-shadow: inset -3px 0px 0px #888;}\r\n\t  to{box-shadow: inset -3px 0px 0px transparent;}\r\n}\r\n\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWF0ZXJpYWwtY29tcG9uZW50L2dlcmlyLW1hdGVyaWFsL2dlcmlyLW1hdGVyaWFsLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxrQkFBa0I7SUFDbEIsY0FBYztJQUNkLFlBQVk7SUFDWixtQkFBbUI7Q0FDdEI7O0FBRUQ7SUFDSSxZQUFZO0lBQ1osWUFBWTtDQUNmOztBQUVEO0lBQ0ksbUJBQW1CO0NBQ3RCOztBQUVEO0lBQ0ksa0JBQWtCO0lBQ2xCLG1CQUFtQjtDQUN0Qjs7QUFFRDtJQUNJLFdBQVc7SUFDWCxtQkFBbUI7Q0FDdEI7O0FBRUQ7SUFDSSxtQkFBbUI7SUFDbkIsa0JBQWtCO0NBQ3JCOztBQUVEO0lBQ0ksYUFBYTtJQUNiLFlBQVk7SUFDWixhQUFhO0lBQ2IsaUJBQWlCO0NBQ3BCOztBQUVEO0lBQ0ksa0JBQWtCO0lBQ2xCLGlCQUFpQjtDQUNwQjs7QUFFRDtJQUNJLGFBQWE7Q0FDaEI7O0FBRUQ7SUFDSSxrQkFBa0I7SUFDbEIsbUJBQW1CO0NBQ3RCOztBQUVEO0lBQ0ksZUFBZTtJQUNmLFlBQVk7SUFDWixjQUFjO0lBQ2QsbUJBQW1CO0NBQ3RCOztBQUVEO0dBQ0csb0JBQW9CO0dBQ3BCLHVCQUF1QjtDQUN6Qjs7QUFFRDtHQUNHLGdCQUFnQjtHQUNoQixzQkFBc0I7R0FDdEIsb0JBQW9CO0dBQ3BCLCtDQUF1QztXQUF2Qyx1Q0FBdUM7Q0FDekM7O0FBRUQ7SUFDSSxrQkFBa0I7SUFDbEIsWUFBWTtJQUNaLG1CQUFtQjtJQUNuQixrQkFBa0I7Q0FDckI7O0FBRUQ7SUFDSSxpQkFBaUI7SUFDakIsV0FBVztJQUNYLGtCQUFrQjtJQUNsQixzQkFBc0I7Q0FDekI7O0FBRUQ7SUFDSSxnQ0FBZ0M7SUFDaEMsa0JBQWtCO0lBQ2xCLFlBQVk7Q0FDZjs7QUFFRDtJQUNJLGFBQWE7Q0FDaEI7O0FBRUQ7R0FDRyxLQUFLLG9DQUFvQyxDQUFDO0dBQzFDLEdBQUcsMkNBQTJDLENBQUM7Q0FDakQ7O0FBSEQ7R0FDRyxLQUFLLG9DQUFvQyxDQUFDO0dBQzFDLEdBQUcsMkNBQTJDLENBQUM7Q0FDakQiLCJmaWxlIjoic3JjL2FwcC9tYXRlcmlhbC1jb21wb25lbnQvZ2VyaXItbWF0ZXJpYWwvZ2VyaXItbWF0ZXJpYWwuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5pbWFnZS1wYWRkaW5nLWxlZnQge1xyXG4gICAgcGFkZGluZy1sZWZ0OiAxZW07XHJcbiAgICBoZWlnaHQ6IDEyOHB4O1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBwYWRkaW5nLXJpZ2h0OiAxZW07XHJcbn1cclxuXHJcbi5pbWFnZS1jb21wcmVzc2VkIHtcclxuICAgIGhlaWdodDogNTAlO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbn1cclxuXHJcbi5idXR0b24tY2VudGVyIHtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5cclxuLmJ1dHRvbi1wYWRkaW5nIHtcclxuICAgIHBhZGRpbmctbGVmdDogMWVtO1xyXG4gICAgcGFkZGluZy1yaWdodDogMWVtO1xyXG59XHJcblxyXG4uZm9ybS1ub21lIHtcclxuICAgIHdpZHRoOiA3NSU7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuXHJcbi5jaGtib3gge1xyXG4gICAgcGFkZGluZy1yaWdodDogMWVtO1xyXG4gICAgcGFkZGluZy1sZWZ0OiAxZW07XHJcbn1cclxuXHJcbi5tYXQtZm9ybS1maWVsZC5tYXR7XHJcbiAgICB3aWR0aDogMTIwcHg7XHJcbiAgICBoZWlnaHQ6IDZweDtcclxuICAgIGZsb2F0OiByaWdodDtcclxuICAgIHRleHQtYWxpZ246IGxlZnQ7XHJcbn1cclxuXHJcbi5hbGlnbi10ZXh0IHtcclxuICAgIHBhZGRpbmctbGVmdDogMWVtO1xyXG4gICAgdGV4dC1hbGlnbjogbGVmdDtcclxufVxyXG5cclxuLm1hdC1kaXZpZGVyLnN0eWxlLWZpeCB7XHJcbiAgICBoZWlnaHQ6IDM2cHg7XHJcbn1cclxuXHJcbi5wcmVjby1wYWRkaW5nIHtcclxuICAgIHBhZGRpbmctbGVmdDogMWVtO1xyXG4gICAgcGFkZGluZy1yaWdodDogMWVtO1xyXG59XHJcblxyXG4jbWFpbntcclxuICAgIGRpc3BsYXk6IHRhYmxlO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDEwMHZoO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcblxyXG4uZm9me1xyXG5cdCAgZGlzcGxheTogdGFibGUtY2VsbDtcclxuXHQgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XHJcbn1cclxuXHJcbi5mb2YgaDF7XHJcblx0ICBmb250LXNpemU6IDUwcHg7XHJcblx0ICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcblx0ICBwYWRkaW5nLXJpZ2h0OiAxMnB4O1xyXG5cdCAgYW5pbWF0aW9uOiB0eXBlIC41cyBhbHRlcm5hdGUgaW5maW5pdGU7XHJcbn1cclxuXHJcbi5yaWdodC1hbGlnbi1hY2FiYW1lbnRve1xyXG4gICAgdGV4dC1hbGlnbjogcmlnaHQ7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIHBhZGRpbmctcmlnaHQ6IDFlbTtcclxuICAgIHBhZGRpbmctbGVmdDogMWVtO1xyXG59XHJcblxyXG4ubXktYnRue1xyXG4gICAgbWluLXdpZHRoOiAyODBweDtcclxuICAgIHBhZGRpbmc6IDA7XHJcbiAgICBhbGlnbi1pdGVtczogbGVmdDtcclxuICAgIGp1c3RpZnktY29udGVudDogbGVmdDtcclxufVxyXG5cclxuLmdyaWQtdGlsZSAubWF0LWZpZ3VyZXtcclxuICAgIGp1c3RpZnktY29udGVudDogbGVmdCFpbXBvcnRhbnQ7XHJcbiAgICBvdmVyZmxvdzogb3ZlcmxheTtcclxuICAgIGhlaWdodDogMTAwJVxyXG59XHJcblxyXG4uaWNvbi13aWR0aHtcclxuICAgIG1heC13aWR0aDogMDtcclxufVxyXG5cclxuQGtleWZyYW1lcyB0eXBle1xyXG5cdCAgZnJvbXtib3gtc2hhZG93OiBpbnNldCAtM3B4IDBweCAwcHggIzg4ODt9XHJcblx0ICB0b3tib3gtc2hhZG93OiBpbnNldCAtM3B4IDBweCAwcHggdHJhbnNwYXJlbnQ7fVxyXG59XHJcblxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/material-component/gerir-material/gerir-material.component.html":
/*!*********************************************************************************!*\
  !*** ./src/app/material-component/gerir-material/gerir-material.component.html ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"!flagServer\">\r\n  <div fxLayout=\"row\" fxLayoutWrap=\"wrap\">\r\n    <div fxFlex.gt-sm=\"100%\" fxFlex=\"100\">\r\n      <!-- CRIAR UM MATERIAL -->\r\n      <mat-card>\r\n        <mat-card-content>\r\n          <mat-card-title> Criar um material </mat-card-title>\r\n          <mat-card-subtitle> Por favor escolha as opções disponíveis para criar um material (nome é obrigatório).\r\n            Todas as outras opções permitem criar materiais com diferentes texturas e uma lista de acabamentos.\r\n            Caso não sejam indicadas opções e apenas o nome, o material será criado com valores padrão.</mat-card-subtitle>\r\n\r\n          <mat-grid-list cols=\"3\" fxLayoutWrap=\"wrap\" rowHeight=\"60px\">\r\n            <!-- escrever um nome -->\r\n            <mat-grid-tile [colspan]=\"1\" [rowspan]=\"1\">\r\n              <form class=\"form-nome\" [formGroup]=\"criarFormGroup\">\r\n                <mat-form-field appearance=\"outline\">\r\n                  <input matInput placeholder=\"{{materialFormCriar}}\" formControlName=\"criarMaterialCtrl\" required>\r\n                </mat-form-field>\r\n              </form>\r\n            </mat-grid-tile>\r\n            <!-- selecionar textura -->\r\n            <mat-grid-tile [colspan]=\"1\" [rowspan]=\"2\">\r\n              <div class=\"form-nome\" *ngIf=\"selectedTexturaCriar==null\">\r\n                Ficheiro adicionado (Textura):\r\n                <p>\r\n                  [nenhuma textura]\r\n                </p>\r\n              </div>\r\n              <div class=\"form-nome\" *ngIf=\"selectedTexturaCriar!=null\">\r\n                Ficheiro adicionado (Textura):\r\n                <p>\r\n                  [{{selectedTexturaCriar.name}}]\r\n                </p>\r\n              </div>\r\n            </mat-grid-tile>\r\n            <!-- selecionar acabamento -->\r\n            <mat-grid-tile [colspan]=\"1\" [rowspan]=\"2\">\r\n              <div class=\"form-nome\" [formGroup]=\"incrementoFormGroup\">\r\n                <p class=\"button-center\">\r\n                  <button *ngIf=\"disabledAcabamentosList==false\" mat-raised-button style=\"column-width: 100%\"\r\n                    [matMenuTriggerFor]=\"acabamentosCriar\"> Selecione o(s) acabamento(s)</button>\r\n                </p>\r\n                <mat-menu #acabamentosCriar=\"matMenu\">\r\n                  <div mat-menu-item class=\"my-btn\" *ngFor=\"let acabamento of acabamentosList; let i = index;\">\r\n                    <mat-grid-list cols=\"3\" rowHeight=\"1.8:1\">\r\n                      <mat-grid-tile class=\"grid-tile\" [colspan]=\"2\" [rowspan]=\"1\">\r\n                        <mat-checkbox class=\"chkbox\" (click)=\"$event.stopPropagation();incrementoFormGroup.controls['incrementoPrecoCtrl'].enable()\"\r\n                          [(ngModel)]=\"acabamentosListSelectedCriar[i]\" [ngModelOptions]=\"{standalone: true}\">\r\n                          {{i+1}} : {{acabamento.tipo}}</mat-checkbox>\r\n                      </mat-grid-tile>\r\n                      <!-- selecionar preço do acabamento -->\r\n                      <mat-grid-tile [colspan]=\"1\" [rowspan]=\"1\">\r\n                        <mat-form-field class=\"right-align-acabamento\">\r\n                          <input matInput type=\"number\" min=\"0\" step=\"0.50\" placeholder=\"{{precoFormIncremento}}\"\r\n                            (click)=\"$event.stopPropagation();\" formControlName=\"incrementoPrecoCtrl\" (change)=\"initializePrecoList(i)\">\r\n                          <mat-icon class=\"icon-width\" matSuffix>euro_symbol</mat-icon>\r\n                        </mat-form-field>\r\n                      </mat-grid-tile>\r\n                    </mat-grid-list>\r\n                  </div>\r\n                </mat-menu>\r\n              </div>\r\n            </mat-grid-tile>\r\n            <!-- escrever um preço -->\r\n            <mat-grid-tile [colspan]=\"1\" [rowspan]=\"1\">\r\n              <form class=\"form-nome\" [formGroup]=\"criarFormGroup\">\r\n                <mat-form-field appearance=\"outline\">\r\n                  <input matInput type=\"number\" min=\"0\" step=\"0.50\" placeholder=\"{{precoFormCriar}}\" formControlName=\"criarPrecoCtrl\"\r\n                    required>\r\n                  <mat-icon matSuffix>euro_symbol</mat-icon>\r\n                </mat-form-field>\r\n              </form>\r\n            </mat-grid-tile>\r\n          </mat-grid-list>\r\n\r\n          <input type=\"file\" #fileCriar style=\"display: none\" accept=\"image/x-png,image/jpeg\" (click)=\"fileCriar.value = null\"\r\n            value=\"\" (change)=\"uploadCancelButton($event)\" />\r\n          <p class=\"button-center\">\r\n            <span class=\"button-padding\">\r\n              <button [disabled]=\"!maxfiles\" mat-raised-button color=\"warn\" (click)=\"removerTexturaButton()\">\r\n                Remover textura\r\n              </button>\r\n            </span>\r\n            <span class=\"button-padding\">\r\n              <button [disabled]=\"maxfiles\" mat-raised-button color=\"basic\" (click)=\"importarTexturaButton()\">\r\n                Importar textura\r\n              </button>\r\n            </span>\r\n            <span class=\"button-padding\">\r\n              <button [disabled]=\"disableBotaoCriar\" mat-raised-button color=\"primary\" (click)=\"botaoCriarEvent()\">\r\n                Criar\r\n              </button>\r\n            </span>\r\n          </p>\r\n\r\n        </mat-card-content>\r\n      </mat-card>\r\n\r\n      <!-- EDITAR UM MATERIAL -->\r\n      <mat-card>\r\n        <mat-card-content>\r\n          <mat-card-title> Editar um material </mat-card-title>\r\n          <mat-card-subtitle> Por favor escolha um material da lista para poder editar. Se não existirem materiais\r\n            disponíveis, crie um material na opção acima.</mat-card-subtitle>\r\n          <mat-grid-list cols=\"4\" fxLayoutWrap=\"wrap\" rowHeight=\"60px\">\r\n            <!-- escolher um material -->\r\n            <mat-grid-tile [colspan]=\"1\" [rowspan]=\"2\">\r\n              <div class=\"form-nome\">\r\n                <mat-form-field *ngIf=\"disabledMateriaisList==false\">\r\n                  <mat-select placeholder=\"{{materialTextEditar}}\">\r\n                    <mat-option *ngFor=\"let material of materiaisList\" (click)=\"materialEditarEvent(material)\">\r\n                      {{material.tipo}}\r\n                    </mat-option>\r\n                  </mat-select>\r\n                </mat-form-field>\r\n                <label *ngIf=\"disabledMateriaisList==true\">\r\n                  [Não existem materiais!]\r\n                </label>\r\n              </div>\r\n            </mat-grid-tile>\r\n            <!-- selecionar textura -->\r\n            <mat-grid-tile [colspan]=\"1\" [rowspan]=\"2\">\r\n              <div class=\"form-nome\" *ngIf=\"selectedTexturaEditar==null\">\r\n                Textura:\r\n                <p>\r\n                  [nenhuma textura]\r\n                </p>\r\n              </div>\r\n              <div class=\"form-nome\" *ngIf=\"selectedTexturaEditar!=null\">\r\n                <span *ngIf=\"!newFile\">\r\n                  <img class=\"image-compressed\" src=\"data:image/png;base64,{{selectedTexturaEditar}}\">\r\n                </span>\r\n                <span *ngIf=\"newFile\">\r\n                  Nova textura:\r\n                  <p>\r\n                    [{{selectedTexturaEditar.name}}]\r\n                  </p>\r\n                </span>\r\n              </div>\r\n            </mat-grid-tile>\r\n            <!-- editar os acabamentos -->\r\n            <mat-grid-tile [colspan]=\"1\" [rowspan]=\"2\">\r\n              <div class=\"form-nome\">\r\n                <p class=\"button-center\">\r\n                  <button [disabled]=\"disableEditar\" *ngIf=\"disabledAcabamentosList==false\" mat-raised-button style=\"column-width: 100%\"\r\n                    [matMenuTriggerFor]=\"acabamentosEditar\"> Edite o(s) acabamento(s)</button>\r\n                </p>\r\n                <mat-menu #acabamentosEditar=\"matMenu\">\r\n                  <div mat-menu-item class=\"my-btn\" *ngFor=\"let acabamento of acabamentosList; let i = index;\">\r\n                    <mat-grid-list cols=\"3\" rowHeight=\"1.8:1\">\r\n                      <mat-grid-tile class=\"grid-tile\" [colspan]=\"2\" [rowspan]=\"1\">\r\n                        <mat-checkbox class=\"chkbox\" (click)=\"$event.stopPropagation();changePreco(i);\" [(ngModel)]=\"acabamentosListSelectedEditar[i]\"\r\n                          [ngModelOptions]=\"{standalone: true}\">\r\n                          {{i+1}} : {{acabamento.tipo}}</mat-checkbox>\r\n                      </mat-grid-tile>\r\n                      <!-- editar o preço do acabamento -->\r\n                      <mat-grid-tile [colspan]=\"1\" [rowspan]=\"1\">\r\n                        <mat-form-field class=\"right-align-acabamento\">\r\n                          <input matInput type=\"number\" min=\"0\" step=\"0.50\" placeholder=\"{{precoFormIncremento}}\"\r\n                            (click)=\"$event.stopPropagation();\" [(ngModel)]=\"precosListSelectedEditar[i]\" [disabled]=\"!acabamentosListSelectedEditar[i]\">\r\n                          <mat-icon class=\"icon-width\" matSuffix>euro_symbol</mat-icon>\r\n                        </mat-form-field>\r\n                      </mat-grid-tile>\r\n                    </mat-grid-list>\r\n                  </div>\r\n                </mat-menu>\r\n\r\n                <label *ngIf=\"disabledAcabamentosList==true\">\r\n                  [Não existem acabamentos!]\r\n                </label>\r\n              </div>\r\n            </mat-grid-tile>\r\n            <!-- escrever um nome -->\r\n            <mat-grid-tile [colspan]=\"1\" [rowspan]=\"1\">\r\n              <form class=\"form-nome\" [formGroup]=\"editarFormGroup\" *ngIf=\"selectedMaterialEditar==null\">\r\n                <mat-form-field appearance=\"outline\">\r\n                  <input matInput placeholder=\"{{materialFormEditar}}\" formControlName=\"editarNomeCtrl\" required>\r\n                </mat-form-field>\r\n              </form>\r\n              <form class=\"form-nome\" [formGroup]=\"editarFormGroup\" *ngIf=\"selectedMaterialEditar!=null\">\r\n                <mat-form-field appearance=\"outline\">\r\n                  <input matInput placeholder=\"{{materialFormEditar}}\" value=\"{{selectedMaterialEditar.tipo}}\"\r\n                    formControlName=\"editarNomeCtrl\" required>\r\n                </mat-form-field>\r\n              </form>\r\n            </mat-grid-tile>\r\n            <!-- escrever um preço -->\r\n            <mat-grid-tile [colspan]=\"1\" [rowspan]=\"1\">\r\n              <form class=\"form-nome\" [formGroup]=\"editarFormGroup\" *ngIf=\"selectedMaterialEditar==null\">\r\n                <mat-form-field appearance=\"outline\">\r\n                  <input matInput type=\"number\" min=\"0\" step=\"0.50\" placeholder=\"{{precoFormCriar}}\" formControlName=\"editarPrecoCtrl\"\r\n                    required>\r\n                  <mat-icon matSuffix>euro_symbol</mat-icon>\r\n                </mat-form-field>\r\n              </form>\r\n              <form class=\"form-nome\" [formGroup]=\"editarFormGroup\" *ngIf=\"selectedMaterialEditar!=null\">\r\n                <mat-form-field appearance=\"outline\">\r\n                  <input matInput type=\"number\" min=\"0\" step=\"0.05\" placeholder=\"{{precoFormCriar}}\" value=\"{{selectedMaterialEditar.precoBase}}\"\r\n                    formControlName=\"editarPrecoCtrl\" required>\r\n                  <mat-icon matSuffix>euro_symbol</mat-icon>\r\n                </mat-form-field>\r\n              </form>\r\n            </mat-grid-tile>\r\n          </mat-grid-list>\r\n\r\n          <input type=\"file\" #fileEditar style=\"display: none\" accept=\"image/x-png,image/jpeg\" (change)=\"uploadCancelButton2($event)\" />\r\n          <p class=\"button-center\">\r\n            <span class=\"button-padding\">\r\n              <button [disabled]=\"disableEditar\" mat-raised-button color=\"basic\" (click)=\"importarEditarTexturaButton()\">\r\n                Editar textura\r\n              </button>\r\n            </span>\r\n            <span class=\"button-padding\">\r\n              <button [disabled]=\"disableEditar\" mat-raised-button color=\"primary\" (click)=\"botaoEditarEvent()\">Editar</button>\r\n            </span>\r\n          </p>\r\n        </mat-card-content>\r\n      </mat-card>\r\n\r\n      <!-- ELIMINAR UM MATERIAL -->\r\n      <div fxLayout=\"row\">\r\n        <div fxFlex.gt-sm=\"50%\">\r\n          <mat-card>\r\n            <mat-card-content>\r\n              <mat-card-title> Eliminar um material </mat-card-title>\r\n              <mat-card-subtitle> Por favor escolha um material da lista abaixo para ser eiminado. </mat-card-subtitle>\r\n              <mat-form-field *ngIf=\"disabledMateriaisList==false\">\r\n                <mat-select placeholder=\"{{materialTextEliminar}}\">\r\n                  <mat-option *ngFor=\"let material of materiaisList\" (click)=\"materialEliminarEvent(material)\">\r\n                    {{material.tipo}}\r\n                  </mat-option>\r\n                </mat-select>\r\n              </mat-form-field>\r\n              <label *ngIf=\"disabledMateriaisList==true\">\r\n                [Não existem materiais!]\r\n              </label>\r\n\r\n              <p class=\"button-center\">\r\n                <button [disabled]=\"disableEliminar\" mat-raised-button color=\"primary\" (click)=\"botaoEliminarEvent()\">Eliminar</button>\r\n              </p>\r\n            </mat-card-content>\r\n          </mat-card>\r\n        </div>\r\n\r\n        <!-- LISTAR MATERIAIS -->\r\n        <div fxFlex.gt-sm=\"50%\">\r\n          <mat-card>\r\n            <mat-card-content>\r\n              <mat-card-title> Listar materiais </mat-card-title>\r\n              <mat-card-subtitle> Listagem de todos os materiais existentes/disponíveis e todas as suas\r\n                características.\r\n              </mat-card-subtitle>\r\n              <p class=\"button-center\">\r\n                <button *ngIf=\"disabledMateriaisList==false\" mat-raised-button style=\"column-width: 100%\"\r\n                  [matMenuTriggerFor]=\"materiais\">Clique aqui para ver a listagem\r\n                  de materiais</button>\r\n              </p>\r\n              <mat-menu #materiais=\"matMenu\">\r\n                <button mat-menu-item [matMenuTriggerFor]=\"materialDescription\" *ngFor=\"let material of materiaisList; let i = index;\"\r\n                  (mouseenter)=\"materialListarEvent(material)\">\r\n                  {{i+1}} : {{material.tipo}}\r\n                  <mat-menu #materialDescription=\"matMenu\">\r\n                    <img class=\"image-padding-left\" src=\"data:image/png;base64,{{material.textura}}\">\r\n                    <mat-divider></mat-divider>\r\n                    <label class=\"preco-padding\">\r\n                      <font size=\"5\" style=\"color:#000000\">\r\n                        Preço: {{material.precoBase}} €\r\n                      </font>\r\n                    </label>\r\n                    <mat-divider *ngIf=\"listarMaterialAcabamentosList.length != 0\"></mat-divider>\r\n                    <mat-list *ngFor=\"let acabamento of listarMaterialAcabamentosList; let j = index;\">\r\n                      <mat-list-item>\r\n                        {{j+1}} : {{acabamento.tipo}}\r\n                      </mat-list-item>\r\n                    </mat-list>\r\n                  </mat-menu>\r\n                </button>\r\n              </mat-menu>\r\n\r\n              <label *ngIf=\"disabledMateriaisList==true\">\r\n                [Não existem materiais!]\r\n              </label>\r\n            </mat-card-content>\r\n          </mat-card>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n<div *ngIf=\"flagServer\">\r\n  <div id=\"main\">\r\n    <div class=\"fof\">\r\n      <h1>Não foi possível aceder ao servidor.</h1>\r\n    </div>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "./src/app/material-component/gerir-material/gerir-material.component.ts":
/*!*******************************************************************************!*\
  !*** ./src/app/material-component/gerir-material/gerir-material.component.ts ***!
  \*******************************************************************************/
/*! exports provided: GerirMaterialComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GerirMaterialComponent", function() { return GerirMaterialComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _gestor_material_material_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../gestor/material/material.service */ "./src/app/gestor/material/material.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _gestor_acabamento_acabamento_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../gestor/acabamento/acabamento.service */ "./src/app/gestor/acabamento/acabamento.service.ts");
/* harmony import */ var _gestor_historico_historico_material_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../gestor/historico/historico-material.service */ "./src/app/gestor/historico/historico-material.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var GerirMaterialComponent = /** @class */ (function () {
    function GerirMaterialComponent(materialService, _formBuilder, snackBar, acabamentoService, historicoMaterialService) {
        this.materialService = materialService;
        this._formBuilder = _formBuilder;
        this.snackBar = snackBar;
        this.acabamentoService = acabamentoService;
        this.historicoMaterialService = historicoMaterialService;
        this.flagServer = false;
        this.MAX_FILE_SIZE = 1024000;
        this.selectedMaterialEliminar = null;
        this.selectedMaterialEditar = null;
        this.selectedMaterialAcabamento = 0;
        this.selectedTexturaCriar = null;
        this.selectedTexturaEditar = null;
        this.selectedMaterial = null;
        this.selectedAcabamento = null;
        this.selectedMaterialPreco = 0;
        this.materialTextEliminar = "Escolha um material";
        this.materialTextEditar = "Escolha um material";
        this.materialTextIncremento = "Selecione um material";
        this.materialFormCriar = "Nome do material";
        this.acabamentoTextIncremento = "Selecione um acabamento";
        this.precoFormCriar = "Preço do material";
        this.precoFormIncremento = "Preço";
        this.materialFormEditar = "Nome do material";
        // LISTAS
        this.materiaisList = [];
        this.precoList = [];
        this.incrementoList = [];
        this.acabamentosList = [];
        this.acabamentosListSelectedCriar = [];
        this.acabamentosListSelectedEditar = [];
        this.precosListSelectedEditar = [];
        this.selectedMaterialAcabamentosList = [];
        this.listarMaterialAcabamentosList = [];
        this.materiaisAcabamentosList = [];
        // FLAGS
        this.disableEliminar = true;
        this.disableEditar = true;
        this.disabledMateriaisList = false;
        this.disabledAcabamentosList = false;
        this.newFile = false;
        this.maxfiles = false;
        this.listar = false;
        this.disableBotaoCriar = false;
    }
    GerirMaterialComponent.prototype.ngOnInit = function () {
        this.criarFormGroup = this._formBuilder.group({
            criarMaterialCtrl: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            criarPrecoCtrl: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]
        });
        this.editarFormGroup = this._formBuilder.group({
            editarNomeCtrl: [{ value: '', disabled: true }, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            editarPrecoCtrl: [{ value: '', disabled: true }, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
        });
        this.incrementoFormGroup = this._formBuilder.group({
            incrementoPrecoCtrl: [{ value: '', disabled: true }, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            editarPrecoIncrementoCtrl: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]
        });
        this.getMateriais();
        this.getAcabamentos();
        this.getMateriaisAcabamentos();
    };
    // FUNCTIONS DE BUTTONS
    GerirMaterialComponent.prototype.importarTexturaButton = function () {
        this.fileCriar.nativeElement.click();
    };
    GerirMaterialComponent.prototype.importarEditarTexturaButton = function () {
        this.fileEditar.nativeElement.click();
    };
    GerirMaterialComponent.prototype.uploadCancelButton = function ($event) {
        if ($event.target.files[0]) {
            // Se foi escolhido um ficheiro em vez do cancel
            var fileType = $event.target.files[0].type;
            var fileSize = $event.target.files[0].size;
            if ((fileType == "image/jpeg" || fileType == "image/jpg" || fileType == "image/png") && fileSize < this.MAX_FILE_SIZE) {
                // Se o ficheiro for válido
                this.selectedTexturaCriar = $event.target.files[0];
                this.disableImportButton();
            }
            else {
                alert("Ficheiro inválido!");
            }
        }
    };
    GerirMaterialComponent.prototype.uploadCancelButton2 = function ($event) {
        if ($event.target.files[0]) {
            // Se foi escolhido um ficheiro em vez do cancel
            var fileType = $event.target.files[0].type;
            var fileSize = $event.target.files[0].size;
            if ((fileType == "image/jpeg" || fileType == "image/jpg" || fileType == "image/png") && fileSize < this.MAX_FILE_SIZE) {
                // Se o ficheiro for válido
                this.newFile = true;
                this.selectedTexturaEditar = $event.target.files[0];
            }
            else {
                alert("Ficheiro inválido!");
            }
        }
    };
    GerirMaterialComponent.prototype.disableImportButton = function () {
        this.maxfiles = true;
    };
    GerirMaterialComponent.prototype.enableImportButton = function () {
        this.maxfiles = false;
    };
    GerirMaterialComponent.prototype.botaoEliminarEvent = function () {
        this.deleteMaterial();
    };
    GerirMaterialComponent.prototype.removerTexturaButton = function () {
        this.selectedTexturaCriar = null;
        this.enableImportButton();
    };
    GerirMaterialComponent.prototype.initializePrecoList = function (index) {
        this.precoList[index] = this.incrementoFormGroup.controls['incrementoPrecoCtrl'].value;
    };
    GerirMaterialComponent.prototype.botaoCriarEvent = function () {
        //Se o nome for válido e for selecionada alguma textura
        if (!this.criarFormGroup.invalid && this.selectedTexturaCriar != null) {
            var precoBase = this.criarFormGroup.controls['criarPrecoCtrl'].value;
            if (precoBase > 0) {
                var tipo = this.criarFormGroup.controls['criarMaterialCtrl'].value;
                var textura = this.selectedTexturaCriar;
                var acabamentos = [];
                //Se algum acabamento foi selecionado
                if (this.acabamentosListSelectedCriar.includes(true)) {
                    for (var i = 0; i < this.acabamentosListSelectedCriar.length; i++) {
                        //Quais os que foram selecionados
                        if (this.acabamentosListSelectedCriar[i]) {
                            acabamentos.push(this.acabamentosList[i]);
                        }
                    }
                }
                this.addMaterial(tipo, precoBase, textura, acabamentos);
            }
            else {
                this.snackBar.open("Erro!", "Preço tem que ser maior que 0!", {
                    duration: 4000
                });
            }
        }
        else {
            if (this.criarFormGroup.get("criarMaterialCtrl").invalid) {
                this.snackBar.open("Erro!", "Insira um nome válido!", {
                    duration: 4000
                });
            }
            else if (this.criarFormGroup.get("criarPrecoCtrl").invalid) {
                this.snackBar.open("Erro!", "Insira um preço válido!", {
                    duration: 4000
                });
            }
            else {
                this.snackBar.open("Erro!", "Importe uma textura para o material!", {
                    duration: 4000
                });
            }
        }
    };
    GerirMaterialComponent.prototype.botaoEditarEvent = function () {
        //Se o nome for válido
        if (!this.editarFormGroup.invalid) {
            var precoBase = this.editarFormGroup.controls['editarPrecoCtrl'].value;
            if (precoBase > 0) {
                var idAlterar = this.selectedMaterialEditar.id;
                var tipo = this.editarFormGroup.controls['editarNomeCtrl'].value;
                var textura = null;
                if (this.newFile) {
                    textura = this.selectedTexturaEditar;
                }
                var acabamentosEliminar = [];
                var acabamentosAdicionar = [];
                var acabamentosSelecionados = [];
                var precosEditar = [];
                //TODOS OS ACABAMENTOS SELECIONADOS
                for (var i = 0; i < this.acabamentosListSelectedEditar.length; i++) {
                    var acabamentoVer = this.acabamentosList[i];
                    //Significa que o acabamento a ver está selecionado
                    if (this.acabamentosListSelectedEditar[i]) {
                        acabamentosSelecionados.push(acabamentoVer);
                        //Se o material não tinha este acabamento é para ser adicionado à bd
                        if (!this.selectedMaterialAcabamentosList.find(function (acabamento2) { return acabamento2['id'] === acabamentoVer.id; })) {
                            acabamentosAdicionar.push(acabamentoVer);
                        }
                    }
                    else {
                        //Se o material tinha este acabamento, mas já não tem é para ser removido da bd
                        if (this.selectedMaterialAcabamentosList.find(function (acabamento2) { return acabamento2['id'] === acabamentoVer.id; })) {
                            acabamentosEliminar.push(acabamentoVer);
                        }
                    }
                }
                //Limpa o array de preços
                this.precosListSelectedEditar = this.precosListSelectedEditar.filter(function (el, i) {
                    return el != null;
                });
                this.updateMaterial(idAlterar, tipo, precoBase, textura, acabamentosAdicionar, acabamentosEliminar, acabamentosSelecionados);
            }
            else {
                this.snackBar.open("Erro!", "Preço tem que ser maior que 0!", {
                    duration: 4000
                });
            }
        }
        else {
            if (this.editarFormGroup.get("editarNomeCtrl").invalid) {
                this.snackBar.open("Erro!", "Insira um nome válido!", {
                    duration: 4000
                });
            }
            else if (this.editarFormGroup.get("editarPrecoCtrl").invalid) {
                this.snackBar.open("Erro!", "Insira um preço válido!", {
                    duration: 4000
                });
            }
        }
    };
    // EVENTS HANDLER
    GerirMaterialComponent.prototype.changePreco = function (index) {
        if (this.acabamentosListSelectedEditar[index]) {
            this.precosListSelectedEditar[index] = null;
        }
        else {
            this.precosListSelectedEditar[index] = 0;
        }
    };
    GerirMaterialComponent.prototype.materialEditarEvent = function (material) {
        this.selectedMaterialAcabamentosList = [];
        this.acabamentosListSelectedEditar = [false];
        this.precosListSelectedEditar = [];
        this.selectedMaterialEditar = material;
        this.editarFormGroup.get("editarNomeCtrl").setValue(material.tipo);
        this.editarFormGroup.get("editarPrecoCtrl").setValue(material.precoBase);
        this.materialTextEditar = material.tipo;
        this.selectedTexturaEditar = material.textura;
        this.getAcabamentosMaterial(material.id);
        this.newFile = false;
        this.unlockEditar();
    };
    GerirMaterialComponent.prototype.organizeList = function () {
        for (var i = 0; i < this.precoList.length; i++) {
            if (this.acabamentosListSelectedCriar[i]) {
                if (this.precoList[i] != null) {
                    this.incrementoList.push(this.precoList[i]);
                }
                else {
                    this.incrementoList.push(0);
                }
            }
        }
    };
    GerirMaterialComponent.prototype.materialEliminarEvent = function (material) {
        this.listar = false;
        this.selectedMaterialEliminar = material;
        this.materialTextEliminar = material.tipo;
        this.unlockEliminar();
    };
    GerirMaterialComponent.prototype.materialListarEvent = function (material) {
        this.listarMaterialAcabamentosList = [];
        this.listar = true;
        this.getAcabamentosMaterial(material.id);
    };
    GerirMaterialComponent.prototype.materialSelectEvent = function (material) {
        this.selectedMaterial = material;
        this.selectedMaterialPreco = this.selectedMaterial.precoBase;
    };
    GerirMaterialComponent.prototype.acabamentoSelectEvent = function (acabamento) {
        this.selectedAcabamento = acabamento;
    };
    // FUNCTIONS DE BDDAD
    GerirMaterialComponent.prototype.getMateriais = function () {
        var _this = this;
        this.materialService.getMateriais().subscribe(function (data) {
            _this.materiaisList = data;
            if (_this.materiaisList.length == 0) {
                _this.disabledMateriaisList = true;
            }
            else {
                _this.disabledMateriaisList = false;
            }
        }, function (erro) {
            _this.flagServer = true;
            console.log(erro);
            _this.statusMessage = "Error: Service Unavailable";
        });
    };
    GerirMaterialComponent.prototype.getAcabamentos = function () {
        var _this = this;
        this.acabamentoService.getAcabamentos().subscribe(function (data) {
            _this.acabamentosList = data;
            if (_this.acabamentosList.length == 0) {
                _this.disabledAcabamentosList = true;
            }
            else {
                _this.disabledAcabamentosList = false;
            }
        }, function (erro) {
            _this.flagServer = true;
            console.log(erro);
            _this.statusMessage = "Error: Service Unavailable";
        });
    };
    GerirMaterialComponent.prototype.getMateriaisAcabamentos = function () {
        var _this = this;
        this.materialService.getMateriaisAcabamentos().subscribe(function (data) {
            _this.materiaisAcabamentosList = data;
        }, function (erro) {
            _this.flagServer = true;
            console.log(erro);
            _this.statusMessage = "Error: Service Unavailable";
        });
    };
    GerirMaterialComponent.prototype.addMaterial = function (tipo, precoBase, textura, acabamentos) {
        var _this = this;
        tipo = tipo.trim();
        this.disableBotaoCriar = true;
        var ind = 0;
        this.organizeList();
        this.materialService.addMaterial({ tipo: tipo, precoBase: precoBase, textura: textura })
            .subscribe(function (material) {
            //Se tiver acabamentos
            if (acabamentos.length > 0) {
                var materialId = material.id;
                acabamentos.forEach(function (acabamento, index, acabamentos) {
                    var acabamentoId = acabamento.id;
                    var incrementoPreco = _this.incrementoList[ind];
                    ind++;
                    _this.materialService.addMaterialAcabamento({ acabamentoId: acabamentoId, materialId: materialId, incrementoPreco: incrementoPreco })
                        .subscribe(function (_) {
                        _this.historicoMaterialService.addHistoricoPrecosMaterial({ materialId: materialId, acabamentoId: acabamentoId, incrementoPreco: incrementoPreco, precoBase: precoBase })
                            .subscribe(function (_) {
                            //Se for o último acabamento e todos os anteriores foram criados com sucesso
                            if (Object.is(acabamentos.length - 1, index)) {
                                _this.getMateriais();
                                _this.getMateriaisAcabamentos();
                                _this.fireSnackBar("Sucesso!", "Material criado com sucesso!");
                                _this.disableBotaoCriar = false;
                                _this.resetAll();
                            }
                        }, function (erro) {
                            alert("Serviço indisponível!");
                            console.log(erro);
                            _this.disableBotaoCriar = true;
                        });
                    }, function (erro) {
                        alert("Serviço indisponível!");
                        console.log(erro);
                        _this.disableBotaoCriar = true;
                    });
                });
            }
            else {
                _this.getMateriais();
                _this.fireSnackBar("Sucesso!", "Material criado com sucesso!");
                _this.disableBotaoCriar = false;
                _this.resetAll();
            }
        }, function (erro) {
            alert("Serviço indisponível!");
            console.log(erro);
            _this.disableBotaoCriar = true;
        });
    };
    GerirMaterialComponent.prototype.updateMaterial = function (idAlterar, tipo, precoBase, textura, acabamentosAdicionar, acabamentosEliminar, acabamentosSelecionados) {
        var _this = this;
        this.disableEditar = true;
        this.materialService.updateMaterial(idAlterar, { tipo: tipo, precoBase: precoBase, textura: textura })
            .subscribe(function (_) {
            var materialId = idAlterar;
            //Para cada acabamento selecionado
            acabamentosSelecionados.forEach(function (acabamentoSelecionado, indexEditarAdicionar, acabamentosEditarAdicionar) {
                var acabamentoId = acabamentoSelecionado.id;
                var incrementoPreco = _this.precosListSelectedEditar[indexEditarAdicionar];
                if (acabamentosAdicionar.length > 0) {
                    //Se for um acabamento novo
                    if (acabamentosAdicionar.find(function (a) { return a.id == acabamentoSelecionado.id; })) {
                        _this.materialService.addMaterialAcabamento({ acabamentoId: acabamentoId, materialId: materialId, incrementoPreco: incrementoPreco })
                            .subscribe(function (_) {
                            _this.historicoMaterialService.addHistoricoPrecosMaterial({ materialId: materialId, acabamentoId: acabamentoId, incrementoPreco: incrementoPreco, precoBase: precoBase })
                                .subscribe(function (_) {
                                //Se for o último acabamento e todos os anteriores foram criados com sucesso
                                if (acabamentosEliminar.length == 0 && Object.is(acabamentosEditarAdicionar.length - 1, indexEditarAdicionar)) {
                                    _this.getMateriais();
                                    _this.getMateriaisAcabamentos();
                                    _this.fireSnackBar("Sucesso!", "Material alterado com sucesso!");
                                    _this.disableEditar = false;
                                    _this.resetAll();
                                }
                            }, function (erro) {
                                alert("Serviço indisponível!");
                                console.log(erro);
                                _this.disableEditar = false;
                            });
                        }, function (erro) {
                            alert("Serviço indisponível!");
                            console.log(erro);
                            _this.disableEditar = false;
                        });
                        //Se for um acabamento ja existente
                    }
                    else {
                        _this.materialService.updateMaterialAcabamento({ acabamentoId: acabamentoId, materialId: materialId, incrementoPreco: incrementoPreco }).subscribe(function (_) {
                            _this.historicoMaterialService.addHistoricoPrecosMaterial({ materialId: materialId, acabamentoId: acabamentoId, incrementoPreco: incrementoPreco, precoBase: precoBase })
                                .subscribe(function (_) {
                                //Se for o último acabamento e todos os anteriores foram criados com sucesso
                                if (acabamentosEliminar.length == 0 && Object.is(acabamentosEditarAdicionar.length - 1, indexEditarAdicionar)) {
                                    _this.getMateriais();
                                    _this.getMateriaisAcabamentos();
                                    _this.fireSnackBar("Sucesso!", "Material alterado com sucesso!");
                                    _this.disableEditar = false;
                                    _this.resetAll();
                                }
                            }, function (erro) {
                                alert("Serviço indisponível!");
                                console.log(erro);
                                _this.disableEditar = false;
                            });
                        }, function (erro) {
                            alert("Serviço indisponível!");
                            console.log(erro);
                            _this.disableEditar = false;
                        });
                    }
                    //Se existem apenas acabamentos para dar update
                }
                else {
                    //SE FOR O MESMO PREÇO QUE JA LA ESTAVA E O MESMO INCREMENTO
                    if (_this.materiaisAcabamentosList.find(function (a) { return (a.acabamentoId == acabamentoId && a.materialId == materialId); }).incrementoPreco == incrementoPreco && _this.materiaisList.find(function (m) { return m.id == materialId; })) {
                        _this.materialService.updateMaterialAcabamento({ acabamentoId: acabamentoId, materialId: materialId, incrementoPreco: incrementoPreco }).subscribe(function (_) {
                            //Se for o último acabamento e todos os anteriores foram criados com sucesso
                            if (acabamentosEliminar.length == 0 && Object.is(acabamentosEditarAdicionar.length - 1, indexEditarAdicionar)) {
                                _this.getMateriais();
                                _this.getMateriaisAcabamentos();
                                _this.fireSnackBar("Sucesso!", "Material alterado com sucesso!");
                                _this.disableEditar = false;
                                _this.resetAll();
                            }
                        }, function (erro) {
                            alert("Serviço indisponível!");
                            console.log(erro);
                            _this.disableEditar = false;
                        });
                    }
                    else {
                        _this.materialService.updateMaterialAcabamento({ acabamentoId: acabamentoId, materialId: materialId, incrementoPreco: incrementoPreco }).subscribe(function (_) {
                            _this.historicoMaterialService.addHistoricoPrecosMaterial({ materialId: materialId, acabamentoId: acabamentoId, incrementoPreco: incrementoPreco, precoBase: precoBase })
                                .subscribe(function (_) {
                                //Se for o último acabamento e todos os anteriores foram criados com sucesso
                                if (acabamentosEliminar.length == 0 && Object.is(acabamentosEditarAdicionar.length - 1, indexEditarAdicionar)) {
                                    _this.getMateriais();
                                    _this.getMateriaisAcabamentos();
                                    _this.fireSnackBar("Sucesso!", "Material alterado com sucesso!");
                                    _this.disableEditar = false;
                                    _this.resetAll();
                                }
                            }, function (erro) {
                                alert("Serviço indisponível!");
                                console.log(erro);
                                _this.disableEditar = false;
                            });
                        }, function (erro) {
                            alert("Serviço indisponível!");
                            console.log(erro);
                            _this.disableEditar = false;
                        });
                    }
                }
            });
            if (acabamentosEliminar.length > 0) {
                acabamentosEliminar.forEach(function (acabamento, indexEliminar, acabamentosEliminar) {
                    var acabamentoId = acabamento.id;
                    _this.materialService.deleteMaterialAcabamento({ acabamentoId: acabamentoId, materialId: materialId })
                        .subscribe(function (_) {
                        //Se for o último acabamento e todos os anteriores foram eliminados com sucesso
                        if (Object.is(acabamentosEliminar.length - 1, indexEliminar)) {
                            _this.getMateriais();
                            _this.getMateriaisAcabamentos();
                            _this.fireSnackBar("Sucesso!", "Material alterado com sucesso!");
                            _this.disableEditar = false;
                            _this.resetAll();
                        }
                    }, function (erro) {
                        alert("Serviço indisponível!");
                        console.log(erro);
                        _this.disableEditar = false;
                    });
                });
            }
            //Não foram efetuadas alteracoes
            if (acabamentosSelecionados.length == 0 && acabamentosEliminar.length == 0) {
                _this.fireSnackBar("Sucesso!", "Não foram realizadas alterações!");
                _this.disableEditar = false;
                _this.resetAll();
            }
        }, function (_) {
            alert("Serviço indisponível!");
            _this.disableEditar = false;
        });
    };
    GerirMaterialComponent.prototype.deleteMaterial = function () {
        var _this = this;
        this.disableEliminar = true;
        this.materialService.deleteMaterial(this.selectedMaterialEliminar).
            subscribe(function (_) {
            _this.getMateriais();
            _this.getMateriaisAcabamentos();
            _this.fireSnackBar("Sucesso!", "Material eliminado com sucesso!");
            _this.disableEliminar = false;
            _this.resetAll();
        }, function (erro) {
            alert("Serviço indisponível!");
            console.log(erro);
            _this.disableEliminar = false;
        });
    };
    GerirMaterialComponent.prototype.getAcabamentosMaterial = function (id) {
        var _this = this;
        this.materialService.getAcabamentosMaterial(id).
            subscribe(function (acabamentos) {
            if (!_this.listar) {
                _this.selectedMaterialAcabamentosList = acabamentos;
                var counter = 0;
                _this.acabamentosList.forEach(function (acabamento) {
                    if (acabamentos.find(function (acabamento2) { return acabamento2['id'] === acabamento.id; })) {
                        _this.acabamentosListSelectedEditar[counter] = true;
                        var ma = _this.materiaisAcabamentosList.filter(function (ma) { return ma.materialId == id; });
                        var preco = ma.find(function (a) { return a.acabamentoId == acabamento.id; }).incrementoPreco;
                        _this.precosListSelectedEditar[counter] = preco;
                    }
                    else {
                        _this.acabamentosListSelectedEditar[counter] = false;
                    }
                    counter++;
                });
            }
            else {
                _this.listarMaterialAcabamentosList = acabamentos;
            }
        }, function (erro) {
            console.log(erro);
            _this.statusMessage = "Error: Service Unavailable";
        });
    };
    // FUNCTIONS DE UTILIDADE
    GerirMaterialComponent.prototype.lockEliminar = function () {
        this.disableEliminar = true;
    };
    GerirMaterialComponent.prototype.unlockEliminar = function () {
        this.disableEliminar = false;
    };
    GerirMaterialComponent.prototype.lockEditar = function () {
        this.disableEditar = true;
        this.disabledMateriaisList = true;
        this.editarFormGroup.disable();
    };
    GerirMaterialComponent.prototype.unlockEditar = function () {
        this.disableEditar = false;
        this.disabledMateriaisList = false;
        this.editarFormGroup.enable();
    };
    GerirMaterialComponent.prototype.resetAll = function () {
        this.lockEliminar();
        this.lockEditar();
        this.materialTextEliminar = "Escolha um material";
        this.materialTextEditar = "Escolha um material";
        this.materialFormCriar = "Nome do material";
        this.precoFormCriar = "Preço do material";
        this.materialFormEditar = "Nome do material";
        this.precoFormIncremento = "Preço";
        this.selectedMaterialEliminar = null;
        this.selectedMaterialEditar = null;
        this.selectedTexturaCriar = null;
        this.selectedTexturaEditar = null;
        this.acabamentosListSelectedCriar = [false];
        this.acabamentosListSelectedEditar = [false];
        this.selectedMaterialAcabamentosList = [];
        this.listarMaterialAcabamentosList = [];
        this.incrementoList = [];
        this.precoList = [];
        this.precosListSelectedEditar = [];
        this.criarFormGroup.reset();
        this.editarFormGroup.reset();
        this.incrementoFormGroup.reset();
        this.maxfiles = false;
        this.listar = false;
    };
    GerirMaterialComponent.prototype.fireSnackBar = function (type, message) {
        this.snackBar.open(type, message, {
            duration: 4000
        });
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('fileCriar'),
        __metadata("design:type", Object)
    ], GerirMaterialComponent.prototype, "fileCriar", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('fileEditar'),
        __metadata("design:type", Object)
    ], GerirMaterialComponent.prototype, "fileEditar", void 0);
    GerirMaterialComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-gerir-material',
            template: __webpack_require__(/*! ./gerir-material.component.html */ "./src/app/material-component/gerir-material/gerir-material.component.html"),
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None,
            styles: [__webpack_require__(/*! ./gerir-material.component.css */ "./src/app/material-component/gerir-material/gerir-material.component.css")]
        }),
        __metadata("design:paramtypes", [_gestor_material_material_service__WEBPACK_IMPORTED_MODULE_2__["MaterialService"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"],
            _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatSnackBar"],
            _gestor_acabamento_acabamento_service__WEBPACK_IMPORTED_MODULE_4__["AcabamentoService"],
            _gestor_historico_historico_material_service__WEBPACK_IMPORTED_MODULE_5__["HistoricoMaterialService"]])
    ], GerirMaterialComponent);
    return GerirMaterialComponent;
}());



/***/ }),

/***/ "./src/app/material-component/gerir-produto/gerir-produto.component.css":
/*!******************************************************************************!*\
  !*** ./src/app/material-component/gerir-produto/gerir-produto.component.css ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".produtos {\r\n        margin: 0 0 2em 0;\r\n        list-style-type: none;\r\n        padding: 0;\r\n        width: 15em;\r\n      }\r\n      .produtos li {\r\n        position: relative;\r\n        cursor: pointer;\r\n        background-color: #EEE;\r\n        margin: .5em;\r\n        padding: .3em 0;\r\n        height: 1.6em;\r\n        border-radius: 4px;\r\n      }\r\n      .produtos li:hover {\r\n        color: #607D8B;\r\n        background-color: #DDD;\r\n        left: .1em;\r\n      }\r\n      .produtos a {\r\n        color: #888;\r\n        text-decoration: none;\r\n        position: relative;\r\n        display: block;\r\n        width: 250px;\r\n      }\r\n      .produtos a:hover {\r\n        color:#607D8B;\r\n      }\r\n      .produtos .badge {\r\n        display: inline-block;\r\n        font-size: small;\r\n        color: white;\r\n        padding: 0.8em 0.7em 0 0.7em;\r\n        background-color: #607D8B;\r\n        line-height: 1em;\r\n        position: relative;\r\n        left: -1px;\r\n        top: -4px;\r\n        height: 1.8em;\r\n        min-width: 16px;\r\n        text-align: right;\r\n        margin-right: .8em;\r\n        border-radius: 4px 0 0 4px;\r\n      }\r\n      .delete button {\r\n        background-color: #eee;\r\n        border: none;\r\n        padding: 5px 10px;\r\n        border-radius: 4px;\r\n        cursor: pointer;\r\n        cursor: hand;\r\n        font-family: Arial;\r\n      }\r\n      .delete button:hover {\r\n        background-color: #cfd8dc;\r\n      }\r\n      button.delete {\r\n        position: absolute;\r\n        left: 190px;\r\n        background-color: gray !important;\r\n        color: white;\r\n      }\r\n      .tipoDeValor1 {\r\n      min-width: 150px;\r\n      max-width: 500px;\r\n      width: 100%;\r\n    }\r\n      .esquerda{\r\n  width: 30%;\r\n  float:left;\r\n  }\r\n      .esquerda100{\r\n  width: 100%;\r\n  float:left;\r\n  }\r\n      .esquerdaComPadding{\r\n  width: 30%;\r\n  float:left;\r\n  padding-left: 30px;\r\n  }\r\n      .direita{\r\n    width:20%;\r\n    float:left;\r\n    padding-top: 7px;\r\n    padding-left: 10px;\r\n  }\r\n      .tipoValores{\r\n    width:100%;\r\n    float:left;\r\n    padding-top: 30px;\r\n  }\r\n      .criarProdutoButton{\r\n     padding-top:50px;\r\n    float:left;\r\n    width:40%;\r\n  }\r\n      .limparCamposButton{\r\n    padding-top:50px;\r\n    float:right;\r\n    width:60%;\r\n  }\r\n      .obrigatoriadadeProduto{\r\n     width:1%;\r\n  }\r\n      .botaoAdicionarProduto{\r\n    float:left;\r\n    width:10%;\r\n    padding-top:5px;\r\n  }\r\n      .direitaProduto{\r\n    width:10%;\r\n    float:left;\r\n    padding-top: 5px;\r\n    padding-left: 10px;\r\n  }\r\n      .produtoASelecionar{\r\n    padding-top: 20px;\r\n  }\r\n      .botao13{\r\n    width:30%;\r\n    float:left;\r\n    padding-bottom: 20px;\r\n  }\r\n      .botao13ComPadding{\r\n    width:30%;\r\n    float:left;\r\n    padding-bottom: 20px;\r\n    padding-left: 30px;\r\n  }\r\n      #main{\r\n    display: table;\r\n    width: 100%;\r\n    height: 100vh;\r\n    text-align: center;\r\n}\r\n      .fof{\r\n\t  display: table-cell;\r\n\t  vertical-align: middle;\r\n}\r\n      .fof h1{\r\n\t  font-size: 50px;\r\n\t  display: inline-block;\r\n\t  padding-right: 12px;\r\n\t  -webkit-animation: type .5s alternate infinite;\r\n\t          animation: type .5s alternate infinite;\r\n}\r\n      @-webkit-keyframes type{\r\n\t  from{box-shadow: inset -3px 0px 0px #888;}\r\n\t  to{box-shadow: inset -3px 0px 0px transparent;}\r\n}\r\n      @keyframes type{\r\n\t  from{box-shadow: inset -3px 0px 0px #888;}\r\n\t  to{box-shadow: inset -3px 0px 0px transparent;}\r\n}\r\n\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWF0ZXJpYWwtY29tcG9uZW50L2dlcmlyLXByb2R1dG8vZ2VyaXItcHJvZHV0by5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO1FBQ1Esa0JBQWtCO1FBQ2xCLHNCQUFzQjtRQUN0QixXQUFXO1FBQ1gsWUFBWTtPQUNiO01BQ0Q7UUFDRSxtQkFBbUI7UUFDbkIsZ0JBQWdCO1FBQ2hCLHVCQUF1QjtRQUN2QixhQUFhO1FBQ2IsZ0JBQWdCO1FBQ2hCLGNBQWM7UUFDZCxtQkFBbUI7T0FDcEI7TUFFRDtRQUNFLGVBQWU7UUFDZix1QkFBdUI7UUFDdkIsV0FBVztPQUNaO01BRUQ7UUFDRSxZQUFZO1FBQ1osc0JBQXNCO1FBQ3RCLG1CQUFtQjtRQUNuQixlQUFlO1FBQ2YsYUFBYTtPQUNkO01BRUQ7UUFDRSxjQUFjO09BQ2Y7TUFFRDtRQUNFLHNCQUFzQjtRQUN0QixpQkFBaUI7UUFDakIsYUFBYTtRQUNiLDZCQUE2QjtRQUM3QiwwQkFBMEI7UUFDMUIsaUJBQWlCO1FBQ2pCLG1CQUFtQjtRQUNuQixXQUFXO1FBQ1gsVUFBVTtRQUNWLGNBQWM7UUFDZCxnQkFBZ0I7UUFDaEIsa0JBQWtCO1FBQ2xCLG1CQUFtQjtRQUNuQiwyQkFBMkI7T0FDNUI7TUFFRDtRQUNFLHVCQUF1QjtRQUN2QixhQUFhO1FBQ2Isa0JBQWtCO1FBQ2xCLG1CQUFtQjtRQUNuQixnQkFBZ0I7UUFDaEIsYUFBYTtRQUNiLG1CQUFtQjtPQUNwQjtNQUVEO1FBQ0UsMEJBQTBCO09BQzNCO01BRUQ7UUFDRSxtQkFBbUI7UUFDbkIsWUFBWTtRQUNaLGtDQUFrQztRQUNsQyxhQUFhO09BQ2Q7TUFHRDtNQUNBLGlCQUFpQjtNQUNqQixpQkFBaUI7TUFDakIsWUFBWTtLQUNiO01BRUg7RUFDQSxXQUFXO0VBQ1gsV0FBVztHQUNWO01BRUQ7RUFDQSxZQUFZO0VBQ1osV0FBVztHQUNWO01BRUQ7RUFDQSxXQUFXO0VBQ1gsV0FBVztFQUNYLG1CQUFtQjtHQUNsQjtNQUdEO0lBQ0UsVUFBVTtJQUNWLFdBQVc7SUFDWCxpQkFBaUI7SUFDakIsbUJBQW1CO0dBQ3BCO01BRUM7SUFDQSxXQUFXO0lBQ1gsV0FBVztJQUNYLGtCQUFrQjtHQUNuQjtNQUVBO0tBQ0UsaUJBQWlCO0lBQ2xCLFdBQVc7SUFDWCxVQUFVO0dBQ1g7TUFDRDtJQUNFLGlCQUFpQjtJQUNqQixZQUFZO0lBQ1osVUFBVTtHQUNYO01BRUQ7S0FDRyxTQUFTO0dBQ1g7TUFFRDtJQUNFLFdBQVc7SUFDWCxVQUFVO0lBQ1YsZ0JBQWdCO0dBQ2pCO01BRUE7SUFDQyxVQUFVO0lBQ1YsV0FBVztJQUNYLGlCQUFpQjtJQUNqQixtQkFBbUI7R0FDcEI7TUFFRTtJQUNELGtCQUFrQjtHQUNuQjtNQUVDO0lBQ0EsVUFBVTtJQUNWLFdBQVc7SUFDWCxxQkFBcUI7R0FDdEI7TUFFQztJQUNBLFVBQVU7SUFDVixXQUFXO0lBQ1gscUJBQXFCO0lBQ3JCLG1CQUFtQjtHQUNwQjtNQUVEO0lBQ0UsZUFBZTtJQUNmLFlBQVk7SUFDWixjQUFjO0lBQ2QsbUJBQW1CO0NBQ3RCO01BRUQ7R0FDRyxvQkFBb0I7R0FDcEIsdUJBQXVCO0NBQ3pCO01BRUQ7R0FDRyxnQkFBZ0I7R0FDaEIsc0JBQXNCO0dBQ3RCLG9CQUFvQjtHQUNwQiwrQ0FBdUM7V0FBdkMsdUNBQXVDO0NBQ3pDO01BRUQ7R0FDRyxLQUFLLG9DQUFvQyxDQUFDO0dBQzFDLEdBQUcsMkNBQTJDLENBQUM7Q0FDakQ7TUFIRDtHQUNHLEtBQUssb0NBQW9DLENBQUM7R0FDMUMsR0FBRywyQ0FBMkMsQ0FBQztDQUNqRCIsImZpbGUiOiJzcmMvYXBwL21hdGVyaWFsLWNvbXBvbmVudC9nZXJpci1wcm9kdXRvL2dlcmlyLXByb2R1dG8uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5wcm9kdXRvcyB7XHJcbiAgICAgICAgbWFyZ2luOiAwIDAgMmVtIDA7XHJcbiAgICAgICAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xyXG4gICAgICAgIHBhZGRpbmc6IDA7XHJcbiAgICAgICAgd2lkdGg6IDE1ZW07XHJcbiAgICAgIH1cclxuICAgICAgLnByb2R1dG9zIGxpIHtcclxuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNFRUU7XHJcbiAgICAgICAgbWFyZ2luOiAuNWVtO1xyXG4gICAgICAgIHBhZGRpbmc6IC4zZW0gMDtcclxuICAgICAgICBoZWlnaHQ6IDEuNmVtO1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDRweDtcclxuICAgICAgfVxyXG4gICAgICBcclxuICAgICAgLnByb2R1dG9zIGxpOmhvdmVyIHtcclxuICAgICAgICBjb2xvcjogIzYwN0Q4QjtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjREREO1xyXG4gICAgICAgIGxlZnQ6IC4xZW07XHJcbiAgICAgIH1cclxuICAgICAgXHJcbiAgICAgIC5wcm9kdXRvcyBhIHtcclxuICAgICAgICBjb2xvcjogIzg4ODtcclxuICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICAgIHdpZHRoOiAyNTBweDtcclxuICAgICAgfVxyXG4gICAgICBcclxuICAgICAgLnByb2R1dG9zIGE6aG92ZXIge1xyXG4gICAgICAgIGNvbG9yOiM2MDdEOEI7XHJcbiAgICAgIH1cclxuICAgICAgXHJcbiAgICAgIC5wcm9kdXRvcyAuYmFkZ2Uge1xyXG4gICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgICAgICBmb250LXNpemU6IHNtYWxsO1xyXG4gICAgICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgICAgICBwYWRkaW5nOiAwLjhlbSAwLjdlbSAwIDAuN2VtO1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICM2MDdEOEI7XHJcbiAgICAgICAgbGluZS1oZWlnaHQ6IDFlbTtcclxuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgbGVmdDogLTFweDtcclxuICAgICAgICB0b3A6IC00cHg7XHJcbiAgICAgICAgaGVpZ2h0OiAxLjhlbTtcclxuICAgICAgICBtaW4td2lkdGg6IDE2cHg7XHJcbiAgICAgICAgdGV4dC1hbGlnbjogcmlnaHQ7XHJcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiAuOGVtO1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDRweCAwIDAgNHB4O1xyXG4gICAgICB9XHJcbiAgICAgIFxyXG4gICAgICAuZGVsZXRlIGJ1dHRvbiB7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2VlZTtcclxuICAgICAgICBib3JkZXI6IG5vbmU7XHJcbiAgICAgICAgcGFkZGluZzogNXB4IDEwcHg7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNHB4O1xyXG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgICAgICBjdXJzb3I6IGhhbmQ7XHJcbiAgICAgICAgZm9udC1mYW1pbHk6IEFyaWFsO1xyXG4gICAgICB9XHJcbiAgICAgIFxyXG4gICAgICAuZGVsZXRlIGJ1dHRvbjpob3ZlciB7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2NmZDhkYztcclxuICAgICAgfVxyXG4gICAgICBcclxuICAgICAgYnV0dG9uLmRlbGV0ZSB7XHJcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgIGxlZnQ6IDE5MHB4O1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IGdyYXkgIWltcG9ydGFudDtcclxuICAgICAgICBjb2xvcjogd2hpdGU7XHJcbiAgICAgIH1cclxuXHJcblxyXG4gICAgICAudGlwb0RlVmFsb3IxIHtcclxuICAgICAgbWluLXdpZHRoOiAxNTBweDtcclxuICAgICAgbWF4LXdpZHRoOiA1MDBweDtcclxuICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICB9XHJcblxyXG4gIC5lc3F1ZXJkYXtcclxuICB3aWR0aDogMzAlO1xyXG4gIGZsb2F0OmxlZnQ7XHJcbiAgfVxyXG5cclxuICAuZXNxdWVyZGExMDB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgZmxvYXQ6bGVmdDtcclxuICB9XHJcblxyXG4gIC5lc3F1ZXJkYUNvbVBhZGRpbmd7XHJcbiAgd2lkdGg6IDMwJTtcclxuICBmbG9hdDpsZWZ0O1xyXG4gIHBhZGRpbmctbGVmdDogMzBweDtcclxuICB9XHJcblxyXG5cclxuICAuZGlyZWl0YXtcclxuICAgIHdpZHRoOjIwJTtcclxuICAgIGZsb2F0OmxlZnQ7XHJcbiAgICBwYWRkaW5nLXRvcDogN3B4O1xyXG4gICAgcGFkZGluZy1sZWZ0OiAxMHB4O1xyXG4gIH1cclxuXHJcbiAgICAudGlwb1ZhbG9yZXN7XHJcbiAgICB3aWR0aDoxMDAlO1xyXG4gICAgZmxvYXQ6bGVmdDtcclxuICAgIHBhZGRpbmctdG9wOiAzMHB4O1xyXG4gIH1cclxuXHJcbiAgIC5jcmlhclByb2R1dG9CdXR0b257XHJcbiAgICAgcGFkZGluZy10b3A6NTBweDtcclxuICAgIGZsb2F0OmxlZnQ7XHJcbiAgICB3aWR0aDo0MCU7XHJcbiAgfVxyXG4gIC5saW1wYXJDYW1wb3NCdXR0b257XHJcbiAgICBwYWRkaW5nLXRvcDo1MHB4O1xyXG4gICAgZmxvYXQ6cmlnaHQ7XHJcbiAgICB3aWR0aDo2MCU7XHJcbiAgfVxyXG5cclxuICAub2JyaWdhdG9yaWFkYWRlUHJvZHV0b3tcclxuICAgICB3aWR0aDoxJTtcclxuICB9XHJcblxyXG4gIC5ib3Rhb0FkaWNpb25hclByb2R1dG97XHJcbiAgICBmbG9hdDpsZWZ0O1xyXG4gICAgd2lkdGg6MTAlO1xyXG4gICAgcGFkZGluZy10b3A6NXB4O1xyXG4gIH1cclxuXHJcbiAgIC5kaXJlaXRhUHJvZHV0b3tcclxuICAgIHdpZHRoOjEwJTtcclxuICAgIGZsb2F0OmxlZnQ7XHJcbiAgICBwYWRkaW5nLXRvcDogNXB4O1xyXG4gICAgcGFkZGluZy1sZWZ0OiAxMHB4O1xyXG4gIH1cclxuXHJcbiAgICAgLnByb2R1dG9BU2VsZWNpb25hcntcclxuICAgIHBhZGRpbmctdG9wOiAyMHB4O1xyXG4gIH1cclxuXHJcbiAgICAuYm90YW8xM3tcclxuICAgIHdpZHRoOjMwJTtcclxuICAgIGZsb2F0OmxlZnQ7XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogMjBweDtcclxuICB9XHJcblxyXG4gICAgLmJvdGFvMTNDb21QYWRkaW5ne1xyXG4gICAgd2lkdGg6MzAlO1xyXG4gICAgZmxvYXQ6bGVmdDtcclxuICAgIHBhZGRpbmctYm90dG9tOiAyMHB4O1xyXG4gICAgcGFkZGluZy1sZWZ0OiAzMHB4O1xyXG4gIH1cclxuXHJcbiAgI21haW57XHJcbiAgICBkaXNwbGF5OiB0YWJsZTtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiAxMDB2aDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5cclxuLmZvZntcclxuXHQgIGRpc3BsYXk6IHRhYmxlLWNlbGw7XHJcblx0ICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xyXG59XHJcblxyXG4uZm9mIGgxe1xyXG5cdCAgZm9udC1zaXplOiA1MHB4O1xyXG5cdCAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG5cdCAgcGFkZGluZy1yaWdodDogMTJweDtcclxuXHQgIGFuaW1hdGlvbjogdHlwZSAuNXMgYWx0ZXJuYXRlIGluZmluaXRlO1xyXG59XHJcblxyXG5Aa2V5ZnJhbWVzIHR5cGV7XHJcblx0ICBmcm9te2JveC1zaGFkb3c6IGluc2V0IC0zcHggMHB4IDBweCAjODg4O31cclxuXHQgIHRve2JveC1zaGFkb3c6IGluc2V0IC0zcHggMHB4IDBweCB0cmFuc3BhcmVudDt9XHJcbn1cclxuXHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/material-component/gerir-produto/gerir-produto.component.html":
/*!*******************************************************************************!*\
  !*** ./src/app/material-component/gerir-produto/gerir-produto.component.html ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"!flagServer\">\r\n  <mat-card>\r\n    <mat-card-content>\r\n      <div style=\"text-align:left\">\r\n        <mat-card-title>Gestão de Produtos</mat-card-title>\r\n        <mat-tab-group (focusChange)=\"clearVariaveis()\">\r\n\r\n          <mat-tab label=\"Criar Produto\">\r\n            <div *ngIf=\"criarProduto\" style=\"text-align:left\">\r\n              <p></p>\r\n              <div class=\"esquerda\">\r\n                <mat-form-field>\r\n                  <input matInput placeholder=\"Nome Produto\" autocomplete=\"off\" [(ngModel)]=\"nomeProduto\">\r\n                </mat-form-field>\r\n              </div>\r\n              <div class=\"esquerdaComPadding\">\r\n                <mat-form-field>\r\n                  <mat-select placeholder=\"Tipo de Produto\" [(ngModel)]=\"selectedTipoProduto\">\r\n                    <mat-option *ngFor=\"let tipo of listaTiposProduto ; let i = index\" [value]=\"i\">\r\n                      {{tipo}}\r\n                    </mat-option>\r\n                  </mat-select>\r\n                </mat-form-field>\r\n              </div>\r\n              <div class=\"esquerdaComPadding\">\r\n                <mat-form-field>\r\n                  <mat-select placeholder=\"Categoria\" [(ngModel)]=\"selectedCategoria\">\r\n                    <mat-option *ngFor=\"let cat of allCategorias ; let i=index\" [value]=\"i\">\r\n                      ID: {{cat.id}} - {{cat.descricao}}\r\n                    </mat-option>\r\n                  </mat-select>\r\n                </mat-form-field>\r\n              </div>\r\n              <div class=\"esquerda\">\r\n                <mat-form-field>\r\n                  <mat-select placeholder=\"Materiais\" [(ngModel)]=\"selectedMaterialExistente\">\r\n                    <mat-option *ngFor=\"let mat of allMateriais ; let i = index\" [value]=\"i\">\r\n                      {{mat.tipo}}\r\n                    </mat-option>\r\n                  </mat-select>\r\n                </mat-form-field>\r\n              </div>\r\n              <div class=\"direita\">\r\n                <button mat-raised-button color=\"primary\" (click)=\"addMaterialCreate()\">Adicionar</button>\r\n              </div>\r\n\r\n              <div class=\"esquerda\">\r\n                <mat-form-field>\r\n                  <mat-select placeholder=\"Materiais do Produto\" [(ngModel)]=\"selectedMaterialDoProduto\">\r\n                    <mat-option *ngFor=\"let mat of materiaisDoProduto ; let i = index\" [value]=\"i\">\r\n                      {{mat.tipo}}\r\n                    </mat-option>\r\n                  </mat-select>\r\n                </mat-form-field>\r\n              </div>\r\n              <div class=\"direita\">\r\n                <button mat-raised-button color=\"warn\" (click)=\"removeMaterialCreate()\">Remover</button>\r\n              </div>\r\n\r\n\r\n\r\n              <div class=\"tipoValores\">\r\n                <label>Tipo de Valores: </label>\r\n                <mat-radio-group [(ngModel)]=\"tipoValor1\">\r\n                  <mat-radio-button [value]=\"0\" (change)=\"clearValoresAltura()\">Discretos</mat-radio-button>\r\n                  <mat-radio-button [value]=\"1\" (change)=\"clearValoresAltura()\">Continuos</mat-radio-button>\r\n                </mat-radio-group>\r\n              </div>\r\n              <div>\r\n                <div class=\"esquerda\">\r\n                  <mat-form-field>\r\n                    <input matInput placeholder=\"Altura\" autocomplete=\"off\" [(ngModel)]=\"campoAltura\">\r\n                  </mat-form-field>\r\n                </div>\r\n                <div class=\"direita\">\r\n                  <button mat-raised-button color=\"primary\" (click)=\"addValor1()\">Adicionar</button>\r\n                </div>\r\n                <div class=\"esquerda\">\r\n                  <mat-form-field>\r\n                    <mat-select placeholder=\"Alturas\" [(ngModel)]=\"valorAlturaSelecionado\">\r\n                      <mat-option *ngFor=\"let num of valoresAltura\" [value]=\"num\">\r\n                        {{num}}\r\n                      </mat-option>\r\n                    </mat-select>\r\n                  </mat-form-field>\r\n                </div>\r\n                <div class=\"direita\">\r\n                  <button mat-raised-button color=\"warn\" (click)=\"removeValor1()\">Remover</button>\r\n                </div>\r\n              </div>\r\n\r\n              <div class=\"tipoValores\">\r\n                <label>Tipo de Valores: </label>\r\n                <mat-radio-group [(ngModel)]=\"tipoValor2\">\r\n                  <mat-radio-button [value]=\"0\" (change)=\"clearValoresLargura()\">Discretos</mat-radio-button>\r\n                  <mat-radio-button [value]=\"1\" (change)=\"clearValoresLargura()\">Continuos</mat-radio-button>\r\n                </mat-radio-group>\r\n              </div>\r\n              <div>\r\n                <div class=\"esquerda\">\r\n                  <mat-form-field>\r\n                    <input matInput placeholder=\"Largura\" autocomplete=\"off\" [(ngModel)]=\"campoLargura\">\r\n                  </mat-form-field>\r\n                </div>\r\n                <div class=\"direita\">\r\n                  <button mat-raised-button color=\"primary\" (click)=\"addValor2()\">Adicionar</button>\r\n                </div>\r\n                <div class=\"esquerda\">\r\n                  <mat-form-field>\r\n                    <mat-select placeholder=\"Larguras\" [(ngModel)]=\"valorLarguraSelecionado\">\r\n                      <mat-option *ngFor=\"let num of valoresLargura\" [value]=\"num\">\r\n                        {{num}}\r\n                      </mat-option>\r\n                    </mat-select>\r\n                  </mat-form-field>\r\n                </div>\r\n                <div class=\"direita\">\r\n                  <button mat-raised-button color=\"warn\" (click)=\"removeValor2()\">Remover</button>\r\n                </div>\r\n              </div>\r\n\r\n              <div class=\"tipoValores\">\r\n                <label>Tipo de Valores: </label>\r\n                <mat-radio-group [(ngModel)]=\"tipoValor3\">\r\n                  <mat-radio-button [value]=\"0\" (change)=\"clearValoresProfundidade()\">Discretos</mat-radio-button>\r\n                  <mat-radio-button [value]=\"1\" (change)=\"clearValoresProfundidade()\">Continuos</mat-radio-button>\r\n                </mat-radio-group>\r\n              </div>\r\n              <div>\r\n                <div class=\"esquerda\">\r\n                  <mat-form-field>\r\n                    <input matInput placeholder=\"Profundidade\" autocomplete=\"off\" [(ngModel)]=\"campoProfundidade\">\r\n                  </mat-form-field>\r\n                </div>\r\n                <div class=\"direita\">\r\n                  <button mat-raised-button color=\"primary\" (click)=\"addValor3()\">Adicionar</button>\r\n                </div>\r\n                <div class=\"esquerda\">\r\n                  <mat-form-field>\r\n                    <mat-select placeholder=\"Profundidades\" [(ngModel)]=\"valorProfundidadeSelecionado\">\r\n                      <mat-option *ngFor=\"let num of valoresProfundidade\" [value]=\"num\">\r\n                        {{num}}\r\n                      </mat-option>\r\n                    </mat-select>\r\n                  </mat-form-field>\r\n                </div>\r\n                <div class=\"direita\">\r\n                  <button mat-raised-button color=\"warn\" (click)=\"removeValor3()\">Remover</button>\r\n                </div>\r\n              </div>\r\n\r\n\r\n              <p></p>\r\n              <div style=\"text-align:center\" class=\"criarProdutoButton\">\r\n                <nav>\r\n                  <button mat-raised-button color=\"primary\" (click)=\"criarProduto()\">Criar Produto</button>\r\n                </nav>\r\n              </div>\r\n              <div style=\"text-align:center\" class=\"limparCamposButton\">\r\n                <nav>\r\n                  <button mat-raised-button color=\"warn\" (click)=\"clearVariaveis()\">Limpar Campos</button>\r\n                </nav>\r\n              </div>\r\n            </div>\r\n          </mat-tab>\r\n\r\n\r\n\r\n\r\n\r\n          <mat-tab label=\"Gerir Agregações\">\r\n            <div class=\"produtoASelecionar\">\r\n              <label>Produto a Selecionar: </label>\r\n              <mat-form-field>\r\n                <mat-select placeholder=\"Lista de Produtos\" [(ngModel)]=\"selectedProduto\">\r\n                  <mat-option *ngFor=\"let prod of allProdutos\" id=\"listaProdutosUpdate\" [value]=\"prod\" (click)=\"selecionarProdutoAgregacoes(prod)\">\r\n                    ID: {{prod.id}} - Nome: {{prod.nome}} - Tipo: {{prod.tipo}}\r\n                  </mat-option>\r\n                </mat-select>\r\n              </mat-form-field>\r\n            </div>\r\n\r\n            <div class=\"tipoValores\">\r\n              <label>Tipo de Agregação: </label>\r\n              <mat-radio-group [(ngModel)]=\"tipoAgregacao\">\r\n                <mat-radio-button [value]=\"false\">Opcional</mat-radio-button>\r\n                <mat-radio-button [value]=\"true\">Obrigatoria</mat-radio-button>\r\n              </mat-radio-group>\r\n            </div>\r\n\r\n            <div class=\"esquerda\">\r\n              <mat-form-field>\r\n                <mat-select placeholder=\"Produtos\" [(ngModel)]=\"selectedProdutoExistente\">\r\n                  <mat-option *ngFor=\"let prod of allProdutos ; let i = index\" [value]=\"i\">\r\n                    Nome:{{prod.nome}} - Tipo: {{prod.tipo}}\r\n                  </mat-option>\r\n                </mat-select>\r\n              </mat-form-field>\r\n            </div>\r\n\r\n            <div class=\"esquerdaComPadding\">\r\n              <mat-form-field>\r\n                <mat-select placeholder=\"Produtos Filho\" [(ngModel)]=\"selectedProdutoFilho\">\r\n                  <mat-option *ngFor=\"let prodFilho of listaProdutosFilho ; let i = index\" [value]=\"i\" (click)=\"selecionarProdutoFilhoAgregacoes()\">\r\n                    Nome:{{prodFilho.nome}} - Tipo: {{prodFilho.tipo}}\r\n                  </mat-option>\r\n                </mat-select>\r\n              </mat-form-field>\r\n            </div>\r\n\r\n            <mat-form-field class=\"esquerdaComPadding\">\r\n              <mat-select placeholder=\"Restricoes\" [(ngModel)]=\"selectedRestricao\">\r\n                <mat-option *ngFor=\"let restricao of listaRestricoesDeAgregacao ; let i = index\" [value]=\"i\">\r\n                  Tipo:{{restricao.tipoRes}} - Parametros: {{restricao.params}}\r\n                </mat-option>\r\n              </mat-select>\r\n            </mat-form-field>\r\n\r\n            <div class=\"botao13\">\r\n              <button mat-raised-button color=\"primary\" (click)=\"addAgregacao()\">Adicionar Agregacao</button>\r\n            </div>\r\n\r\n\r\n            <div class=\"botao13ComPadding\">\r\n              <button mat-raised-button color=\"warn\" (click)=\"removeAgregacao()\">Remover Agregacao</button>\r\n            </div>\r\n\r\n            <div class=\"botao13ComPadding\">\r\n              <button mat-raised-button color=\"warn\" (click)=\"removeRestricao()\">Remover Restricao</button>\r\n            </div>\r\n\r\n            <div class=\"produtoASelecionar\">\r\n              <mat-form-field class=\"esquerda\">\r\n                <mat-select placeholder=\"Lista de Tipos de Restricao\" [(ngModel)]=\"selectedTipoRestricao\">\r\n                  <mat-option [value]=\"0\">\r\n                    Volume\r\n                  </mat-option>\r\n                  <mat-option [value]=\"1\">\r\n                    Materiais\r\n                  </mat-option>\r\n                </mat-select>\r\n              </mat-form-field>\r\n\r\n              <div *ngIf=\"!selectedTipoRestricao\" style=\"text-align:left\">\r\n                <mat-form-field class=\"esquerdaComPadding\">\r\n                  <input matInput placeholder=\"Volume Mínimo\" autocomplete=\"off\" [(ngModel)]=\"volumeMinimo\">\r\n                  <mat-hint align=\"end\">Insera percentagem de volume mínima</mat-hint>\r\n                </mat-form-field>\r\n                <mat-form-field class=\"esquerdaComPadding\">\r\n                  <input matInput placeholder=\"Volume Máximo\" autocomplete=\"off\" [(ngModel)]=\"volumeMaximo\">\r\n                  <mat-hint align=\"end\">Insera percentagem de volume máxima</mat-hint>\r\n                </mat-form-field>\r\n              </div>\r\n              <div class=\"esquerda100\">\r\n                <button mat-raised-button color=\"primary\" (click)=\"addRestricao()\">Criar Restrição</button>\r\n              </div>\r\n            </div>\r\n\r\n          </mat-tab>\r\n\r\n\r\n\r\n\r\n          <mat-tab label=\"Editar Produto\">\r\n            <div class=\"produtoASelecionar\">\r\n              <label>Produto a Selecionar: </label>\r\n              <mat-form-field>\r\n                <mat-select placeholder=\"Lista de Produtos\" [(ngModel)]=\"selectedProduto\">\r\n                  <mat-option *ngFor=\"let prod of allProdutos\" id=\"listaProdutosUpdate\" [value]=\"prod\" (click)=\"selecionarProdutoEditar(prod)\">\r\n                    ID: {{prod.id}} - Nome: {{prod.nome}} - Tipo: {{prod.tipo}}\r\n                  </mat-option>\r\n                </mat-select>\r\n              </mat-form-field>\r\n            </div>\r\n\r\n\r\n            <div style=\"text-align:left\">\r\n              <p></p>\r\n              <mat-form-field>\r\n                <input matInput placeholder=\"Nome Produto\" autocomplete=\"off\" [(ngModel)]=\"nomeProduto\">\r\n              </mat-form-field>\r\n              <div class=\"tipoProduto\">\r\n                <mat-form-field>\r\n                  <mat-select placeholder=\"Tipo de Produto\" [(ngModel)]=\"selectedTipoProduto\">\r\n                    <mat-option *ngFor=\"let tipo of listaTiposProduto ; let i = index\" [value]=\"i\">\r\n                      {{tipo}}\r\n                    </mat-option>\r\n                  </mat-select>\r\n                </mat-form-field>\r\n              </div>\r\n              <div class=\"categoria\">\r\n                <mat-form-field>\r\n                  <mat-select placeholder=\"Categoria\" [(ngModel)]=\"selectedCategoria\">\r\n                    <mat-option *ngFor=\"let cat of allCategorias ; let i = index\" [value]=\"i\">\r\n                      ID: {{cat.id}} - {{cat.descricao}}\r\n                    </mat-option>\r\n                  </mat-select>\r\n                </mat-form-field>\r\n              </div>\r\n              <div class=\"esquerda\">\r\n                <mat-form-field>\r\n                  <mat-select placeholder=\"Materiais\" [(ngModel)]=\"selectedMaterialExistente\">\r\n                    <mat-option *ngFor=\"let mat of allMateriais ; let i = index\" [value]=\"i\">\r\n                      {{mat.tipo}}\r\n                    </mat-option>\r\n                  </mat-select>\r\n                </mat-form-field>\r\n              </div>\r\n              <div class=\"direita\">\r\n                <button mat-raised-button color=\"primary\" (click)=\"addMaterial()\">Adicionar</button>\r\n              </div>\r\n\r\n              <div class=\"esquerda\">\r\n                <mat-form-field>\r\n                  <mat-select placeholder=\"Materiais do Produto\" [(ngModel)]=\"selectedMaterialDoProduto\">\r\n                    <mat-option *ngFor=\"let mat of materiaisDoProduto ; let i = index\" [value]=\"i\">\r\n                      {{mat.tipo}}\r\n                    </mat-option>\r\n                  </mat-select>\r\n                </mat-form-field>\r\n              </div>\r\n              <div class=\"direita\">\r\n                <button mat-raised-button color=\"warn\" (click)=\"removeMaterial()\">Remover</button>\r\n              </div>\r\n\r\n\r\n\r\n              <div class=\"tipoValores\">\r\n                <label>Tipo de Valores: </label>\r\n                <mat-radio-group [(ngModel)]=\"tipoValor1\">\r\n                  <mat-radio-button [value]=\"0\" (change)=\"clearValoresAltura()\">Discretos</mat-radio-button>\r\n                  <mat-radio-button [value]=\"1\" (change)=\"clearValoresAltura()\">Continuos</mat-radio-button>\r\n                </mat-radio-group>\r\n              </div>\r\n              <div>\r\n                <div class=\"esquerda\">\r\n                  <mat-form-field>\r\n                    <input matInput placeholder=\"Altura\" autocomplete=\"off\" [(ngModel)]=\"campoAltura\">\r\n                  </mat-form-field>\r\n                </div>\r\n                <div class=\"direita\">\r\n                  <button mat-raised-button color=\"primary\" (click)=\"addValor1()\">Adicionar</button>\r\n                </div>\r\n                <div class=\"esquerda\">\r\n                  <mat-form-field>\r\n                    <mat-select placeholder=\"Alturas\" [(ngModel)]=\"valorAlturaSelecionado\">\r\n                      <mat-option *ngFor=\"let num of valoresAltura\" [value]=\"num\">\r\n                        {{num}}\r\n                      </mat-option>\r\n                    </mat-select>\r\n                  </mat-form-field>\r\n                </div>\r\n                <div class=\"direita\">\r\n                  <button mat-raised-button color=\"warn\" (click)=\"removeValor1()\">Remover</button>\r\n                </div>\r\n              </div>\r\n\r\n              <div class=\"tipoValores\">\r\n                <label>Tipo de Valores: </label>\r\n                <mat-radio-group [(ngModel)]=\"tipoValor2\">\r\n                  <mat-radio-button [value]=\"0\" (change)=\"clearValoresLargura()\">Discretos</mat-radio-button>\r\n                  <mat-radio-button [value]=\"1\" (change)=\"clearValoresLargura()\">Continuos</mat-radio-button>\r\n                </mat-radio-group>\r\n              </div>\r\n              <div>\r\n                <div class=\"esquerda\">\r\n                  <mat-form-field>\r\n                    <input matInput placeholder=\"Largura\" autocomplete=\"off\" [(ngModel)]=\"campoLargura\">\r\n                  </mat-form-field>\r\n                </div>\r\n                <div class=\"direita\">\r\n                  <button mat-raised-button color=\"primary\" (click)=\"addValor2()\">Adicionar</button>\r\n                </div>\r\n                <div class=\"esquerda\">\r\n                  <mat-form-field>\r\n                    <mat-select placeholder=\"Larguras\" [(ngModel)]=\"valorLarguraSelecionado\">\r\n                      <mat-option *ngFor=\"let num of valoresLargura\" [value]=\"num\">\r\n                        {{num}}\r\n                      </mat-option>\r\n                    </mat-select>\r\n                  </mat-form-field>\r\n                </div>\r\n                <div class=\"direita\">\r\n                  <button mat-raised-button color=\"warn\" (click)=\"removeValor2()\">Remover</button>\r\n                </div>\r\n              </div>\r\n\r\n              <div class=\"tipoValores\">\r\n                <label>Tipo de Valores: </label>\r\n                <mat-radio-group [(ngModel)]=\"tipoValor3\">\r\n                  <mat-radio-button [value]=\"0\" (change)=\"clearValoresProfundidade()\">Discretos</mat-radio-button>\r\n                  <mat-radio-button [value]=\"1\" (change)=\"clearValoresProfundidade()\">Continuos</mat-radio-button>\r\n                </mat-radio-group>\r\n              </div>\r\n              <div>\r\n                <div class=\"esquerda\">\r\n                  <mat-form-field>\r\n                    <input matInput placeholder=\"Profundidade\" autocomplete=\"off\" [(ngModel)]=\"campoProfundidade\">\r\n                  </mat-form-field>\r\n                </div>\r\n                <div class=\"direita\">\r\n                  <button mat-raised-button color=\"primary\" (click)=\"addValor3()\">Adicionar</button>\r\n                </div>\r\n                <div class=\"esquerda\">\r\n                  <mat-form-field>\r\n                    <mat-select placeholder=\"Profundidades\" [(ngModel)]=\"valorProfundidadeSelecionado\">\r\n                      <mat-option *ngFor=\"let num of valoresProfundidade\" [value]=\"num\">\r\n                        {{num}}\r\n                      </mat-option>\r\n                    </mat-select>\r\n                  </mat-form-field>\r\n                </div>\r\n                <div class=\"direita\">\r\n                  <button mat-raised-button color=\"warn\" (click)=\"removeValor3()\">Remover</button>\r\n                </div>\r\n              </div>\r\n\r\n              <p></p>\r\n              <div style=\"text-align:center\" class=\"criarProdutoButton\">\r\n                <nav>\r\n                  <button mat-raised-button color=\"primary\" (click)=\"editarProduto()\">Guardar Alterções</button>\r\n                </nav>\r\n              </div>\r\n              <div style=\"text-align:center\" class=\"limparCamposButton\">\r\n                <nav>\r\n                  <button mat-raised-button color=\"warn\" (click)=\"limparCamposEditarButton()\">Limpar Campos</button>\r\n                </nav>\r\n              </div>\r\n            </div>\r\n\r\n\r\n          </mat-tab>\r\n          <mat-tab label=\"Listar Produtos\">\r\n            <div style=\"text-align:left\">\r\n              <h2>Listar Materiais</h2>\r\n              <ul class=\"produtos\">\r\n                <li *ngFor=\"let prod of allProdutos\">\r\n                  <span class=\"badge\">{{prod.id}}</span>\r\n                  <span>{{prod.nome}}</span>\r\n                  <button class=\"delete\" title=\"delete produto\" (click)=\"deleteProdutoHTML(prod.id)\">x</button>\r\n                </li>\r\n              </ul>\r\n            </div>\r\n          </mat-tab>\r\n        </mat-tab-group>\r\n      </div>\r\n    </mat-card-content>\r\n  </mat-card>\r\n</div>\r\n<div *ngIf=\"flagServer\">\r\n  <div id=\"main\">\r\n    <div class=\"fof\">\r\n      <h1>Não foi possível aceder ao servidor.</h1>\r\n    </div>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "./src/app/material-component/gerir-produto/gerir-produto.component.ts":
/*!*****************************************************************************!*\
  !*** ./src/app/material-component/gerir-produto/gerir-produto.component.ts ***!
  \*****************************************************************************/
/*! exports provided: GerirProdutoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GerirProdutoComponent", function() { return GerirProdutoComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _gestor_produto_produto__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../gestor/produto/produto */ "./src/app/gestor/produto/produto.ts");
/* harmony import */ var _gestor_categoria_categoria_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../gestor/categoria/categoria.service */ "./src/app/gestor/categoria/categoria.service.ts");
/* harmony import */ var _gestor_produto_produto_material_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../gestor/produto/produto-material.service */ "./src/app/gestor/produto/produto-material.service.ts");
/* harmony import */ var _gestor_produto_produto_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../gestor/produto/produto.service */ "./src/app/gestor/produto/produto.service.ts");
/* harmony import */ var _gestor_material_material_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../gestor/material/material.service */ "./src/app/gestor/material/material.service.ts");
/* harmony import */ var _gestor_produto_produto_material__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../gestor/produto/produto-material */ "./src/app/gestor/produto/produto-material.ts");
/* harmony import */ var _gestor_produto_dimensao__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../gestor/produto/dimensao */ "./src/app/gestor/produto/dimensao.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _gestor_produto_tipo_produto__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../gestor/produto/tipo-produto */ "./src/app/gestor/produto/tipo-produto.ts");
/* harmony import */ var _gestor_agregacao_agregacao_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../gestor/agregacao/agregacao.service */ "./src/app/gestor/agregacao/agregacao.service.ts");
/* harmony import */ var _gestor_agregacao_agregacao__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../gestor/agregacao/agregacao */ "./src/app/gestor/agregacao/agregacao.ts");
/* harmony import */ var _gestor_produto_tipo_dimensao__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../gestor/produto/tipo-dimensao */ "./src/app/gestor/produto/tipo-dimensao.ts");
/* harmony import */ var _gestor_agregacao_tipo_restricao__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../gestor/agregacao/tipo-restricao */ "./src/app/gestor/agregacao/tipo-restricao.ts");
/* harmony import */ var _gestor_agregacao_restricao_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../gestor/agregacao/restricao.service */ "./src/app/gestor/agregacao/restricao.service.ts");
/* harmony import */ var _gestor_agregacao_restricao__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../gestor/agregacao/restricao */ "./src/app/gestor/agregacao/restricao.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
















var GerirProdutoComponent = /** @class */ (function () {
    function GerirProdutoComponent(produtoSrv, categoriaSrv, materialSrv, produtoMaterialSrv, agregacaoSrv, restricaoSrv, snackBar) {
        this.produtoSrv = produtoSrv;
        this.categoriaSrv = categoriaSrv;
        this.materialSrv = materialSrv;
        this.produtoMaterialSrv = produtoMaterialSrv;
        this.agregacaoSrv = agregacaoSrv;
        this.restricaoSrv = restricaoSrv;
        this.snackBar = snackBar;
        this.flagServer = false;
        this.selectedProduto = null;
        this.selectedCategoria = 0;
        this.tipoValor1 = 0;
        this.tipoValor2 = 0;
        this.tipoValor3 = 0;
        this.valoresAltura = [];
        this.valorAlturaSelecionado = null;
        this.valoresLargura = [];
        this.valorLarguraSelecionado = null;
        this.valoresProfundidade = [];
        this.valorProfundidadeSelecionado = null;
        this.nomeProduto = null;
        this.campoAltura = null;
        this.campoLargura = null;
        this.campoProfundidade = null;
        this.listaTiposProduto = [];
        this.listaTiposDimensao = [];
        this.selectedTipoProduto = 0;
        this.selectedMaterialExistente = 0;
        this.selectedMaterialDoProduto = 0;
        this.materiaisDoProduto = [];
        this.selectedProdutoExistente = 0;
        this.selectedProdutoFilho = 0;
        this.tipoAgregacao = false;
        this.listaProdutosFilho = [];
        this.listaTiposDeAgregacao = [];
        this.selectedTipoRestricao = 0;
        this.selectedRestricao = null;
        this.volumeMinimo = null;
        this.volumeMaximo = null;
        this.listaTiposRestricao = [];
        this.listaRestricoesDeAgregacao = [];
    }
    GerirProdutoComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.getProdutos();
        this.getCategorias();
        this.getMateriais();
        Object.keys(_gestor_produto_tipo_produto__WEBPACK_IMPORTED_MODULE_9__["TipoProduto"]).map(function (key) {
            if (isNaN(Number(_gestor_produto_tipo_produto__WEBPACK_IMPORTED_MODULE_9__["TipoProduto"][key]))) {
                _this.listaTiposProduto.push(_gestor_produto_tipo_produto__WEBPACK_IMPORTED_MODULE_9__["TipoProduto"][key]);
            }
        });
        Object.keys(_gestor_produto_tipo_dimensao__WEBPACK_IMPORTED_MODULE_12__["TipoDimensao"]).map(function (key) {
            if (isNaN(Number(_gestor_produto_tipo_dimensao__WEBPACK_IMPORTED_MODULE_12__["TipoDimensao"][key]))) {
                _this.listaTiposDimensao.push(_gestor_produto_tipo_dimensao__WEBPACK_IMPORTED_MODULE_12__["TipoDimensao"][key]);
            }
        });
        Object.keys(_gestor_agregacao_tipo_restricao__WEBPACK_IMPORTED_MODULE_13__["TipoRestricao"]).map(function (key) {
            if (isNaN(Number(_gestor_agregacao_tipo_restricao__WEBPACK_IMPORTED_MODULE_13__["TipoRestricao"][key]))) {
                _this.listaTiposRestricao.push(_gestor_agregacao_tipo_restricao__WEBPACK_IMPORTED_MODULE_13__["TipoRestricao"][key]);
            }
        });
    };
    GerirProdutoComponent.prototype.getProdutos = function () {
        var _this = this;
        this.produtoSrv.getProdutos().subscribe(function (data) {
            _this.allProdutos = data;
        }, function (error) {
            _this.statusMessage = "Error: Service Unavailable";
            console.log(error);
            _this.flagServer = true;
        });
    };
    GerirProdutoComponent.prototype.getMateriais = function () {
        var _this = this;
        this.materialSrv.getMateriais().subscribe(function (data) {
            _this.allMateriais = data;
        }, function (error) {
            _this.statusMessage = "Error: Service Unavailable";
            console.log(error);
            _this.flagServer = true;
        });
    };
    GerirProdutoComponent.prototype.getCategorias = function () {
        var _this = this;
        this.categoriaSrv.getCategorias().subscribe(function (data) {
            _this.allCategorias = data;
            _this.selectedCategoria = 0;
        }, function (error) {
            _this.statusMessage = "Error: Service Unavailable";
            console.log(error);
            _this.flagServer = true;
        });
    };
    GerirProdutoComponent.prototype.addValor1 = function () {
        var valor = this.campoAltura;
        if (isNaN(Number(valor))) {
            this.snackBar.open("Insira valores válidos (por exemplo 1.2)", "", { duration: 4000 });
            return;
        }
        if (Number(valor) < Number(1) || Number(valor) > Number(3)) {
            this.snackBar.open("A altura está entre 1 e 3", "", { duration: 4000 });
            return;
        }
        if (this.tipoValor1 == 1 && this.valoresAltura.length == 2) {
            this.snackBar.open("Não é permitido existir mais de 2 valores para comprimentos continuos", "", { duration: 4000 });
            return;
        }
        for (var i = 0; i < this.valoresAltura.length; i++) {
            if (this.valoresAltura[i] == valor) {
                return;
            }
        }
        this.valoresAltura.push(valor);
        this.valoresAltura.sort(function (a, b) { return a - b; });
        this.valorAlturaSelecionado = valor;
    };
    GerirProdutoComponent.prototype.addValor2 = function () {
        var valor = this.campoLargura;
        if (isNaN(Number(valor))) {
            this.snackBar.open("Insira valores válidos (por exemplo 1.2)", "", { duration: 4000 });
            return;
        }
        if (Number(valor) < Number(1) || Number(valor) > Number(3)) {
            this.snackBar.open("A largura está entre 1 e 3", "", { duration: 4000 });
            return;
        }
        if (this.tipoValor2 == 1 && this.valoresLargura.length == 2) {
            this.snackBar.open("Não é permitido existir mais de 2 valores para comprimentos continuos", "", { duration: 4000 });
            return;
        }
        for (var i = 0; i < this.valoresLargura.length; i++) {
            if (this.valoresLargura[i] == valor) {
                return;
            }
        }
        this.valoresLargura.push(valor);
        this.valoresLargura.sort(function (a, b) { return a - b; });
        this.valorLarguraSelecionado = valor;
    };
    GerirProdutoComponent.prototype.addValor3 = function () {
        var valor = this.campoProfundidade;
        if (isNaN(Number(valor))) {
            this.snackBar.open("Insira valores válidos (por exemplo 1.2)", "", { duration: 4000 });
            return;
        }
        if (Number(valor) < Number(0.5) || Number(valor) > Number(1.5)) {
            this.snackBar.open("A profundidade está entre 0.5 e 1.5", "", { duration: 4000 });
            return;
        }
        if (this.tipoValor3 == 1 && this.valoresProfundidade.length == 2) {
            this.snackBar.open("Não é permitido existir mais de 2 valores para comprimentos continuos", "", { duration: 4000 });
            return;
        }
        for (var i = 0; i < this.valoresProfundidade.length; i++) {
            if (this.valoresProfundidade[i] == valor) {
                return;
            }
        }
        this.valoresProfundidade.push(valor);
        this.valoresProfundidade.sort(function (a, b) { return a - b; });
        this.valorProfundidadeSelecionado = valor;
    };
    GerirProdutoComponent.prototype.addMaterialCreate = function () {
        var m = this.allMateriais[this.selectedMaterialExistente];
        if (this.existeNoArray(m, this.materiaisDoProduto)) {
            return;
        }
        this.materiaisDoProduto.push(m);
        this.selectedMaterialDoProduto = this.materiaisDoProduto.length - 1;
    };
    GerirProdutoComponent.prototype.removeMaterialCreate = function () {
        if (this.materiaisDoProduto.length == 0) {
            return;
        }
        this.materiaisDoProduto.splice(this.selectedMaterialDoProduto, 1);
        if (this.materiaisDoProduto.length == 0) {
            this.selectedMaterialDoProduto = null;
        }
        else {
            this.selectedMaterialDoProduto = 0;
        }
    };
    GerirProdutoComponent.prototype.addMaterial = function () {
        var _this = this;
        if (this.selectedProduto == null) {
            return;
        }
        var m = this.allMateriais[this.selectedMaterialExistente];
        if (this.existeNoArray(m, this.materiaisDoProduto)) {
            return;
        }
        var produtoMaterial = new _gestor_produto_produto_material__WEBPACK_IMPORTED_MODULE_6__["ProdutoMaterial"](this.selectedProduto.id, m.id);
        this.produtoMaterialSrv.addProdutoMaterial(produtoMaterial)
            .subscribe(function (produtoMaterial) {
            _this.snackBar.open("Sucesso!", "Material Adicionado", { duration: 4000 });
            _this.materiaisDoProduto.push(m);
            _this.selectedMaterialDoProduto = _this.materiaisDoProduto.length - 1;
        }, function (erro) {
            _this.snackBar.open("Erro!", erro.error, { duration: 4000 });
            console.log(erro);
        });
    };
    GerirProdutoComponent.prototype.removeMaterial = function () {
        var _this = this;
        if (this.selectedMaterialDoProduto == null) {
            this.snackBar.open("Selecione o material do produto", "", { duration: 4000 });
            return;
        }
        if (this.materiaisDoProduto.length < 2) {
            this.snackBar.open("Não é possível remover o ultimo material do produto", "", { duration: 4000 });
            return;
        }
        var produtoMaterial = new _gestor_produto_produto_material__WEBPACK_IMPORTED_MODULE_6__["ProdutoMaterial"](this.selectedProduto.id, this.materiaisDoProduto[this.selectedMaterialDoProduto].id);
        this.produtoMaterialSrv.deleteProdutoMaterial(produtoMaterial.produtoId, produtoMaterial.materialId).subscribe(function (pm) {
            _this.materiaisDoProduto.splice(_this.selectedMaterialDoProduto, 1);
            if (_this.materiaisDoProduto.length == 0) {
                _this.selectedMaterialDoProduto = null;
            }
            else {
                _this.selectedMaterialDoProduto = 0;
            }
            _this.snackBar.open("Sucesso!", "Material Removido", { duration: 4000 });
        }, function (erro) {
            _this.snackBar.open("Erro!", erro.error, { duration: 4000 });
            console.log(erro);
        });
    };
    GerirProdutoComponent.prototype.addAgregacao = function () {
        var _this = this;
        if (this.selectedProduto == null) {
            this.snackBar.open("Selecione o Produto Pai", "", { duration: 4000 });
            return;
        }
        if (this.selectedProdutoExistente == null) {
            this.snackBar.open("Selecione o Produto", "", { duration: 4000 });
            return;
        }
        var p = this.allProdutos[this.selectedProdutoExistente];
        var tipo = p.tipo;
        if (this.existeNoArray(p, this.listaProdutosFilho)) {
            return;
        }
        if (this.selectedProduto.tipo != this.listaTiposProduto[_gestor_produto_tipo_produto__WEBPACK_IMPORTED_MODULE_9__["TipoProduto"].Armario] && this.selectedProduto.tipo != this.listaTiposProduto[_gestor_produto_tipo_produto__WEBPACK_IMPORTED_MODULE_9__["TipoProduto"].Modulo]) {
            this.snackBar.open("Um Produto deste tipo não pode conter Produtos Filho", "", { duration: 4000 });
            return;
        }
        if (this.selectedProduto.tipo == this.listaTiposProduto[_gestor_produto_tipo_produto__WEBPACK_IMPORTED_MODULE_9__["TipoProduto"].Armario] && p.tipo != this.listaTiposProduto[_gestor_produto_tipo_produto__WEBPACK_IMPORTED_MODULE_9__["TipoProduto"].Modulo]) {
            this.snackBar.open("Um Produto do tipo Armario só pode conter Módulos", "", { duration: 4000 });
            return;
        }
        if (this.selectedProduto.tipo == this.listaTiposProduto[_gestor_produto_tipo_produto__WEBPACK_IMPORTED_MODULE_9__["TipoProduto"].Modulo] && (p.tipo == this.listaTiposProduto[_gestor_produto_tipo_produto__WEBPACK_IMPORTED_MODULE_9__["TipoProduto"].Armario] || p.tipo == this.listaTiposProduto[_gestor_produto_tipo_produto__WEBPACK_IMPORTED_MODULE_9__["TipoProduto"].Modulo])) {
            this.snackBar.open("Um Produto do tipo Módulo não pode conter um Armário ou Módulo", "", { duration: 4000 });
            return;
        }
        var minFilho = Math.min.apply(Math, this.allProdutos[this.selectedProdutoExistente].altura.listaValores);
        var maxPai = Math.max.apply(Math, this.selectedProduto.altura.listaValores);
        if (minFilho > maxPai) {
            this.snackBar.open("A altura do produto filho (" + minFilho + "m) não cabe no produto pai (" + maxPai + "m)", "", { duration: 4000 });
            return;
        }
        minFilho = Math.min.apply(Math, this.allProdutos[this.selectedProdutoExistente].largura.listaValores);
        maxPai = Math.max.apply(Math, this.selectedProduto.largura.listaValores);
        if (minFilho > maxPai) {
            this.snackBar.open("A largura do produto filho (" + minFilho + "m) não cabe no produto pai (" + maxPai + "m)", "", { duration: 4000 });
            return;
        }
        minFilho = Math.min.apply(Math, this.allProdutos[this.selectedProdutoExistente].profundidade.listaValores);
        maxPai = Math.max.apply(Math, this.selectedProduto.profundidade.listaValores);
        if (minFilho > maxPai) {
            this.snackBar.open("A profundidade do produto filho (" + minFilho + "m) não cabe no produto pai (" + maxPai + "m)", "", { duration: 4000 });
            return;
        }
        var agregacao = new _gestor_agregacao_agregacao__WEBPACK_IMPORTED_MODULE_11__["Agregacao"](this.selectedProduto.id, p.id, this.tipoAgregacao);
        this.agregacaoSrv.addagregacao(agregacao)
            .subscribe(function (agreg) {
            _this.listaProdutosFilho.push(p);
            _this.listaTiposDeAgregacao.push(agregacao.confirmation);
            _this.selectedProdutoFilho = 0;
            _this.snackBar.open("Sucesso!", "Agregação criada", { duration: 4000 });
        }, function (erro) {
            _this.snackBar.open("Erro!", erro.error, { duration: 4000 });
            console.log(erro);
        });
    };
    GerirProdutoComponent.prototype.removeAgregacao = function () {
        var _this = this;
        if (this.selectedProduto == null) {
            this.snackBar.open("Selecione Produto Pai", "", { duration: 4000 });
            return;
        }
        if (this.selectedProdutoFilho == null) {
            this.snackBar.open("Selecione Produto Filho", "", { duration: 4000 });
            return;
        }
        this.agregacaoSrv.deleteAgregacao(this.selectedProduto.id, this.listaProdutosFilho[this.selectedProdutoFilho].id)
            .subscribe(function (agreg) {
            _this.listaProdutosFilho.splice(_this.selectedProdutoFilho, 1);
            _this.listaTiposDeAgregacao.splice(_this.selectedProdutoFilho, 1);
            if (_this.listaProdutosFilho.length == 0) {
                _this.selectedProdutoFilho = null;
                _this.listaRestricoesDeAgregacao = null;
            }
            else {
                _this.selectedProdutoFilho = 0;
            }
            _this.snackBar.open("Sucesso!", "Agregação eliminada", { duration: 4000 });
        }, function (erro) {
            _this.snackBar.open("Erro!", erro.error, { duration: 4000 });
            console.log(erro);
        });
    };
    GerirProdutoComponent.prototype.addRestricao = function () {
        var _this = this;
        if (this.selectedProduto == null) {
            this.snackBar.open("Selecione o Produto Pai", "", { duration: 4000 });
            return;
        }
        if (this.selectedProdutoFilho == null) {
            this.snackBar.open("Selecione o Produto Filho", "", { duration: 4000 });
            return;
        }
        var params;
        if (this.selectedTipoRestricao == 0) {
            if (this.volumeMinimo == null || this.volumeMaximo == null) {
                this.snackBar.open("Preencha os campos de volume mínimo e máximo", "", { duration: 4000 });
                return;
            }
            if (this.volumeMinimo < 0 || this.volumeMinimo > 100 || this.volumeMaximo < 0 || this.volumeMaximo > 100) {
                this.snackBar.open("Os valores de volume têm de estar entre 0 e 100", "", { duration: 4000 });
                return;
            }
            if (Number(this.volumeMinimo) > Number(this.volumeMaximo)) {
                this.snackBar.open("O volume mínimo tem de ser menor ou igual ao máximo", "", { duration: 4000 });
                return;
            }
            params = this.volumeMinimo + ";" + this.volumeMaximo;
        }
        else {
            params = "";
        }
        var produtoProdutoIdPai = this.selectedProduto.id;
        var produtoProdutoIdFilho = this.listaProdutosFilho[this.selectedProdutoFilho].id;
        var tipoRes = this.listaTiposRestricao[this.selectedTipoRestricao];
        var restricao = new _gestor_agregacao_restricao__WEBPACK_IMPORTED_MODULE_15__["Restricao"](tipoRes, params, produtoProdutoIdPai, produtoProdutoIdFilho);
        this.restricaoSrv.addRestricao(restricao)
            .subscribe(function (data) {
            if (_this.listaRestricoesDeAgregacao == null) {
                _this.listaRestricoesDeAgregacao = [];
            }
            _this.listaRestricoesDeAgregacao.push(data);
            _this.selectedRestricao = 0;
            _this.snackBar.open("Sucesso!", "Restricao Adicionada", { duration: 4000 });
        }, function (erro) {
            _this.snackBar.open("Erro!", erro.error, { duration: 4000 });
            console.log(erro);
        });
    };
    GerirProdutoComponent.prototype.removeRestricao = function () {
        var _this = this;
        if (this.selectedProduto == null) {
            this.snackBar.open("Selecione Produto Pai", "", { duration: 4000 });
            return;
        }
        if (this.selectedProdutoFilho == null) {
            this.snackBar.open("Selecione Produto Filho", "", { duration: 4000 });
            return;
        }
        if (this.selectedRestricao == null) {
            this.snackBar.open("Selecione uma Restrição", "", { duration: 4000 });
            return;
        }
        this.restricaoSrv.deleteRestricao(this.listaRestricoesDeAgregacao[this.selectedRestricao].id)
            .subscribe(function (data) {
            _this.listaRestricoesDeAgregacao.splice(_this.selectedRestricao, 1);
            if (_this.listaRestricoesDeAgregacao.length == 0) {
                _this.selectedRestricao = null;
            }
            else {
                _this.selectedRestricao = 0;
            }
            _this.snackBar.open("Sucesso!", "Restricao Removida", { duration: 4000 });
        }, function (erro) {
            _this.snackBar.open("Erro!", erro.error, { duration: 4000 });
            console.log(erro);
        });
    };
    GerirProdutoComponent.prototype.existeNoArray = function (objeto, array) {
        var x;
        for (x in array) {
            if (array[x] === objeto) {
                return true;
            }
        }
        return false;
    };
    GerirProdutoComponent.prototype.removeValor1 = function () {
        var valor = this.valorAlturaSelecionado;
        for (var i = 0; i < this.valoresAltura.length; i++) {
            if (this.valoresAltura[i] == valor) {
                this.valoresAltura.splice(i, 1);
                if (this.valoresAltura.length == 0) {
                    this.valorAlturaSelecionado = null;
                }
                else {
                    this.valorAlturaSelecionado = this.valoresAltura[0];
                }
                return;
            }
        }
    };
    GerirProdutoComponent.prototype.removeValor2 = function () {
        var valor = this.valorLarguraSelecionado;
        for (var i = 0; i < this.valoresLargura.length; i++) {
            if (this.valoresLargura[i] == valor) {
                this.valoresLargura.splice(i, 1);
                if (this.valoresLargura.length == 0) {
                    this.valorLarguraSelecionado = null;
                }
                else {
                    this.valorLarguraSelecionado = this.valoresLargura[0];
                }
                return;
            }
        }
    };
    GerirProdutoComponent.prototype.removeValor3 = function () {
        var valor = this.valorProfundidadeSelecionado;
        for (var i = 0; i < this.valoresProfundidade.length; i++) {
            if (this.valoresProfundidade[i] == valor) {
                this.valoresProfundidade.splice(i, 1);
                if (this.valoresProfundidade.length == 0) {
                    this.valorProfundidadeSelecionado = null;
                }
                else {
                    this.valorProfundidadeSelecionado = this.valoresProfundidade[0];
                }
                return;
            }
        }
    };
    GerirProdutoComponent.prototype.clearValoresAltura = function () {
        this.valoresAltura = [];
        this.valorAlturaSelecionado = 0;
    };
    GerirProdutoComponent.prototype.clearValoresLargura = function () {
        this.valoresLargura = [];
        this.valorLarguraSelecionado = 0;
    };
    GerirProdutoComponent.prototype.clearValoresProfundidade = function () {
        this.valoresProfundidade = [];
        this.valorProfundidadeSelecionado = 0;
    };
    GerirProdutoComponent.prototype.clearTabAgregacoes = function () {
        this.selectedProduto = null;
        this.selectedProdutoExistente = 0;
        this.selectedProdutoFilho = null;
        this.listaProdutosFilho = [];
        this.listaTiposDeAgregacao = [];
        this.tipoAgregacao = false;
        this.selectedTipoRestricao = 0;
        this.selectedRestricao = null;
        this.volumeMinimo = null;
        this.volumeMaximo = null;
        this.listaRestricoesDeAgregacao = [];
    };
    GerirProdutoComponent.prototype.clearVariaveis = function () {
        this.clearValoresAltura();
        this.clearValoresLargura();
        this.clearValoresProfundidade();
        this.nomeProduto = null;
        this.tipoValor1 = 0;
        this.tipoValor2 = 0;
        this.tipoValor3 = 0;
        this.nomeProduto = null;
        this.campoAltura = null;
        this.campoLargura = null;
        this.campoProfundidade = null;
        this.selectedTipoProduto = 0;
        this.valorAlturaSelecionado = 0;
        this.valorLarguraSelecionado = 0;
        this.valorProfundidadeSelecionado = 0;
        this.selectedMaterialExistente = 0;
        this.selectedMaterialDoProduto = null;
        this.materiaisDoProduto = [];
        this.selectedCategoria = 0;
        this.clearTabAgregacoes();
    };
    GerirProdutoComponent.prototype.criarProduto = function () {
        var _this = this;
        var nome = this.nomeProduto;
        var categoria = this.allCategorias[this.selectedCategoria.valueOf()];
        if (!nome) {
            this.snackBar.open("Erro!", "Nome Vazio", { duration: 4000 });
            return;
        }
        if (categoria == null) {
            this.snackBar.open("Erro!", "Escolha uma Categoria", { duration: 4000 });
            return;
        }
        if (this.materiaisDoProduto.length == 0) {
            this.snackBar.open("Erro!", "O produto precisa de um material", { duration: 4000 });
            return;
        }
        if (this.valoresAltura.length < 1) {
            this.snackBar.open("Erro!", "A altura tem de ter pelo menos um valor", { duration: 4000 });
            return;
        }
        else if (this.tipoValor1 == 1 && this.valoresAltura.length != 2) {
            this.snackBar.open("Erro!", "A altura continua tem de ter dois valores", { duration: 4000 });
            return;
        }
        if (this.valoresLargura.length < 1) {
            this.snackBar.open("Erro!", "A largura tem de ter pelo menos um valor", { duration: 4000 });
            return;
        }
        else if (this.tipoValor2 == 1 && this.valoresLargura.length != 2) {
            this.snackBar.open("Erro!", "A largura continua tem de ter dois valores", { duration: 4000 });
            return;
        }
        if (this.valoresProfundidade.length < 1) {
            this.snackBar.open("Erro!", "A profundidade tem de ter pelo menos um valor", { duration: 4000 });
            return;
        }
        else if (this.tipoValor3 == 1 && this.valoresProfundidade.length != 2) {
            this.snackBar.open("Erro!", "A profundidade continua tem de ter dois valores", { duration: 4000 });
            return;
        }
        nome = nome.trim();
        var altura = new _gestor_produto_dimensao__WEBPACK_IMPORTED_MODULE_7__["Dimensao"](this.valoresAltura, this.tipoValor1, "m");
        var largura = new _gestor_produto_dimensao__WEBPACK_IMPORTED_MODULE_7__["Dimensao"](this.valoresLargura, this.tipoValor2, "m");
        var profundidade = new _gestor_produto_dimensao__WEBPACK_IMPORTED_MODULE_7__["Dimensao"](this.valoresProfundidade, this.tipoValor3, "m");
        var produto = new _gestor_produto_produto__WEBPACK_IMPORTED_MODULE_1__["Produto"](nome, categoria, altura, largura, profundidade, this.listaTiposProduto[this.selectedTipoProduto]);
        this.produtoSrv.addProduto(produto)
            .subscribe(function (produto) {
            _this.allProdutos.push(produto);
            _this.snackBar.open("Sucesso!", "Produto criado", { duration: 4000 });
            for (var i in _this.materiaisDoProduto) {
                var produtoMaterial = new _gestor_produto_produto_material__WEBPACK_IMPORTED_MODULE_6__["ProdutoMaterial"](produto.id, _this.materiaisDoProduto[i].id);
                _this.produtoMaterialSrv.addProdutoMaterial(produtoMaterial)
                    .subscribe(function (produtoMaterial) {
                }, function (erro) {
                    _this.snackBar.open("Erro!", erro.error, { duration: 4000 });
                    console.log(erro);
                });
            }
        }, function (erro) {
            _this.snackBar.open("Erro!", erro.error, { duration: 4000 });
            console.log(erro);
        });
    };
    GerirProdutoComponent.prototype.compareNumbers = function (num1, num2) {
        return num1 - num2;
    };
    GerirProdutoComponent.prototype.editarProduto = function () {
        var _this = this;
        if (this.selectedProduto == null) {
            this.snackBar.open("Erro!", "Selecione um produto", { duration: 4000 });
            return;
        }
        var nome = this.nomeProduto;
        var categoria = this.allCategorias[this.selectedCategoria.valueOf()];
        if (!nome) {
            this.snackBar.open("Erro!", "Nome Vazio", { duration: 4000 });
            return;
        }
        if (categoria == null) {
            this.snackBar.open("Erro!", "Escolha uma Categoria", { duration: 4000 });
            return;
        }
        if (this.materiaisDoProduto.length == 0) {
            this.snackBar.open("Erro!", "O produto precisa de um material", { duration: 4000 });
            return;
        }
        if (this.valoresAltura.length < 1) {
            this.snackBar.open("Erro!", "A altura tem de ter pelo menos um valor", { duration: 4000 });
            return;
        }
        else if (this.tipoValor1 == 1 && this.valoresAltura.length != 2) {
            this.snackBar.open("Erro!", "A altura continua tem de ter dois valores", { duration: 4000 });
            return;
        }
        if (this.valoresLargura.length < 1) {
            this.snackBar.open("Erro!", "A largura tem de ter pelo menos um valor", { duration: 4000 });
            return;
        }
        else if (this.tipoValor2 == 1 && this.valoresLargura.length != 2) {
            this.snackBar.open("Erro!", "A largura continua tem de ter dois valores", { duration: 4000 });
            return;
        }
        if (this.valoresProfundidade.length < 1) {
            this.snackBar.open("Erro!", "A profundidade tem de ter pelo menos um valor", { duration: 4000 });
            return;
        }
        else if (this.tipoValor3 == 1 && this.valoresProfundidade.length != 2) {
            this.snackBar.open("Erro!", "A profundidade continua tem de ter dois valores", { duration: 4000 });
            return;
        }
        if (this.selectedProduto.tipo == this.listaTiposProduto[_gestor_produto_tipo_produto__WEBPACK_IMPORTED_MODULE_9__["TipoProduto"].Armario]) {
            this.selectedTipoProduto = _gestor_produto_tipo_produto__WEBPACK_IMPORTED_MODULE_9__["TipoProduto"].Armario;
        }
        if (this.selectedProduto.tipo == this.listaTiposProduto[_gestor_produto_tipo_produto__WEBPACK_IMPORTED_MODULE_9__["TipoProduto"].Modulo]) {
            this.selectedTipoProduto = _gestor_produto_tipo_produto__WEBPACK_IMPORTED_MODULE_9__["TipoProduto"].Modulo;
        }
        nome = nome.trim();
        var altura = new _gestor_produto_dimensao__WEBPACK_IMPORTED_MODULE_7__["Dimensao"](this.valoresAltura, this.tipoValor1, "m");
        var largura = new _gestor_produto_dimensao__WEBPACK_IMPORTED_MODULE_7__["Dimensao"](this.valoresLargura, this.tipoValor2, "m");
        var profundidade = new _gestor_produto_dimensao__WEBPACK_IMPORTED_MODULE_7__["Dimensao"](this.valoresProfundidade, this.tipoValor3, "m");
        var produto = new _gestor_produto_produto__WEBPACK_IMPORTED_MODULE_1__["Produto"](nome, categoria, altura, largura, profundidade, this.listaTiposProduto[this.selectedTipoProduto]);
        produto.id = this.selectedProduto.id;
        this.produtoSrv.updateProduto(this.selectedProduto.id, produto)
            .subscribe(function (prod) {
            _this.snackBar.open("Sucesso!", "Produto editado", { duration: 4000 });
            var index = _this.allProdutos.indexOf(_this.selectedProduto);
            _this.allProdutos.splice(index, 1);
            _this.selectedProduto = prod;
            _this.allProdutos.splice(index, 0, prod);
        }, function (erro) {
            _this.snackBar.open("Erro!", erro.error, { duration: 4000 });
            console.log(erro);
        });
    };
    GerirProdutoComponent.prototype.deleteProdutoHTML = function (id) {
        var _this = this;
        this.restricaoSrv.deleteRestricoesDeProduto(id).subscribe(function (data) {
            _this.produtoSrv.deleteProduto(id).subscribe(function (data) {
                _this.allProdutos = _this.allProdutos.filter(function (h) { return h.id != id; });
                _this.snackBar.open("Sucesso!", "Produto eliminado", { duration: 4000 });
            }, function (erro) {
                _this.snackBar.open("Erro!", erro.error, { duration: 4000 });
                console.log(erro);
            });
        }, function (erro) {
            _this.snackBar.open("Erro!", erro.error, { duration: 4000 });
            console.log(erro);
        });
    };
    GerirProdutoComponent.prototype.selecionarProdutoAgregacoes = function (prod) {
        var _this = this;
        this.clearTabAgregacoes();
        this.selectedProduto = prod;
        this.agregacaoSrv.getAgregacaoDePai(this.selectedProduto.id).subscribe(function (agregacoes) {
            _this.selectedProdutoFilho = 0;
            var length = agregacoes.length;
            if (length == 0) {
                _this.listaProdutosFilho = [];
                _this.selectedProdutoFilho = null;
                _this.selectedRestricao = null;
            }
            else {
                for (var i = 0; i < length; i++) {
                    var a = agregacoes.pop();
                    _this.listaProdutosFilho.push(_this.obterProduto(a.produtoIdFilho));
                    _this.listaTiposDeAgregacao.push(a.confirmation);
                }
                _this.selectedProdutoFilho = 0;
                _this.selecionarProdutoFilhoAgregacoes();
            }
        }, function (erro) {
            _this.snackBar.open("Erro!", erro.error, { duration: 4000 });
            console.log(erro);
        });
    };
    GerirProdutoComponent.prototype.selecionarProdutoFilhoAgregacoes = function () {
        var _this = this;
        this.restricaoSrv.getRestricaoId(this.selectedProduto.id, this.listaProdutosFilho[this.selectedProdutoFilho].id).subscribe(function (restricoes) {
            var length = restricoes.length;
            if (length == 0) {
                _this.listaRestricoesDeAgregacao = null;
                _this.selectedRestricao = null;
            }
            else {
                for (var i = 0; i < length; i++) {
                    _this.listaRestricoesDeAgregacao.push(restricoes[i]);
                }
                _this.selectedRestricao = 0;
            }
        }, function (erro) {
            _this.snackBar.open("Erro!", erro.error, { duration: 4000 });
            console.log(erro);
        });
    };
    GerirProdutoComponent.prototype.limparCamposEditarButton = function () {
        this.selecionarProdutoEditar(this.selectedProduto);
    };
    GerirProdutoComponent.prototype.selecionarProdutoEditar = function (prod) {
        var _this = this;
        this.clearVariaveis();
        if (prod == null)
            return;
        this.selectedProduto = prod;
        this.nomeProduto = prod.nome;
        this.selectedTipoProduto = this.listaTiposProduto.indexOf(prod.tipo);
        this.selectedCategoria = this.indexDaCategoria(prod.categoria);
        this.materiaisDoProduto = [];
        this.selectedMaterialDoProduto = 0;
        this.produtoMaterialSrv.getProdutoMaterialDeProduto(prod.id).subscribe(function (produtoProdutos) {
            var list = produtoProdutos;
            for (var i = 0; i < list.length; i++) {
                _this.materiaisDoProduto.push(_this.obterMaterial(list[i].materialId));
            }
        }, function (erro) {
            _this.snackBar.open("Erro!", erro.error, { duration: 4000 });
            console.log(erro);
        });
        this.valoresAltura = prod.altura.listaValores.slice(0);
        this.valoresAltura.sort(function (a, b) { return a - b; });
        this.tipoValor1 = this.listaTiposDimensao.indexOf(prod.altura.tipo);
        this.valorAlturaSelecionado = this.valoresAltura[0];
        this.valoresLargura = prod.largura.listaValores.slice(0);
        this.valoresLargura.sort(function (a, b) { return a - b; });
        this.tipoValor2 = this.listaTiposDimensao.indexOf(prod.largura.tipo);
        this.valorLarguraSelecionado = this.valoresLargura[0];
        this.valoresProfundidade = prod.profundidade.listaValores.slice(0);
        this.valoresProfundidade.sort(function (a, b) { return a - b; });
        this.tipoValor3 = this.listaTiposDimensao.indexOf(prod.profundidade.tipo);
        this.valorProfundidadeSelecionado = this.valoresProfundidade[0];
    };
    GerirProdutoComponent.prototype.obterMaterial = function (id) {
        for (var i = 0; i < this.allMateriais.length; i++) {
            var material = this.allMateriais[i];
            if (material.id == id) {
                return material;
            }
        }
        return null;
    };
    GerirProdutoComponent.prototype.obterProduto = function (id) {
        for (var i = 0; i < this.allProdutos.length; i++) {
            var produto = this.allProdutos[i];
            if (produto.id == id) {
                return produto;
            }
        }
        return null;
    };
    GerirProdutoComponent.prototype.indexDaCategoria = function (cat) {
        for (var i = 0; i < this.allCategorias.length; i++) {
            if (this.allCategorias[i].id == cat.id) {
                return i;
            }
        }
        return 0;
    };
    GerirProdutoComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-gerir-produto',
            template: __webpack_require__(/*! ./gerir-produto.component.html */ "./src/app/material-component/gerir-produto/gerir-produto.component.html"),
            styles: [__webpack_require__(/*! ./gerir-produto.component.css */ "./src/app/material-component/gerir-produto/gerir-produto.component.css")]
        }),
        __metadata("design:paramtypes", [_gestor_produto_produto_service__WEBPACK_IMPORTED_MODULE_4__["ProdutoService"], _gestor_categoria_categoria_service__WEBPACK_IMPORTED_MODULE_2__["CategoriaService"],
            _gestor_material_material_service__WEBPACK_IMPORTED_MODULE_5__["MaterialService"], _gestor_produto_produto_material_service__WEBPACK_IMPORTED_MODULE_3__["ProdutoMaterialService"],
            _gestor_agregacao_agregacao_service__WEBPACK_IMPORTED_MODULE_10__["AgregacaoService"], _gestor_agregacao_restricao_service__WEBPACK_IMPORTED_MODULE_14__["RestricaoService"], _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatSnackBar"]])
    ], GerirProdutoComponent);
    return GerirProdutoComponent;
}());



/***/ }),

/***/ "./src/app/material-component/material.module.ts":
/*!*******************************************************!*\
  !*** ./src/app/material-component/material.module.ts ***!
  \*******************************************************/
/*! exports provided: MaterialComponentsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MaterialComponentsModule", function() { return MaterialComponentsModule; });
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! hammerjs */ "./node_modules/hammerjs/hammer.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _demo_material_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../demo-material-module */ "./src/app/demo-material-module.ts");
/* harmony import */ var _angular_cdk_table__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/cdk/table */ "./node_modules/@angular/cdk/esm5/table.es5.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/flex-layout */ "./node_modules/@angular/flex-layout/esm5/flex-layout.es5.js");
/* harmony import */ var _material_routing__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./material.routing */ "./src/app/material-component/material.routing.ts");
/* harmony import */ var _configurador_configurador_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./configurador/configurador.component */ "./src/app/material-component/configurador/configurador.component.ts");
/* harmony import */ var _gerir_acabamento_gerir_acabamento_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./gerir-acabamento/gerir-acabamento.component */ "./src/app/material-component/gerir-acabamento/gerir-acabamento.component.ts");
/* harmony import */ var _gerir_categoria_gerir_categoria_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./gerir-categoria/gerir-categoria.component */ "./src/app/material-component/gerir-categoria/gerir-categoria.component.ts");
/* harmony import */ var ngx_color_picker__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ngx-color-picker */ "./node_modules/ngx-color-picker/dist/ngx-color-picker.es5.js");
/* harmony import */ var _gerir_material_gerir_material_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./gerir-material/gerir-material.component */ "./src/app/material-component/gerir-material/gerir-material.component.ts");
/* harmony import */ var _gerir_colecoes_gerir_colecoes_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./gerir-colecoes/gerir-colecoes.component */ "./src/app/material-component/gerir-colecoes/gerir-colecoes.component.ts");
/* harmony import */ var _gerir_produto_gerir_produto_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./gerir-produto/gerir-produto.component */ "./src/app/material-component/gerir-produto/gerir-produto.component.ts");
/* harmony import */ var _gerir_catalogos_gerir_catalogos_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./gerir-catalogos/gerir-catalogos.component */ "./src/app/material-component/gerir-catalogos/gerir-catalogos.component.ts");
/* harmony import */ var _consultar_historico_consultar_historico_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./consultar-historico/consultar-historico.component */ "./src/app/material-component/consultar-historico/consultar-historico.component.ts");
/* harmony import */ var _entregas_entregas_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./entregas/entregas.component */ "./src/app/material-component/entregas/entregas.component.ts");
/* harmony import */ var _gerir_encomendas_gerir_encomendas_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./gerir-encomendas/gerir-encomendas.component */ "./src/app/material-component/gerir-encomendas/gerir-encomendas.component.ts");
/* harmony import */ var _auth_guard_service__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./../auth-guard.service */ "./src/app/auth-guard.service.ts");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./../auth.service */ "./src/app/auth.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};























var MaterialComponentsModule = /** @class */ (function () {
    function MaterialComponentsModule() {
    }
    MaterialComponentsModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_4__["CommonModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(_material_routing__WEBPACK_IMPORTED_MODULE_9__["MaterialRoutes"]),
                _demo_material_module__WEBPACK_IMPORTED_MODULE_5__["DemoMaterialModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ReactiveFormsModule"],
                _angular_flex_layout__WEBPACK_IMPORTED_MODULE_8__["FlexLayoutModule"],
                _angular_cdk_table__WEBPACK_IMPORTED_MODULE_6__["CdkTableModule"],
                ngx_color_picker__WEBPACK_IMPORTED_MODULE_13__["ColorPickerModule"]
            ],
            providers: [_auth_guard_service__WEBPACK_IMPORTED_MODULE_21__["AuthGuardService"], _auth_service__WEBPACK_IMPORTED_MODULE_22__["AuthService"]],
            entryComponents: [],
            declarations: [
                _configurador_configurador_component__WEBPACK_IMPORTED_MODULE_10__["ConfiguradorComponent"],
                _gerir_acabamento_gerir_acabamento_component__WEBPACK_IMPORTED_MODULE_11__["GerirAcabamentoComponent"],
                _gerir_categoria_gerir_categoria_component__WEBPACK_IMPORTED_MODULE_12__["GerirCategoriaComponent"],
                _gerir_colecoes_gerir_colecoes_component__WEBPACK_IMPORTED_MODULE_15__["GerirColecoesComponent"],
                _gerir_material_gerir_material_component__WEBPACK_IMPORTED_MODULE_14__["GerirMaterialComponent"],
                _gerir_produto_gerir_produto_component__WEBPACK_IMPORTED_MODULE_16__["GerirProdutoComponent"],
                _gerir_catalogos_gerir_catalogos_component__WEBPACK_IMPORTED_MODULE_17__["GerirCatalogosComponent"],
                _consultar_historico_consultar_historico_component__WEBPACK_IMPORTED_MODULE_18__["ConsultarHistoricoComponent"],
                _entregas_entregas_component__WEBPACK_IMPORTED_MODULE_19__["EntregasComponent"],
                _gerir_encomendas_gerir_encomendas_component__WEBPACK_IMPORTED_MODULE_20__["GerirEncomendasComponent"]
            ]
        })
    ], MaterialComponentsModule);
    return MaterialComponentsModule;
}());



/***/ }),

/***/ "./src/app/material-component/material.routing.ts":
/*!********************************************************!*\
  !*** ./src/app/material-component/material.routing.ts ***!
  \********************************************************/
/*! exports provided: MaterialRoutes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MaterialRoutes", function() { return MaterialRoutes; });
/* harmony import */ var _configurador_configurador_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./configurador/configurador.component */ "./src/app/material-component/configurador/configurador.component.ts");
/* harmony import */ var _gerir_acabamento_gerir_acabamento_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./gerir-acabamento/gerir-acabamento.component */ "./src/app/material-component/gerir-acabamento/gerir-acabamento.component.ts");
/* harmony import */ var _gerir_colecoes_gerir_colecoes_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./gerir-colecoes/gerir-colecoes.component */ "./src/app/material-component/gerir-colecoes/gerir-colecoes.component.ts");
/* harmony import */ var _gerir_catalogos_gerir_catalogos_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./gerir-catalogos/gerir-catalogos.component */ "./src/app/material-component/gerir-catalogos/gerir-catalogos.component.ts");
/* harmony import */ var _gerir_categoria_gerir_categoria_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./gerir-categoria/gerir-categoria.component */ "./src/app/material-component/gerir-categoria/gerir-categoria.component.ts");
/* harmony import */ var _gerir_material_gerir_material_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./gerir-material/gerir-material.component */ "./src/app/material-component/gerir-material/gerir-material.component.ts");
/* harmony import */ var _gerir_produto_gerir_produto_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./gerir-produto/gerir-produto.component */ "./src/app/material-component/gerir-produto/gerir-produto.component.ts");
/* harmony import */ var _consultar_historico_consultar_historico_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./consultar-historico/consultar-historico.component */ "./src/app/material-component/consultar-historico/consultar-historico.component.ts");
/* harmony import */ var _entregas_entregas_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./entregas/entregas.component */ "./src/app/material-component/entregas/entregas.component.ts");
/* harmony import */ var _gerir_encomendas_gerir_encomendas_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./gerir-encomendas/gerir-encomendas.component */ "./src/app/material-component/gerir-encomendas/gerir-encomendas.component.ts");
/* harmony import */ var _auth_guard_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./../auth-guard.service */ "./src/app/auth-guard.service.ts");











var MaterialRoutes = [
    {
        path: 'configurador',
        component: _configurador_configurador_component__WEBPACK_IMPORTED_MODULE_0__["ConfiguradorComponent"]
    },
    {
        path: 'gerir-acabamento',
        component: _gerir_acabamento_gerir_acabamento_component__WEBPACK_IMPORTED_MODULE_1__["GerirAcabamentoComponent"],
        canActivate: [_auth_guard_service__WEBPACK_IMPORTED_MODULE_10__["AuthGuardService"]]
    },
    {
        path: 'gerir-categoria',
        component: _gerir_categoria_gerir_categoria_component__WEBPACK_IMPORTED_MODULE_4__["GerirCategoriaComponent"],
        canActivate: [_auth_guard_service__WEBPACK_IMPORTED_MODULE_10__["AuthGuardService"]]
    },
    {
        path: 'gerir-colecoes',
        component: _gerir_colecoes_gerir_colecoes_component__WEBPACK_IMPORTED_MODULE_2__["GerirColecoesComponent"],
        canActivate: [_auth_guard_service__WEBPACK_IMPORTED_MODULE_10__["AuthGuardService"]]
    },
    {
        path: 'gerir-catalogos',
        component: _gerir_catalogos_gerir_catalogos_component__WEBPACK_IMPORTED_MODULE_3__["GerirCatalogosComponent"],
        canActivate: [_auth_guard_service__WEBPACK_IMPORTED_MODULE_10__["AuthGuardService"]]
    },
    {
        path: 'gerir-material',
        component: _gerir_material_gerir_material_component__WEBPACK_IMPORTED_MODULE_5__["GerirMaterialComponent"],
        canActivate: [_auth_guard_service__WEBPACK_IMPORTED_MODULE_10__["AuthGuardService"]]
    },
    {
        path: 'gerir-produto',
        component: _gerir_produto_gerir_produto_component__WEBPACK_IMPORTED_MODULE_6__["GerirProdutoComponent"],
        canActivate: [_auth_guard_service__WEBPACK_IMPORTED_MODULE_10__["AuthGuardService"]]
    },
    {
        path: 'consultar-historico',
        component: _consultar_historico_consultar_historico_component__WEBPACK_IMPORTED_MODULE_7__["ConsultarHistoricoComponent"],
        canActivate: [_auth_guard_service__WEBPACK_IMPORTED_MODULE_10__["AuthGuardService"]]
    },
    {
        path: 'entregas',
        component: _entregas_entregas_component__WEBPACK_IMPORTED_MODULE_8__["EntregasComponent"],
        canActivate: [_auth_guard_service__WEBPACK_IMPORTED_MODULE_10__["AuthGuardService"]]
    },
    {
        path: 'gerir-encomendas',
        component: _gerir_encomendas_gerir_encomendas_component__WEBPACK_IMPORTED_MODULE_9__["GerirEncomendasComponent"],
        canActivate: [_auth_guard_service__WEBPACK_IMPORTED_MODULE_10__["AuthGuardService"]]
    }
];


/***/ })

}]);
//# sourceMappingURL=material-component-material-module.js.map