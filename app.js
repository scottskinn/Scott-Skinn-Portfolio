const express = require('express');
const app = express();

const path = require('path');

const port = process.env.PORT || 3001;

if (process.env.NODE_ENV === 'production') {
  app.use(express.static('portfolio/build'));
}

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../portfolio/build/index.html'));
  });

app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});