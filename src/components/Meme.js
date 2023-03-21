import React, { useState, useEffect } from 'react';

export default function Meme() {
  const [meme, setMeme] = useState({
    topText: '',
    bottomText: '',
    randomImage: 'https://i.imgflip.com/23ls.jpg',
  });
  const [allMeme, setAllMeme] = useState([]);

  useEffect(() => {
    console.log('useEffect ran');
    fetch('https://api.imgflip.com/get_memes')
      .then((res) => res.json())
      .then((memeData) => setAllMeme(memeData.data.memes));
  }, []);

  function getMemeImage() {
    const random = Math.floor(Math.random() * allMeme.length);
    const url = allMeme[random].url;
    setMeme((prevMeme) => {
      return {
        ...prevMeme,
        randomImage: url,
      };
    });
  }

  function handleChange(e) {
    const { name, value } = e.target;
    setMeme((prevMeme) => ({
      ...prevMeme,
      [name]: value,
    }));
  }

  return (
    <main>
      <div className="form">
        <input
          className="form__text-field"
          type="text"
          placeholder="Top Text"
          onChange={handleChange}
          name="topText"
          value={meme.topText}
        />
        <input
          className="form__text-field"
          type="text"
          placeholder="Bottom Text"
          onChange={handleChange}
          name="bottomText"
          value={meme.bottomText}
        />
        <button
          onClick={getMemeImage}
          className="form__submit-btn"
          type="submit"
          value="Submit"
        >
          Get a new meme image 🖼
        </button>
      </div>
      <div className="meme">
        <img className="meme-image" src={meme.randomImage} alt="Meme" />
        <h2 className="top">{meme.topText}</h2>
        <h2 className="bottom">{meme.bottomText}</h2>
      </div>
    </main>
  );
}
