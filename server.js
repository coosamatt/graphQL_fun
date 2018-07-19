const express = require ('express');

const app = express();

app.listem (4000, () => {
    console.log('Listening on 4000');
});
