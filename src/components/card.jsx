import { useState, useEffect } from "react";

function Card({ search, gameOver, setGameOver, handleScore, reshuffle, className}) {
  const [data, setData] = useState(null);
  const [count, setCount] = useState(0);

  useEffect(() => {

    console.log("fecthing")
    const API_KEY = "3UefBeZlCBgrp3Eg4se6H5rALrthHBuG1LxoS5E2esBfF56MaBzkK9QD"; // Replace with your actual Pexels API key
  
    const perPage = 1;

    fetch(
      `https://api.pexels.com/v1/search?query=${search}&per_page=${perPage}`,
      {
        method: "GET",
        headers: {
          Authorization: API_KEY, // Add your API key to the headers
        },
      }
    )
      .then((response) => response.json())
      .then((data) => {
       
        const photos = data.photos;
        if (photos.length > 0) {
          const photo = photos[0];
          setData(photo)
        
        }
      })
      .catch((error) => {
        console.error("Error fetching from Pexels API:", error);
      });
  }, [search]);

  useEffect(() => {
    console.log("Card mounted");
  }, []);

  useEffect(() => {
    if (gameOver) {
      setCount(0); // Reset count when game over
      setGameOver(false); // Reset game over state
     
     
    }
  }, [gameOver]);

  function handleClick() {
    if (count > 0) {
      console.log("jiep");
      reshuffle();
      setGameOver(true);
    } else {
      console.log("hej");
      setCount(count + 1);
      handleScore();
      reshuffle();
    }
  }

  return (
    <>
      <div onClick={handleClick} className={`cardContainer ${className}`}>
        {data && <img src={data.src.original} alt="" />}
      </div>
    </>
  );
}

export { Card };
