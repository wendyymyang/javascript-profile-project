//ACCOUNT TYPE

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

//CHANGE EMAIL

var changeBtnEmail = document.getElementsByClassName('change-item')[0];

changeBtnEmail.addEventListener('click', function() {
    
    var profContainer = this.parentElement;
    var changeContainer = profContainer.children[1];
    var currentInput = changeContainer.children[0];
    var changeForm = changeContainer.children[1];

    if (changeForm.style.height == 0) {
        Object.assign(changeForm.style, {
            height: 'auto',
            // overflow: 'hidden'
        });
        currentInput.style.display = 'none';
    }
});

var cancelEmail = document.getElementsByClassName('cancel')[0];
var cancelParent = cancelEmail.parentElement;

cancelEmail.addEventListener('click', function() {
    Object.assign(cancelParent.style, {
        height: '0',
        overflow: 'hidden'
    })
});

//CHANGE NAME

var changeBtnName = document.getElementsByClassName('change-item')[1];

changeBtnName.addEventListener('click', function() {
    
    var profContainer = this.parentElement;
    var changeContainer = profContainer.children[1];
    var currentInput = changeContainer.children[0];
    var changeForm = changeContainer.children[1];

    if (changeForm.style.height == 0) {
        Object.assign(changeForm.style, {
            height: 'auto',
            // overflow: 'hidden'
        });
        currentInput.style.display = 'none';
    }
});

var cancelEmail = document.getElementsByClassName('cancel')[1];
var cancelParent = cancelEmail.parentElement;

cancelEmail.addEventListener('click', function() {
    Object.assign(cancelParent.style, {
        height: '0',
        overflow: 'hidden'
    })
});

//CHANGE NAME

var changeBtnPassword = document.getElementsByClassName('change-item')[2];

changeBtnPassword.addEventListener('click', function() {
    
    var profContainer = this.parentElement;
    var changeContainer = profContainer.children[1];
    var currentInput = changeContainer.children[0];
    var changeForm = changeContainer.children[1];

    if (changeForm.style.height == 0) {
        Object.assign(changeForm.style, {
            height: 'auto',
            // overflow: 'hidden'
        });
        currentInput.style.display = 'none';
    }

    // } else {
    //     Object.assign(changeForm.style, {
    //         height: 'auto',
    //     });
    //     currentInput.style.display = 'none';
    // }
});

var cancelEmail = document.getElementsByClassName('cancel')[2];
var cancelParent = cancelEmail.parentElement;

cancelEmail.addEventListener('click', function() {
    Object.assign(cancelParent.style, {
        height: '0',
        overflow: 'hidden'
    })
});

//POST REQUEST

// var xhr = new XMLHttpRequest();
// var url = /* URL */;
// var params = ;

// xhr.open('POST', url, true);

// xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
// xhr.setRequestHeader('Content-length', params.length);
// xhr.setRequestHeader('Connection', 'close');

// xhr.onreadystatechange = function () {
//     if (xhr.readyState == 4 && xhr.status == 200) {
//         alert(xhr.responseText);
//     }
// };

// xhr.send(params);

