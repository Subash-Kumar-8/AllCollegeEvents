import React from "react";
import Header from "../Components/Header";
import styles from "./style.module.css";
import Sparkle from "../assets/sparkle.svg";
import Button from "../Components/Buttons/btn";
import { BiCategory } from "react-icons/bi";
import { CiLocationOn } from "react-icons/ci";
import { SlCalender } from "react-icons/sl";
import { events } from "../Data/Events/events.js";
import EventSection from "../Components/EventSection";
import { useNavigate } from "react-router-dom";
import { organisers } from "../Data/organizers.js";
import Bottom from '../assets/Bottom.jpg';
import Foot from '../assets/Foot.jpg';

const Home = () => {
  const navigate = useNavigate();
  const currentYear = new Date().getFullYear();
  return (
    <div className={styles.container}>
      <Header />

      <div className={styles.content}>
        <h1>What Event would you like to go to ?</h1>
        <p>Discover events that match your vibes-anytime, anywhere</p>

        <div className={styles.exploreBtn}>
          <img src={Sparkle} alt="sparkle" />
          <Button
            variant="primary"
            onClick={() => navigate("/explore")}
          >
            Explore Events
          </Button>
        </div>

        <div className={styles.movingBox}>
          <div className={styles.track}>
            <img src="/Rolling Images/Img_1.jpg" alt="" />
            <img src="/Rolling Images/Img_2.jpg" alt="" />
            <img src="/Rolling Images/Img_3.jpg" alt="" />
            <img src="/Rolling Images/Img_4.jpg" alt="" />
            <img src="/Rolling Images/Img_5.jpg" alt="" />
            <img src="/Rolling Images/Img_6.jpg" alt="" />
            <img src="/Rolling Images/Img_7.jpg" alt="" />
            
            <img src="/Rolling Images/Img_1.jpg" alt="" />
            <img src="/Rolling Images/Img_2.jpg" alt="" />
            <img src="/Rolling Images/Img_3.jpg" alt="" />
            <img src="/Rolling Images/Img_4.jpg" alt="" />
            <img src="/Rolling Images/Img_5.jpg" alt="" />
            <img src="/Rolling Images/Img_6.jpg" alt="" />
            <img src="/Rolling Images/Img_7.jpg" alt="" />
          </div>
        </div>

        <div className={styles.box}>
          <div className={styles.innerBox}>
            <BiCategory size={25} />
            <div className={styles.contentBox}>
              <p>What</p>
              <p>Event Type</p>
            </div>
          </div>

          <div className={styles.innerBox}>
            <CiLocationOn size={25} />
            <div className={styles.contentBox}>
              <p>Where</p>
              <p>Event Location</p>
            </div>
          </div>

          <div className={styles.innerBox}>
            <SlCalender size={25} />
            <div className={styles.contentBox}>
              <p>When</p>
              <p>Event Date</p>
            </div>
          </div>
        </div>

        <div className={styles.events}>
          <EventSection title="Trending Events" events={events} />
          <EventSection title="Virtual Events" events={events} />
        </div>
        <div className={styles.organizeGroup}>
            <h1>Our Top Organizers</h1>
            <div className={styles.organizeBox}>
              {organisers.map((organize)=>(
                <div className={styles.organizer}>
                  <div className={styles.circle}>
                    <h1>{organize.first}</h1>
                  </div>
                  <h4>{organize.name}</h4>
                </div>
              ))}
            </div>
          </div>
          <EventSection title="Upcomming Events" events={events} />
          <div className={styles.last}>
            <img src={Bottom} alt="" />
            <img src={Foot} alt="" />
          </div>
      </div>
      <div className={styles.footer}>
        <p>&copy; {currentYear} All College Event. All rights reserved</p> 
      </div>
    </div>
  );
};

export default Home;