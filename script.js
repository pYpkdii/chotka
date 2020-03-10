var themeButton = document.querySelector('.theme');
themeButton.onclick = function() {
  var page = document.querySelector('.page')
  page.classList.toggle('dark-theme');
  page.classList.toggle('light-theme');
}



