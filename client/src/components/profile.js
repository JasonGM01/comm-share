import React, { useState } from "react";

function Profile() {
  const [editing, setEditing] = useState(false);

  const [profile, setProfile] = useState({
    name: "Your Name",
    about: "Write something about yourself...",
    skills: ["JavaScript", "React"],
    image: "https://via.placeholder.com/150"
  });

  const handleChange = (e) => {
    setProfile({ ...profile, [e.target.name]: e.target.value });
  };

  const handleSkillsChange = (e) => {
    setProfile({
      ...profile,
      skills: e.target.value.split(",").map(s => s.trim())
    });
  };

  const styles = {
    page: {
      minHeight: "100vh",
      background: "linear-gradient(to bottom right, #f8fafc, #ecfdf5)",
      display: "flex",
      justifyContent: "center",
      padding: "40px 20px",
      fontFamily: "Arial, sans-serif"
    },
    card: {
      width: "100%",
      maxWidth: "600px",
      background: "white",
      borderRadius: "16px",
      padding: "24px",
      boxShadow: "0 10px 25px rgba(0,0,0,0.08)",
      textAlign: "center"
    },
    avatar: {
      width: "120px",
      height: "120px",
      borderRadius: "50%",
      objectFit: "cover",
      marginBottom: "12px",
      border: "3px solid #10b981"
    },
    input: {
      width: "90%",
      padding: "10px",
      margin: "8px 0",
      borderRadius: "8px",
      border: "1px solid #ddd"
    },
    textarea: {
      width: "90%",
      padding: "10px",
      margin: "8px 0",
      borderRadius: "8px",
      border: "1px solid #ddd",
      minHeight: "80px"
    },
    button: {
      padding: "10px 16px",
      marginTop: "12px",
      border: "none",
      borderRadius: "8px",
      cursor: "pointer",
      backgroundColor: "#10b981",
      color: "white",
      fontWeight: "bold"
    },
    secondaryButton: {
      backgroundColor: "#6b7280"
    },
    skills: {
      display: "flex",
      justifyContent: "center",
      flexWrap: "wrap",
      gap: "8px",
      marginTop: "10px"
    },
    badge: {
      background: "#ecfdf5",
      color: "#047857",
      padding: "6px 10px",
      borderRadius: "20px",
      fontSize: "12px"
    }
  };

  return (
    <div style={styles.page}>
      <div style={styles.card}>
        <h1 style={{ marginBottom: "20px" }}>Profile</h1>

        <img src={profile.image} alt="profile" style={styles.avatar} />

        {editing ? (
          <div>
            <input
              style={styles.input}
              name="image"
              value={profile.image}
              onChange={handleChange}
              placeholder="Image URL"
            />

            <input
              style={styles.input}
              name="name"
              value={profile.name}
              onChange={handleChange}
              placeholder="Name"
            />

            <textarea
              style={styles.textarea}
              name="about"
              value={profile.about}
              onChange={handleChange}
              placeholder="About Me"
            />

            <input
              style={styles.input}
              value={profile.skills.join(",")}
              onChange={handleSkillsChange}
              placeholder="Skills (comma separated)"
            />

            <button style={styles.button} onClick={() => setEditing(false)}>
              Save Profile
            </button>
          </div>
        ) : (
          <div>
            <h2>{profile.name}</h2>
            <p style={{ color: "#555" }}>{profile.about}</p>

            <h3 style={{ marginTop: "20px" }}>Skills</h3>
            <div style={styles.skills}>
              {profile.skills.map((skill, index) => (
                <span key={index} style={styles.badge}>
                  {skill}
                </span>
              ))}
            </div>

            <button style={styles.button} onClick={() => setEditing(true)}>
              Edit Profile
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

export default Profile;
