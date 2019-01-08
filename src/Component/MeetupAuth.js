import React from 'react'

export default class MeetupAuth extends React.Component {
  
  render() {
    // const MEETUP_CLIENT_ID = 'ndioq3jd0me4s8d65lfp0vv69q'; // this one is for production. https://meetup-oauth2.herokuapp.com/index.html
    const MEETUP_CLIENT_ID = 'niqkagsfu07kb2coik832vljhm'; // this one is for local dev. http://127.0.0.1:3000
    const MEETUP_REDIRECT_URI = `http://${window.location.href.split("/")[2]}/foursquareauth`;

    const url = `https://secure.meetup.com/oauth2/authorize?client_id=${MEETUP_CLIENT_ID}&response_type=token&redirect_uri=${MEETUP_REDIRECT_URI}`;
    window.location.href = url

    return <div>
      {/**/}
    </div>
  }

}
