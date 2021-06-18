This method allows to enable custom form mapping when using Marketo forms.
How this works:
*  We use the native callback event available to all Marketo forms to call Chili Piper and set the `map` option to `true`
   *  Form data is automatically gathered by our script

How to set this up:
1. Add the code from `landing_page.html` to your landing page, below the Marketo form
2. Replace the `[[tenant_domain]]` by your Chili Piper subdomain and `[[tenant_router]]` by your router link name.
