console.log('Test Rogerio - LWR Engine Loaded! Inside');
var methodNormalJavascriptAccessDOM = (pContext) => {
  console.log('[methodNormalJavascriptAccessDOM] Starts...');
  console.log('[methodNormalJavascriptAccessDOM] Got idLibrary1 Id', document.getElementById('idLibrary1'));
  console.log('[methodNormalJavascriptAccessDOM] Got idLibrary1 pContext', pContext);
};

var methodWithJQuery = (pContext) => {
  console.log('[methodWithJQuery] Starts...');
  console.log('[methodWithJQuery]Loading jQuery! Outside', jQuery(). jquery);
  console.log('[methodWithJQuery] Got idLibrary1 id attribute',$('#idLibrary1'),$('#idLibrary1').length);
  console.log('[methodWithJQuery] Got idLibrary1 class',$('.idLibrary1'),$('.idLibrary1').length);
  console.log('[methodWithJQuery] Got idLibrary2 pContext', pContext);
};

var callingFromThirdPartyGetContacts = (getContactList) => {
  console.log('[callingFromThirdPartyGetContacts] Starts...');
  console.log('[callingFromThirdPartyGetContacts] Results:', getContactList());
};