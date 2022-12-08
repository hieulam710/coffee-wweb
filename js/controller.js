const controller = {};

controller.signInBtn = (id) =>{
  document.getElementById(id).addEventListener('click',()=>{
    view.setActiveScreen('login')
  })
};
controller.signUpBtn = (id) =>{
  document.getElementById(id).addEventListener('click',()=>{
    view.setActiveScreen('register')
  })
}
controller.directHome = (id)=>{
  document.getElementById(id).addEventListener('click',()=>{
    if(auth.currentUser != null){
      view.setActiveScreen('homeLogged')
    }else{
      view.setActiveScreen('home')
    }
  })
}
controller.searchBtnn = () =>{
    var searchBtn = document.getElementsByClassName("search-form")[0];
    var boxCart = document.getElementsByClassName("cart-items-container")[0];
    var profile = document.getElementsByClassName('profile')[0];

    document.getElementById("search-btn").addEventListener ('click',()=>{
        searchBtn.classList.toggle('active');
        profile.classList.remove('active');
        boxCart.classList.remove('active');
    });
}
controller.goToCart = (id)=>{
  document.getElementById(id).addEventListener('click',()=>{
      view.setActiveScreen("cartPage")
  })
}
controller.searchBox = ()=>{
  let value = document.getElementById("search-box").value
  value.addEventListener("onInput")

}
controller.cartItem = () =>{
    var searchBtn = document.getElementsByClassName("search-form")[0];
    var boxCart = document.getElementsByClassName("cart-items-container")[0];
    var profile = document.getElementsByClassName('profile')[0];

    document.getElementById("cart-btn").addEventListener("click",(e)=>{
        // boxCart.classList.toggle('active');
        searchBtn.classList.remove('active');
        profile.classList.remove('active')
        if(boxCart.classList.toggle('active')){
          model.getDataFromCart();
          // view.renderProductCart(data);
        }else{
          view.renderProductCart()
        } 
    })
}
controller.profile = () =>{
  var searchBtn = document.getElementsByClassName("search-form")[0];
  var boxCart = document.getElementsByClassName("cart-items-container")[0];
  var profile = document.getElementsByClassName('profile')[0];
    document.getElementById('user-btn').addEventListener('click',()=>{
    profile.classList.toggle('active')
    boxCart.classList.remove('active');
    searchBtn.classList.remove('active');

   })

}

controller.register = (registerInfo) =>{
    // validate name + email + password

  if (registerInfo.userName == '') {
    document.getElementById('input-username-error').style.borderColor = "#ff020285"
    view.displayMessage('userName-error', 'Please input your last name');
  } else {
    document.getElementById('input-username-error').removeAttribute('style')
    view.removeMessage('userName-error');
  }
  if (registerInfo.email== '') {
    document.getElementById('input-email-error').style.borderColor = "#ff020285"
    view.displayMessage('email-error', 'Please input your email');
  } else {
    document.getElementById('input-email-error').removeAttribute('style')
    view.removeMessage('email-error');
  }
  if (registerInfo.password == '') {    
    document.getElementById('input-pass-error').style.borderColor = "#ff020285"
    view.displayMessage('password-error', 'Please input your password');
  } else {
    document.getElementById('input-pass-error').removeAttribute('style')
    view.removeMessage('password-error');
  }
  if (registerInfo.confirmPassword == '' || registerInfo.confirmPassword !== registerInfo.password) {
    document.getElementById('input-confirmPass-error').style.borderColor = "#ff020285"
    view.displayMessage('confirmPassword-error', `Confirm password didn't match`);
  } else {
    document.getElementById('input-confirmPass-error').removeAttribute('style')
    view.removeMessage('confirmPassword-error');
  }

  // call fire base
  if (registerInfo.userName && registerInfo.email && registerInfo.password && registerInfo.password === registerInfo.confirmPassword) {
      model.register(registerInfo);
      view.setMessage('form-success', 'Register success');
  }
};
controller.login= (loginInfo) => {
    if (loginInfo.email == '') {
        document.getElementById('input-email-error').style.borderColor = "#ff020285"
        view.displayMessage('email-error', 'Please input your email');
    } else {
        document.getElementById('input-email-error').removeAttribute('style')
        view.removeMessage('email-error');
    } if (loginInfo.password == '') {
        document.getElementById('input-pass-error').style.borderColor = "#ff020285"
        view.displayMessage('password-error', 'Please input your password');
    } else {
        document.getElementById('input-pass-error').removeAttribute('style')
        view.removeMessage('password-error');
    }
    // check firebase
    if (loginInfo.email && loginInfo.password){
        model.login(loginInfo)
    }
}
controller.logout = (id)=>{ 
  document.getElementById(id).addEventListener("click",()=>{
    model.logout()
  })
}
controller.addToCart = (idBtn,idImg,drink,bean)=>{
  let result = document.getElementsByClassName(idBtn); // truy van den buton cua doi tuong 
  //tra ve html collection la array bao gom the html chua' id va class name
  let resultImg = document.getElementsByClassName(idImg); // truy van den id cua sp trong mang san pham
  //tra ve html collection la array 
  let allProducts = drink.concat(bean);
  // console.log(allProducts);
  for (let index = 0; index < result.length; index++) {
    // console.log(result);
    result[index].addEventListener('click',()=>{
    //  truy xuat den moi san pham nhan su kien click
      let  idProduct = Number(resultImg[index].alt) // lay id qua html image gan = id
      let obj = {};
      allProducts.forEach(item => {
        if (item.id == idProduct) {
          obj = item
        }
      });
       model.addToCart(obj)// nem qua model xu li
    })
  }
}
controller.search = (inputValue) => {
  let ren = "";
  let newArr = [];
  for( let i= 0; i<items.length ; i++){
    if (inputValue.toUpperCase() == items[i].name){
      console.log(items[i].name);
    }

    // return newArr
  }

  // for (let i = 0; i < items.length; i++) {
  //   if (inputValue.toUpperCase() == items[i].name) {
  //     ren += `<div class="box">
  //     <img src="${items[i].img}" class="img-drink-bean" alt="${items[i].id}">
  //         <h2>${items[i].name}</h2>
  //         <div class="price">${items[i].price}</div>
  //         <a  id="convert" class="convert-btn">add to cart</a>
  //     </div>`
  //   }
  //   document.getElementById("displaySearch").innerHTML = ren
  // }
}












