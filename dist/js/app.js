"use strict";

window.$ = require('./jQuery.js');
var quotes = ["Vaša budućnost je stvarno svijetla!", "Nema problema koje ne možete riješiti!", "Svaki dan je nova prilika za uspjeh!", "Nikada nemojte odustati od svojih snova!", "Vi ste izvanredna osoba!"];
$(function () {
  var quote = $("#quote");
  var generateButton = $("#generate");
  generateButton.on({
    click: function click() {
      var randomIndex = Math.floor(Math.random() * quotes.length);
      quote.fadeOut(1500, function () {
        quote.text(quotes[randomIndex]);
      }).fadeIn();
    }
  });
});