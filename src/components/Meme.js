import React, { useState } from 'react';
import memesData from '../memeData';

export default function Meme() {
  const [meme, setMeme] = useState({
    topText: '',
    bottomText: '',
    randomImage: 'https://i.imgflip.com/23ls.jpg',
  });

  const [allMemeImages, setAllMemeImages] = useState(memesData);

  function getMemeImage() {
    const memesArray = allMemeImages.data.memes;
    const random = Math.floor(Math.random() * memesArray.length);
    const url = memesArray[random].url;
    setMeme((prevMeme) => {
      return {
        ...prevMeme,
        randomImage: url,
      };
    });
  }

  return (
    <main>
      <div className="form">
        <input
          className="form__text-field"
          type="text"
          placeholder="Top Text"
        ></input>
        <input
          className="form__text-field"
          type="text"
          placeholder="Bottom Text"
        ></input>
        <button
          onClick={getMemeImage}
          className="form__submit-btn"
          type="submit"
          value="Submit"
        >
          Get a new meme image 🖼
        </button>
      </div>
      <img className="meme-image" src={meme.randomImage} alt="Meme"></img>
    </main>
  );
}
