import { useState, useEffect } from 'react';
import axios from 'axios';
import './style.css';
import data from '../data/wild-schedule.json';

export default function HockeyScores() {

  const [schedule, setSchedule] = useState('')
  const [login, setLogin] = useState('')

  // var config = {
  //   method: 'get',
  //   url: 'https://fixturedownload.com/feed/json/nhl-2021/minnesota-wild',
  //   headers: {
  //   }
  // };

  async function apiCall() {
      //const response = await axios.get("/api/login")
      const response = await axios.get("http://localhost:3001/api/login")
      console.log('apiCall was made');
      return response.data;
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
    const newdata = data.map( (data) => {
      if( data.HomeTeamScore === null ) {
        if( data.HomeTeam === 'Minnesota Wild' ) {
           console.log(data.DateUtc + " - vs " + data.AwayTeam)
        }
        if( data.AwayTeam === 'Minnesota Wild' ) {
          console.log(data.DateUtc + " - at " + data.HomeTeam)
        }
      }
    })

    console.log('showSchedule was called.');
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
