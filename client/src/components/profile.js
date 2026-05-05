<<<<<<< Updated upstream
import React from "react";
import { useNavigate } from "react-router-dom";

function Profile({ user, setUser }) {
  const navigate = useNavigate();
  const [editing, setEditing] = React.useState(false);

  const [profile, setProfile] = React.useState({
    name: "",
    about: "",
    skills: [],
    image: "",
  });

  React.useEffect(() => {
    const fetchProfile = async () => {
      try {
        const res = await fetch("http://localhost:3001/api/me", {
          credentials: "include",
        });

        const data = await res.json();

        if (!res.ok) {
          setUser(null);
          navigate("/login");
          return;
        }

        setUser(data);

        setProfile({
          name: data.name || "",
          about: data.about || "",
          skills: data.skills || [],
          image: data.image || "",
        });
      } catch (err) {
        console.error(err);
        setUser(null);
        navigate("/login");
      }
    };

    fetchProfile();
  }, [navigate, setUser]);

  const handleChange = (e) => {
    setProfile({ ...profile, [e.target.name]: e.target.value });
  };

  const handleSkillsChange = (e) => {
    setProfile({
      ...profile,
      skills: e.target.value.split(",").map((s) => s.trim()),
    });
  };

  // 🔥 SAVE TO BACKEND
  const handleSave = async () => {
    try {
      const res = await fetch("http://localhost:3001/api/me", {
        method: "PUT",
        credentials: "include",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(profile),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.message || "Failed to save profile");
      }

      setUser(data);
      setProfile(data);
      setEditing(false);
    } catch (err) {
      console.error(err);
      alert("Could not save profile");
    }
  };

  const handleLogout = async () => {
    await fetch("http://localhost:3001/api/logout", {
      method: "POST",
      credentials: "include",
    });

    setUser(null);
    navigate("/login");
  };

  return (
    <div style={{ textAlign: "center", padding: "40px" }}>
      <h1>Profile</h1>

      <img
        src={profile.image || "https://via.placeholder.com/150"}
        alt="profile"
        style={{
          width: "120px",
          height: "120px",
          borderRadius: "50%",
          marginBottom: "10px",
        }}
      />

      {editing ? (
        <>
          <input name="image" value={profile.image} onChange={handleChange} placeholder="Image URL" />
          <br />

          <input name="name" value={profile.name} onChange={handleChange} placeholder="Name" />
          <br />

          <textarea name="about" value={profile.about} onChange={handleChange} placeholder="About" />
          <br />

          <input value={profile.skills.join(",")} onChange={handleSkillsChange} placeholder="Skills" />
          <br />

          <button onClick={handleSave}>Save Profile</button>
        </>
      ) : (
        <>
          <h2>{profile.name}</h2>
          <p>{profile.about}</p>

          <div>
            {profile.skills.map((skill, i) => (
              <span key={i} style={{ marginRight: "6px" }}>{skill}</span>
            ))}
          </div>

          <br />
          <button onClick={() => setEditing(true)}>Edit Profile</button>
          <br />
          <button onClick={handleLogout}>Logout</button>
        </>
      )}
    </div>
  );
=======
import React from 'react';

function Profile(){
    return (
        <div>code</div>
    );
>>>>>>> Stashed changes
}

export default Profile;