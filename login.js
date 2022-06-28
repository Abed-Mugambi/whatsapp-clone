
document.getElementById("loginbtn").onclick = () => {

    alert('clicked')

    //get data from input
    let email = document.getElementById("Email").value;
    let password = document.getElementById("Password").value;


    firebase.auth().signInWithEmailAndPassword(email,password)
    .then((userCredential) => {

        alert('user is signed in')

        let user = userCredential.user;
        // let uid = user.uid;

        console.log(user)

        window.location.href = "home.html"

    }).catch((error) => {

        console.log(error.message);
    })

   
}
