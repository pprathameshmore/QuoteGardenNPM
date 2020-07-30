# QuoteGarden

A NPM Package for quotes. The database currently includes more than 75000 quotes.

QuoteGarden library is just wrapper around https://github.com/pprathameshmore/QuoteGarden

## Install

```
npm i quotegarden
```

## Usage

Get random quote

```javascript

const { randomQuote, authorQuotes, getQuotes, searchQuotes } = require("quotegarden");

randomQuote()
  .then((quote) => {
    console.log(quote);
  })
  .catch((error) => {
    console.log(error);
  });

  ```

## Contributing
All feedback and contributions are welcome!


