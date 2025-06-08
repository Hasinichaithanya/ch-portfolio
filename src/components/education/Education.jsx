/* eslint-disable no-unused-vars */
import Heading from "../heading";
import { motion, useAnimation } from "framer-motion";
import { Paper, Container, Typography, Box, Divider } from "@mui/material";
import "./education.css";

const education = [
  {
    name: "University College of Engineering, Kakatiya University",
    branch: "Computer Science and Engineering",
    grade: "8.59 CGPA",
    courseWork: [
      "Operating Systems",
      "DBMS",
      "Computer Networks",

      "Software Engineering",
      "Cryptography",
    ],
  },
  {
    name: "Nxtwave CCBP 4.0 Academy",
    branch: "Full Stack Development & AI",
    courseWork: ["MERN Stack", "Python", "Git", "Machine Learning"],
  },
];

const Education = () => {
  const control = useAnimation();
  return (
    <motion.div
      id="education"
      initial={{ opacity: 0, scale: 1 }}
      transition={{ type: "spring", duration: 1 }}
      whileInView={{ opacity: 1 }}
      viewport={{ amount: 0.2 }}
      animate={control}
      className="marginTop aboutme education-section"
    >
      <Heading heading="My Education" />
      <Container className="education-container">
        {education.map((item, index) => (
          <Paper elevation={8} className="edu-card" key={index}>
            <Typography variant="h6" className="edu-title">
              {item.name}
            </Typography>
            <Typography variant="subtitle1" className="edu-branch">
              {item.branch}
            </Typography>
            {item.grade && (
              <Typography variant="body2" className="edu-grade">
                Grade: {item.grade}
              </Typography>
            )}
            <Divider sx={{ my: 1 }} />
            <Typography variant="subtitle2" className="edu-course-label">
              Relevant Coursework:
            </Typography>
            <Box className="edu-coursework">
              {item.courseWork.map((course, idx) => (
                <span className="course-pill" key={idx}>
                  {course}
                </span>
              ))}
            </Box>
          </Paper>
        ))}
      </Container>
    </motion.div>
  );
};

export default Education;
