import { Card, Box, Container, Typography } from "@mui/material";
import Heading from "../heading";
import "../skills/skills.css";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
const skills = [
  {
    name: "HTML",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ_3V0WmaHi7hLENYgmyF3iKWD7BP4bn82grA&s",
  },
  {
    name: "CSS",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSEKGhW8zEgJP1v8tf1R8mtrTX_oAMzjbyYLA&s",
  },
  {
    name: "JavaScript",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRx2zuN3YyGv_TJ98Q6-6pVFjY1ARQD6f_EMg&s",
  },
  {
    name: "React",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQvXICjIGuGGVb2biswm8B4Tvio-IIRLeufgA&s",
  },
  {
    name: "Node.js",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQPAbKd_ctPjSVa-t7gtREo1YsShFc9OSySMg&s",
  },
  {
    name: "Express.js",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQXmrDV3Y7_j5jMxc54-1huMAx8K3DhYVg7JQ&s",
  },
  {
    name: "MongoDB",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRiBF3Y9fCMAXThIDtSvY1BBw42OUAe5JMwww&s",
  },
  {
    name: "Python",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_jl9bHt1CwJbduUHis2Pa6zQwFNEqLrKXcw&s",
  },
  {
    name: "Git",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQxpPu8A_lp5A4xpuhFJAugP93eBAtCyVLTwQ&s",
  },
  {
    name: "MUI",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRSGTFO-12dbItZ-G6B8U7O4K8YF2LqJV6AuQ&s",
  },
  {
    name: "Bootstrap",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSzQiHQKxHYhjRAAY178gbsM3ndW_S1nCoHUw&s",
  },
];
const Skills = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 2000,
    slidesToShow: 7,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 0,
    cssEase: "linear",
    pauseOnHover: false,
    arrows: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
        },
      },
    ],
  };

  return (
    <motion.div
      id="skills"
      initial={{ opacity: 0, scale: 1 }}
      // animate={{ opacity: 1, scale: 1 }}
      // transition={{ duration: 1, delay: 1 }}
      whileInView={{ opacity: 1 }}
      viewport={{ amount: 0.3 }}
      className="marginTop aboutme skills-container"
    >
      <Heading heading="Skills" />
      <Slider {...settings} className="skills-box">
        {skills.map((skill, index) => (
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            // transition={{ duration: 1, delay: 1.2 }}
            whileInView={{ opacity: 1 }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            key={index}
            className="skill-card"
          >
            <img src={skill.image} className="card-image" />
            <Typography id="skill-name">{skill.name}</Typography>
          </motion.div>
        ))}
      </Slider>
    </motion.div>
  );
};
export default Skills;
