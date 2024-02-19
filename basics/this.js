
console.log(this);


// ++++++++++++++++++++++++++++++++++++ This  +++++++++++++++++++++++++++++++++++

// This talks about the current context in JS

const user = {
    username: "anandrjhns",
    price: 999,

    WelcomeMessage: function(){
        console.log(`${this.username} , welcome to website`);
        console.log(this);
    }

}

user.WelcomeMessage()
user.username = "Sam"
user.WelcomeMessage()

function One() {
        let username = "anandrjhns"
        console.log(this.username);
}
One()

// This is not to be used with functions.