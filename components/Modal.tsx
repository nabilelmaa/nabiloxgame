"use client";
import React, { useState, ChangeEvent, FormEvent } from "react";

function Modal() {
  const [userName, setUserName] = useState<string>("");

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setUserName(e.target.value);
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Handle the form submission, you can use the userName state here
    console.log("User entered name:", userName);
    // Close the modal after handling the submission
  };

  return (
    <dialog id="my_modal_3" className="modal">
      <div className="modal-box">
        <form onSubmit={handleSubmit}>
          <button
            type="button"
            className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
          >
            ✕
          </button>
          <h3 className="font-bold text-lg">Hello!</h3>
          <p className="py-4">Press ESC key or click on ✕ button to close</p>
          <label htmlFor="userName" className="block mb-2 text-sm font-semibold">
            Enter your name:
          </label>
          <input
            type="text"
            id="userName"
            name="userName"
            value={userName}
            onChange={handleInputChange}
            className="border p-2 rounded-md w-full"
            placeholder="Your Name"
          />
          <button type="submit" className="mt-4 bg-blue-500 text-white p-2 rounded-md">
            Submit
          </button>
        </form>
      </div>
    </dialog>
  );
}

export default Modal;
