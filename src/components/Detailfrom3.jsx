import React from 'react';

const Detailfrom3 = () => {
    return (
        <div>
            <form>
                <h1>Enter your current job</h1>
                <input type="text" name="organization" placeholder='Enter organization name' />
                <input type="text" name="jobRole" placeholder='Enter your job role' />
                <input type="text" name="startYear" placeholder='Enter starting year' />
                <input type="email" name="email" placeholder='Email address' />
            </form>
        </div>
    );
};

export default Detailfrom3;
