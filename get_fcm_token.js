const { JWT } = require('google-auth-library');

// Ye values aapke diye huye Service Account JSON se hain
const serviceAccount = {
  "client_email": "firebase-adminsdk-fbsvc@rbl-rohit-team-apcd006.iam.gserviceaccount.com",
  "private_key": "-----BEGIN PRIVATE KEY-----\nMIIEvQIBADANBgkqhkiG9w0BAQEFAASCBKcwggSjAgEAAoIBAQDD0ZPsdEDm4VMK\nASFQJRoIGMz/04iFVUHGnd0JZR3J5xlxco3gv16UpxZpYwOZUDDzrSrrhSSN6rFV\nUkiroy42w5/E2ac/zj7Jvvx6CEvaRntVdUyoxRdklTaPH1DosAqCJvrRgud7F9wy\n48fOx1djkpeLQHhDrMU9+QR6jRFpfEAKzHzQqqZzU05KSeuP/6wkf9R826IXsCFI\nFYwqNGSUga/q7McN5amgQ0WyqQFDZjkgZkBMVLZnsCBFMQHB8Mq2eyE9wBLXF+cs\nCDaJuwFlNi2XVtB9h/DRs9G5yGheIBSW0tf4O6DVg142rYx4L10tvRQO8MD2geGJ\nFkDKQA89AgMBAAECggEASGfxQ4iFCxocI2HhmInvgzjwbFQicfLhfHiY58Vs62A5\nhzptfcIlTeAuqE9FYGZHg4LvkODNcHBsm/juCBExoGxbYmV8s1om22B0aQcyTQas\nyh+ydeFS0g1efDN/LlsRt6iEK/40a86ZzHNvSWVqSdZFlOcE0TlMQasXXd1Vp+P0\ntqlIeEduEBRvrDv6hWVxY+oSw5IBjktfknhU1iEPXP8Yc0slAQlQ5/oFTMSatQo4\n5axsuRhJPSgUtOvAarrZ2RRzYZ7rrhCHFNgSBAWB4hIzCCl84CbfHqGNFWqilbQN\nmbVVqFS7kwhBtJzXop9e8Nnwxb7VIGmoGRvNqld8nQKBgQDvGUSNuQ4YxAz6PgYB\nNGaO/BTKFOn+wW3dKih4mlcKSF3LtWyhvH3HC5ZzpvxmXgrpuzaSMq7zJGrQr5hk\nQIzvA5cosliTn/YND0kvyEkaB+9renLT6SvdKGYeHgZGIoNk1LSyIKOPAyJxH9SB\nkbfsSDTuVUtUYGsggs+0YdMHcwKBgQDRqR00EeW87AYMX7m1NLDdQHe7RimNcefm\n8XEPpfyri511XcPAvuum29ijMi5xh9gNQSYQA25cbVVpehp/VEoAcQUojsKu4Xns\nZRO4ZpPY5V93c9aXSLvhO8n1qoepUAEuAHp2tBAUMM1pZgJraLYcpUAgEO5Wx4VH\n5iFKj3ACjwKBgQDU+hP3jdSBuPi6W08r+Yo1aVP3YcPBWnlLXQcpzokjrqxmDVgT\nhXwgNjExGZiQcsqTwmBsv9rY2CKReyhqfJlNOkyGQr7l2MHqhigx+N0s486fVTY9\njuC0ogy8XRBHnuydf17poGsws6EVVT4MoElNnlAP0EhGg5BJKFxtmAnLAwKBgFG8\nyqPYLma+5YTBdRcOGb3IOmWKbvyz4aMJkfh1z9HZNmPhUEW+qQR+RTEqiSy9tx9D\nvOEVVVs3TMs4TUhCxi7x4P702TVwtiXRKiUD6LPwiI17XbfRJV4j/xKFjyoVBMC4\ncwYAIRyeAhcLK/pP8l+slRlrQGAYnP9w2p3E2fhFAoGANc+InEzvwHXok1tuBvZZ\nikScnlXvcB22PP/rB5mjZrNl6/BNXWw4q6w3Cg5sN+FjoAzJ4YhlNljgxeYXNn8L\nRQTQeKXKovIng+zxPb2Xs3BTHs2b9s+HSgcYMxOVB6MVz5BpO0sTh74YEQ7IDq+/\nYarajl6hfPkMWFJyk12py64=\n-----END PRIVATE KEY-----\n",
  };

async function getAccessToken() {
  const client = new JWT({
    email: serviceAccount.client_email,
    key: serviceAccount.private_key,
    scopes: ['https://www.googleapis.com/auth/firebase.messaging'],
  });

  try {
    const tokens = await client.authorize();
    console.log('\n--- AAPKA NAYA FCM ACCESS TOKEN ---');
    console.log(tokens.access_token);
    console.log('------------------------------------\n');
    console.log('Is token ko copy karein aur script.js mein FCM_ACCESS_TOKEN ki jagah paste karein.');
    console.log('Yaad rahe: Ye token 1 ghante baad expire ho jayega.');
  } catch (error) {
    console.error('Error fetching access token:', error);
  }
}

getAccessToken();