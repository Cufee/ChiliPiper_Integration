This our new method of integrating Chili Piper with any form powered by a Pardot Form Handler.

**How this works:**
1. Your Pardot form success location needs to be set to a specific URL and data forwarding needs to be enabled
2. When a form is filled out by the prospect, it will be submitted to Pardot and then redirected to our server
3. This form submission is then decoded and encoded in a format compatible with Chili Piper marketing REST API
4. We then do one of the following:
   1. Redirect to your Thank You page, appending form fields as query parameters that can be used with Chili Piper for routing
   2. Route the prospect using Chili Piper REST API and redirect them to a Chili Piper calendar page


**How to set this up:**
* Set up your form to use the Pardot Form Handler, following Pardot documentation and help articles.
* Add `https://chili.byvko.dev/api/public/pardot/success` or `https://chili.byvko.dev` as a trusted domain in your Pardot instance
* From here, you have two options to route the prospect:
  1.  Redirect to your Thank You page, show a Chili Piper calendar in a modal within your website
       *  Set the success location to `https://chili.byvko.dev/api/public/pardot/success/tenantDomain/routerName?successLocation=https://your-thank-you-page.com`
       *  Replace `tenantDomain` with your Chili Piper subdomain, you can find this in your admin center, under the company name. Your domain will never contain spaces (` `) and dots (`.`)
       *  Replace `routerName` with the **API router name**, which can be found in the router settings - Embed your form. For example, https://calendar.chilipiper.com/router/**inbound-router**, where `inbound-router` is the router name. Your router name will never contain spaces (` `)
       *  Replace `https://your-thank-you-page.com` with a link to your Thank You page
       *  Add the code from `Thank_You_Page.html` to your Thank You page, this can go anywhere on that page.
  2.  Route the prospect using Chili Piper REST API and redirect them to a Chili Piper calendar page, away from your website
       *  Set the success location to `https://chili.byvko.dev/api/public/pardot/success/tenantDomain/routerName?errorLocation=https://your-thank-you-page.com`
       *  Replace `tenantDomain` with your Chili Piper subdomain, you can find this in your admin center, under the company name. Your domain will never contain spaces (` `) and dots (`.`)
       *  Replace `routerName` with the **API router name**, which can be found in the router settings - Embed your form. For example, https://calendar.chilipiper.com/router/**inbound-router**, where `inbound-router` is the router name. Your router name will never contain spaces (` `)
       *  Replace `https://your-thank-you-page.com` with a link to your Thank You page, this is where a prospect will land in if they are disqualified or an error occurred during routing. If an error occurs during routing and the `errorLocation` parameter is set, the error will be appended to query string parameters.

**Advanced Options:**
* This API endpoint will pass **all** query string parameters appended to the endpoint URL to Chili Piper marketing endpoint. This means that all URL parameters outlined in this help article are supported and require no additional setup:
https://help.chilipiper.com/hc/en-us/articles/360053799073#h_01F4HHTMX0N3FFNN0F0A15DKM8

* Some routing specific options are also supported and can to be appended as query string parameters to the API endpoint. Here is a list of supported routing options:
  * `map`
  * `debug`
  * `locale`
  * `webHook`