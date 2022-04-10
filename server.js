const express = require('express')
const axios = require('axios')
const cors = require('cors');
const bodyParser = require('body-parser');

const port = process.env.PORT || 3001
const app = express()

app.listen(port, () => { console.log(`listening on port ${port}`) });
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(`${__dirname}/example-react/build`));
app.use(cors());
// app.use(express.static(path.join(__dirname, 'build')))

app.get('/api/login', (req, res) => {
  // res.json({username: "example"});
   res.send('put the schedule here');
});

