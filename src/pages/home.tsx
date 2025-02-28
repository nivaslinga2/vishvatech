import { useState, useRef } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import './home.css';
import { Button } from "@/components/ui/button";
import { Rocket, Users, MessageSquare, Briefcase, Bone as Drone, Cpu, Sparkles, MessageCircle } from "lucide-react";
import Countdown from "./countdown";
import { Facebook, Linkedin, Twitter, Instagram , Youtube} from "lucide-react";

const rocket = "/rocket.png";
const bulb = "/bulb.jpg";
const shark = "/shark.jpg";
const logo = "/logo.jpg";
const header = "/header.png";
const man = "/man.jpg";
const drone = "/drone.jpg";
const soap = "/soap.jpg";
const nvidia = "/nvidia.jpg";
const sky = "/sky.jpg";
const special = "/special.png";

function Mainpage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Ref for the Countdown section
  const countdownRef = useRef<HTMLDivElement>(null);

  // Track scroll within the Countdown section
  const { scrollYProgress: countdownScroll } = useScroll({
    target: countdownRef,
    offset: ["start end", "end start"],
  });

  // Track scroll progress of the entire page
  // const { scrollYProgress: pageScroll } = useScroll();

  // Shark animation based on scroll within the Countdown section
  const sharkY = useTransform(countdownScroll, [0, 1], [0, 150]);
  const smoothSharkY = useSpring(sharkY, {
    stiffness: 30,
    damping: 60,
    restDelta: 0.001,
  });

  // Rocket rotation based on page scroll
  // const rocketRotation = useTransform(pageScroll, [0, 1], [-45, 45]);

  // Floating animation for elements
  const floatingAnimation = {
    y: [0, -20, 0],
    transition: {
      duration: 4,
      repeat: Infinity,
      ease: "easeInOut",
    },
  };

  // Hexagon hover animation
  const hexagonHover = {
    scale: 1.1,
    rotate: 5,
    transition: {
      type: "spring",
      stiffness: 300,
    },
  };

  // Staggered animations for lists
  const listItemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="min-h-screen bg-white overflow-x-hidden">
      {/* Navigation */}
      <nav className="fixed w-full bg-white border-b z-50">
        <div className="container mx-auto px-4 h-16 flex items-center justify-between">
          {/* Logo Section */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="flex items-center"
          >
            <img src={logo} alt="Vishvatech Logo" className="h-8 w-auto md:h-12" />
          </motion.div>

          {/* Hamburger Menu for Mobile */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="md:hidden"
          >
            <button className="text-[#103B8C] focus:outline-none" onClick={toggleMenu}>
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
              </svg>
            </button>
          </motion.div>

          {/* Navigation Links (Desktop) */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="hidden md:flex items-center space-x-8"
          >
            <a href="#home" className="text-[#103B8C] hover:text-blue-700 font-bold">Home</a>
            <a href="https://open.spotify.com/episode/16xQdRf3oi299XUmFtREDB?si=OF7p_1egS_GR6qGrNkPIvA" className="text-[#103B8C] hover:text-blue-700 font-bold">Podcast</a>
            <a href="https://vishva.co" className="text-[#103B8C] hover:text-blue-700 font-bold">About</a>
            
            <a href="#Team" className="text-[#103B8C] hover:text-blue-700 font-bold">Team</a>
            <a href="https://form.jotform.com/250510451796052" target="_blank" rel="noopener noreferrer">
              <Button className="bg-[#103B8C] hover:bg-blue-700 px-4 py-2">Register</Button>
            </a>
          </motion.div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-white border-t"
          >
            <div className="flex flex-col items-center space-y-4 py-4">
              <a href="#home" className="text-[#103B8C] hover:text-blue-700 font-bold">Home</a>
              <a href="https://open.spotify.com/episode/16xQdRf3oi299XUmFtREDB?si=OF7p_1egS_GR6qGrNkPIvA" className="text-[#103B8C] hover:text-blue-700 font-bold">Podcast</a>
              <a href="https://vishva.co" className="text-[#103B8C] hover:text-blue-700 font-bold">About</a>
              
              <a href="#Team" className="text-[#103B8C] hover:text-blue-700 font-bold">Team</a>
              <a href="https://form.jotform.com/250510451796052" target="_blank" rel="noopener noreferrer">
                <Button className="bg-[#103B8C] hover:bg-blue-700 px-4 py-2">Register</Button>
              </a>
            </div>
          </motion.div>
        )}
      </nav>

      {/* Hero Section */}
      <motion.section
        id="home"
        className="relative min-h-screen pt-24 flex items-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <div className="container mx-auto px-4 relative">
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="flex flex-col items-center text-center max-w-3xl mx-auto space-y-6"
          >
            <motion.h1
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 1, delay: 0.2 }}
              className="text-3xl md:text-6xl font-bold tracking-tight mb-8"
            >
              Innovate, Build, and
              <motion.h1
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 1, delay: 0.3 }}
                className="text-3xl md:text-6xl font-bold tracking-tight"
              >
                Scale with
              </motion.h1>
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 1, delay: 0.4 }}
                className="text-[#103B8C] -mb-6"
              >
                Vishvatech 3.0!
              </motion.div>
            </motion.h1>

            <motion.p
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 1, delay: 0.5 }}
              className="text-gray-600 text-lg md:text-2xl m-2"
            >
              Creating opportunities, fostering innovation, driving success.
            </motion.p>

            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 1, delay: 0.6 }}
            >
              <a href="https://form.jotform.com/250510451796052" target="_blank" rel="noopener noreferrer">
                <Button className="bg-[#103B8C] hover:bg-blue-700 px-5 py-2 mb-12 p-6">Register</Button>
              </a>
            </motion.div>
          </motion.div>
        </div>

        {/* Animated Rocket */}
        <motion.img
          src={rocket}
          alt="rocket"
          className="absolute left-4 bottom-20 md:bottom-7 h-12 w-12 md:h-40 md:w-40 text-blue-600"
          style={{ transform: "rotate(-45deg)", transformOrigin: "center" }}
          animate={floatingAnimation}
          whileHover={{ scale: 1.2, rotate: -35 }}
        />

        {/* Animated Bulb */}
        <motion.img
          src={bulb}
          alt="bulb"
          className="absolute right-4 bottom-20 md:bottom-7 h-12 w-12 md:h-40 md:w-40 text-blue-600"
          animate={floatingAnimation}
          whileHover={{ scale: 1.2, rotate: 10 }}
        />
      </motion.section>

      {/* Sharktank Section */}
      <motion.section
        id="sharktank"
        className="py-24 relative -mt-40"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.3 }}
      >
        <div className="container mx-auto px-4">
          {/* Header */}
          <motion.img
            src={header}
            alt="header"
            className="w-full h-auto md:h-80 mt-4 mb-4 mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          />

          {/* Hexagon Grid */}
          <div className="flex justify-center items-center -ml-20">
  <div className="relative h-[400px] w-[250px] md:h-[400px] md:w-[400px]">
    <div className="grid grid-cols-3 grid-rows-3 gap-4 w-full h-full">
      {/* Hexagon Items */}
      <motion.div
        className="hexagon bg-[#103B8C] text-white flex flex-col justify-center items-center col-start-1 row-start-1"
        whileHover={{ scale: 1.1, rotate: 5 }}
        transition={{ type: "spring", stiffness: 300 }}
      >
        <Briefcase className="h-6 w-6 md:h-9 md:w-9 mb-2" />
        <div className="text-sm md:text-md font-semibold">5+ top</div>
        <div className="text-xs">investors</div>
      </motion.div>
                <motion.div
                  className="hexagon bg-[#103B8C] text-white flex flex-col justify-center items-center col-start-3 row-start-1"
                  whileHover={hexagonHover}
                >
                  <MessageSquare className="h-4 w-4 md:h-8 md:w-8 mb-2" />
                  <div className="text-sm md:text-md font-semibold">3 panel</div>
                  <div className="text-xs">discussions</div>
                </motion.div>
                <motion.div
                  className="hexagon bg-[#103B8C] text-white flex flex-col justify-center items-center col-start-2 row-start-2"
                  whileHover={hexagonHover}
                >
                  <Users className="h-6 w-6 md:h-9 md:w-9 mb-2" />
                  <div className="text-sm md:text-md font-semibold">15 startup</div>
                  <div className="text-xs">founders</div>
                </motion.div>
                <motion.div
                  className="hexagon bg-[#103B8C] text-white flex flex-col justify-center items-center col-start-1 row-start-3"
                  whileHover={hexagonHover}
                >
                  <Users className="h-6 w-6 md:h-9 md:w-9 mb-2" />
                  <div className="text-sm md:text-md font-semibold">500+</div>
                  <div className="text-xs">students</div>
                </motion.div>
                <motion.div
                  className="hexagon bg-[#103B8C] text-white flex flex-col justify-center items-center col-start-3 row-start-3"
                  whileHover={hexagonHover}
                >
                  <Briefcase className="h-6 w-6 md:h-9 md:w-9 mb-2" />
                  <div className="text-sm md:text-md font-semibold">10+</div>
                  <div className="text-xs">corporate</div>
                </motion.div>
              </div>
            </div>
          </div>

          {/* Countdown Section */}
          <div ref={countdownRef} className="text-center mt-24 md:mt-60">
  <h2 className="text-4xl md:text-7xl font-bold tracking-wider">COUNTDOWN</h2>
  <Countdown />

  {/* Animated Shark with scroll tracking */}
  <motion.img
    src={shark}
    alt="shark"
    className="absolute left-0 top-1/2 mt-12 mb-8 -ml-8 sm:top-1/3 transform -translate-y-1/2 h-16 w-16 sm:h-24 sm:w-24 md:h-40 md:w-40"
    style={{ y: smoothSharkY }}
    whileHover={{ scale: 1.1, rotate: -5 }}
    whileTap={{ scale: 0.9 }}
  />
  </div>
        </div>

        <motion.img
    src={rocket}
    alt="rocket"
    className="absolute right-4 bottom-20 md:bottom-7 h-12 w-12 md:h-40 md:w-40 text-blue-600"
    style={{
      transform: "rotate(-45deg)",
      transformOrigin: "center",
      ...(window.innerWidth <= 768 && {
        bottom: "10px", // Adjust this value for mobile
        right: "10px", // Changed from left to right
        height: "60px", // Adjust this value for mobile
        width: "60px", // Adjust this value for mobile
      }),
    }}
    animate={floatingAnimation}
    whileHover={{ scale: 3.1, rotate: -25 }}
  />
      </motion.section>

      {/* Workshops Section */}
      <motion.section
        id="workshops"
        className="py-24 bg-white"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.4 }}
      >
        <div className="container mx-auto px-4">
          {/* Entrepreneurship Master Class */}
          <div className="grid md:grid-cols-2 gap-8 mb-20">
            <div className="flex items-center justify-center">
              <img
                src={man}
                alt="Entrepreneurship"
                className="rounded-lg h-48 md:h-80"
              />
            </div>
            <div className="space-y-4">
              <h3 className="text-2xl md:text-4xl font-bold text-[#103B8C]">Entrepreneurship Master Class: Build, Scale, Succeed!</h3>
              <ul className="space-y-2 text-lg">
                <motion.li
                  variants={listItemVariants}
                  initial="hidden"
                  whileInView="visible"
                  transition={{ duration: 0.5, delay: 0.2 }}
                  className="flex items-center gap-2"
                >
                  <Sparkles className="h-5 w-5 text-[#103B8C]" />
                  <span>Learn business strategies & startup essentials</span>
                </motion.li>
                <motion.li
                  variants={listItemVariants}
                  initial="hidden"
                  whileInView="visible"
                  transition={{ duration: 0.5, delay: 0.4 }}
                  className="flex items-center gap-2"
                >
                  <Users className="h-5 w-5 text-[#103B8C]" />
                  <span>Gain insights from industry experts & mentors</span>
                </motion.li>
                <motion.li
                  variants={listItemVariants}
                  initial="hidden"
                  whileInView="visible"
                  transition={{ duration: 0.5, delay: 0.6 }}
                  className="flex items-center gap-2"
                >
                  <MessageCircle className="h-5 w-5 text-[#103B8C]" />
                  <span>Master pitching, funding & leadership skills</span>
                </motion.li>
                <motion.li
                  variants={listItemVariants}
                  initial="hidden"
                  whileInView="visible"
                  transition={{ duration: 0.5, delay: 0.8 }}
                  className="flex items-center gap-2"
                >
                  <Rocket className="h-5 w-5 text-[#103B8C]" />
                  <span>Turn your ideas into successful ventures</span>
                </motion.li>
              </ul>
            </div>
          </div>

          {/* Drone Workshop */}
          <div className="grid md:grid-cols-2 gap-8 mb-20">
            <div className="space-y-4 order-2 md:order-1">
              <h3 className="text-2xl md:text-4xl font-bold text-[#103B8C]">Drone Workshop: Take Flight into the Future!</h3>
              <ul className="space-y-2">
                <motion.li
                  variants={listItemVariants}
                  initial="hidden"
                  whileInView="visible"
                  transition={{ duration: 0.5, delay: 0.2 }}
                  className="flex items-center gap-2"
                >
                  <Drone className="h-5 w-5 text-[#103B8C]" />
                  <span>Learn drone technology & engineering</span>
                </motion.li>
                <motion.li
                  variants={listItemVariants}
                  initial="hidden"
                  whileInView="visible"
                  transition={{ duration: 0.5, delay: 0.4 }}
                  className="flex items-center gap-2"
                >
                  <Users className="h-5 w-5 text-[#103B8C]" />
                  <span>Hands-on flying & assembly sessions</span>
                </motion.li>
                <motion.li
                  variants={listItemVariants}
                  initial="hidden"
                  whileInView="visible"
                  transition={{ duration: 0.5, delay: 0.6 }}
                  className="flex items-center gap-2"
                >
                  <Cpu className="h-5 w-5 text-[#103B8C]" />
                  <span>Explore real-world drone applications</span>
                </motion.li>
                <motion.li
                  variants={listItemVariants}
                  initial="hidden"
                  whileInView="visible"
                  transition={{ duration: 0.5, delay: 0.8 }}
                  className="flex items-center gap-2"
                >
                  <MessageCircle className="h-5 w-5 text-[#103B8C]" />
                  <span>Gain expert insights</span>
                </motion.li>
              </ul>
            </div>
            <div className="flex items-center justify-center order-1 md:order-2">
              <img
                src={drone}
                alt="Drone Workshop"
                className="rounded-lg h-48 md:h-80"
              />
            </div>
          </div>

          {/* NVIDIA Workshop */}
          <div className="grid md:grid-cols-2 gap-8 mb-20">
            <div className="flex items-center justify-center">
              <img
                src={nvidia}
                alt="NVIDIA Workshop"
                className="rounded-lg h-48 md:h-80"
              />
            </div>
            <div className="space-y-4">
              <h3 className="text-2xl md:text-4xl font-bold text-[#103B8C]">NVIDIA Workshop: Powering the Future of AI & Graphics!</h3>
              <ul className="space-y-2">
                <motion.li
                  variants={listItemVariants}
                  initial="hidden"
                  whileInView="visible"
                  transition={{ duration: 0.5, delay: 0.2 }}
                  className="flex items-center gap-2"
                >
                  <Cpu className="h-5 w-5 text-[#103B8C]" />
                  <span>Explore cutting-edge AI & GPU advancements</span>
                </motion.li>
                <motion.li
                  variants={listItemVariants}
                  initial="hidden"
                  whileInView="visible"
                  transition={{ duration: 0.5, delay: 0.4 }}
                  className="flex items-center gap-2"
                >
                  <Users className="h-5 w-5 text-[#103B8C]" />
                  <span>Hands-on deep learning & gaming sessions</span>
                </motion.li>
                <motion.li
                  variants={listItemVariants}
                  initial="hidden"
                  whileInView="visible"
                  transition={{ duration: 0.5, delay: 0.6 }}
                  className="flex items-center gap-2"
                >
                  <Sparkles className="h-5 w-5 text-[#103B8C]" />
                  <span>Learn from industry experts & innovators</span>
                </motion.li>
                <motion.li
                  variants={listItemVariants}
                  initial="hidden"
                  whileInView="visible"
                  transition={{ duration: 0.5, delay: 0.8 }}
                  className="flex items-center gap-2"
                >
                  <Rocket className="h-5 w-5 text-[#103B8C]" />
                  <span>Unlock career & research opportunities</span>
                </motion.li>
              </ul>
            </div>
          </div>

          {/* Soap Workshop */}
          <div className="grid md:grid-cols-2 gap-8 mb-20">
            <div className="space-y-4 order-2 md:order-1">
              <h3 className="text-2xl md:text-4xl font-bold text-[#103B8C]">Soap Workshop: Craft Your Own Creations!</h3>
              <ul className="space-y-2">
                <motion.li
                  variants={listItemVariants}
                  initial="hidden"
                  whileInView="visible"
                  transition={{ duration: 0.5, delay: 0.2 }}
                  className="flex items-center gap-2"
                >
                  <Drone className="h-5 w-5 text-[#103B8C]" />
                  <span>Learn the art of soap-making</span>
                </motion.li>
                <motion.li
                  variants={listItemVariants}
                  initial="hidden"
                  whileInView="visible"
                  transition={{ duration: 0.5, delay: 0.4 }}
                  className="flex items-center gap-2"
                >
                  <Users className="h-5 w-5 text-[#103B8C]" />
                  <span>Hands-on custom soap crafting</span>
                </motion.li>
                <motion.li
                  variants={listItemVariants}
                  initial="hidden"
                  whileInView="visible"
                  transition={{ duration: 0.5, delay: 0.6 }}
                  className="flex items-center gap-2"
                >
                  <Cpu className="h-5 w-5 text-[#103B8C]" />
                  <span>Explore natural ingredients & techniques</span>
                </motion.li>
                <motion.li
                  variants={listItemVariants}
                  initial="hidden"
                  whileInView="visible"
                  transition={{ duration: 0.5, delay: 0.8 }}
                  className="flex items-center gap-2"
                >
                  <MessageCircle className="h-5 w-5 text-[#103B8C]" />
                  <span>Take home your handmade soaps</span>
                </motion.li>
              </ul>
            </div>
            <div className="flex items-center justify-center order-1 md:order-2">
              <img
                src={soap}
                alt="Soap Workshop"
                className="rounded-lg h-48 md:h-80"
              />
            </div>
          </div>

          {/* Futurepreneur Workshop */}
          <div className="grid md:grid-cols-2 gap-8 mb-20">
            <div className="flex items-center justify-center">
              <img
                src={sky}
                alt="Futurepreneur Workshop"
                className="rounded-lg h-48 md:h-80"
              />
            </div>
            <div className="space-y-4">
              <h3 className="text-2xl md:text-4xl font-bold text-[#103B8C]">Futurepreneur: Innovate, Lead, Succeed!</h3>
              <ul className="space-y-2">
                <motion.li
                  variants={listItemVariants}
                  initial="hidden"
                  whileInView="visible"
                  transition={{ duration: 0.5, delay: 0.2 }}
                  className="flex items-center gap-2"
                >
                  <Cpu className="h-5 w-5 text-[#103B8C]" />
                  <span>Ignite your entrepreneurial mindset</span>
                </motion.li>
                <motion.li
                  variants={listItemVariants}
                  initial="hidden"
                  whileInView="visible"
                  transition={{ duration: 0.5, delay: 0.4 }}
                  className="flex items-center gap-2"
                >
                  <Users className="h-5 w-5 text-[#103B8C]" />
                  <span>Learn from startup leaders & investors</span>
                </motion.li>
                <motion.li
                  variants={listItemVariants}
                  initial="hidden"
                  whileInView="visible"
                  transition={{ duration: 0.5, delay: 0.6 }}
                  className="flex items-center gap-2"
                >
                  <Sparkles className="h-5 w-5 text-[#103B8C]" />
                  <span>Explore funding, networking & growth strategies</span>
                </motion.li>
                <motion.li
                  variants={listItemVariants}
                  initial="hidden"
                  whileInView="visible"
                  transition={{ duration: 0.5, delay: 0.8 }}
                  className="flex items-center gap-2"
                >
                  <Rocket className="h-5 w-5 text-[#103B8C]" />
                  <span>Turn ideas into successful ventures</span>
                </motion.li>
              </ul>
            </div>
          </div>
        </div>
      </motion.section>

  {/* Special Events Section with Countdown Timer */}
<motion.section
  className="py-16 bg-white text-white -mt-40"
  initial={{ opacity: 0 }}
  animate={{ opacity: 1 }}
  transition={{ duration: 1, delay: 0.5 }}
>
  <div className="container mx-auto px-4">
    <div className="text-center mb-8">
      <img src={special} alt="special" className="h-100 ml-8" />
      <h2 className="text-3xl md:text-4xl text-black m-8">Secure your spot at Vishvatech 3.0 now!</h2>
      {/* Functional Countdown Timer */}
      <Countdown />

      <a href="https://form.jotform.com/250510451796052" target="_blank" rel="noopener noreferrer">
        <Button className="bg-[#103B8C] hover:bg-blue-700 px-5 py-2 mt-8">Register</Button>
      </a>
    </div>
  </div>
</motion.section>
  {/* Get In Touch Section */}
<motion.section
  className="py-16 bg-blue-900 text-white"
  initial={{ opacity: 0 }}
  animate={{ opacity: 1 }}
  transition={{ duration: 1, delay: 0.6 }}
>
  <div className="container mx-auto px-4">
    <h2 className="text-3xl md:text-4xl font-bold text-center mb-8">
      Get In Touch
    </h2>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      {/* Contact Form */}
      <motion.div
        className="bg-white p-6 rounded-lg shadow-lg"
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h3 className="text-2xl font-bold text-[#103B8C] mb-4">Send Us a Message</h3>
        <form className="space-y-4">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Enter your name"
              className="w-full p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#103B8C]"
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Enter your email"
              className="w-full p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#103B8C]"
            />
          </div>
          <div>
            <label htmlFor="message" className="block text-sm font-medium text-gray-700">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              rows={4}
              placeholder="Enter your message"
              className="w-full p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#103B8C]"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-[#103B8C] hover:bg-blue-700 text-white font-bold py-3 rounded-lg transition duration-300"
          >
            Send Message
          </button>
        </form>
      </motion.div>

      {/* Contact Details Section with Map */}
<motion.div
  className="bg-white p-6 rounded-lg shadow-lg"
  initial={{ opacity: 0, x: 20 }}
  whileInView={{ opacity: 1, x: 0 }}
  transition={{ duration: 0.8 }}
>
  <h3 className="text-2xl font-bold text-[#103B8C] mb-4">Contact Details</h3>
  <div className="space-y-4">
    {/* Contact Information */}
    <div className="flex items-center space-x-4">
      <Users className="h-6 w-6 text-[#103B8C]" />
      <p className="text-gray-700">Vishvatech Team</p>
    </div>
    <div className="flex items-center space-x-4">
      <MessageSquare className="h-6 w-6 text-[#103B8C]" />
      <p className="text-gray-700">vishvatech3.0@gmail.com</p>
    </div>
    <div className="flex items-center space-x-4">
      <Rocket className="h-7 w-9 text-[#103B8C]" />
      <p className="text-gray-700">Vishnu Foundation Technology Business Incubator, Vishva TBI, SVECW, Vishnupur, Bhimavaram, West Godavari Dist.,AP-534202</p>
    </div>

    {/* Embedded Google Map */}
    {/* Floating Animation for Form and Map */}
<motion.div
  className="bg-white p-6 rounded-lg shadow-lg"
  initial={{ y: 0 }}
  animate={{ y: [0, -10, 0] }}
  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
>
  {/* Form or Map Content */}
</motion.div>
    <div className="mt-6">
      <iframe
        title="Vishnu Institute of Technology Location"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3820.1234567890123!2d81.52123456789012!3d16.54321098765432!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a37abf123456789%3A0x1234567890abcdef!2sVishnu%20Institute%20of%20Technology%2C%20Bhimavaram!5e0!3m2!1sen!2sin!4v1234567890123!5m2!1sen!2sin"
        width="100%"
        height="200"
        style={{ border: 0 }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      />
    </div>
  </div>
</motion.div>
</div>
  </div>
  </motion.section>
  <motion.section
  className="py-8 bg-[#103B8C] text-white"
  initial={{ opacity: 0 }}
  animate={{ opacity: 1 }}
  transition={{ duration: 1, delay: 0.7 }}
>
  <div className="container mx-auto px-4">
    <div className="flex justify-center space-x-6">
      {/* Facebook */}
      <a
        href="https://www.facebook.com/profile.php?id=100090003517437&mibextid=kFxxJD"
        target="_blank"
        rel="noopener noreferrer"
        className="hover:text-blue-400 transition duration-300"
      >
        <Facebook className="h-6 w-6" />
      </a>
      {/* LinkedIn */}
      <a
        href="https://www.linkedin.com/in/vishnu-foundation-tbi-362300252?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3BQWvH51FISgCLwI7fGTf8WA%3D%3D"
        target="_blank"
        rel="noopener noreferrer"
        className="hover:text-blue-400 transition duration-300"
      >
        <Linkedin className="h-6 w-6" />
      </a>
      {/* Twitter */}
      <a
        href="https://x.com/VishnuTBI"
        target="_blank"
        rel="noopener noreferrer"
        className="hover:text-blue-400 transition duration-300"
      >
        <Twitter className="h-6 w-6" />
      </a>
      {/* Instagram */}
      <a
        href="https://www.instagram.com/vishnufoundation.tbi?igsh=b3J1d3RjYWxhbHB6"
        target="_blank"
        rel="noopener noreferrer"
        className="hover:text-blue-400 transition duration-300"
      >
        <Instagram className="h-6 w-6" />
      </a>
        {/* Youtube */}
        <a
        href="https://youtube.com/@vishnufoundationtbi?si=U25XJc7r1EM0wB6b"
        target="_blank"
        rel="noopener noreferrer"
        className="hover:text-blue-400 transition duration-300"
      >
        <Youtube className="h-6 w-6" />
      </a>
    </div>
    <p className="text-center mt-4 text-sm">
      &copy; {new Date().getFullYear()} Vishvatech. All rights reserved.
    </p>
  </div>
</motion.section>
  </div>
  );
}
export default Mainpage;