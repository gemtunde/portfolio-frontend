import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

import { AppWrap, MotionWrap } from '../../wrapper';
import './About.scss';
import { urlFor, client } from '../../client';

const About = () => {
  const [abouts, setAbouts] = useState([]);

  useEffect(() => {
    const query = '*[_type == "abouts"]';

    client.fetch(query).then((data) => {
      setAbouts(data);
    });
  }, []);

  return (
    <>
      <h2 className="head-text">I Know that <span>Good Development</span> <br />means  <span>Good Business</span></h2>
      <p className="p-text" style={{ marginTop: 10 }}>
      Performance-driven and motivated Frontend Developer with 5+ years of extensive experience and
       solid understanding of front-end and Back-end Technologies,   MVC frameworks,
        Restful web services and Data Base designing. <br /> Strong knowledge in MERN Stack with 
      vast experience in building Web Applications, used React.js for client side, Node.js/Express for
       server side and MongoDB, MYSQL for database. <br /> Excellent in using React.js/Redux to build User Interface,
       strong knowledge of state store, middleware, action creator, reducer and container.<br />
       Working knowledge of jest and unit testing framework and Module bundler Rollup, 
       Webpack. <br />A result-oriented professional with good communication, leadership, 
       team management, analytical, co-ordination and problem solving skills.
      </p>
       <div className="app__profiles">
        {abouts.map((about, index) => (
          <motion.div
            whileInView={{ opacity: 1 }}
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.5, type: 'tween' }}
            className="app__profile-item"
            key={about.title + index}
          >
            <img src={urlFor(about.imgUrl)} alt={about.title} />
            <h2 className="bold-text" style={{ marginTop: 20 }}>{about.title}</h2>
            <p className="p-text" style={{ marginTop: 10 }}>{about.description}</p>
          </motion.div>
        ))}
      </div> 
    </>
  );
};

export default AppWrap(
  MotionWrap(About, 'app__about'),
  'about',
  'app__whitebg',
);
