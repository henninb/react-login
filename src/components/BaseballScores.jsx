import { useState, useEffect, useCallback } from 'react';
import axios from 'axios';
// import cheerio from 'cheerio';


export default function BaseballScores() {
  const [data, setData] = useState(null)


  const fetchBaseballSchedule = useCallback(async () => {

    const games = [];
    // const params = {
    //   startDate: "1/01/2022",
    //   endDate: "12/31/2022",
    //   gameTypes: "R",
    //   sportId: 1,
    //   teamId: 142,
    //   hydrate:"decisions"
    // };

       try {
        //const response = await axios.get("/api/v1/schedule", {params})
        const response = await axios.get("/api/v1/schedule")
        console.log('/api/vi/schedule call was made.');
         // console.log(response.data.dates);

         Object.entries(response.data.dates).forEach((entry) => {
           const [, value] = entry;
           // console.log(`${key}: ${JSON.stringify(value)}`);
           // console.log(value.date);
           // console.log(value.games);
           games.push(value.games);
         });

         const games_flattened = games.flat();
         console.log(games_flattened);
         Object.entries(games_flattened).forEach((entry) => {
           const [, value] = entry;
           console.log(value.status);
         });
          setData(games_flattened);
       } catch(error) {
         if(error) {
           console.log(error.data);
         } else {
           console.log("error calling apiCall()");
         }
       }
      }, []);

  useEffect(() => {
    fetchBaseballSchedule();
  }, [fetchBaseballSchedule])

    return (
      <div>
      <h1>Baseball Scores</h1>
      </div>
    );
};
