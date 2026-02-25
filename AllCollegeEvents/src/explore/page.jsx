import React, { useState } from "react";
import styles from "./style.module.css";
import Header from "../Components/Header";
import { CiBookmark, CiSearch } from "react-icons/ci";
import { FaArrowLeft, FaArrowRight, FaRegHeart } from "react-icons/fa";
import { SlCalender } from "react-icons/sl";
import { FaStar, FaRegStar, FaStarHalfAlt } from "react-icons/fa";
import Sidebar from "../Components/sidebar";
import Button from "../Components/Buttons/btn";
import { events } from "../Data/Events/events";

const ExploreEvents = () => {
  const [currentPage, setCurrentPage] = useState(1);

  const eventsPerPage = 6;
  const indexOfLastEvent = currentPage * eventsPerPage;
  const indexOfFirstEvent = indexOfLastEvent - eventsPerPage;
  const currentEvents = events.slice(indexOfFirstEvent, indexOfLastEvent);
  const totalPages = Math.ceil(events.length / eventsPerPage);

  return (
    <div className={styles.container}>
      <Header />

      <div className={styles.content}>
        <Sidebar />

        <div className={styles.innerBox}>
          <div className={styles.top}>
            <div className={styles.searchBox}>
              <CiSearch size={20} />
              <input placeholder="Search events..." />
            </div>
          </div>

          <div className={styles.innerContent}>
            {currentEvents.map((event) => (
              <div className={styles.box} key={event.id}>
                <img src={event.image} alt={event.name} />

                <div className={styles.boxContent}>
                  <div className={styles.boxHead}>
                    <h2>{event.name}</h2>
                    <div className={styles.iconGroup}>
                      <FaRegHeart />
                      <CiBookmark />
                    </div>
                  </div>

                  <h4 className={styles.eventMeta}>
                    <SlCalender /> {event.date} | {event.location} | Mode -{" "}
                    {event.mode}
                  </h4>

                  <div className={styles.cardBottom}>
                    <div className={styles.typebox}>
                      <h4>{event.type}</h4>
                    </div>

                    <div className={styles.ratingBox}>
                      <div className={styles.rating}>
                        {[1, 2, 3, 4, 5].map((star, index) => {
                          if (event.rating >= star) {
                            return <FaStar key={index} color="#facc15" />;
                          } else if (event.rating >= star - 0.5) {
                            return <FaStarHalfAlt key={index} color="#facc15" />;
                          } else {
                            return <FaRegStar key={index} color="#facc15" />;
                          }
                        })}
                      </div>
                      <p>Rating: {event.rating}/5</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className={styles.pagination}>
            <Button
              variant="tertiary"
              disabled={currentPage === 1}
              onClick={() => setCurrentPage(currentPage - 1)}
            >
              <FaArrowLeft /> Prev
            </Button>

            {[...Array(totalPages)].map((_, index) => (
              <Button
                key={index}
                variant={
                  currentPage === index + 1 ? "secondary" : "tertiary"
                }
                onClick={() => setCurrentPage(index + 1)}
              >
                {index + 1}
              </Button>
            ))}

            <Button
              variant="tertiary"
              disabled={currentPage === totalPages}
              onClick={() => setCurrentPage(currentPage + 1)}
            >
              Next <FaArrowRight />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExploreEvents;