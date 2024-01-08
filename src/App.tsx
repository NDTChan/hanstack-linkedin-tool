// import axios from "axios"
import {LinkedInApi} from './constant/config'

function App() {
  function authorizeLinkedin() {
    // axios.get('https://www.linkedin.com/oauth/v2/authorization', {
    //   params: {
    //     response_type: "code",
    //     client_id: "86r7fz2emz2vp6",
    //     redirect_uri: "https://hanstack-linkedin-tool.vercel.app",
    //     state: "DCEeFWf45A53sdfKef424",
    //     scope: "liteprofile%20emailaddress%20w_member_social"
    //   }
    // }).then(function (response) {
    //   console.log(response);
    // })
    //   .catch(function (error) {
    //     console.log(error);
    //   })
    //   .finally(function () {
    //     console.log("finally");
    //   });
    const {client_id, redirect_uri, response_type, scope, state} = LinkedInApi;
    const oauthUrl = `GET https://www.linkedin.com/oauth/v2/authorization?response_type=${response_type}&client_id=${client_id}&redirect_uri=${redirect_uri}&state=${state}&scope=${scope}`;
    const width = 450,
      height = 730,
      left = window.screen.width / 2 - width / 2,
      top = window.screen.height / 2 - height / 2;
    window.open(
      oauthUrl,
      'Linkedin',
      'menubar=no,location=no,resizable=no,scrollbars=no,status=no, width=' +
      width +
      ', height=' +
      height +
      ', top=' +
      top +
      ', left=' +
      left
    );
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
