var SpotifyWebApi = require('spotify-web-api-node');

/*

{
   "access_token":"BQDkB_xB5AwKtWe5PZJWntxlFOw5ZpbgbnP2X_LVNv99rvrnNp_fKjRs16pLJ-Ot_IT8aIZC9R3NnH2I0hEGaP_2m9xnY0MH_jyp-PZ1d68w7BCr_gfb48D9yQb6JNXTYUNzx3Ys9aPqdXsBrBUQam8_k9-N-AdFXQ",
   "token_type":"Bearer",
   "expires_in":3600,
   "refresh_token":"AQAos-GDKhN12DPW8IxqK9xURyqzS8V9ZE1ag2DgkvN6ojgzpSy_M6mkiwbfK3-UDk9zqmB1Ol3kyugbMUAA5slh_2e_9GsPeDAuscZz856xINhTFesPBfM-b9O2IR9qxrg",
   "scope":"user-read-currently-playing user-read-private"
}*/

const albums = null;

export default function Spotify() {

    var spotifyApi = new SpotifyWebApi({
        clientId: 'c1d15e646bde48ecaac944615f66682c',
        clientSecret: 'e237c672dff6400aaa627e61986f7ea4',
    });

    spotifyApi.clientCredentialsGrant().then(
        function (data) {
            console.log('The access token expires in ' + data.body['expires_in']);
            console.log('The access token is ' + data.body['access_token']);

            // Save the access token so that it's used in future calls
            spotifyApi.setAccessToken(data.body['access_token']);
        },
        function (err) {
            console.log('Something went wrong when retrieving an access token', err);
        }
    );


    return (
        <>
            {albums}
        </>
    )
}

