import React from "react";
import styles from'./sidebar.module.css';

const Sidebar = () => {
    return(
        <div className={styles.sidebar}>
            <div className={styles.top}>
                <h1>Filter</h1>
                <h2>Reset</h2>
            </div>
            <div className={styles.checkContainer}>
                <div className={styles.check}>
                    <input type="checkbox" />
                    <h4>Featured Events</h4>
                </div>
                <div className={styles.check}>
                    <input type="checkbox" />
                    <h4>Trending Events</h4>
                </div>
            </div>
            <div className={styles.checkContainer}>
                <h2>Event Date</h2>
                <input type="date" className={styles.date}/>
            </div>
            <div className={styles.checkContainer}>
                <h2>Mode of Event</h2>
                <div className={styles.check}>
                    <input type="checkbox" name="" id="" />
                    <h4>ONLINE</h4>
                </div>
                <div className={styles.check}>
                    <input type="checkbox" name="" id="" />
                    <h4>OFFLINE</h4>
                </div>
                <div className={styles.check}>
                    <input type="checkbox" name="" id="" />
                    <h4>HYBRID</h4>
                </div>
            </div>
            <div className={styles.checkContainer}>
                <h2>Eligible Department</h2>
                <select name="" className={styles.dropbox}>
                    <option value="placeholder">Select Department</option>
                    <option value="aids">Artificial Intelligence & Data Science</option>
                    <option value="arts">Arts, Humanities & Cultural Studies</option>
                    <option value="banking">Banking, Insurance & Financial Services</option>
                    <option value="civil">Civil & Infrastructure Engineering</option>
                    <option value="cs">Computer Science & Information Technology</option>
                    <option value="complince">Corporate  Law & Complaince</option>
                    <option value="admin">Corporate Services & Administration</option>
                    <option value="customer">Customer Services & Support</option>
                    <option value="security">Cyber Secutity & Information Security</option>
                    <option value="analytics">Data Analytics & Business Intelligence</option>
                    <option value="digital">Digital Marketing & E-Commerce</option>
                    <option value="education">Education, Training & Skill Development</option>
                    <option value="eee">Electrical & Electronics Engineering</option>
                    <option value="tech">Engineering & Technology</option>
                    <option value="innovation">Entrepreneurship & Innovation</option>
                    <option value="ess">Environmental Science & Sustainability</option>
                    <option value="facilities">Facilities operations & Infrastructure Support</option>
                    <option value="film">Film, Television & performing Arts</option>
                    <option value="finance">Finance, Accounting & Economics</option>
                    <option value="fitness">Fitness Wellness & Mental Health</option>
                    <option value="general">General / Open to All Departments</option>
                    <option value="helthcare">Healthcare & Medical Sciences</option>
                    <option value="hrm">Human Resource Management</option>
                    <option value="it">IT Support & Systems Administration</option>
                    <option value="law">Law & Legal Studies</option>
                    <option value="life">Life Science & Biotechnology</option>
                    <option value="management">Management & Business Administration</option>
                    <option value="manufaturing">Manufacturing & Industrial Engineering</option>
                    <option value="marketing">Marketing, Sales & Growth</option>
                    <option value="material">material Science & Nanotechnology</option>
                    <option value="mech">Mechanincal Engineering</option>
                    <option value="media">Media, Journalism & Mass Communication</option>
                    <option value="operation">Operations & Process Management</option>
                    <option value="physics">Physics, Chemistry & Mathematics</option>
                    <option value="policy">Policy, Economics & Development Studies</option>
                    <option value="product">Product Management & Stragergy</option>
                    <option value="public">Public Administration & Governance</option>
                    <option value="public-health">Public Health & Applied Health Science</option>
                    <option value="quality">Quality Assurance & Compliance</option>
                    <option value="rnd">Research & Development (R&D)</option>
                    <option value="risk">Risk Management & Governance</option>
                    <option value="robotics">Robotics, Automation & IoT</option>
                    <option value="sales">Sales operation & Business Development</option>
                    <option value="science">Science & Applied Sciences</option>
                    <option value="software">Software Engineering</option>
                    <option value="sports">Sports Science & Physical Education</option>
                    <option value="startup">Start-Up</option>
                    <option value="supply">Supply Chain, Logistics & Procurement</option>
                    <option value="uiux">UI/UX, Animation & Multimedia</option>
                    <option value="visual">Visual Communication & Graphic Design</option>
                </select>
            </div>
            <div className={styles.checkContainer}>
                <h2>Price Range</h2>
                <select name="" className={styles.dropbox}>
                    <option value="placeholder">Select Price Range</option>
                    <option value="free">Free</option>
                    <option value="below-500">Below 500</option>
                    <option value="500-1000">500 to 1000</option>
                    <option value="1000-3000">1001 to 3000</option>
                    <option value="3000-5000">3001 to 5000</option>
                    <option value="above-5000">Above 5000</option>
                </select>
            </div>
            <div className={styles.checkContainer}>
                <h2>Perks</h2>
                <div className={styles.check}>
                    <input type="checkbox" name="" />
                    <h4>Cash</h4>
                </div>
                <div className={styles.check}>
                    <input type="checkbox" name="" />
                    <h4>Aeard</h4>
                </div>
                <div className={styles.check}>
                    <input type="checkbox" name="" />
                    <h4>Medal</h4>
                </div>
            </div>
            <div className={styles.checkContainer}>
                <h2>Certifiate Type</h2>
                <select name="" className={styles.dropbox}>
                    <option value="placeholder">Select Certifiacte Type</option>
                    <option value="all">Provided for All</option>
                    <option value="winner">Exclusively for Winners</option>
                    <option value="not">Not Provided</option>
                </select>
            </div>
            <div className={styles.checkContainer}>
                <h2>Accomodation</h2>
                <div className={styles.check}>
                    <input type="checkbox" name="" />
                    <h4>Stay</h4>
                </div>
                <div className={styles.check}>
                    <input type="checkbox" name="" />
                    <h4>Travel Assistance</h4>
                </div>
                <div className={styles.check}>
                    <input type="checkbox" name="" />
                    <h4>Wi-Fi</h4>
                </div>
                <div className={styles.check}>
                    <input type="checkbox" name="" />
                    <h4>Food</h4>
                </div>
                <div className={styles.check}>
                    <input type="checkbox" name="" />
                    <h4>Parking</h4>
                </div>
                <div className={styles.check}>
                    <input type="checkbox" name="" />
                    <h4>Medical Assistance</h4>
                </div>
                <div className={styles.check}>
                    <input type="checkbox" name="" />
                    <h4>Restrooms</h4>
                </div>
                <div className={styles.check}>
                    <input type="checkbox" name="" />
                    <h4>Accessibility Support</h4>
                </div>
                <div className={styles.check}>
                    <input type="checkbox" name="" />
                    <h4>Event Kit</h4>
                </div>
                
            </div>
        </div>
    );
};

export default Sidebar;