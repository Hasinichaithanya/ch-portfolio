/* eslint-disable no-unused-vars */
import Heading from "../heading";
import { motion, useAnimation } from "framer-motion";
import { Paper, Container, Typography, Box, Divider } from "@mui/material";
import "./education.css";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
// import Typography from '@mui/material/Typography';
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
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
    duration: "Dec 2021 - May 2025",
  },
  {
    name: "Nxtwave CCBP 4.0 Academy",
    branch: "Full Stack Development & AI",
    courseWork: [
      "JavaScript",
      "React",
      "Node.js",
      "Express.js",
      "Python",
      "Git",
      "Machine Learning",
    ],
    duration: "June 2021 - Present",
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
          <Accordion
            className="edu-card"
            key={index}
            TransitionProps={{ unmountOnExit: true }}
          >
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1-content"
              id="panel1-header"
            >
              <Typography className="edu-title">{item.name}</Typography>
            </AccordionSummary>
            <AccordionDetails className="acc-details">
              <Typography variant="subtitle1" className="edu-branch">
                {item.branch} [{"\n"}
                <Typography variant="caption" className="edu-title">
                  {item.duration}
                </Typography>
                ]
              </Typography>
              {item.grade && (
                <Typography variant="subtitle2" className="edu-grade">
                  Grade: {item.grade}
                </Typography>
              )}
              <Divider sx={{ my: 1 }} />
              <Typography variant="subtitle2" className="edu-course-label">
                Coursework:
              </Typography>
              <Box className="edu-coursework">
                {item.courseWork.map((course, idx) => (
                  <span className="course-pill" key={idx}>
                    {course}
                  </span>
                ))}
              </Box>
            </AccordionDetails>
          </Accordion>
        ))}
      </Container>
    </motion.div>
  );
};

export default Education;
