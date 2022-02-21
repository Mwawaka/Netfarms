import React from "react";

function Form() {
  return (
    <div className="form" id="register">
      
      <h1 className="card--title">Registration for<span id="spawn2"> Updates</span></h1>
      <div className="form-value">
        <form action="">
          <input type="text" id="fname" placeholder="Name..." />
      
          <input type="email" id="email_id" placeholder="Email..." />
          <input type="submit" value="Submit" />
        </form>
      </div>
    </div>
  );
}

export default Form;
