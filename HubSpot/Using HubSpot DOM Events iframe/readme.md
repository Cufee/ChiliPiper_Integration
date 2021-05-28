How to set this up:
* Add the code from landing_page.html into the **Footer code** on your HubSpot page
* Set the Form Thank You message Source Code to code from **thank_you_message.html**

Hot this works:
* We listen for the DOM message event all HubSpot forms send out when a form submission is complete
* Once this event comes through, we make a request to Chili Piper to route the prospect.
* We get a calendar link in return and set this link into an iframe, replacing the thank you message. 