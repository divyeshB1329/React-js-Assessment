import { useState } from 'react';

const useValidation = ({ email, firstName, password, retypePassword, lastName, phone, address, town, region, postcode, country }) => {
    const [errors, setErrors] = useState({});

    // Email Validation using Regular Expression
    const validateEmail = (email) => {
        const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        return regex.test(email);
    };

    // Username Length Validation
    const validateLength = (name) => {
        return name.length <= 4;
    };

    // Function to validate the entire form
    const isValid = () => {
        let formErrors = {};

        // Check if required fields are not empty
        if (!email) formErrors.email = 'Email is required.';
        if (!firstName) formErrors.firstName = 'First Name is required.';
        if (!lastName) formErrors.lastName = 'Last Name is required.';
        if (!password) formErrors.password = 'Password is required.';
        if (!retypePassword) formErrors.retypePassword = 'Retype Password is required.';
        if (!phone) formErrors.phone = 'Phone Number is required.';
        if (!address) formErrors.address = 'Address is required.';
        if (!town) formErrors.town = 'Town is required.';
        if (!region) formErrors.region = 'Region is required.';
        if (!postcode) formErrors.postcode = 'Postcode/Zip is required.';
        if (!country) formErrors.country = 'Country is required.';

        // Validate email format
        if (email && !validateEmail(email)) {
            formErrors.email = 'Please enter a valid email.';
        }

        // Validate first name length
        if (firstName && firstName.length > 4) {
            formErrors.firstName = 'First Name must be less than or equal to 4 characters.';
        }

        // Check if passwords match
        if (password && retypePassword && password !== retypePassword) {
            formErrors.password = 'Passwords do not match.';
        }

        setErrors(formErrors);
        return Object.keys(formErrors).length === 0;
    };

    return {
        validateEmail,
        validateLength,
        isValid,
        errors,
    };
};

export default useValidation;
