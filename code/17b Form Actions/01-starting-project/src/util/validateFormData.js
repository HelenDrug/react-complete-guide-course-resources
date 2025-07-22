import {hasMinLength, isEmail, isEqualToOtherValue, isNotEmpty} from "./validation.js";

export const validateFormData = (formData) => {
    const {email, password, confirmPassword, firstName, lastName, role, terms, acquisition} = formData
    let errors = []
    if (!isEmail(email)) {
        errors.push('Email is not valid')
    }
    if (!isNotEmpty(password) || !hasMinLength(password, 6)) {
        errors.push('Please provide a password with at least 6 characters')
    }
    if (!isEqualToOtherValue(password, confirmPassword)) {
        errors.push('Passwords do not match')
    }
    if (!isNotEmpty(firstName) || !isNotEmpty(lastName)) {
        errors.push('First name and last name are required')
    }
    if (!isNotEmpty(role)) {
        errors.push('Please select a role')
    }
    if (!terms) {
        errors.push('Please accept the terms and conditions')
    }
    if (acquisition.length === 0) {
        errors.push('Please select at least one acquisition channel')
    }
    return { errors };
}