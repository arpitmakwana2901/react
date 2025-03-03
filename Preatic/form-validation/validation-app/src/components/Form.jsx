import React, { useState } from "react";

const Form = () => {
    const [userData, setUserData] = useState({
        userName: "",
        email: "",
        password: "",
    });
    console.log(userData);
    return (
        <>
            <h1>Registration Form</h1>
            <div>
                <div>
                    <label htmlFor="uname">User Name:</label>
                    <input
                        type="text"
                        id="uname"
                        placeholder="Enter Your User Name"
                        value={userData.userName}
                        onChange={(event) =>
                            setUserData({ ...userData, userName: event.target.value })
                        }
                    />
                </div>

                <div>
                    <label htmlFor="email">Email:</label>
                    <input
                        type="email"
                        id="email"
                        placeholder="Enter Your Email"
                        value={userData.email}
                        onChange={(event) =>
                            setUserData({ ...userData, email: event.target.value })
                        }
                    />
                </div>

                <div>
                    <label htmlFor="password">Password:</label>
                    <input
                        type="password"
                        id="password"
                        placeholder="Enter Your Password"
                        value={userData.password}
                        onChange={(event) =>
                            setUserData({ ...userData, password: event.target.value })
                        }
                    />
                </div>
            </div>
        </>
    );
};

export default Form;
