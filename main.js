
(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
var foo = exports.foo = 'bar';

},{}],2:[function(require,module,exports){
'use strict';

require('./cards.js');

/*var fc = require('./demo.js');
fc.foobar();*/

function isScrolledIntoView(el) {
	var elemTop = el.getBoundingClientRect().top;
	var elemBottom = el.getBoundingClientRect().bottom;
	var isVisible = elemTop >= 0 && elemBottom <= window.innerHeight;
	return isVisible;
} //import './styles/main.scss';
//import './index.html';
//import './fonts/RaspoutineClassic.scss';


function hideSvgPath(path) {
	var length = path.getTotalLength();
	path.style.transition = path.style.WebkitTransition = 'none';
	path.style.strokeDasharray = length + ' ' + length;
	path.style.strokeDashoffset = length;
	path.getBoundingClientRect();
	path.style.transition = path.style.WebkitTransition = 'stroke-dashoffset 2s ease-in-out';
}

function extractPaths(svg) {
	var doc = svg.getSVGDocument();
	return doc.querySelectorAll("path");
}

var elems = document.querySelectorAll('object');
Array.prototype.forEach.call(elems, function (svg) {
	svg.addEventListener('load', function () {
		Array.prototype.forEach.call(extractPaths(svg), function (path) {
			return hideSvgPath(path);
		});
	});
});

window.onscroll = function () {
	Array.prototype.forEach.call(elems, function (svg) {
		if (isScrolledIntoView(svg) && !svg.wasAnimated) {
			Array.prototype.forEach.call(extractPaths(svg), function (p) {
				return p.style.strokeDashoffset = '0';
			});
			svg.wasAnimated = true;
		}
	});
};

['inicio', 'hacemos', 'quienes', 'blog', 'contacto'].forEach(function (x) {
	if (!(document.querySelector == undefined)) {
		document.getElementById(x + '-mnu').addEventListener('click', function (e) {
			e.preventDefault();
			document.getElementById(x).scrollIntoView({ behavior: 'smooth' });
		});
	}
});

},{"./cards.js":1}]},{},[2]);
