let signUpTab = document.getElementById('signUpTab');
let logInTab = document.getElementById('logInTab');
let logInForm = document.getElementById('logInForm');
let signUpForm = document.getElementById('signUpForm');

logInForm.style.display = 'none';

signUpTab.addEventListener('click', ()=>{
    logInForm.style.display = 'none';
    signUpForm.style.display = '';
    logInTab.classList.add('logIn-unselected');
    signUpTab.classList.remove('signUp-unselected');
});

logInTab.addEventListener('click', ()=>{
    signUpForm.style.display = 'none';
    logInForm.style.display = '';
    signUpTab.classList.add('signUp-unselected');
    logInTab.classList.remove('logIn-unselected');
});

signUpForm.addEventListener('submit', (e)=>{
    e.preventDefault();
    let signUpName = document.getElementById('signUpName');
    let signUpEmail = document.getElementById('signUpEmail');
    let signUpPassword = document.getElementById('signUpPassword');
    let signUpPhone = document.getElementById('signUpPhone');
    
    let dataToBeAdded = {
            'name': signUpName.value,
            'email': signUpEmail.value,
            'password': signUpPassword.value,
            'phone': signUpPhone.value
    };

    let eduData = JSON.parse(localStorage.getItem('eduData'));
    if(eduData===null){
        eduData = [dataToBeAdded];
    }
    else{
        eduData.push(dataToBeAdded);
    }

    localStorage.setItem('eduData', JSON.stringify(eduData));
});

logInForm.addEventListener('submit', (e)=>{
    e.preventDefault();
    let eduData = JSON.parse(localStorage.getItem('eduData'));
    
    let logInEmail = document.getElementById('logInEmail');
    let logInPassword = document.getElementById('logInPassword');

    let error = document.getElementById('error');
    
    if(eduData===null){
        error.innerText = 'There is no record!';
    }
    else{
        eduData.forEach(element => {
            if(element['email']===logInEmail.value && element['password']===logInPassword.value){
                if(location.pathname==='/EduLoginSignUpCourses.html'){
                    location.replace('/courses.html');
                }
                else if(location.pathname==='/EduLoginSignUpEd-store.html'){
                    location.replace('/ed-store.html');
                }
            
            }
        });
    }
});