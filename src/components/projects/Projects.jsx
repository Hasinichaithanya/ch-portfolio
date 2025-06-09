/* eslint-disable no-unused-vars */
import { Card, Box, Typography } from "@mui/material";
import Heading from "../heading";
import { motion } from "framer-motion";
import "./projects.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
const projects = [
  {
    name: "Chef Freelancing Platform",
    image: "/chef-freelance.png",
    description:
      "This is a platform for chefs to find freelance work. Chefs can create profiles, showcase their skills and experience, and users can connect with the chefs based on the availability and food items.",
    tech: ["React", "Node.js", "MongoDB", "Express.js", "MUI", "bcrypt"],
  },
  {
    name: "Book Recommendation System",
    image: "/book-recom.png",
    description:
      "This is a book recommendation system that suggests books based on user preferences. Users can search for books, view details, and get recommendations based on their search.",
    tech: ["Python", "Numpy", "Pandas", "Jupyter Notebook", "Streamlit"],
  },
  {
    name: "User Management System",
    image: "/user-mg.png",
    description:
      "A user management system that allows administrators to manage user data. Using RESTful APIs, it provides functionalities to create, read, update, and delete user information.",
    tech: ["Node.js", "MongoDB", "Express.js", "Swagger API", "Chai & Mocha"],
  },
  {
    name: "Events Page",
    image: "/events-page.png",
    description:
      "A simple events page that displays upcoming events fetching the data from an external API. Used React and React-slick for the carousel effect. Implemented lazy loading for images to improve performance.",
    tech: ["React", "React-slick", "CSS", "Node.js", "Express.js", "MongoDB"],
  },
];

const Projects = () => {
  const settings = {
    className: "center",
    centerMode: true,
    centerPadding: "40px",
    slidesToShow: 3,
    infinite: true,
    slidesToScroll: 1,
    lazyLoad: true,
    responsive: [
      {
        breakpoint: 1034,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          centerMode: false,
        },
      },
      {
        breakpoint: 768,
        settings: {
          centerMode: false,
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <motion.div
      id="projects"
      initial={{ opacity: 0, scale: 1 }}
      transition={{ duration: 1 }}
      whileInView={{ opacity: 1 }}
      viewport={{ amount: 0.3 }}
      className="marginTop aboutme skills-container "
    >
      <Heading heading="Projects" />
      <Slider {...settings} className="projects-box">
        {projects.map((project, index) => (
          <Box className="project-card" key={index}>
            <img
              src={project.image}
              alt={project.name}
              className="project-image"
            />
            <Typography variant="h6" className="project-name">
              {project.name}
            </Typography>
            <Typography variant="body2" className="desc">
              {project.description}
            </Typography>
            <Box marginTop="5px">
              {project.tech.map((tech, techIndex) => (
                <span key={techIndex} className="tech-skill">
                  {tech}
                </span>
              ))}
            </Box>
          </Box>
        ))}
      </Slider>
    </motion.div>
  );
};
export default Projects;
