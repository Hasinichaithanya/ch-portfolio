/* eslint-disable no-unused-vars */

import { Card, Box, Button, Typography } from "@mui/material";
import * as motion from "motion/react-client";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";
import DownloadIcon from "@mui/icons-material/Download";
import "../aboutMe/aboutme.css";
const AboutMe = () => {
  return (
    <motion.div
      id="about"
      initial={{ opacity: 0, scale: 1 }}
      transition={{ duration: 0.5, delay: 0.1, type: "spring", stiffness: 100 }}
      whileInView={{ opacity: 1 }}
      viewport={{ amount: 0.2 }}
      className="aboutme"
      style={{ paddingTop: "100px" }}
    >
      <Box className="aboutme-text">
        <div className="name">Chaithanya Hasini Doopati</div>
        <Typography
          // variant="h5"
          // component="h6"
          textAlign="left"
          className="aboutme-desc"
        >
          I am a CSE graduate, Content creator and a passionate software
          developer. I have knowledge in various programming languages with
          hands-on experience. Interested to learn new technologies and apply
          them in real-world projects. I am a quick learner and a team player,
          always eager to take on new challenges.
        </Typography>
        <Box textAlign="left">
          <Button
            href="/resume.pdf"
            target="_blank"
            variant="contained"
            className="marginTop resume-button"
          >
            My Resume <DownloadIcon />
          </Button>
        </Box>
      </Box>
      <motion.div
        animate={{
          scale: [0.9, 1, 0.9],
          borderRadius: ["0%", "0%", "50%", "50%", "0%"],
        }}
        transition={{
          duration: 2,
          ease: "easeInOut",
          times: [0, 0.5, 1],
          repeat: Infinity,
          repeatDelay: 0,
        }}
      >
        <DotLottieReact
          src="https://lottie.host/3ea4c80b-6575-47b3-932b-3b7039288c46/EpYNGr9mi7.lottie"
          loop
          autoplay
          className="tech-animation"
        />
      </motion.div>
    </motion.div>
  );
};

export default AboutMe;
