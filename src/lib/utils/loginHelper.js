import { success } from "astro:schema";

function checkInput(formData) {

    const { email, password, remember } = formData;
    const result = {
        successful: false,
        message: ""
    }

    function updateResult(r, m, condition) {
        console.error(m);
        return { ...r, message: m, success: condition ? true : false }
    }
    
    // basic empty validation
    if (!email || !password) return updateResult(result, 'Email and password required');

    // basic email validation
    const validEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

    if (!validEmail) return updateResult(result, 'Invalid email format');

    // basic password length
    if (password.length < 8) return updateResult(result, 'Password too short');

    // prevent absurd payload spam
    if (
        email.length > 120 ||
        password.length > 200
    ) {
        console.error('Input too long');
        return updateResult(result, 'Input too long')
    }

    // success
    return updateResult(result, "Attempting to Log into Account...", true)
}



export default async function loginHelper(form) {

    const email = form.email.value.trim();
    const password = form.password.value.trim();
    const remember = form.remember.checked;

    // check for valid inputs
    return checkInput({ email, password, remember })



}