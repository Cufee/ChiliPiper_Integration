function handlerSubmit(tenantDomain, routerName, activeForm) {
  var leadObj = {};
  var elements = activeForm.elements;
  // Validate required form input values
  for (var i = 0, element; (element = elements[i++]); ) {
    if (element.required && element.value === "") {
      console.log("form validation failed, some required fields are empty");
      return;
    }
    // Map to lead object
    switch (element.type) {
      // Skip buttons
      case "button" || "submit":
        continue;
      // Handle checkboxes
      case "checkbox":
        if (element.checked && leadObj[element.name]) {
          leadObj[element.name] = leadObj[element.name] += "," + element.value;
        } else if (element.checked) {
          leadObj[element.name] = element.value;
        }
        continue;
      // All other inputs
      default:
        if (element.value) {
          leadObj[element.name] = element.value;
        }
        continue;
    }
  }
  //Call Chili Piper if validation passed
  console.log(leadObj);
  ChiliPiper.submit(tenantDomain, routerName, { map: true, lead: leadObj });
  return;
}
