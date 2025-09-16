// scripting
// section 1
const input1 = document.getElementById('input1');
const button1 = document.getElementById('btn1');
const display1 = document.getElementById('eventPara1');

button1.addEventListener('click', function(event){
     display1.textContent =  ` ${input1.value}`;
     if(input1.value === ''){
        alert('Type something...........')
     }
});


// section 2

const dropbtn = document.getElementById('dropbtn');
const dropmenu = document.getElementById('dropmenu');

dropbtn.addEventListener('click', function(){

    if(dropmenu.style.display === 'block'){
        dropbtn.style.display = 'none';
    }

    else {
        dropmenu.style.display = 'block';
    }
});

window.addEventListener('click', (event) => {
    if(!dropbtn.contains(event.target)&& !dropmenu.contains(event.target)){
        dropmenu.style.display = 'none';
    }
});



const toggle = document.getElementById('toggle');
const body = document.getElementById('Interactive');

toggle.addEventListener('click', function(){
    body.style.color = 'white';
    body.style.backgroundColor = 'red';
})

toggle.addEventListener('mouseover', function(){
    body.style.backgroundColor = 'aliceblue';
});


// section 3

const name = document.getElementById('name');
const email = document.getElementById('email');
const password = document.getElementById('password');
const output = document.getElementById('p1');
const output1 = document.getElementById('pmail');
const output2 = document.getElementById('pass');

const  form = document.getElementById('myForm');

  

form.addEventListener('submit', function(e){

     e.preventDefault();
     
    if(name.value.trim() === '' || email.value.trim() === '' || password.value.trim() === ''){
            alert('❌ All fields are required!');
           
    }

    const emailPattern  = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if(!emailPattern.test(email.value)){
        output1.textContent = '⚠️ Enter a valid email!';
        output1.style.color = 'red';
    }

    const passwordPattern =  /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    if(!passwordPattern.test(password.value)){
        output2.textContent = ' Password must be at least 8 characters long and include uppercase, lowercase, number and special character.';
          output2.style.color = 'red';

    }

    else {
        alert( '✅ Forms submitted successfully');
    }
})

