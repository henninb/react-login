import { useState, useEffect, useCallback } from 'react';
import axios from 'axios';
import { DataGrid } from '@mui/x-data-grid';
import { v4 as uuidv4 } from 'uuid';

export default function HockeyScores() {
  const [logins, setlogins] = useState(null)


  const columns = [
  // { field: 'id', headerName: 'id' },
  {
    field: 'DateUtc',
    headerName: 'date',
    width: 175,
    editable: true,
    cellStyle: { whiteSpace: "nowrap" },
  },
  {
    field: 'Location',
    headerName: 'location',
    width: 150,
    editable: true,
    cellStyle: { whiteSpace: "nowrap" },
  },
  {
    field: 'HomeTeam',
    headerName: 'home',
    // type: 'number',
    width: 150,
    editable: true,
    cellStyle: { whiteSpace: "nowrap" },
  },
  {
    field: 'HomeTeamScore',
    headerName: 'score',
    // type: 'number',
    width: 75,
    editable: true,
    cellStyle: { whiteSpace: "nowrap" },
  },
  {
    field: 'AwayTeam',
    headerName: 'away',
    // type: 'number',
    // width: 110,
    width: 150,
    editable: true,
    cellStyle: { whiteSpace: "nowrap" },
  },
  {
    field: 'AwayTeamScore',
    headerName: 'score',
    width: 75,
    editable: true,
    cellStyle: { whiteSpace: "nowrap" },
  },
  // {
  //   field: 'fullName',
  //   headerName: 'Full name',
  //   description: 'This column has a value getter and is not sortable.',
  //   sortable: false,
  //   width: 160,
  //   valueGetter: (params) =>
  //     `${params.row.firstName || ''} ${params.row.lastName || ''}`,
  // },
];

  const rows = [
      //{ id: 1, MatchNumber: 1307, RoundNumber: 28, DateUtc: "2022-04-30 00:00:00Z", Location: "Xcel Energy Center", HomeTeam: "Minnesota Wild", AwayTeam: "Colorado Avalanche", Group: null, HomeTeamScore: null, AwayTeamScore: null },
      { MatchNumber: 1307, RoundNumber: 28, DateUtc: "2022-04-30 00:00:00Z", Location: "Xcel Energy Center", HomeTeam: "Minnesota Wild", AwayTeam: "Colorado Avalanche", Group: null, HomeTeamScore: null, AwayTeamScore: null },
];

  async function showSchedule(e) {
    console.log('showSchedule was called #1.');
    if( logins ) {
      // console.log("size: " logins.length);
      console.log("size: " + Object.keys(logins).length);
      console.log(logins);

      Object.entries(logins).forEach(([_key, value]) => {
        console.log(`${JSON.stringify(value)}`);
      });

      // logins.map( (_data) => {
      //   // console.log(_data.id);
      //   return "empty"
      // })
    } else {

    // logins.map( (_data) => {
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
         setlogins(response.data);
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
      // data={logins ? logins : []}
      // />
  //
        //getRowId={(row) => row.statId}
         //getRowId={(row) => row._id}
        //id={Math.random()}

    return (
      <div>
       <h1>Wild Hockey Scores</h1>
      <button onClick={showSchedule}>Show Schedule</button>
      <div>begin</div>
      <div>end</div>

      <div style={{ height: 800, width: '100%' }}>
      <DataGrid
        getRowId={row => uuidv4()}
        rows={logins ? logins :[]}
        columns={columns}
        pageSize={100}
        rowsPerPageOptions={[100]}
        checkboxSelection
        disableSelectionOnClick
      />
      </div>
      </div>

    )
}
