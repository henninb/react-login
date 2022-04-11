import { useState, useEffect, useCallback } from 'react';
import axios from 'axios';

export default function HockeyScores() {
  const [login, setLogin] = useState(null)

  async function showSchedule(e) {

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

  const fetchMyAPI = useCallback(async () => {
       try {
        const response = await axios.get("/feed/json/nhl-2021/minnesota-wild")
        console.log('apiCall was made.');
         console.log(response.data);
         setLogin(response.data);
       } catch(error) {
         if(error) {
           console.log(error.data);
         } else {
           console.log("error calling apiCall()");
         }
       }
      }, []);

  useEffect(() => {
    fetchMyAPI();
  }, [fetchMyAPI])
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
