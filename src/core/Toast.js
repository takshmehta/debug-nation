import React from "react";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function To() {
  const notify = () => toast("Message Sent !");

  return (
    <div>
      <button onClick={notify}>Notify !</button>
      <ToastContainer />
    </div>
  );
}
export default To;
