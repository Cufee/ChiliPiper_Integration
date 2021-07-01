const request = require("request");

exports.main = (event, callback) => {
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
        ? `<a href="${body.url}" target="_blank">Book a meeting!</a>`
        : `Failed to book a meeting...`,
      responseExpected: false,
    };

    callback(responseJson);
  });
};
