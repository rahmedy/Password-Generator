let upperChar = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
let lowerChar = 'abcdefthijklmnopqrstuvwxyz';
let specialChar = '!@#$%^&<>*_+~`|}{[]:;?,./-=';
let numChar = '0123456789';


// Added  event listener to the button
document.getElementById('generate').addEventListener('click', generatePassword);

function generatePassword() {
	let passwordChar = '';
	let userPassword = '';

	// ask  user for character length
	var passL = prompt(
		'How many characters would you like your password to be? (please choose between 8 and 128 characters)'
	).trim();

	// check if the input is between 8 and 128
	if (passL >= 8 && passL <= 128) {
        // Confirm choices
        const numbers = confirm('Do you want numbers in the password ?');
        const special = confirm('Do you want special characters in the password ?');
        const uppercase = confirm('Do you want Uppercase letters in your password?');
		const lowercase = confirm('Do you want lowercase letters in your pasword?');
		
		

		// Concatenate strings if confirms are true
		if (lowercase) {
			passwordChar += lowerChar;
		}
		if (uppercase) {
			passwordChar += upperChar;
		}
		if (numbers) {
			passwordChar += numChar;
		}
		if (special) {
			passwordChar += specialChar;
		}

		// feedback if not choices are selected 
		if (!lowercase && !uppercase && !numbers && !special) {
			alert('You must choose at least one option!!');
			generatePassword();
			userPassword = '';
			return;
		}

		for (let i = 0; i < passL; i++) {
			userPassword += passwordChar.charAt(Math.floor(Math.random() * passwordChar.length));
		}

		// Add the new password to the html
		var yourPassword = document.getElementById('password');
		yourPassword.textContent = userPassword.replace('<', '&lt').replace('>', '&gt');
		document.getElementById('password').style.color = 'rgb(69, 69, 69)';
	} else {
		alert('You must choose a number between 8 and 128 characters!');
		generatePassword();
	}
}
