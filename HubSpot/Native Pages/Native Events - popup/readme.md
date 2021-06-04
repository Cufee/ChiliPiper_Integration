How to set this up:
* Add the code from landing_page.html into the **Footer code** on your HubSpot page

Hot this works:
* We listen for the DOM message event all HubSpot forms send out when a form submission is complete
* Once this event comes through, we make a request to Chili Piper to route the prospect and show the calendar popup.