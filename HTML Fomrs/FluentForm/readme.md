This is a code snippet for Fluentform with custom validation.

How this works:

- We find all lebels on the form and check if a class name "ff-el-is-required" is present, if it is - we assign a required HTML tag to the input field
- When Submit is clicked, we check if the inpit field is required and if the value is equal to "". If we find a blank - we do not excute ChiliPiper call and break the loop.
