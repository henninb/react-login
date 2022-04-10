import { useState } from 'react';
import axios from 'axios';
import MaterialTable from 'material-table';
import data from '../data/wild-schedule.json';

export default function HockeyScores() {
  const [login, setLogin] = useState(null)

  // var config = {
  //   method: 'get',
  //   url: 'https://fixturedownload.com/feed/json/nhl-2021/minnesota-wild',
  //   headers: {
  //   }
  // };

  async function apiCall() {
      //const response = await axios.get("/api/login")
     try {
      // const response = await axios.get("http://localhost:3000/api/nhl")
      const response = await axios.get("/feed/json/nhl-2021/minnesota-wild")
      console.log('apiCall was made.');
       console.log(response.data);
      //return JSON.stringify(response.data);
      return (response.data);
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
    setLogin(await apiCall())

    console.log('showSchedule was called #1.');
    if( login ) {
      // console.log("size: " login.length);
      console.log("size: " + Object.keys(login).length);
      console.log(login);

      Object.entries(login).forEach(([_key, value]) => {
        console.log(`${JSON.stringify(value)}`);
      });

      // login.map( (_data) => {
      //   // console.log(_data.id);
      //   return "empty"
      // })
    } else {

    // login.map( (_data) => {
    //   if( _data.HomeTeamScore === null ) {
    //     if( _data.HomeTeam === 'Minnesota Wild' ) {
    //        console.log(data.DateUtc + " - vs " + _data.AwayTeam)
    //     }
    //     if( data.AwayTeam === 'Minnesota Wild' ) {
    //       console.log(_data.DateUtc + " - at " + _data.HomeTeam)
    //     }
    //   }
    //   return "empty"
    // })
      console.log("failed list");
    }
  }

  // useEffect(async () => {
  // }, [])
       // <MaterialTable
      // title="Wild Hockey"
      // columns={[
       //    {
       //      title: "MatchNumber",
       //      field: "MatchNumber",
       //      type: "date",
       //    },
       //    {
       //      title: "HomeTeam",
       //      field: "HomeTeam",
       //      type: "string",
       //    },
      // ]}
      // data={login ? login : []}
      // />

    return (
      <div>
       <h1>Wild Hockey Scores</h1>
      <button onClick={showSchedule}>Show Schedule</button>
      <div>begin</div>
      <div>end</div>
      </div>

    )
}
