/* eslint-disable no-unused-vars */

import { Card, Box, Container, Typography } from "@mui/material";
import * as motion from "motion/react-client";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";

import "../aboutMe/aboutme.css";
const AboutMe = () => {
  return (
    <motion.div
      id="about"
      initial={{ opacity: 0, scale: 1 }}
      transition={{ duration: 0.5, delay: 0.1 }}
      whileInView={{ opacity: 1 }}
      viewport={{ amount: 0.2 }}
      className="aboutme"
      style={{ marginTop: "100px" }}
    >
      <Box className="aboutme-text">
        <Typography
          variant="h4"
          component="h3"
          marginBottom="20px"
          className="aboutme-title typewriter"
        >
          Chaithanya Hasini Doopati
        </Typography>
        <Typography>
          I am a CSE graduate, Content creator and a passionate software
          developer. I have knowledge in various programming languages with
          hands-on experience. Interested to learn new technologies and apply
          them in real-world projects. I am a quick learner and a team player,
          always eager to take on new challenges.
        </Typography>
      </Box>
      <DotLottieReact
        src="https://lottie.host/3ea4c80b-6575-47b3-932b-3b7039288c46/EpYNGr9mi7.lottie"
        loop
        autoplay
        className="tech-animation"
      />
    </motion.div>
  );
};

export default AboutMe;
