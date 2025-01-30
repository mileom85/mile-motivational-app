const path = require('path');

const {ProvidePlugin} = require('webpack');

module.exports = {
  entry: './js/app.js', // Ulazna točka - glavna JavaScript datoteka
  output: {
    filename: 'bundle.js', // Naziv izlazne bundle datoteke
    path: path.resolve(__dirname, 'dist'), // Putanja do izlaznog direktorija
  },
  mode: "none",

  plugins : [
    new ProvidePlugin({
      $: './jquery',
      jQuery: './jquery'
    })
  ]
};