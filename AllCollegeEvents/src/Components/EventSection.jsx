import React, { useRef } from "react";
import './EventCard.css';
import Button from "./Buttons/btn";
import { FaRegHeart } from "react-icons/fa";
import { IoChevronBack, IoChevronForward, IoEye, IoTicketOutline } from "react-icons/io5";
import { CiBookmark, CiLocationOn } from "react-icons/ci";
import { SlCalender } from "react-icons/sl";

const EventSection = ({ title, events }) => {
  const scrollRef = useRef(null);
  const scrollLeft = () => {
    scrollRef.current.scrollBy({
      left: -350,
      behavior: "smooth"
    });
  };
  const scrollRight = () => {
    scrollRef.current.scrollBy({
      left: 350,
      behavior: "smooth"
    });
  };
  return (
    <div className="eventBox">
      <h1>{title}</h1>
      <div className="movingBox">
        <div className="cards-container" ref={scrollRef}>
          {events.map((event) => (
            <div className="card" key={event.id}>
              <img src={event.image} alt={event.title} className="card-img" />

              <div className="title-row">
                <h3 className="title">{event.title}</h3>
                <div className="icon-group">
                  <FaRegHeart size={18} />
                  <CiBookmark size={18} />
                </div>
              </div>

              <div className="info">
                <div className="location">
                  <CiLocationOn size={22} />
                  {event.location}
                </div>

                <div className={`status ${event.mode?.toLowerCase()}`}>
                  {event.mode}
                </div>

                <div className="cost">
                  <IoTicketOutline size={22} />
                  {event.cost}
                </div>

                <div className="date">
                  <SlCalender size={22} />
                  {event.date}
                </div>

                <div className="visitors">
                  <IoEye size={22} />
                  {event.visitors}
                </div>

                <div className="type">
                  {event.type}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="bottom">
        <div className="chevronBox">
          <Button variant="primary" onClick={scrollLeft}>
            <IoChevronBack size={22} />
          </Button>

          <Button variant="primary" onClick={scrollRight}>
            <IoChevronForward size={22} />
          </Button>
        </div>

        <Button variant="tertiary" className="seeAllBtn">
          See All
        </Button>
      </div>
    </div>
  );
};

export default EventSection;