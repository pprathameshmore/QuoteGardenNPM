# QuoteGarden

QuoteGarden library is just wrapper around https://github.com/pprathameshmore/QuoteGarden

## Install

```
npm i quotegarden
```

## How to use?

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


