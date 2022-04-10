import { useState } from 'react';
import axios from 'axios';
import './style.css';
import data from '../data/wild-schedule.json';

export default function HockeyScores() {

  // const [schedule, setSchedule] = useState('')
  const [login, setLogin] = useState('no data')

  // var config = {
  //   method: 'get',
  //   url: 'https://fixturedownload.com/feed/json/nhl-2021/minnesota-wild',
  //   headers: {
  //   }
  // };

  async function apiCall() {
      //const response = await axios.get("/api/login")
     try {
      const response = await axios.get("http://localhost:3001/api/login")
      console.log('apiCall was made');
      return response.data;
     } catch(error) {
       if(error) {
         console.log(error.data);
       } else {
         console.log("error calling apiCall()");
       }
     }
    }


  // const config = {
  // method: 'GET',
  // url: 'https://api-nba-v1.p.rapidapi.com/teams',
  // headers: {
  //   'X-RapidAPI-Host': 'api-nba-v1.p.rapidapi.com',
  //   'X-RapidAPI-Key': '632241f898msh5c971d6074fb435p1518cajsn2db7c8d6f421'
  // }
// }

  async function showSchedule(e) {
    console.log('showSchedule was called #1.');
    data.map( (data) => {
      if( data.HomeTeamScore === null ) {
        if( data.HomeTeam === 'Minnesota Wild' ) {
           console.log(data.DateUtc + " - vs " + data.AwayTeam)
        }
        if( data.AwayTeam === 'Minnesota Wild' ) {
          console.log(data.DateUtc + " - at " + data.HomeTeam)
        }
      }
      return "empty"
    })

    console.log('showSchedule was called #2.');
    setLogin(await apiCall())
  }

  // useEffect(async () => {
  // }, [])

    return (
      <div>
       <h1>Hockey Scores</h1>
      <button onClick={showSchedule}>Show Schedule</button>
      <div id="content">{login}</div>
      </div>
    )
}
