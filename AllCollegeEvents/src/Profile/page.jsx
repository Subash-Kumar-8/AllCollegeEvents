import React from "react";
import styles from './style.module.css';
import { CgProfile } from "react-icons/cg";
import Header from "../Components/Header";
import { CiSettings } from "react-icons/ci";
import { IoIosLogOut } from "react-icons/io";
import { useNavigate } from "react-router-dom";

const users =[
    {
        name: "Subash Kumar",
        email: "subashkumar123ak@gmail.com",
        password: 'Subash@123',
        followers: 0,
        following: 0,
        rank: 1,
        saved: null
    }
];

const Profile = () => {
    const navigate  = useNavigate();
    return(
        <div className={styles.container}>
            <Header />
            <div className={styles.content}>
                <div className={styles.profileSide}>
                    <div className={styles.Settings}>
                        <div className={styles.head}>
                            <CgProfile size={22}/>
                            <h3>Profile Settings</h3>
                        </div>
                        <h5>Personal Info</h5>
                        <h5>Security</h5>
                        <h5>Account</h5>
                    </div>
                    <div className={styles.Settings}>
                        <div className={styles.head}>
                            <CiSettings size={22}/>
                            <h3>General Settings</h3>
                        </div>
                        <h5>Theme</h5>
                        <h5>Notifications</h5>
                        <h5>Accessiblity</h5>
                        <h5>Language</h5>
                    </div>
                    <div className={styles.head} onClick={() => navigate('/signin')}>
                        <IoIosLogOut size={22}/>
                        <h3>Logout</h3>
                    </div>
                </div>
                <div className={styles.right}>
                    <div className={styles.info}>
                        <div className={styles.topSection}></div>
                        <div className={styles.bottomSection}>
                            <div className={styles.profileRow}>
                            <div className={styles.avatar}>
                                <CgProfile size={50}/>
                            </div>

                            <div className={styles.userInfo}>
                                <h2>{users[0].name.toUpperCase()}</h2>
                                <p>
                                <span className={styles.blue}>{users[0].followers} Followers</span> ·{" "}
                                <span className={styles.blue}>{users[0].following} Following</span>
                                </p>
                                <p className={styles.rank}>#{users[0].rank} Rank</p>
                            </div>
                            </div>

                            <div className={styles.infoBox}>
                            <div>
                                <p className={styles.label}>Full Name</p>
                                <p>{users[0].name}</p>
                            </div>

                            <div>
                                <p className={styles.label}>E-mail</p>
                                <p>{users[0].email}</p>
                            </div>
                            </div>
                        </div>
                    </div>
                    <div className={styles.saved}>
                        <h1>Saved Events</h1>
                        <h2>{users[0].saved? saved: "Nothing to show"}</h2>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Profile;