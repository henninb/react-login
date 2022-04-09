import axios from 'axios';
import './style.css';

export default function HockeyScores() {

  var config = {
  method: 'get',
  url: 'https://fixturedownload.com/feed/json/nhl-2021/minnesota-wild',
  headers: {
    'Cookie': 'ARRAffinity=c739977c719e9c5c37648003f9e72eebce8d2170eb9c97490d5c4f0957d9074e; ARRAffinitySameSite=c739977c719e9c5c37648003f9e72eebce8d2170eb9c97490d5c4f0957d9074e'
  }
};

axios(config)
.then(function (response) {
  console.log(JSON.stringify(response.data));
})
.catch(function (error) {
  console.log(error);
});

    return (
      <body>

       <h1>Hockey Scores</h1>



       </body>
    );
};
