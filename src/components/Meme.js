import React from 'react';

export default function Meme() {
  return (
    <main>
      <form className="form">
        <input
          className="form__text-field"
          type="text"
          placeholder="Shut up"
        ></input>
        <input
          className="form__text-field"
          type="text"
          placeholder="and take my money"
        ></input>
        <button className="form__submit-btn" type="submit" value="Submit">
          Get a new meme image 🖼
        </button>
      </form>
    </main>
  );
}
