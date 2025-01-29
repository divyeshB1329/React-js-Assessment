import React, { useState } from 'react';
import useValidation from './useValidation'; // Custom hook for validation

const RegistrationForm = () => {
    // State variables for form fields
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [retypePassword, setRetypePassword] = useState('');
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [phone, setPhone] = useState('');
    const [address, setAddress] = useState('');
    const [town, setTown] = useState('');
    const [region, setRegion] = useState('');
    const [postcode, setPostcode] = useState('');
    const [country, setCountry] = useState('');

    // Using the custom validation hook and passing values for validation
    const { validateEmail, validateLength, isValid, errors } = useValidation({
        email,
        firstName,
        password,
        retypePassword
    });

    // Form submission handler
    const handleSubmit = (e) => {
        e.preventDefault();
        if (isValid()) {
            console.log('Form Submitted!');
            console.log({ email, password, retypePassword, firstName, lastName, phone, address, town, region, postcode, country });
        } else {
            console.log('Form has invalid data!');
        }
    };

    return (
        <>
            <div className="form-container">
                <h2>Register here</h2>
                <h1>USER REGISTRATION</h1>
                <p>Field marked <span style={{ color: "red" }}>*</span> are required</p>
                <form onSubmit={handleSubmit}>
                    <table>
                        <tbody>
                            <tr>
                                <td><label htmlFor="email">Email <span className="required">*</span></label></td>
                                <td>
                                    <input
                                        type="email"
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                        required
                                    />
                                    {errors.email && <span>{errors.email}</span>}
                                </td>
                            </tr>

                            <tr>
                                <td><label htmlFor="password">Password <span className="required">*</span></label></td>
                                <td>
                                    <input
                                        type="password"
                                        value={password}
                                        onChange={(e) => setPassword(e.target.value)}
                                        required
                                    />
                                </td>
                            </tr>

                            <tr>
                                <td><label htmlFor="retypePassword">Retype Password <span className="required">*</span></label></td>
                                <td>
                                    <input
                                        type="password"
                                        value={retypePassword}
                                        onChange={(e) => setRetypePassword(e.target.value)}
                                        required
                                    />
                                    {password !== retypePassword && <span>Passwords do not match.</span>}
                                </td>
                            </tr>

                            <tr>
                                <td><label htmlFor="firstName">First Name <span className="required">*</span></label></td>
                                <td>
                                    <input
                                        type="text"
                                        value={firstName}
                                        onChange={(e) => setFirstName(e.target.value)}
                                        required
                                    />
                                    {firstName && firstName.length > 4 && <span>First Name must be 4 characters or less.</span>}
                                </td>
                            </tr>

                            <tr>
                                <td><label htmlFor="lastName">Last Name <span className="required">*</span></label></td>
                                <td>
                                    <input
                                        type="text"
                                        value={lastName}
                                        onChange={(e) => setLastName(e.target.value)}
                                        required
                                    />
                                </td>
                            </tr>

                            <tr>
                                <td><label htmlFor="phone">Phone Number <span className="required">*</span></label></td>
                                <td>
                                    <input
                                        type="text"
                                        value={phone}
                                        onChange={(e) => setPhone(e.target.value)}
                                        required
                                    />
                                </td>
                            </tr>

                            <tr>
                                <td><label htmlFor="address">Address <span className="required">*</span></label></td>
                                <td>
                                    <input
                                        type="text"
                                        value={address}
                                        onChange={(e) => setAddress(e.target.value)}
                                        required
                                    />
                                </td>
                            </tr>

                            <tr>
                                <td><label htmlFor="town">Town </label></td>
                                <td>
                                    <input
                                        type="text"
                                        value={town}
                                        onChange={(e) => setTown(e.target.value)}
                                        required
                                    />
                                </td>
                            </tr>

                            <tr>
                                <td><label htmlFor="region">Region <span className="required">*</span></label></td>
                                <td>
                                    <input
                                        type="text"
                                        value={region}
                                        onChange={(e) => setRegion(e.target.value)}
                                        required
                                    />
                                </td>
                            </tr>

                            <tr>
                                <td><label htmlFor="postcode">Postcode / Zip <span className="required">*</span></label></td>
                                <td>
                                    <input
                                        type="text"
                                        value={postcode}
                                        onChange={(e) => setPostcode(e.target.value)}
                                        required
                                    />
                                </td>
                            </tr>

                            <tr>
                                <td><label htmlFor="country">Country <span className="required">*</span></label></td>
                                <td>
                                    <input
                                        type="text"
                                        value={country}
                                        onChange={(e) => setCountry(e.target.value)}
                                        required
                                    />
                                </td>
                            </tr>
                            <tr>
                                <td></td>
                                <td><button type="submit" style={{ backgroundColor: 'green', color: 'white' }}>
                        Register
                    </button></td>
                            </tr>
                        </tbody>
                    </table>

                    
                </form>
            </div>
        </>
    );
};

export default RegistrationForm;
