import React, { useState } from "react";

const RegistrationForm = () => {
   const [username, setUsername] = useState("");
   const [password, setPassword] = useState("");
   const [confirmPassword, setConfirmPassword] = useState("");
   const [errors, setErrors] = useState({});

   const validate = () => {
      const newErrors = {};
      if (!username) {
         newErrors.username = "Required";
      } else if (username.length < 6 || username.length > 20) {
         newErrors.username = "Must be between 6 and 20 characters";
      } else if (!/^[a-zA-Z0-9]+$/.test(username)) {
         newErrors.username = "Only alphanumeric characters are allowed";
      }

      if (!password) {
         newErrors.password = "Required";
      }

      if (!confirmPassword) {
         newErrors.confirmPassword = "Required";
      } else if (confirmPassword !== password) {
         newErrors.confirmPassword = "Must match password";
      }

      return newErrors;
   };

   const handleSubmit = (e) => {
      e.preventDefault();
      const newErrors = validate();
      if (Object.keys(newErrors).length === 0) {
         console.log({ username, password });
      } else {
         setErrors(newErrors);
      }
   };

   return (
      <form onSubmit={handleSubmit}>
         <div>
            <label>Username</label>
            <input
               type="text"
               value={username}
               onChange={(e) => setUsername(e.target.value)}
            />
            {errors.username && <span>{errors.username}</span>}
         </div>
         <div>
            <label>Password</label>
            <input
               type="password"
               value={password}
               onChange={(e) => setPassword(e.target.value)}
            />
            {errors.password && <span>{errors.password}</span>}
         </div>
         <div>
            <label>Confirm Password</label>
            <input
               type="password"
               value={confirmPassword}
               onChange={(e) => setConfirmPassword(e.target.value)}
            />
            {errors.confirmPassword && <span>{errors.confirmPassword}</span>}
         </div>
         <div>
            <button type="submit">Submit</button>
         </div>
      </form>
   );
};

export default RegistrationForm;
