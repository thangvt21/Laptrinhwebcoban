window.addEventListener('load',()=>{
    const loginBtn = document.getElementsByClassName('loginBtn')[0];
    const loginForm = document.getElementsByClassName('loginForm')[0];
    const loginUsername = document.getElementById('loginUsername');
    const loginPassword = document.getElementById('loginPassword');
    const usernameError = document.getElementsByClassName('usernameError')[0];
    const passwordError = document.getElementsByClassName('passwordError')[0];
    const brand = document.getElementsByTagName('h1')[0];

    loginUsername.onkeyup= function(e) {
        usernameError.style.display = 'none';
        if(!e.target.classList.contains('filled')){
            e.target.classList.add('filled');
        }
        if(e.target.value === ''){
            e.target.classList.remove('filled');
        }
    }
    loginPassword.onkeyup= function(e) {
        passwordError.style.display = 'none';
        if(!e.target.classList.contains('filled')){
            e.target.classList.add('filled');
        }
        if(e.target.value === ''){
            e.target.classList.remove('filled');
        }
    }

    var rule = {
        username: {
            handlefunc : function (params) {
                if(loginUsername.value === ''){
                    return false;
                }
                return true;
            },
            handletext :'please enter username',
            handleobj:usernameError,
        },
        password:{
            handlefunc : function (params) {
                if(loginPassword.value === ''){
                    return false;
                }
                return true;
            },
            handletext :'password is invalid',
            handleobj :passwordError,
        }
    }
    loginForm.addEventListener('submit',(e)=>{
        e.preventDefault();
        if(Validation(rule)){
            e.target.submit();
        }
    })
    
})
function Validation(rule){
    let isValid = true;
    Object.keys(rule).map((v)=>{
        if(!rule[v].handlefunc()){
            isValid = false;
            rule[v].handleobj.style.display='block';
            // rule[v].handleobj.innerText=rule[v].handletext;
        }
    })
    return isValid;
}
