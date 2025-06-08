import { useState } from "react";
import AboutMe from "./components/aboutMe/AboutMe";
import Header from "./components/header/Header";
import Skills from "./components/skills/Skills";
import Projects from "./components/projects/Projects";
import Experience from "./components/experience/Experience";
import Education from "./components/education/Education";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";
import SpeedDial from "@mui/material/SpeedDial";
import SpeedDialAction from "@mui/material/SpeedDialAction";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import YouTubeIcon from "@mui/icons-material/YouTube";
import GitHubIcon from "@mui/icons-material/GitHub"; // import "./App.css";
const actions = [
  {
    icon: <GitHubIcon />,
    name: "GitHub",
    href: "https://github.com/Hasinichaithanya",
  },
  {
    icon: <LinkedInIcon />,
    name: "Linkedin",
    href: "https://www.linkedin.com/in/chaithanyahasinidoopati/",
  },
  {
    icon: <YouTubeIcon />,
    name: "Youtube",
    href: "https://www.youtube.com/@hasinisprogramminghub",
  },
];

function App() {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  return (
    <>
      <Header />
      <AboutMe />
      <Education />
      <Skills />
      <Projects />
      <Experience />
      <SpeedDial
        ariaLabel="SpeedDial tooltip example"
        sx={{ position: "fixed", bottom: 16, right: 16, zIndex: 1 }}
        icon={
          <DotLottieReact
            src="https://lottie.host/666d6c71-7f2d-4c8f-9cf0-bbdb0dc46ece/Mdv2dZ62b4.lottie"
            loop
            autoplay
          />
        }
        onClose={handleClose}
        onOpen={handleOpen}
        open={open}
      >
        {actions.map((action) => (
          <SpeedDialAction
            key={action.name}
            icon={action.icon}
            tooltipTitle={action.name}
            // tooltipOpen
            href={action.href}
            onClick={handleClose}
          />
        ))}
      </SpeedDial>
    </>
  );
}

export default App;
