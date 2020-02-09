const sheets = require('./googleSheets.js');
const { WebClient } = require('@slack/web-api');
const envKey = process.env.CMDF_BOT_TOKEN;

// Create a new instance of the WebClient class with the token read from your environment variable
const web = new WebClient(envKey);

(async () => {

  try {
    await web.chat.postMessage({
      channel: '#test-channel',
      text: ':sparkles: current number of applications: ' + sheets.numRows + ':sparkles:',
    });
  } catch (error) {
    console.log(error);
  }

  console.log('Message posted!');
})();