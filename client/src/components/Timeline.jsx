import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { RiComputerLine } from "react-icons/ri";
import { SiInternetcomputer } from "react-icons/si";
import { GiStairsGoal } from "react-icons/gi";
import { IoBuild } from "react-icons/io5";

const Timeline = () => {
  return (
    <div className="py-24 text-cyan-200 font-[Poppins]  text-sm">
      <VerticalTimeline lineColor="rgb(14 116 144)">
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: "rgb(15 23 42)" }}
          contentArrowStyle={{ borderRight: "7px solid  rgb(14 116 144)" }}
          iconStyle={{ background: "rgb(8 145 178)", color: "#fff" }}
          icon={<RiComputerLine />}
        >
          <h3 className="vertical-timeline-element-title text-xl font-semibold text-cyan-500">
            First Steps in Coding
          </h3>
          <h6 className="text-sm pt-6">
            My initial experience with coding started with HTML, where I learned
            the basics of structuring web pages and creating simple websites.
          </h6>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: "rgb(15 23 42)" }}
          contentArrowStyle={{ borderRight: "7px solid  rgb(14 116 144)" }}
          iconStyle={{ background: "rgb(8 145 178)", color: "#fff" }}
          icon={<RiComputerLine />}
        >
          <h3 className="vertical-timeline-element-title  text-xl font-semibold text-cyan-500">
            Learning Python
          </h3>

          <h6 className="text-sm pt-6">
            After Learning some basics of website I started learning my first
            programming language which is Python.
          </h6>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: "rgb(15 23 42)" }}
          contentArrowStyle={{ borderRight: "7px solid  rgb(14 116 144)" }}
          iconStyle={{ background: "rgb(8 145 178)", color: "#fff" }}
          icon={<RiComputerLine />}
        >
          <h3 className="vertical-timeline-element-title text-xl font-semibold text-cyan-500">
            Discovering JavaScript & Backend Development
          </h3>
          <h6 className="text-sm pt-6">
            To enhance my web development skills, I learned JavaScript, which
            added interactivity to my projects. I then moved on to backend
            development, mastering Node.js and Express.js to build robust
            server-side applications.
          </h6>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: "rgb(15 23 42)" }}
          contentArrowStyle={{ borderRight: "7px solid  rgb(14 116 144)" }}
          iconStyle={{ background: "rgb(8 145 178)", color: "#fff" }}
          icon={<SiInternetcomputer />}
        >
          <h3 className="vertical-timeline-element-title  text-xl font-semibold text-cyan-500">
            Mastering the MERN Stack
          </h3>

          <h6 className="text-sm pt-6">
            My goal to become a full stack developer led me to the MERN stack. I
            focused on MongoDB, Express.js, React, and Node.js, enabling me to
            create comprehensive, dynamic web applications.
          </h6>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: "rgb(15 23 42)" }}
          contentArrowStyle={{ borderRight: "7px solid  rgb(14 116 144)" }}
          iconStyle={{ background: "rgb(8 145 178)", color: "#fff" }}
          icon={<IoBuild />}
        >
          <h3 className="vertical-timeline-element-title text-xl font-semibold text-cyan-500">
            Building Real Projects
          </h3>
          <h6 className="text-sm pt-6">
            Applying my knowledge, I developed several personal projects ranging
            from simple websites to complex applications. These projects not
            only honed my technical skills but also taught me valuable lessons
            in problem-solving.
          </h6>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: "rgb(15 23 42)" }}
          contentArrowStyle={{ borderRight: "7px solid  rgb(14 116 144)" }}
          iconStyle={{ background: "rgb(8 145 178)", color: "#fff" }}
          icon={<GiStairsGoal />}
        >
          <h3 className="vertical-timeline-element-title  text-xl font-semibold text-cyan-500">
            Continuous Learning
          </h3>

          <h6 className="text-sm pt-6">
            The tech industry is ever-evolving, and I am committed to staying
            up-to-date with the latest trends and technologies. I regularly
            participate in online courses, webinars, and coding challenges to
            keep my skills sharp and relevant.
          </h6>
        </VerticalTimelineElement>
      </VerticalTimeline>
    </div>
  );
};

export default Timeline;
