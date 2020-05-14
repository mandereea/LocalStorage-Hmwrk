//set a cookie on a document
const storage = window.localStorage;
storage.setItem('theme','blue')

//read all cookies
console.log("window local storage is", window.localStorage);


//get the one we need
let languageCookie = window.localStorage.getItem('language');

//add two radio buttons with two available languages
const buttonsWrapper = document.createElement('div');
buttonsWrapper.innerHTML = `ro-Ro
                            <input type="radio"  name="language" value="ro-Ro"/>
                            en-En
                            <input type="radio"  name="language" value="en-En"/>`
document.body.appendChild(buttonsWrapper);

//getting the radio buttons in an array
const radioBtns = document.getElementsByName('language');

//fct for setting the languageCookie on click event
function setLanguageCookie(){

    radioBtns.forEach(buton => {
       //pre-set language based on languageCookie
        if(buton.value === languageCookie){
            buton.checked = true;
        }

        //set new value for languageCookie
        buton.addEventListener('click', event => {
            window.localStorage.setItem('language',`${event.target.value}`);
            console.log(" new window local storage is", window.localStorage);
        })
    })
}
setLanguageCookie();