import { useState, useEffect, useCallback } from 'react';
import axios from 'axios';
import cheerio from 'cheerio';


export default function BaseballScores() {
  const [data, setData] = useState(null)

  const fetchBaseballSchedule = useCallback(async () => {

    const params = {
  startDate: "1/01/2022",
  endDate: "12/31/2022",
      gameTypes: "R",
      sportId: 1,
      teamId: 142,
      hydrate:"decisions"

};
       try {
        const response = await axios.get("/api/v1/schedule", {params})
        console.log('apiCall was made.');
         console.log(response.data);
         setData(response.data);
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
