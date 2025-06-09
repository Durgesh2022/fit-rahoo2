// app/page.tsx
"use client";
import React from "react";
import "./style.css";
import { motion } from "framer-motion";
import  EarthCanvas2  from "./canvas/Earth copy";

const AboutUs = () => {
    
  return (
    <>
      
      <div className="blog ">
        

        <div className="blog-header blog-is-sticky ">
          <div className="blog-article header-article">
            <div className="blog-big__title2 font-playfair">About</div>
            <div className="blog-menu rounded small-title">Why We Train</div>
          </div>
          <div className="blog-article page-number">
            <motion.div
  initial={{ x: "-100%" }}
  animate={{ x: 0 }}
  transition={{ duration: 1, ease: "easeInOut" }}
  className="absolute bottom-0 left-0 z-0 w-[400px] h-[400px]"
>
  <EarthCanvas2 />
</motion.div>


          </div>
        </div>

        <div className="blog-header-container ">
          {[
            {
                           title: "Us",
              date: "07.06.2025",
              image:
                "https://i.pinimg.com/736x/ed/5f/cd/ed5fcd6bf442c6afef0fc3aa9517b0e6.jpg",
              heading: "Empowering People Through Fitness and Discipline",
              author: "Team FitX",
              description:
                "At FitX, our mission is to help people discover the power of fitness for mental clarity, physical strength, and life mastery.",
            },
            {
              title: "Transformation",
              date: "07.06.2025",
              image:
                "https://i.pinimg.com/736x/20/58/74/20587473af918d5ea55a3e04926bc39f.jpg",
              heading: "Real Stories That Inspire the Grind",
              author: "Coach Aarav",
              description:
                "From sedentary to shredded — read inspiring transformations that show what's possible when you commit to your health.",
            },
            {
              title: "Mindset",
              date: "07.06.2025",
              image:
                "https://i.pinimg.com/736x/92/e6/25/92e62501bd4a6db3cf3c7aaf04025b36.jpg",
              heading: "How Discipline Builds Confidence and Growth",
              author: "Nisha Verma",
              description:
                "Fitness is more mental than physical. Learn how daily training builds discipline, confidence, and unstoppable energy.",
            },

          ].map((post, idx) => (
            <div key={idx} className="blog-header">
              <div className="blog-article header-article">
                <div className="blog-big__title text-[#fe6107] ">{post.title}</div>
                <div className="blog-menu small-title date">{post.date}</div>
              </div>
              <div className="blog-article">
                <img src={post.image} alt={post.title} />
                <h2>
                  {post.heading.split(" ").map((word, i) =>
                    word === "Widespread" || word === "Vulnerability" || word === "Understanding" ? (
                      <span key={i}> {word} </span>
                    ) : (
                      ` ${word}`
                    )
                  )}
                </h2>
                <div className="blog-detail">
                  <span>By {post.author}</span>
                  <span>5 Min Read</span>
                </div>
                <p>{post.description}</p>
                <a href="#" className="text">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    stroke="white"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="feather feather-corner-down-right"
                    viewBox="0 0 24 24"
                  >
                    <path d="M15 10l5 5-5 5" />
                    <path d="M4 4v7a4 4 0 004 4h12" />
                  </svg>
                  See More
                </a>
              </div>
            </div>
          ))}
        </div>

        <div className="blog-part right-blog">
          <div className="marquee">
            <div className="marquee-track">
              {[
                "Now And Then You Miss It Sounds Make You Cry",
                "Now In - MoMa Sharing Exhibition NOW",
                "NYC Opens After Long Lockdown Check",
              ].map((text, idx) => (
                <span key={idx}>{text}</span>
              ))}
            </div>
          </div>

          <div className="blog-right-title-container">
            <div className="blog-right-title font-playfair">Featured Articles</div>
            <div className="blog-menu rounded">See All</div>
          </div>

          <div className="blog-right">
            {[...Array(6)].map((_, i) => (
              <div key={i} className="blog-right-container">
                <div className="blog-title-date">
                  <div className="blog-right-page">Step {i + 1}</div>
                  <div className="date">12.06.2021</div>
                </div>
                <div className="blog-right-page-title font-grotesk">
                  Article Title {i + 1}
                </div>
                <div className="blog-right-page-subtitle font-inter">
                  Short description of article {i + 1} goes here.
                </div>
              </div>
            ))}
            <div className="circle">
              <div className="circle-title">Leave Your Old Life Behind</div>
              <div className="circle-subtitle">
                Don't try to be like someone else, be yourself. Be secure with
                yourself.
              </div>
              <div className="circle-footer">Explore</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutUs;