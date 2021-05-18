This is a solution to handle a HubSpot form with multiple checkboxes under the same field

There are 2 different methods you can use to submit data:
* Native HubSpot callbacks
  * This will make submissions more reliable and make sure Chili Piper is only called when HubSpot receives the form submission
* Submit Button event
  * This will run Chili Piper code once the Submit button is clicked. This will still check if all required fields have something filled in, however, there is no additional validation being performed, for example, on emails and phone numbers.