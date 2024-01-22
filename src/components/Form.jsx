/* eslint-disable react/prop-types */
import Button from "./Button";
import { useState } from "react";
import InputField from "./Input";

const FormModal = ({ movie, setSuccessBook }) => {
  const [userInput, setUserInput] = useState({
    username: "",
    email: "",
    password: "",
  });

  // Get User Input
  const getUserInput = (field) => (e) => {
    setUserInput((prevInput) => ({
      ...prevInput,
      [field]: e.target.value,
    }));
  };

  const handleSubmitForm = (e) => {
    e.preventDefault();
    // Save UserData to Storage
    localStorage.setItem(movie.id, JSON.stringify(userInput));
    // Trigger success book state in the parent component
    setSuccessBook(true);
    // Close the modal
    document.getElementById("formmodal").close();
  };

  return (
    <div className="mt-2">
      <Button
        className="btn btn-primary"
        click={() => document.getElementById("formmodal").showModal()}
      >
        Book Show
      </Button>
      <dialog id="formmodal" className="modal">
        <form className="modal-box" onSubmit={handleSubmitForm}>
          <h3 className="font-bold text-lg">Book Show: {movie.name}</h3>
          <div className="py-4">
            <InputField
              label={"Enter Your Name"}
              type={"text"}
              placeholder={"Enter Your Name"}
              value={userInput.username}
              onChange={getUserInput("username")}
            />
            <InputField
              label={"Enter Your Email"}
              type={"email"}
              placeholder={"Enter Your email address"}
              value={userInput.email}
              onChange={getUserInput("email")}
            />
            <InputField
              label={"Enter password"}
              type={"password"}
              placeholder={"Enter Your Password"}
              value={userInput.password}
              onChange={getUserInput("password")}
            />
          </div>
          <div className="modal-action flex justify-between">
            <Button
              className="btn bg-red-500 text-white hover:bg-red-600"
              type="submit"
            >
              Book Show
            </Button>
            <Button
              className="btn"
              click={() => document.getElementById("formmodal").close()}
            >
              Close
            </Button>
          </div>
        </form>
      </dialog>
    </div>
  );
};

export default FormModal;
