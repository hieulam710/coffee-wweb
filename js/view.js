const view = {
};
// carts

const items = [{
    name: "MOCHA",
    id: 1,
    img: "/images/img1.jpg",
    price: "$4,99",
    numPrice: 4.99,
}, {
    name: "LATTE", id: 2,
    img: "/images/img2.jpg",
    price: "$5,99",
    numPrice: 5.99,
}, {
    name: "ICED GINGERBREAD ", id: 3,
    img: "/images/img3.jpg",
    price: "$4,98",
    numPrice: 4.98
}, {
    name: 'ICED CAFFE MOCHA', id: 4,
    img: "/images/img4.jpg",
    price: "4,97",
    numPrice: 4.97
}, {
    name: "ICED SMOKED LATTE", id: 5,
    img: "/images/img5.jpg",
    price: "$4,96",
    numPrice: 4.96
}, {
    name: "ICED SMOKED LATTE",
    img: "/images/img6.jpg", id: 6,
    price: "$4,96",
    numPrice: 4.96
}, {
    name: "ICED CARAMEL LATTE",
    img: "/images/img7.jpg", id: 7,
    price: "$4,96",
    numPrice: 4.96
}, {
    name: "VANILLA LATTE", id: 8,
    img: "/images/img8.jpg",
    price: "$4,96",
    numPrice: 4.96
}, {
    name: "CAPPUCCINO",
    img: "/images/img9.jpg", id:9 ,
    price: "$4,96",
    numPrice: 4.96
}, {
    name: "CAFFE AMERICANO",
    img: "/images/img10.jpg", id: 10,
    price: "$4,96",
    numPrice: 4.96
}, {
    name: "WHITE CHOCOLATE ", id: 11,
    img: "/images/img11.jpg",
    price: "$4,96",
    numPrice: 4.96
}, {
    name: " MOME",
    img: "/images/img12.jpg", id: 12,
    price: "$4,96",
    numPrice: 4.96
}];

// products
let products = [
    {
        name: "Nicaragua",
        img: "/images/product-1.png",
        price: '$46.00',
        count: 0,
    }, {
        name: "Columbia",
        img: "/images/product-2.png",
        price: '$47.00',
        count: 0,
    }, {
        name: "Peru",
        img: "/images/product-3.png",
        price: '$45.99',
        count: 0,
    }, {
        name: "Public",
        img: "/images/product-4.png",
        price: '$45.00',
        count: 0,
    }, {
        name: "VietNam",
        img: "/images/product-5.png",
        price: '$49.99',
        count: 0,
    }, {
        name: "Coffee",
        img: "/images/product-6.png",
        price: '$33.00',
        count: 0,
    }, {
        name: "Boonen",
        img: "/images/product-7.png",
        price: '$32.00',
        count: 0,
    }, {
        name: "Australia",
        img: "/images/product-9.png",
        price: '$32.00',
        count: 0,
    }
]
view.renderUserIcon =()=> {
    document.getElementById("user-btn").style.display = "inline-block"
}

view.setMessage = (elementId, message) => {
    document.getElementById(elementId).innerText = message;
};
view.removeMessage = (elementId) => {
    document.getElementById(elementId).innerText = '';
};
view.renderProductCart = (data)=>{
    if (data) {
        let render = ""
        for (let i = 0; i < data.length; i++) {
            render += `
            <div class="sanpham">
                <img src="${data[i].img}" alt="">
                <div class="content">
                    <div  style="font-weight: 600;">${data[i].name}</div>
                    <div style="opacity: .6; font-size: 15px; padding: 10px 0">quantity: ${data[i].amount}</div>
                    <div class="price" >$${(data[i].numPrice)*(data[i].amount)}</div>
                </div>
            </div> `
        }
        document.getElementById('boxRenderCart').innerHTML = render
    } else {
        console.log("no such data");
    }
}
view.renderInCart = (data)=>{
    if(data){
        var rend = "";
        console.log(data);
        for( let i = 0; i<data.length; i++ ){
            rend +=` <tr>
            <td class="prod">
                <img src="${data[i].img}" alt="">
                <span>${data[i].name}</span>
            </td>
            <td>$${data[i].numPrice}</td>
            <td>
                <input style="width: 50px; height:40px" type="number"  min="1" value="${data[i].amount}" >
            </td>
            <td>$${(data[i].numPrice)*(data[i].amount)}</td>
            <td id="clearBtn"><i class="fa-solid fa-delete-left"></i></td>
        </tr>  `
        }
        document.getElementById("bodyCart").innerHTML = rend;

    } else {
        console.log('data ko co');
    }
}
view.setActiveScreen = (screenName) => {

    switch (screenName) {
        case "home":
            document.getElementById('app').innerHTML = components.home + components.footer;
            view.callElements("showItems")
            view.showproducts("showProduct")
            let searchItem = document.getElementById("search-box");
            searchItem.addEventListener("input",()=>{
                if(searchItem.value.trim() != "" ){
                    controller.search(searchItem.value)
                }
            })
            controller.searchBtnn()
            controller.cartItem()
            // user navigation to regíster page
            let btnConvert = document.getElementsByClassName('convert-btn')
            for (let i = 0; i< btnConvert.length; i++) {
                btnConvert[i].addEventListener("click",(e)=>{
                    view.setActiveScreen('login')
                })
            } 
            controller.signInBtn('sign-in')
            controller.signUpBtn('sign-up')
            

            break;
        case "login":
            document.getElementById('app').innerHTML = components.login + components.footer;
            var loginData = document.getElementById('login-data');
            loginData.addEventListener('submit', (e) => {
                e.preventDefault();
                const loginInfo = {
                    email: loginData.email.value,
                    password: loginData.password.value,
                };
                controller.login(loginInfo);
            });
            controller.directHome('directHome')

            // user navigation to register page:
            document.getElementById('create-account-button').addEventListener('click', () => view.setActiveScreen('register'));
            break
        case "register":
            document.getElementById('app').innerHTML = components.register + components.footer;
            // add form submit listeners
            var registerData = document.getElementById('register-data');
            registerData.addEventListener('submit', (e) => {
                e.preventDefault();
                var registerInfo = {
                    userName: registerData.username.value,
                    email: registerData.email.value,
                    password: registerData.password.value,
                    confirmPassword: registerData.confirmPassword.value,
                };
                controller.register(registerInfo);
            });
            controller.directHome('directHome')

            // user navigation to login page:
            document.getElementById('loggin-button').addEventListener('click', () => view.setActiveScreen('login'));

            break;
        case "homeLogged":
            document.getElementById('app').innerHTML = components.homeLogged + components.footer;
            document.getElementById('displayName').innerHTML = auth.currentUser.displayName
            view.callElements("showItems")
            view.showproducts("showProduct")
            controller.goToCart('checkoutNow')
            controller.searchBtnn()
            controller.cartItem()
            controller.profile()
            controller.logout('logout')
            controller.addToCart("convert-btn","img-drink-bean",items,products)
            break;
        case "cartPage":
            document.getElementById('app').innerHTML = components.cartPage + components.footer;
            document.getElementById('displayName').innerHTML = auth.currentUser.displayName

            // controller.searchBtnn()
            // controller.goToCart('checkoutNow')

            controller.cartItem()
            controller.profile()
            controller.directHome('directHome')
            controller.logout('logout')
            controller.addToCart("convert-btn","img-drink-bean",items,products)
            model.callData("bodyCart")
            break;
        


    }
}
view.callElements = (Element) => {
    switch (Element) {
        case "showItems":
            let result = ""
            for (let i = 0; i < items.length; i++) {
                result += `
            <div class="box">
                <img src="${items[i].img}" class="img-drink-bean" alt="${items[i].id}">
                <h3>${items[i].name}</h3>
                <div class="price">${items[i].price}</div>
                <a  id="convert" class="convert-btn">add to cart</a>
            </div>
        `
            }
            document.getElementById("showMenu").innerHTML = result
            break;

    }
}
view.showproducts = (elements) => {
    switch (elements) {
        case "showProduct":
            let render = ""
            for (let i = 0; i < products.length; i++) {
                render += `
            <div class="box">
                <div class="icons">
                    <a href="#" class="fas fa-shopping-cart"></a>
                    <a href="#" class="fas fa-heart"></a>
                    <a href="#" class="fas fa-eye"></a>
                </div>
                <div class="image">
                    <img src="${products[i].img}" alt="">
                </div>
                <div class="content">
                    <h3>${products[i].name}</h3>
                    <div class="stars">
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star-half-alt"></i>
                    </div>
                    <div class="price">${products[i].price} </div>
                </div>
            </div>
            `

            }
            document.getElementById("show").innerHTML = render
            break;
    }
}

view.displayMessage = (elementId, message) => {
    document.getElementById(elementId).innerText = message;

};
view.removeMessage = (elementId) => {
    document.getElementById(elementId).innerText = '';
};