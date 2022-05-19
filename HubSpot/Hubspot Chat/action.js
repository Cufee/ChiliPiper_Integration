const request = require("request");

exports.main = (event, callback) => {
  //input your respective 'subdomain' and 'router-name' from your chili piper instance; "Concierge || Inbound Router" → "Javascript for your Inbound Concierge"
  const domain = "subdomain";
  const router = "inbound-router";

  var contact_email;
  try {
    contact_email = event.session.properties.CONTACT.email.value;
  } catch (error) {
    const responseJson = {
      botMessage: "Oh no, I failed to find a valid email address :(",
      responseExpected: false,
    };

    callback(responseJson);
    return;
  }

//in this request to the chili piper api, you will be submitting to us the "contact_email" value from Hubspot to the Chili Piper Marketing API
//at this point in time in the chat flow, the Hubspot chat will have created the Contact record in Hubspot
//thus Chili Piper will be able to lookup and retrieve the Contact fields and details from Hubspot, including any prior fields inputted prior in the chat
//that you may require for routing purposes, using the "contact_email" field as the key
//note: to ensure Chili Piper will be able to lookup and retrieve values in Hubspot, we recommend including at least 1 Queue 
//in your respective "Concierge || Inbound Router" → "Scheduling Queues" with Algorithm = "Prioritize Routing based on Ownership", including Rules
  var options = {
    uri: "https://api.chilipiper.com/marketing/" + domain,
    method: "POST",
    json: {
      form: {
        Email: contact_email,
      },
      options: {
        router: router,
      },
    },
  };

  request(options, function (_, _, body) {
    const responseJson = {
      botMessage: body?.url
      //you can change the hyperlink below from "Book a meeting!" to whatever you choose by editing the text below
        ? `<a href="${body.url}" target="_blank">Book a meeting!</a>`
        : `Failed to book a meeting...`,
      responseExpected: false,
    };

    callback(responseJson);
  });
};
