console.log('Test Rogerio - LWR Engine Loaded! Inside');
var methodNormalJavascriptAccessDOM = (pContext) => {
  console.log('[callContactFromLWREngine] Starts...');
  console.log('[methodWithJQuery] Got IdLibrary Id', document.getElementById('idLibrary'));
  console.log('[methodWithJQuery] Got IdLibrary pContext', pContext);
};


var methodWithJQuery = (pContext) => {
  console.log('[methodWithJQuery] Starts...');
  console.log('[methodWithJQuery]Loading jQuery! Outside', jQuery(). jquery);
  console.log('[methodWithJQuery] Got IdLibrary id attribute',$('#idLibrary'),$('#idLibrary').length);
  console.log('[methodWithJQuery] Got IdLibrary class',$('.idLibrary'),$('.idLibrary').length);
  console.log('[methodWithJQuery] Got IdLibrary pContext', pContext);
};