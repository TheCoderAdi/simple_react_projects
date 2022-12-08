import React, { useState } from "react";
import "./Project_Styles/profile.css";
import { profileData } from "./profile-data";
import { FaTrashAlt } from "react-icons/fa";
import { Link } from "react-router-dom";
import { BiArrowBack } from "react-icons/bi";

const Profile = () => {
  const [user, setUser] = useState(profileData);
  const [search, setSearch] = useState("");

  const handleInputChange = (e) => {
    setSearch(e.target.value);
  };
  const removeProfile = (id) => {
    const newUser = user.filter((profile) => profile.id !== id);
    setUser(newUser);
  };
  return (
    <section className="profile-sec">
      <div className="profileContainer">
        <h2 className="profileHeading">Profile App</h2>
        <div className="formProfile" style={{ width: "100%" }}>
          <input
            type="text"
            placeholder="Enter Search term...."
            className="inputProfile"
            onChange={handleInputChange}
            value={search}
            style={{ width: "100%", padding: "1rem" }}
          />
        </div>
        {user // eslint-disable-next-line
          .filter((value) => {
            if (search === "") {
              return value;
            } else if (
              value.name.toLowerCase().includes(search.toLowerCase())
            ) {
              return value;
            }
          })
          .map((profile) => (
            <div className="profileMain" key={profile.id}>
              {profile.img}
              <div className="desc">
                <h4>Name: {profile.name}</h4>
                <p>Job: {profile.job}</p>
              </div>
              <FaTrashAlt
                style={{ fontSize: "1.5rem", color: "#fff", cursor: "pointer" }}
                className="deleteIcon"
                onClick={() => removeProfile(profile.id)}
              />
            </div>
          ))}
      </div>
      <div className="goToPage">
        <Link to="/projects">
          <button className="goBtn">
            <BiArrowBack style={{ fontSize: "1.5rem" }} />
          </button>
        </Link>
      </div>
    </section>
  );
};

export default Profile;
