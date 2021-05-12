// Get Lead object from form fields
function getLeadObject(tenantDomain, tenantRouter, form) {
  // Loop through all form elements and map
  var data = {
    CPTenantDomain: tenantDomain,
    CPTenantRouter: tenantRouter,
  };
  var labelsDict = {};
  // Save label names
  form.querySelectorAll("label").forEach((label) => {
    labelsDict[label.htmlFor] = stripText(label.textContent);
  });
  // Fill lead object
  for (var i = 0, elem; (elem = form.elements[i++]); ) {
    if (elem.type.includes("submit") || elem.type.includes("fieldset")) {
      continue;
    } else if (elem.type.includes("select")) {
      // Get the field name from label or element text
      var field_classes = elem.parentElement.className.split(" ");
      var field_name;
      for (var i in field_classes) {
        if (field_classes[i].includes("CP_")) {
          field_name = field_classes[i];
        }
      }
      field_name = field_name || (n = stripText(elem.options[0].text)) ? n : labelsDict[elem.name];
      if (!field_name) {
        if (typeof debugMessages !== "undefined" ? debugMessages : true) {
          console.log("failed to find a valid field name for " + elem.name);
        }
        continue;
      }
      // Save to lead obj
      if (elem.selectedIndex === 0) {
        data[field_name] = "[not provided]";
      } else {
        data[field_name] = elem.options[elem.selectedIndex].text;
      }
    } else if (elem.parentElement.className.includes("hidden")) {
      // Get the field name from class name
      var field_classes = elem.parentElement.className.split(" ");
      var field_name;
      for (var i in field_classes) {
        if (field_classes[i].includes("CP_")) {
          field_name = field_classes[i];
        }
      }
      if (!field_name) {
        if (typeof debugMessages !== "undefined" ? debugMessages : true) {
          console.log("failed to find a valid field name for " + elem.name);
        }
        continue;
      }
      // Save to lead obj
      data[field_name] = (v = elem.value) ? v : "[not provided]";
    } else {
      // Get the field name from label or element placeholder
      var field_classes = elem.parentElement.className.split(" ");
      var field_name;
      for (var i in field_classes) {
        if (field_classes[i].includes("CP_")) {
          field_name = field_classes[i];
        }
      }
      field_name = field_name || (n = stripText(elem.options[0].text)) ? n : labelsDict[elem.name];
      if (!field_name) {
        if (typeof debugMessages !== "undefined" ? debugMessages : true) {
          console.log("failed to find a valid field name for " + elem.name);
        }
        continue;
      }
      // Save to lead obj
      if (elem.type.includes("checkbox")) {
        data[field_name] = (v = elem.checked) ? v : false;
      } else {
        data[field_name] = (v = elem.value) ? v : "[not provided]";
      }
    }
  }
  if (typeof debugMessages !== "undefined" ? debugMessages : true) {
    // Log data and labels for debugging
    console.log(labelsDict);
    console.log(data);
  }
  return data;
}
// Strip characters and spaces
function stripText(text) {
  return camelText(text).replace(/[^\w]/gi, "");
}
// Make text more readable
function camelText(str) {
  return str.replace(/(?:^\w|[A-Z]|\b\w|\s+)/g, function (match, index) {
    if (+match === 0) return "";
    return match.toUpperCase();
  });
}
