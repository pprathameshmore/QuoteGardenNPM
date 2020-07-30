# QuoteGarden

A NPM Package for quotes. The database currently includes more than 75000 quotes.

QuoteGarden library is just wrapper around https://github.com/pprathameshmore/QuoteGarden

## Install

```
npm install @pprathameshmore/quotegardennpm@1.1.0
```

## Usage

Get random quote

```javascript

const { randomQuote, authorQuotes, genreQuotes, getQuotes, searchQuotes } = require("@pprathameshmore/quotegardennpm");

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


