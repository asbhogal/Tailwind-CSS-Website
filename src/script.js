// EMAIL VALIDATION ON A PRODUCTION BUILD SHOULD ALWAYS BE PERFORMED ON SERVER-SIDE AS WELL AS CLIENT-SIDE (IN CASE BROWSER HAS TURNED JAVASCRIPT OFF). FOR THIS PROJECT, JAVASCRIPT IS LEVERAGED FOR LOCAL VALIDATION ONLY.

const 	emailAddressInput = document.getElementById('email-address-input'),
		emailAddressSubmitBtn = document.getElementById('submit-email-address'),
		responseMessage = document.getElementById('response-message'),
		regex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

// FUNCTION WHICH CHECKS IF AN EMAIL IS ENTERED 

function checkInputPresent (email) {
	return (!emailAddressInput.value) ? (responseMessage.innerHTML = "Please enter an email address", emailAddressInput.style.borderColor = "red", emailAddressInput.style.outlineColor = "red") 
		: toLowerCase(email);
}

// FUNCTION WHICH CONVERTS ALL THE CHARACTERS IN THE EMAIL ADDRESS --> LOWER CASE

function toLowerCase () {
	convertedEmail = String(emailAddressInput.value).toLowerCase();
	validateEmail();
}

// FUNCTION WHICH VALIDATES THE EMAIL ENTERED

function validateEmail() {
	return (regex.test(emailAddressInput.value) == true) ? (responseMessage.innerHTML = "Thank you for signing up!", emailAddressInput.value = "", emailAddressInput.style.borderColor = "green", emailAddressInput.style.outlineColor = "green")
		: (responseMessage.innerHTML = "Please insert a valid email", emailAddressInput.style.borderColor = "red", emailAddressInput.style.outlineColor = "red")
}

// TRIGGER WHICH CALLS THE FIRST FUNCTION ON 'SUBMIT' BUTTON CLICK

emailAddressSubmitBtn.addEventListener('click', () => {
	email = emailAddressInput;
	checkInputPresent(email);
	return responseMessage;
});

// TRIGGER WHICH CALLS THE FIRST FUNCTION ON 'ENTER' KEY IN INPUT

emailAddressInput.onkeydown = function(e) {
	if(e.keyCode == 13) {
		email = emailAddressInput;
		checkInputPresent(email);
		return responseMessage;
	}
}

// TESTIMONIAL SLIDER

let swiper = new Swiper(".testimonial-slider", {
    slidesPerView: 4,
    spaceBetween: 30,
    slidesPerGroup: 1,
    loop: true,
    centerSlide: 'true',
    loopFillGroupWithBlank: false,
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
    },

    pagination: {
        el: ".swiper-pagination",
        type: "bullets",
        dynamicBullets: true,
        clickable: true,
        dynamicMainBullets: 4,
    },

    breakpoints: {
        0: {
            slidesPerView: 1,
        },
        375: {
            slidesPerView: 1,
        },
        768: {
            slidesPerView: 2,
        },
        976: {
            slidesPerView: 3,
        },
        1440: {
            slidesPerView: 4
        }
    }
});