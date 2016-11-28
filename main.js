//ACCOUNT TYPE

window.onload = function() {

    var buttonPremium = document.getElementsByClassName('premium')[0];
    var buttonFree = document.getElementsByClassName('free')[0];

    buttonPremium.addEventListener('mouseover', function() {
        Object.assign(buttonFree.style, {
            backgroundColor: 'white',
            borderColor: '#c0c0c0',
            color: '#666666'
        });

        this.innerHTML = 'Upgrade';
        Object.assign(this.style, {
            backgroundColor: '#ff9a16',
            borderColor: '#ff9a16',
            color: 'white'
        })
    });

    buttonPremium.addEventListener('mouseout', function() {
        Object.assign(buttonFree.style, {
            backgroundColor: '#91c789',
            borderColor: '#91c789',
            color: 'white'
        });

        this.innerHTML = 'Premium';
        Object.assign(this.style, {
            backgroundColor: 'white',
            borderColor: '#c0c0c0',
            color: '#666666'
        })
    });

    buttonFree.addEventListener('mouseover', function() {
        buttonPremium.innerHTML = 'Upgrade';
        Object.assign(buttonPremium.style, {
            backgroundColor: '#ff9a16',
            borderColor: '#ff9a16',
            color: 'white'
        });

        Object.assign(this.style, {
            backgroundColor: 'white',
            borderColor: '#c0c0c0',
            color: '#666666'
        })
    });

    buttonFree.addEventListener('mouseout', function() {
        buttonPremium.innerHTML = 'Premium';
        Object.assign(buttonPremium.style, {
            backgroundColor: 'white',
            borderColor: '#c0c0c0',
            color: '#666666'
        });

        Object.assign(this.style, {
            backgroundColor: '#91c789',
            borderColor: '#91c789',
            color: 'white'
        })
    });

    /*
    =====================================
    CHANGE EMAIL
    =====================================
    */
    
    var changeBtnEmail = document.getElementsByClassName('change-item')[0];

    changeBtnEmail.addEventListener('click', function() {
        
        var changeForm = this.parentElement.children[1].children[1];
        var currentInput = this.parentElement.children[1].children[0];

        if (changeForm.style.height == 0) {
            changeForm.classList.add('open');
            currentInput.style.display = 'none';
        }
    });

    var cancelEmail = document.getElementsByClassName('cancel')[0];

    cancelEmail.addEventListener('click', function(event) {
        event.preventDefault();

        var changeForm = this.parentElement.parentElement;
        var currentInput = this.parentElement.parentElement.parentElement.children[0];

        changeForm.classList.remove('open');
        currentInput.style.display = 'block';

    });

    /*
    =====================================
    CHANGE NAME
    =====================================
    */

    var changeBtnName = document.getElementsByClassName('change-item')[1];

    changeBtnName.addEventListener('click', function() {
        
        var changeForm = this.parentElement.children[1].children[1];
        var currentInput = this.parentElement.children[1].children[0];

        if (changeForm.style.height == 0) {
            changeForm.classList.add('open');
            currentInput.style.display = 'none';
        }
    });

    var cancelName = document.getElementsByClassName('cancel')[1];

    cancelName.addEventListener('click', function(event) {
        event.preventDefault();

        var changeForm = this.parentElement.parentElement;
        var currentInput = this.parentElement.parentElement.parentElement.children[0];

        changeForm.classList.remove('open');
        currentInput.style.display = 'block';

    });

    /*
    =====================================
    CHANGE PASSWORD
    =====================================
    */

    var changeBtnPassword = document.getElementsByClassName('change-item')[2];

    changeBtnPassword.addEventListener('click', function() {
        
        var changeForm = this.parentElement.children[1].children[1];
        var currentInput = this.parentElement.children[1].children[0];

        if (changeForm.style.height == 0) {
            changeForm.classList.add('open');
            currentInput.style.display = 'none';
        }
    });

    var cancelPassword = document.getElementsByClassName('cancel')[2];

    cancelPassword.addEventListener('click', function(event) {
        event.preventDefault();

        var changeForm = this.parentElement.parentElement;
        var currentInput = this.parentElement.parentElement.parentElement.children[0];

        changeForm.classList.remove('open');
        currentInput.style.display = 'block';
    });

    /*
    =====================================
    EMAIL POST
    =====================================
    */

    var emailSubmit = document.getElementsByClassName('submit')[0];
    // var url =  URL ;

    emailSubmit.addEventListener('click', function(event) {
        event.preventDefault();

        var newEmail = document.getElementById('confirm-email').value;
        var params = newEmail;
        var xhttp = new XMLHttpRequest();

        xhttp.onreadystatechange = function() {
            if (this.readyState == 4 && this.status == 200) {
                this.responseText;
            }
        };

        xhttp.open('POST', url, true);
        xhttp.setRequestHeaders('Content-type', 'application/x-www-form-urlencoded');
        xhttp.setRequestHeaders('X-CSRF-Token', '12345');
        xhttp.send(params);
    });

    /*
    =====================================
    NAME POST
    =====================================
    */

    var nameSubmit = document.getElementsByClassName('submit')[1];
    // var url =  URL ;

    nameSubmit.addEventListener('click', function(event) {
        event.preventDefault();

        var newFirst = document.getElementById('new-first').value;
        var newLast = document.getElementById('new-last').value;
        var params = newLast + ', ' + newFirst;

        var xhttp = new XMLHttpRequest();

        xhttp.onreadystatechange = function() {
            if (this.readyState == 4 && this.status == 200) {
                this.responseText;
            }
        };

        xhttp.open('POST', url, true);
        xhttp.setRequestHeaders('Content-type', 'application/x-www-form-urlencoded');
        xhttp.setRequestHeaders('X-CSRF-Token', '12345');
        xhttp.send(params);
    });

    /*
    =====================================
    NAME POST
    =====================================
    */

    var passwordSubmit = document.getElementsByClassName('submit')[2];
    // var url =  URL ;

    passwordSubmit.addEventListener('click', function(event) {
        event.preventDefault();

        var newPassword = document.getElementById('confirm-password').value;
        var params = newPassword;
        
        var xhttp = new XMLHttpRequest();

        xhttp.onreadystatechange = function() {
            if (this.readyState == 4 && this.status == 200) {
                this.responseText;
            }
        };

        xhttp.open('POST', url, true);
        xhttp.setRequestHeaders('Content-type', 'application/x-www-form-urlencoded');
        xhttp.setRequestHeaders('X-CSRF-Token', '12345');
        xhttp.send(params);
    });
};



