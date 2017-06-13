window.fbAsyncInit = () => {
  FB.init({
    appId      : '1674487759526368', //Mi app Id: RuthSalvador
    cookie     : true,  // cookies habilitados para que el server acceda a la sesión
    xfbml      : true,  // parsea los plugins sociales en la página
    version    : 'v2.8' // usar la versión 2.8
  });
};

function loginHandler(response) {
  if (response.status === 'connected') {
    state.status = "Conectado";
    FB.api('/me?fields=email,name', user => {
      state.user = user;
      state.doRender();
    });
  } else if (response.status === 'not_authorized') {
    state.user = null;
    state.status = "Aplicación no autorizada";
    state.doRender();
  }
}

function doLogin() {
  FB.login(loginHandler, {scope: 'email'});
}