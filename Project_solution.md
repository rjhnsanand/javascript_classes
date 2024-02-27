# Projects related to DOM

# solution code

## Project colorChanger

To change the color of background when button is pressed.

```javascript

const buttons = document.querySelectorAll('.button')

    //console.log(buttons);

const body =  document.querySelector("body")


buttons.forEach(function(button) {

button.addEventListener( 'click', function(event){
    if (event.target.id  === 'grey') {
        body.style.backgroundColor = event.target.id
    }
    if (event.target.id  === 'white') {
        body.style.backgroundColor = event.target.id
    }
    if (event.target.id  === 'blue') {
        body.style.backgroundColor = event.target.id
    }
    if (event.target.id  === 'yellow') {
        body.style.backgroundColor = event.target.id
    }
} )

})

```

## project clock

To display Time on a banner

``` Javascript


let clock =  document.getElementById('clock')

// let date = new Date()

// console.log(date.toLocaleTimeString());

setInterval( function(){

    let date = new Date()
    clock.innerHTML = date.toLocaleTimeString()

} , 1000  )

```


## project BMI calculator

To calculate the BMI of a user

```Javascript



const form = document.querySelector('form')

form.addEventListener( 'submit', function(event){

    event.preventDefault()

    const height =   parseInt(document.querySelector('#height').value)
    const weight =   parseInt(document.querySelector('#weight').value)
    const result =   document.querySelector('#results')

    if (height === "" || height < 0 || isNaN(height)) {

        result.innerHTML = "Please enter a valid height"
    }else if(weight === ""  || weight < 0 || isNaN(weight)){

        result.innerHTML = "Please enter valid weight"
    }else{

        const bmi = (weight/(height*height)*10000).toFixed(2)
        console.log(bmi);
        result.innerHTML = `${bmi}`
    }




}  )



```


