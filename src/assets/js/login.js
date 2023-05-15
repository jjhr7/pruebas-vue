$(function(){
    // Inputs
    var email = $('#email').val();
    var password = $('#password').val();

    // Events
    $('#email').on('input', () => {
        email = $('#email').val();
    })

    $('#password').on('input', () => {
        password = $('#password').val();
    })

    $('#login').on('click', (e) => {
        e.preventDefault();
        let empties = false;
        
        if(email == ''){
            empties = true;
        }

        if(password == ''){
            empties = true;
        }

        if(!empties){
            initSesion()
        }
    })

    // Functions
    const initSesion = () => {
        const url = '/api/v1/login';
        const params = {
            name: email,
            password: password
        }
        
        fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                "Accept": "application/json, text-plain, */*",
                'X-Requested-With': 'XMLHttpRequest',
            },
            credentials: "same-origin",
            body: JSON.stringify(params)
        })
        .then(res => {
            console.log('res', res)
        })
        .catch(err => {
            console.log('err', err)
        })
    }
})