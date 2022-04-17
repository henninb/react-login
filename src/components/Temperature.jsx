import axios from 'axios';

export default function Temperature() {

  async function postCall(e) {
     const body = '{"fahrenheit":33.0}'
       try {
        const response = await axios.post("/celsius", body,
        {
          headers: { 'Content-Type': 'application/json', }
        }
        )
        console.log('apiCall was made.');
         console.log(response.data);
         // setlogins(response.data);
       } catch(error) {
         if(error) {
           console.log(error.data);
         } else {
           console.log("error calling apiCall()");
         }
       }
  }
         //<form method="POST" action="/celsius">
           //<!-- <input type="submit" name="submit" onClick={postCall} /> -->

    return (
        <div>
           <input type="text" name="fahrenheit" />
           <button onClick={postCall}>test</button>
        </div>
    );
};
