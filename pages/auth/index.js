import React from "react";
import User from "../../Components/User";

const authIndexPage = (props) => (
  <div>
    <h1>Auth Index Page - {props.appName}</h1>
    <User name="Aadi Zee" age="24"></User>
  </div>
);

authIndexPage.getInitialProps = (context) => {
  console.log(context);
  const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({ appName: "Super App" });
    }, 1000);
  });
  return promise;
};

export default authIndexPage;
