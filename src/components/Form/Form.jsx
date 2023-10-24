import React from "react";

export const Form = () => {
  return (
    <>
      <form>
        <label htmlFor="firstName">First Name</label>
        <input type="text" id="firstName" />
        <label htmlFor="familyName">Family Name</label>
        <input type="text" id="familyName" />
      </form>
    </>
  );
};
