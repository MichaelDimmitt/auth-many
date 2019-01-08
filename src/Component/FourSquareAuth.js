import React from 'react'
import axios from 'axios'

export default class FourSquareAuth extends React.Component {
  
  render() {
    // const MEETUP_CLIENT_ID = 'ndioq3jd0me4s8d65lfp0vv69q'; // this one is for production. https://meetup-oauth2.herokuapp.com/index.html
    const FOURSQUARE_CLIENT_ID = 'SOTVCGCEZKOO3WRVWQ0Q4TWAFT2JCHFO4CAAATWEVXPS2HTY'; // this one is for local dev. http://127.0.0.1:3000
    const FOURSQUARE_REDIRECT_URI = `http://${window.location.href.split("/")[2]}/error`;

    const url = `https://foursquare.com/oauth2/authenticate?client_id=${FOURSQUARE_CLIENT_ID}&response_type=token&redirect_uri=${FOURSQUARE_REDIRECT_URI}`;
    window.location.href = url

  //   const FOURSQUARE_CLIENT_ID = 'SOTVCGCEZKOO3WRVWQ0Q4TWAFT2JCHFO4CAAATWEVXPS2HTY'; // this one is for local dev. http://127.0.0.1:3000
  //   const FOURSQUARE_SECRET_ID = 'DUGP4HATBM5TJCY3CJRXEBCWG2MM1BM0GIHEM5HZDUMFIBL1';
  //   const FOURSQUARE_REDIRECT_URI = `http://${window.location.href.split("/")[2]}/error`;
    
  //   const meetupConfig = {
  //     url: `https://foursquare.com/oauth2/access_token?client_id=${FOURSQUARE_CLIENT_ID}&client_secret=${FOURSQUARE_SECRET_ID}&response_type="authorization_code"&redirect_uri=${FOURSQUARE_REDIRECT_URI}&code=ZVUGMTCF2EWF3ZGEC4Z3FL031JDFCSC5KOUWYL2OESJ2R4FZ#_=_`,
  //     headers: {
  //       "Accept": "*/*"
  //     }
  // }
  //   axios(meetupConfig)
  //   .then(res => { console.log(res); })
  //   .catch(err => { console.log(err); })


    return <div>
      {/**/}
    </div>
  }

}
