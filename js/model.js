const model = {};
const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyDp8FJSQ24S3IE-S1D_cUNffxcdq5hLuI4",
    authDomain: "coffe-template.firebaseapp.com",
    projectId: "coffe-template",
    storageBucket: "coffe-template.appspot.com",
    messagingSenderId: "282918233101",
    appId: "1:282918233101:web:b19b6512f5d910cbd42144"
})

const db = firebaseApp.firestore();
const auth = firebaseApp.auth();
// call firebase
model.register = async (registerInfo) => {
    try {
        await auth.createUserWithEmailAndPassword(registerInfo.email, registerInfo.password)
        .then((user) => {
            auth.currentUser.updateProfile({
              displayName: `${registerInfo.userName}`,
            })
              .then(() => {
                // firebase.auth().currentUser.sendEmailVerification();
                
              });
          })
          .catch((error) => {
            document.getElementById('form-error').innerText = error.message;
          });
        view.setActiveScreen("login");
        //    auth.currentUser.sendEmailVerification();

    } catch (error) {
        alert(error.message);
    }
}
model.login = async (registerInfo) => {
    try {
        await auth.signInWithEmailAndPassword(registerInfo.email, registerInfo.password);

        view.setActiveScreen("homeLogged");
        
    } catch (error) {
        view.displayMessage('form-error', "Incorrect email or password");    
    };
}
model.logout = () =>{
  try {
    auth.signOut()
  } catch (error) {
    console.log(error.message);
  }
}
model.addToCart = async (obj)=>{ // xu li id
  await db.collection("cart").doc(auth.currentUser.uid).get() //truy den db ktra da co san pham chua
  // voi collection gan' = " cart "
  .then((doc)=>{ // ktra ton tai truong` doc:
    if(doc.exists){ // neu doc ton tai thi se xu li field 
      // console.log("hihi");
      let result = doc.data().products;// tao result = du lieu cua field product
      let check = false // tao 1 dieu kien kiem tra 
      for ( let i in result){ // kiem tra  trong array result 
        if(result[i].id == obj.id){ // neu value id trong field trung` id cua san pham ma nguoi dung click
          result[i].amount +=1;  // id san pham do cap nhat + 1
          check = true; // de xet dieu kien gan len db
        }
      }
      if(check == true){
        db.collection('cart').doc(auth.currentUser.uid)
        .update({
          products: result
        })
        .then(()=>{
          console.log("update amount okkk");
        })
      }else{
        db.collection('cart').doc(auth.currentUser.uid)
        .update({
          products:firebase.firestore.FieldValue.arrayUnion({
            
            amount: 1,
            ...obj
          })
        })
        .then(()=>{
          console.log("update product okkk");
        })
      }
    }else{// neu doc khong ton tai -> set luon cho doc
      console.log("12345");
      db.collection("cart").doc(auth.currentUser.uid) // cu phap truy van set field 
      .set({
        products:[ // tao field  ten product voi kieu du lieu la array 
          {
            amount: 1,
            ...obj
          }
        ]
      })
      .then(()=>{
        console.log("okkkk");
      })
      .catch((error)=>{
        console.log(error.message);
      })
    }
  })
  .catch((error)=>{
    console.log(error.message);
  })
}
model.getDataFromCart = async ()=>{
  try{
    db.collection('cart')
    .doc(auth.currentUser.uid)
    .onSnapshot((doc)=>{
      if(doc.exists){
        let data = doc.data().products;
        view.renderProductCart(data);
      }
    })
  }
  catch(err){
    console.log(err.message);
  }
  // try {
  //   let res = db.collection("cart").doc(auth.currentUser.uid)
  // let result = await res.onSnapshot();
  // let data = result.data().products;
  // return data;
  // } catch (error) {
  //   console.log(error.message);
  // }
}
model.callData = async (id)=>{
  let res = await db.collection("cart")
   .doc(auth.currentUser.uid)
    .get()
    let data = res.data().products
    console.log(data);
    view.renderInCart(data)
}
