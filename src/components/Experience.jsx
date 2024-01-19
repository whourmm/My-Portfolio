import * as React from "react";
import Timeline from "@mui/lab/Timeline";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineOppositeContent from "@mui/lab/TimelineOppositeContent";
import TimelineDot from "@mui/lab/TimelineDot";
import Typography from "@mui/material/Typography";
import { SectionWrapper } from "../hoc";
import { motion } from "framer-motion";
import { textVariant } from "../utils/motion";
import { styles } from "../styles";
import { Link } from "react-router-dom";

function CustomizedTimeline() {
  return (
    <>
      <motion.div variants={textVariant(0.5)}>
        <p className={`${styles.sectionSubText} ml-6`}>
          My recent achievements
        </p>
        <h2 className={`${styles.sectionHeadText} ml-6`}>Experience</h2>
      </motion.div>
      <motion.div variants={textVariant(0.7)}>
        <Timeline position="alternate">
          <TimelineItem>
            <TimelineOppositeContent
              sx={{ m: "auto 0" }}
              align="right"
              variant="title"
              color="white"
            >
              2020-2022
            </TimelineOppositeContent>
            <TimelineSeparator>
              <TimelineConnector />
              <TimelineDot color="primary" variant="outlined"></TimelineDot>
              <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent sx={{ py: "50px", px: 2 }}>
              <Typography variant="h6" component="div">
                Physics Olympic Competition, POSN
              </Typography>
              <Typography variant="h10" color="#9DA0BF">
                BRONZE Medal in TPHO 21th
              </Typography>
            </TimelineContent>
          </TimelineItem>
          <TimelineItem>
            <TimelineOppositeContent
              sx={{ m: "auto 0" }}
              variant="title"
              color="white"
            >
              2021
            </TimelineOppositeContent>
            <TimelineSeparator>
              <TimelineConnector />
              <TimelineDot color="primary" variant="outlined"></TimelineDot>
              <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent sx={{ py: "50px", px: 2 }}>
              <Typography variant="h6" component="div">
                Coding Competition KU01
              </Typography>
              <Typography variant="h10" color="#9DA0BF">
                TOP 50% programmer
              </Typography>
            </TimelineContent>
          </TimelineItem>
          <TimelineItem>
            <TimelineOppositeContent
              sx={{ m: "auto 0" }}
              align="right"
              variant="title"
              color="white"
            >
              2023
            </TimelineOppositeContent>
            <TimelineSeparator>
              <TimelineConnector />
              <TimelineDot color="primary" variant="outlined"></TimelineDot>
              <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent sx={{ py: "50px", px: 2 }}>
              <Typography variant="h6" component="div">
                Digital Content Lab (CEA x PTT) Contest
              </Typography>
              <Typography variant="h10" color="#9DA0BF">
                TOP 6 Finalists in the Project Pitching Rounds
              </Typography>
            </TimelineContent>
          </TimelineItem>
          <TimelineItem>
            <TimelineOppositeContent
              sx={{ m: "auto 0" }}
              variant="title"
              color="white"
            >
              2019-2022
            </TimelineOppositeContent>
            <TimelineSeparator>
              <TimelineConnector />
              <TimelineDot color="primary" variant="outlined"></TimelineDot>
              <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent sx={{ py: "50px", px: 2 }}>
              <Typography variant="h6" component="div">
                Computer Science Project (SCiUS)
              </Typography>
              <Typography variant="h10" color="#9DA0BF">
                BRONZE Medal in 12th SCiUS Forum{" "}
              </Typography>
            </TimelineContent>
          </TimelineItem>
        </Timeline>
      </motion.div>
    </>
  );
}
export default SectionWrapper(CustomizedTimeline, "experience");
