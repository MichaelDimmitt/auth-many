import React from 'react'

export default class FourSquareAuth extends React.Component {
  
  render() {
    // const MEETUP_CLIENT_ID = 'ndioq3jd0me4s8d65lfp0vv69q'; // this one is for production. https://meetup-oauth2.herokuapp.com/index.html
    const FOURSQUARE_CLIENT_ID = 'SOTVCGCEZKOO3WRVWQ0Q4TWAFT2JCHFO4CAAATWEVXPS2HTY'; // this one is for local dev. http://127.0.0.1:3000
    const FOURSQUARE_REDIRECT_URI = `http://${window.location.href.split("/")[2]}/error`;

    const url = `https://foursquare.com/oauth2/authenticate?client_id=${FOURSQUARE_CLIENT_ID}&response_type=code&redirect_uri=${FOURSQUARE_REDIRECT_URI}`;
    window.location.href = url

    return <div>
      {/**/}
    </div>
  }

}
