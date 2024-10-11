import React, { useState } from 'react';

const Gender = () => {
    const [gender, setGender] = useState('');

    const handleChange = (event) => {
        setGender(event.target.value);
    };

    return (
        <div>
            <h2>Select Gender</h2>
            <label>
                <input
                    type="radio"
                    value="Male"
                    checked={gender === 'Male'}
                    onChange={handleChange}
                />
                Male
            </label>
            <label>
                <input
                    type="radio"
                    value="Female"
                    checked={gender === 'Female'}
                    onChange={handleChange}
                />
                Female
            </label>
            
            <div>
                <h3>Selected Gender: {gender}</h3>
            </div>
        </div>
    );
};

export default Gender;
