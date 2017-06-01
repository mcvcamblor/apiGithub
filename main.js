var user = document.querySelector('#js-user');
var button = document.querySelector('#js-btn');
var userName = document.querySelector('#js-username');
var photo = document.querySelector('#js-photo');
var repositories = document.querySelector('#js-repositories');

function findApi() {
  var apiUrl= "https://api.github.com/users/" + user.value;

  var request = new XMLHttpRequest();

  request.open('GET', apiUrl, true);

  request.onload = function() {
    if (request.status >= 200 && request.status < 400) {
      var data = JSON.parse(request.responseText);
      userName.innerHTML = data.name;
      repositories.innerHTML = data.public_repos;
      photo.innerHTML = '<img src="' + data.avatar_url + '">';
    } else {
      console.log('Error del servidor, puede que el archivo no exista o que se haya producido un error interno en el servidor');
    }
  };

  request.onerror = function() {
    console.log('Error al tratar de conectarse con el servidor');
  };

  request.send();
}

button.addEventListener("click", findApi);
