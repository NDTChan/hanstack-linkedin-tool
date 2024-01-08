import axios from "axios"

function App() {
  function authorizeLinkedin() {
    axios.get('https://www.linkedin.com/oauth/v2/authorization', {
      params: {
        response_type: "code",
        client_id: "86r7fz2emz2vp6",
        redirect_uri: "https://hanstack-linkedin-tool.vercel.app",
        state: "DCEeFWf45A53sdfKef424",
        scope: "liteprofile%20emailaddress%20w_member_social"
      }
    }).then(function (response) {
      console.log(response);
    })
      .catch(function (error) {
        console.log(error);
      })
      .finally(function () {
        console.log("finally");
      });
  }
  return (
    <>
      <div>
        <button onClick={() => authorizeLinkedin()}>Connect to Linken</button>
      </div>
    </>
  )
}

export default App
