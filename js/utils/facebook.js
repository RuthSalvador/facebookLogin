window.fbAsyncInit = () => {
  FB.init({
    appId      : '1674487759526368', //Mi app Id: RuthSalvador
    cookie     : true,  // cookies habilitados para que el server acceda a la sesión
    xfbml      : true,  // parsea los plugins sociales en la página
    version    : 'v2.8' // usar la versión 2.8
  });
};