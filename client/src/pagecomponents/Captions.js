import React, { useState, useEffect } from 'react';
import styles from './captions.module.css'
import axios from 'axios';

const Captions = () => {
  const [captions, setCaptions] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:8000/captions');
        console.log(response.data);
        setCaptions(response.data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
  }, []);

  return (
    <div className={styles.captionDiv}>
      {captions.map((caption, index) => (
        <div key={index} className={styles.innerCaptionDiv}> 
          <p> {caption.caption} </p>
          <img src={caption.meme.src} />
        </div>
      ))}
    </div>
  );
};

export default Captions;
