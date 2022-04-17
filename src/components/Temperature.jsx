import axios from 'axios';

export default function Temperature() {

  async function postCall(event) {
     console.log(event.formData);
     event.preventDefault()
     //const form = document.getElementById("temperature-input")
     //const formEntries = new FormData(form).entries();
     //console.log(formEntries)
     console.log(event.formData);
     const formData = new FormData(event.target);
     console.log("f=" + formData.get('fahrenheit'));
  // Now you can use formData.get('foo'), for example.

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
           <form name="temperature-input">
           <input type="text" name="fahrenheit" />
           <button onClick={postCall}>test</button>
           </form>
        </div>
    );
};
