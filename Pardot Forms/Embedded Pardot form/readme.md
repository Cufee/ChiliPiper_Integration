This method should be used when a Pardot form is embedded into a page using an iframe element.

How this works:

1.  - On form submit, we loop through all form elements and create a dictionary of Labels and their respective input field names
    - We then loop through each form element and find the corresponding field name
      - If the placeholder HTML tag is set - the value of this tag is used as a form field name
      - If the placeholder HTML tag is not set - the value from the labels dictionary created earlier is used as a form field name
    - We save the value of each element to the dictionary and dispatch and a DOM event with this data
2. - We pass the event dispatched earlier along once Pardot receives form data and all validation logic is complete.
3. - We catch the event dispatched at Step 2 and use the data to submit the prospect to ChiliPiper for routing


How to set this up:

1. Add the code from Step_1.html to the **Look & Feel → Below Form Code Editor**
2. Add the code from Step_2.html to the **Completed Actions → Thank You Code**
3. Add the code from Step_3.html to the **Parent Webpage** in which the Pardot Embed HTML code resides
4. Map the values from the submitData object to your Chili Piper Form which is mapped to your Router
