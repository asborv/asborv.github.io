# Mediebarometer med [Highcharts](https://www.highcharts.com/)

## Å laste inn data

Dette skulle ikkje vere så vanskeleg? Farlege ord i webutvikling. Nei, eg tenkte å laste inn data dynamisk frå [SSB](https://www.ssb.no/medie) sin .csv-fil. For å lese og "parse" denne fila, fann eg [csv-parser](https://www.npmjs.com/package/csv-parser). Flotte greier! _Men_, det viser seg såklart at dette er ein node-pakke. Eg er no på veg ned i kaninholet når eg brukar [browserify](http://browserify.org/). Pakken fungerer betre enn venta, men det [fs](https://nodejs.org/api/fs.html) ville ikkje vere med :man_shrugging: Det fungerer heilt fint når eg køyrer programmet i Node.

Det ser ut som eg må la teknologien vinne denne gongen, og skrive manuelt.
