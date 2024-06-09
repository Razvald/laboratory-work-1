import React, { useState } from "react";

const ProfileEditForm = () => {
   const [firstName, setFirstName] = useState("");
   const [middleName, setMiddleName] = useState("");
   const [lastName, setLastName] = useState("");
   const [birthDate, setBirthDate] = useState("");
   const [address, setAddress] = useState("");
   const [errors, setErrors] = useState({});

   const validate = () => {
      const newErrors = {};
      if (!firstName) {
         newErrors.firstName = "Required";
      }

      if (!middleName) {
         newErrors.middleName = "Required";
      }

      if (!lastName) {
         newErrors.lastName = "Required";
      }

      return newErrors;
   };

   const handleSubmit = (e) => {
      e.preventDefault();
      const newErrors = validate();
      if (Object.keys(newErrors).length === 0) {
         console.log({ firstName, middleName, lastName, birthDate, address });
      } else {
         setErrors(newErrors);
      }
   };

   return (
      <form onSubmit={handleSubmit}>
         <div>
            <label>First Name</label>
            <input
               type="text"
               value={firstName}
               onChange={(e) => setFirstName(e.target.value)}
            />
            {errors.firstName && <span>{errors.firstName}</span>}
         </div>
         <div>
            <label>Middle Name</label>
            <input
               type="text"
               value={middleName}
               onChange={(e) => setMiddleName(e.target.value)}
            />
            {errors.middleName && <span>{errors.middleName}</span>}
         </div>
         <div>
            <label>Last Name</label>
            <input
               type="text"
               value={lastName}
               onChange={(e) => setLastName(e.target.value)}
            />
            {errors.lastName && <span>{errors.lastName}</span>}
         </div>
         <div>
            <label>Birth Date</label>
            <input
               type="date"
               value={birthDate}
               onChange={(e) => setBirthDate(e.target.value)}
            />
            {errors.birthDate && <span>{errors.birthDate}</span>}
         </div>
         <div>
            <label>Address</label>
            <input
               type="text"
               value={address}
               onChange={(e) => setAddress(e.target.value)}
            />
         </div>
         <div>
            <button type="submit">Submit</button>
         </div>
      </form>
   );
};

export default ProfileEditForm;
