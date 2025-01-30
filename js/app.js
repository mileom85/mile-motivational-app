window.$ = require('./jQuery.js');

const quotes = [
    "Vaša budućnost je stvarno svijetla!",
    "Nema problema koje ne možete riješiti!",
    "Svaki dan je nova prilika za uspjeh!",
    "Nikada nemojte odustati od svojih snova!",
    "Vi ste izvanredna osoba!",
];

$(function () {
    const quote = $("#quote");
    const generateButton = $("#generate");

    generateButton.on({
        click: function () {
            const randomIndex = Math.floor(Math.random() * quotes.length);
            quote.fadeOut(1500, () => {
                quote.text(quotes[randomIndex]);
            }).fadeIn();
            
        },
    });
});
