const components = {} ;

components.home = `    <form class="top-header">
<div class="address">
    <i class="fa-solid  fa-house"></i>
    <span>: 17 Le Loi, Tp. Thai Binh</span>
</div>
<div class="phoneNumber">
    <i class="fa-solid fa-phone"></i>
    <span>: 0123897482</span>
</div>
<div class="signInUp">
    <button id="sign-in">Sign In</button>
    <span> | </span>
    <button id="sign-up"> Sign Up </button>
</div>
</form>
<header class="header">
    <a href="#"  class="logo">
        <img  src="images/logo.png" alt="">
    </a>
    <nav class="navbar">
        <a href="#home">home</a>
        <a href="#about">about</a>
        <a href="#menu">menu</a>
        <a href="#products">products</a>
        <a href="#feature">feature</a>
        <a href="#contact">contact</a>
        <a href="#blogs">blogs</a>
    </nav>
    <div class="icons">
        <div class="fas fa-search" id="search-btn"> </div>
        <div class="fas fa-shopping-cart" id="cart-btn"></div>
        <div class="fas fa-bars" id="menu-btn"></div>
    </div>
    <div class="search-form">
        <input type="search" id="search-box" placeholder="search here...">
        <label for="search-box" class="fas fa-search"></label>
        <div id="displaySearch">
            
        </div>
    </div>
    <div class="cart-items-container" id="cart-form"> 
        <div class="cart-item">
            <span class="fas fa-times"></span>
            <img src="images/cart-item-1.png" alt="">
            <div class="content">
                <h3>cart item 01</h3>
                <div class="price">$15.99/-</div>
            </div>
        </div>
        <a href="#" class="btn">checkout now</a>
    </div>
    
</header>
<section class="home" id="home">
    <div class="content">
        <h3>a special morning moment</h3>
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit..</p>
        <a href="#menu" class="btn">get yours now</a>
    </div>
</section>
<section class="about" id="about">
    <h1 class="heading"> <span>about</span> us </h1>
    <div class="row">
        <div class="image">
            <img src="/images/espresso-19212_640.jpg" alt="">
        </div>
        <div class="content">
            <h3>what makes our coffee special?</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. </p>
            <p> Odit amet enim quod veritatis, nihil voluptas culpa! Neque consectetur obcaecati sapiente?</p>
            <a href="#" class="btn">learn more</a>
        </div>
    </div>
</section>
<section class="menu" id="menu">
    <h1 class="heading"> our <span>menu</span> </h1>
    <div class="box-container" id="showMenu">       
    </div>
</section>
<section class="products" id="products">
    <h1 class="heading"> our <span>products</span> </h1>
    <div class="box-container" id="show">   
    </div>
</section>  
<section class="blogs" id="blogs">
    <h1 class="heading"> our <span>blogs</span> </h1>
    <div class="box-container" id="showBlog" >
        <div class="box">
            <div class="image">
                <img src="images/blog-1.jpeg" alt="">
            </div>
            <div class="content">
                <a href="#" class="title">tasty and refreshing coffee</a>
                <span>by Hieu Le / 21st may, 2022</span>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Non, dicta.</p>
                <a href="#" class="btn">read more</a>
            </div>
        </div>
        <div class="box">
            <div class="image">
                <img src="images/blog-2.jpeg" alt="">
            </div>
            <div class="content">
                <a href="#" class="title">tasty and refreshing coffee</a>
                <span>by Gau Lua / 21st may, 2022</span>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Non, dicta.</p>
                <a href="#" class="btn">read more</a>
            </div>
        </div>
        <div class="box">
            <div class="image">
                <img src="images/blog-3.jpeg" alt="">
            </div>
            <div class="content">
                <a href="#" class="title">tasty and refreshing coffee</a>
                <span>by Gau Lua / 21st may, 2022</span>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Non, dicta.</p>
                <a href="#" class="btn">read more</a>
            </div>
        </div>     
    </div>
</section>


`;

components.login = `<header class="header">
    
<a href="#" id="directHome" class="logo">
    <img src="images/logo.png" alt="">
</a>

</header>
<div class="noi-dung">

<div class="form">
<img src="/images/logo.png" alt="">
    <h2>Login</h2>
    <form id='login-data'>
        <div class="input-form">
            <span>Email</span>
            <input type="email" id='input-email-error' name="email">
            <div id='email-error' class='error'></div>
        </div>
        <div class="input-form">
            <span>Password</span>
            <input type="password"  id='input-pass-error' name="password">
            <div id='password-error' class='error'></div>
            <div id='form-error' class='form-error'></div>
        </div>
        <div class="nho-dang-nhap">
            <label><input type="checkbox" checked> Remember to login</label>
        </div>
        <div class="input-form">
            <input type="submit" value="Login">
        </div>
        <div class="input-form" >
            <p >Do not have an account ? <a href="#" id='create-account-button'>Register</a></p>
        </div>
    </form>
    <h3>Login with social network</h3>
    <ul class="icon-dang-nhap">
        <li><i class="fa-brands fa-facebook" aria-hidden="true"></i></li>
        <li><i class="fa-brands fa-github" aria-hidden="true"></i></li>
        <li><i class="fa-brands fa-twitter" aria-hidden="true"></i></li>
    </ul>
</div>
</div>`;
components.register = `<header class="header">
<a href="#" id="directHome" class="logo">
    <img src="images/logo.png" alt="">
</a>
</header>
<div class="noi-dung">
<div class="form">
    <img src="/images/logo.png" alt="">

    <h2>Register</h2>
    <form id='register-data'>
        <div class="input-form">
            <span>Username</span>
            <input type="text" id='input-username-error' name="username">
            <div id='userName-error' class='error'></div>
        </div>
        <div class="input-form">
            <span>Email</span>
            <input type="text" id='input-email-error' name="email">
            <div id='email-error' class='error'></div>
        </div>
        <div class="input-form">
            <span>Password</span>
            <input type="password" id='input-pass-error' name="password">
            <div id='password-error' class='error'></div>
        </div>
        <div class="input-form">
            <span>Confirm Password</span>
            <input type="password" id='input-confirmPass-error' name="confirmPassword">
            <div id='confirmPassword-error' class='error'></div>
        </div>
        <div id='form-error' class='form-error'></div>
        <div id='form-success' class='success'></div>
        <div class="nho-dang-nhap">
            <label><input type="checkbox" checked name=""> Remember to login</label>
        </div>
        <div class="input-form">
            <input type="submit" value="Register">
        </div>
        <div class="input-form">
            <p>Do you already have an account! <a id='loggin-button' >Login</a></p>
        </div>
    </form>

</div>
</div>
`;
components.footer=`<section class="footer">
<div class="share">
    <a href="#" class="fab fa-facebook-f"></a>
    <a href="#" class="fab fa-twitter"></a>
    <a href="#" class="fab fa-instagram"></a>
</div>
<div class="links">
    <a href="#">home</a>
    <a href="#">about</a>
    <a href="#">menu</a>
    <a href="#">products</a>
    <a href="#">review</a>
    <a href="#">contact</a>
    <a href="#">blogs</a>
</div>
<div class="credit">created by <span>Gau Lua</span> | hihihehe</div>
</section>`

components.homeLogged = `
<form class="top-header">
<div class="address">
    <i class="fa-solid fa-house"></i>
    <span>: 17 Le Loi, Tp. Thai Binh</span>
</div>
<div class="phoneNumber">
    <i class="fa-solid fa-phone"></i>
    <span>: 0123897482</span>
</div>
<div class="signInUp">
    <div id="displayName">Username</div>
</div>
</form>
<header class="header">
    <a href="#" class="logo">
        <img src="images/logo.png" alt="">
    </a>
    <nav class="navbar">
        <a href="#home">home</a>
        <a href="#about">about</a>
        <a href="#menu">menu</a>
        <a href="#products">products</a>
        <a href="#feature">feature</a>
        <a href="#contact">contact</a>
        <a href="#blogs">blogs</a>
    </nav>
    <div class="icons">
        <div class="fas fa-search" id="search-btn"> </div>
        <div class="fas fa-shopping-cart" id="cart-btn"></div>
        <div class="fas fa-user" id="user-btn" ></div>
        <div class="fas fa-bars" id="menu-btn"></div>
    </div>
    <div class="search-form">
        <input type="search" id="search-box" placeholder="search here...">
        <label for="search-box" class="fas fa-search"></label>
    </div>
    <div class="cart-items-container" id="cart-form"> 
        <div class="cart-item" id="boxRenderCart">
          

        </div>
        <a href="#" id="checkoutNow" class="btn">checkout now</a>
    </div>
    <div class="profile">
        <div class="profile-sidebar">
            <div class="profile-userpic">
                <img src="/images/user.png" class="img-responsive" alt="">
            </div>
            <div class="profile-usertitle-name">
                User name
            </div>
        </div>
        <div class="profile-usermenu">
            <div class="menu-icon-user">
                <i class="fa-solid fa-circle-info"></i>
                <div>Acount information</div>
            </div>
            <div class="menu-icon-user">
                <i class="fa-solid fa-gears"></i>
                <div id="setting">Settings</div> 
            </div>
            <div class="menu-icon-user">
                <i class="fa-solid fa-question"></i>
                <div id="help" >Help</div>
            </div>
            <div class="menu-icon-user">
                <i  class="fa-solid fa-right-from-bracket" ></i>
                <div id="logout">Logout</div>
            </div>
        </div>
    </div>

</header>
<section class="home" id="home">
    <div class="content">
        <h3>a special morning moment</h3>
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit..</p>
        <a href="#menu" class="btn">get yours now</a>
    </div>
</section>
<section class="about" id="about">
    <h1 class="heading"> <span>about</span> us </h1>
    <div class="row">
        <div class="image">
            <img src="/images/espresso-19212_640.jpg" alt="">
        </div>
        <div class="content">
            <h3>what makes our coffee special?</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. </p>
            <p> Odit amet enim quod veritatis, nihil voluptas culpa! Neque consectetur obcaecati sapiente?</p>
            <a href="#" class="btn">learn more</a>
        </div>
    </div>
</section>
<section class="menu" id="menu">
    <h1 class="heading"> our <span>menu</span> </h1>
    <div class="box-container" id="showMenu">       
    </div>
</section>
<section class="products" id="products">
    <h1 class="heading"> our <span>products</span> </h1>
    <div class="box-container" id="show">   
    </div>
</section>  
<section class="blogs" id="blogs">
    <h1 class="heading"> our <span>blogs</span> </h1>
    <div class="box-container" id="showBlog" >
        <div class="box">
            <div class="image">
                <img src="images/blog-1.jpeg" alt="">
            </div>
            <div class="content">
                <a href="#" class="title">tasty and refreshing coffee</a>
                <span>by Hieu Le / 21st may, 2022</span>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Non, dicta.</p>
                <a href="#" class="btn">read more</a>
            </div>
        </div>
        <div class="box">
            <div class="image">
                <img src="images/blog-2.jpeg" alt="">
            </div>
            <div class="content">
                <a href="#" class="title">tasty and refreshing coffee</a>
                <span>by Gau Lua / 21st may, 2022</span>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Non, dicta.</p>
                <a href="#" class="btn">read more</a>
            </div>
        </div>
        <div class="box">
            <div class="image">
                <img src="images/blog-3.jpeg" alt="">
            </div>
            <div class="content">
                <a href="#" class="title">tasty and refreshing coffee</a>
                <span>by Gau Lua / 21st may, 2022</span>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Non, dicta.</p>
                <a href="#" class="btn">read more</a>
            </div>
        </div>     
    </div>
</section>`
;
components.cartPage = `    <form class="top-header">
<div class="address">
    <i class="fa-solid fa-house"></i>
    <span>: 17 Le Loi, Tp. Thai Binh</span>
</div>
<div class="phoneNumber">
    <i class="fa-solid fa-phone"></i>
    <span>: 0123897482</span>
</div>
<div class="signInUp">
    <div id="displayName">Username</div>
</div>
</form>
<header class="header">
<a href="#" id="directHome" class="logo">
    <img src="images/logo.png" alt="">
</a>
<nav class="navbar">
    <a href="#home">home</a>
    <a href="#about">about</a>
    <a href="#menu">menu</a>
    <a href="#products">products</a>
    <a href="#feature">feature</a>
    <a href="#contact">contact</a>
    <a href="#blogs">blogs</a>
</nav>
<div class="icons">
    <div class="fas fa-shopping-cart" id="cart-btn"></div>
    <div class="fas fa-user" id="user-btn"></div>
    <div class="fas fa-bars" id="menu-btn"></div>
</div>
<div class="search-form">
    <input type="search" id="search-box" placeholder="search here...">
    <label for="search-box" class="fas fa-search"></label>
</div>
<div class="cart-items-container" id="cart-form">
    

</div>
<div class="profile">
    <div class="profile-sidebar">
        <div class="profile-userpic">
            <img src="/images/user.png" class="img-responsive" alt="">
        </div>
        <div class="profile-usertitle-name">
            User name
        </div>
    </div>
    <div class="profile-usermenu">
        <div class="menu-icon-user">
            <i class="fa-solid fa-circle-info"></i>
            <div>Acount information</div>
        </div>
        <div class="menu-icon-user">
            <i class="fa-solid fa-gears"></i>
            <div id="setting">Settings</div>
        </div>
        <div class="menu-icon-user">
            <i class="fa-solid fa-question"></i>
            <div id="help">Help</div>
        </div>
        <div class="menu-icon-user">
            <i class="fa-solid fa-right-from-bracket"></i>
            <div id="logout">Logout</div>
        </div>
    </div>
</div>

</header>
<div class="cart-container">
<div class="title-cart">
    <h1>CART</h1>
</div>
<div class="body-cart">
    <table class="table">
        <thead >
            <tr>
                <td class="col-produc">product</td>
                <td class="col-price">price</td>
                <td class="col-quatity">quantity</td>
                <td class="col-total">total</td>
            </tr>
        </thead>
        <tbody id="bodyCart">
            
        </tbody>         
    </table>
    <div class="coupon">
        <input type="text">
        <button>appy coupon</button>
    </div>
    <div class="cart-total">
        <span>cart total</span>
        <div class="shipping">
            <div class="ship-flex">
                <span>shipping</span>
                <h6>free shipping</h6>
            </div>
            <div class="ship-flex">
                <span>total</span>
                <div id="totalAmount">$agsd</div>
            </div>
        </div>
    </div>
    <div class="checkout-btn">
        <span> caculate shipping</span>
        <button id="checkout">proceed to checkout</button>
    </div>
</div>
    
</div>`;
