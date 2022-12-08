window.onload = () => {
    // view.setActiveScreen("home")
    auth.onAuthStateChanged((user) => {
        if (user) {
            view.setActiveScreen('homeLogged')
          
        } else{
            view.setActiveScreen('home')
        }
      });
}