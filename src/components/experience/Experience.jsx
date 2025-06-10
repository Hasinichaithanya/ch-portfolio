/* eslint-disable no-unused-vars */
// import { Card, Box, Container, Typography } from "@mui/material";
import Heading from "../heading";
import { motion } from "framer-motion";
import Box from "@mui/material/Box";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import StepContent from "@mui/material/StepContent";
import Button from "@mui/material/Button";

import Typography from "@mui/material/Typography";
import "./exp.css";
const experience = [
  {
    name: "Software Developer",
    company: "Propel Apps",
    duration: "June 2025 - Present",
    skills: ["Angular", "Node.js", "Express.js", "MongoDB"],
    description:
      "Eager to contribute to the development of web applications and enhance user experiences through my skills in Angular and Node.js.",
  },
  {
    name: "Web Developer Intern",
    company: "Inventivebay Technologies",
    duration: "May 2024 - May 2025",
    skills: [
      "Next.js",
      "MUI",
      "TypeScript",
      "Node.js",
      "Express.js",
      "MongoDB",
    ],
    description:
      "Worked on the front-end of a web application using HTML, CSS, and JavaScript. Collaborated with the design team to implement responsive designs and improve user experience.",
  },
  {
    name: "Software Development Engineer Intern",
    company: "Kaaspro Enterprises",
    duration: "Nov 2022 - May 2023",
    skills: ["HTML", "CSS", "JavaScript", "JQuery", "Eclipse"],
    description:
      "Worked on the front-end of a web application using HTML, CSS, and JavaScript. Collaborated with the design team to implement responsive designs and improve user experience.",
  },
];
const Experience = () => {
  return (
    <motion.div
      id="experience"
      initial={{ opacity: 0, scale: 1 }}
      transition={{ duration: 1 }}
      whileInView={{ opacity: 1 }}
      viewport={{ amount: 0.2 }}
      className="marginTop aboutme skills-container"
    >
      <Heading heading="Experience" />

      <Stepper orientation="vertical" className="stepper-container">
        {experience.map((step, index) => (
          <Step active={true} key={step.label} className="step">
            <motion.div
              initial={{ opacity: 0, scale: 1 }}
              transition={{ duration: 1 }}
              whileInView={{ opacity: 1 }}
              viewport={{ amount: 0.3 }}
            >
              <StepLabel>
                <Typography variant="h6" className="step-name">
                  {step.name}
                </Typography>
                <Typography variant="body2" color="warning">
                  {step.company} • {step.duration}
                </Typography>
              </StepLabel>
              <StepContent className="timeline-content">
                <Typography sx={{ mb: 1 }}>{step.description}</Typography>
                <Box className="skills-box">
                  {step.skills.map((skill, idx) => (
                    <span className="skill-badge" key={idx}>
                      {skill}
                    </span>
                  ))}
                </Box>
              </StepContent>
            </motion.div>
          </Step>
        ))}
      </Stepper>
    </motion.div>
  );
};
export default Experience;
