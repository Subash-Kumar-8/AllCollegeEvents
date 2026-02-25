import React from "react";
import "./menubar.css";
import { useNavigate } from "react-router-dom";
import { BiCategoryAlt } from "react-icons/bi";

const MenuBar = ({ opened, setOpened }) => {
  const navigate = useNavigate();

  const handleNavigate = (path) => {
    navigate(path);
    setOpened(false);
  };

  return (
    <>
      {/* Dark Background Overlay */}
      <div
        className={`backdrop ${opened ? "show" : ""}`}
        onClick={() => setOpened(false)}
      />

      {/* Sidebar */}
      <div className={`sidebar ${opened ? "active" : ""}`}>
        <div className="sidebar-header">
          <BiCategoryAlt size={22} />
          <h3>Select Your Category</h3>
        </div>

        <div className="menu-list">
          <div className="menu" onClick={() => handleNavigate("/explore")}>
            <img src="/Icons/Alumni.svg" alt="" />
            <h3>Alumni Meets</h3>
          </div>

          <div className="menu" onClick={() => handleNavigate("/explore")}>
            <img src="/Icons/art-gallery.svg" alt="" />
            <h3>Art Gallery</h3>
          </div>
          <div className="menu" onClick={() => navigate('/explore')}>
                <img src="/Icons/Athelete.svg" alt="" />
                <h3>Athletic Meets</h3> 
            </div>
            <div className="menu" onClick={() => navigate('/explore')}>
                <img src="/Icons/training.svg" alt="" />
                <h3>Awareness Program</h3> 
            </div>
            <div className="menu" onClick={() => navigate('/explore')}>
                <img src="/Icons/blood-donation.svg" alt="" />
                <h3>Blood Donation Camps</h3> 
            </div>
            <div className="menu" onClick={() => navigate('/explore')}>
                <img src="/Icons/Festival.svg" alt="" />
                <h3>Civic Festival</h3> 
            </div>
            <div className="menu" onClick={() => navigate('/explore')}>
                <img src="/Icons/comedy.svg" alt="" />
                <h3>Comedy Shows</h3> 
            </div>
            <div className="menu" onClick={() => navigate('/explore')}>
                <img src="/Icons/seminar.svg" alt="" />
                <h3>Conferences</h3> 
            </div>
            <div className="menu" onClick={() => navigate('/explore')}>
                <img src="/Icons/Cultural Event.svg" alt="" />
                <h3>Cultural Events</h3> 
            </div>
            <div className="menu" onClick={() => navigate('/explore')}>
                <img src="/Icons/dancing.svg" alt="" />
                <h3>Dance Competition</h3> 
            </div>
            <div className="menu" onClick={() => navigate('/explore')}>
                <img src="/Icons/expo.svg" alt="" />
                <h3>Expo & Trade Shows</h3> 
            </div>
            <div className="menu" onClick={() => navigate('/explore')}>
                <img src="/Icons/Fashion Show.svg" alt="" />
                <h3>Fashion Show</h3> 
            </div>
            <div className="menu" onClick={() => navigate('/explore')}>
                <img src="/Icons/dumbbell.svg" alt="" />
                <h3>Fitness Challenges</h3> 
            </div>
            <div className="menu" onClick={() => navigate('/explore')}>
                <img src="/Icons/restaurant.svg" alt="" />
                <h3>Food Festival</h3> 
            </div>
            <div className="menu" onClick={() => navigate('/explore')}>
                <img src="/Icons/presentation.svg" alt="" />
                <h3>Guest Lectures</h3> 
            </div>
            <div className="menu" onClick={() => navigate('/explore')}>
                <img src="/Icons/hackathon.svg" alt="" />
                <h3>Hackathon</h3> 
            </div>
            <div className="menu" onClick={() => navigate('/explore')}>
                <img src="/Icons/businessman.svg" alt="" />
                <h3>Job Fairs</h3> 
            </div>
            <div className="menu" onClick={() => navigate('/explore')}>
                <img src="/Icons/Magic.svg" alt="" />
                <h3>Magic Shows</h3> 
            </div>
            <div className="menu" onClick={() => navigate('/explore')}>
                <img src="/Icons/marathon.svg" alt="" />
                <h3>Marathon</h3> 
            </div>
            <div className="menu" onClick={() => navigate('/explore')}>
                <img src="/Icons/Meetup.svg" alt="" />
                <h3>Meetups</h3> 
            </div>
            <div className="menu" onClick={() => navigate('/explore')}>
                <img src="/Icons/brain.svg" alt="" />
                <h3>Mental Wellness</h3> 
            </div>
            <div className="menu" onClick={() => navigate('/explore')}>
                <img src="/Icons/musical-note.svg" alt="" />
                <h3>Music Festivals</h3> 
            </div>
            <div className="menu" onClick={() => navigate('/explore')}>
                <img src="/Icons/Art.svg" alt="" />
                <h3>Painting</h3> 
            </div>
            <div className="menu" onClick={() => navigate('/explore')}>
                <img src="/Icons/prayer.svg" alt="" />
                <h3>Prayer Meeting</h3> 
            </div>
            <div className="menu" onClick={() => navigate('/explore')}>
                <img src="/Icons/training(1).svg" alt="" />
                <h3>STTP</h3> 
            </div>
            <div className="menu" onClick={() => navigate('/explore')}>
                <img src="/Icons/Stage.svg" alt="" />
                <h3>Stage Plays</h3> 
            </div>
            <div className="menu" onClick={() => navigate('/explore')}>
                <img src="/Icons/start-up.svg" alt="" />
                <h3>Startup Events</h3> 
            </div>
            <div className="menu" onClick={() => navigate('/explore')}>
                <img src="/Icons/speaker.svg" alt="" />
                <h3>Symposium</h3> 
            </div>
            <div className="menu" onClick={() => navigate('/explore')}>
                <img src="/Icons/Tech.svg" alt="" />
                <h3>Technical Events</h3> 
            </div>
            <div className="menu" onClick={() => navigate('/explore')}>
                <img src="/Icons/tournament.svg" alt="" />
                <h3>Tournament</h3> 
            </div>
            <div className="menu" onClick={() => navigate('/explore')}>
                <img src="/Icons/training(1).svg" alt="" />
                <h3>Training Programs</h3> 
            </div>
            <div className="menu" onClick={() => navigate('/explore')}>
                <img src="/Icons/console.svg" alt="" />
                <h3>Video Games</h3> 
            </div>
            <div className="menu" onClick={() => navigate('/explore')}>
                <img src="/Icons/webinar.svg" alt="" />
                <h3>Webinars</h3> 
            </div>
            <div className="menu" onClick={() => navigate('/explore')}>
                <img src="/Icons/screwdriver.svg" alt="" />
                <h3>Workshops</h3> 
            </div>
        </div>
      </div>
    </>
  );
};

export default MenuBar;