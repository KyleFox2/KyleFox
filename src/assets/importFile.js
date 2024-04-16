import React, { useRef, useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ReactComponent as LinkedinIcon } from "../assets/svgs/icons8-linkedin.svg";
import { ReactComponent as GithubIcon } from "../assets/svgs/icons8-github.svg";
import "../App.css";
import Introduction from "../pages/introduction";
import About from "../pages/about";
import Projects from "../pages/projects";
import Experience from "../pages/experience";
import Contact from "../pages/contact";
import NotFoundPage from "../pages/notFoundPage";
import Nav from "../components/nav";
import ProjectsDetailsScreen from "../pages/projectDetailsScreen";
import ProjectTile from "../components/projectTile";
import Button from "../components/button";
import Socials from "../components/socials";
import datafile from "../assets/datafile.json";
//import emailjs from "@emailjs/browser";

export {
  React,
  useRef,
  useState,
  useEffect,
  BrowserRouter,
  Routes,
  Route,
  LinkedinIcon,
  GithubIcon,
  Introduction,
  About,
  Projects,
  Experience,
  Contact,
  Nav,
  ProjectsDetailsScreen,
  ProjectTile,
  Button,
  Socials,
  datafile,
  NotFoundPage,
  //emailjs,
};
