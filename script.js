const html = document.querySelector('html');
const themeBtn = document.querySelector('.theme-mode');

const themeSwitch = {
   isDarkMode: false,
   createDarkMode() {
      html.classList.add("dark-mode");
   },

   removeDarkMode() {
      html.classList.remove("dark-mode");
   },
};

themeBtn.addEventListener("click", () => {
   themeSwitch.isDarkMode = !themeSwitch.isDarkMode;
   if (themeSwitch.isDarkMode) {
      themeSwitch.createDarkMode();
   } else {
      themeSwitch.removeDarkMode();
   }
});
