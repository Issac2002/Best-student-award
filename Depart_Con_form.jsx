import React, { useState } from 'react';
// Import the CSS file
import './styles.css';
import './index.css';
function Depart_Con() {
    const [selectedStaff, setSelectedStaff] = useState("");

    const handleFormSubmit = (event) => {
        // Add your form submission logic here
        event.preventDefault();
        // Reset the selected staff after form submission
        setSelectedStaff("");
    };

    return (
        <>        
            <div className='container'>
        <div className="top_bar">
            <img src='../src/images/sjc.jpg'/>
            <p className='dept_name'>DEPARTMENT OF COMPUTER SCIENCE</p>
            <p className="college_name">ST JOSEPH'S COLLLEGE, TRICHY <span>- 620001</span> <button className="logout-button" onClick={() => handleLogout()}>Logout</button></p>
            <p className='class_name'>MCA (2023 - 2025)</p>
        </div>
        </div>
        <div>
            <button style={backButtonStyle} onClick={() => window.location.href = 'dashboard.html'}>Back</button>
            <div style={containerStyle}>
                <div style={attStyle} className="animated-form">
                    <form style={formStyle} onSubmit={handleFormSubmit}>
                        <h1 style={{ marginBottom: '2rem', color: '#2c3e50', fontFamily: 'Comic Sans MS' }}>Department Contribution</h1>
                        <div style={inputRowStyle}>
                            <label style={labelStyle}>Choose the Semester</label>
                            <select style={{ ...inputStyle, fontFamily: 'Comic Sans MS' }}>
                                <option value="" disabled defaultValue>Select Semester</option>
                                <option>1</option>
                                <option>2</option>
                                <option>3</option>
                                <option>4</option>
                            </select>
                        </div>
                        <div style={inputRowStyle}>
                            <label style={labelStyle}>Select Staff in-Charge</label>
                            <select style={{ ...inputStyle, fontFamily: 'Comic Sans MS' }} value={selectedStaff} onChange={(e) => setSelectedStaff(e.target.value)}>
                                <option value="" disabled>Select Staff</option>
                                <option>Dr. Jude Nirmal V</option>
                                <option>Dr. Ravindran</option>
                                <option>Dr. Charles A</option>
                                <option>Dr. Vimal Jerald</option>
                                <option>Dr. Maheshwaran</option>
                                <option>Dr. Allosiyus</option>
                                <option>Dr. George Gabriel Richard Roy</option>
                            </select>
                        </div>
                        <div style={inputRowStyle}>
                            <label style={labelStyle}>Date</label>
                            <input type="date" style={{ ...inputStyle, fontFamily: 'Comic Sans MS' }} />
                        </div>
                        <div style={inputRowStyle}>
                            <label style={labelStyle}>Your Role</label>
                            <input type="text" style={{ ...inputStyle, fontFamily: 'Comic Sans MS' }} />
                        </div>
                        <div style={buttonContainerStyle}>
                            <button type="submit" style={{ ...buttonStyle, fontFamily: 'Comic Sans MS' }} className="button-animation">Submit</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
        </>
    );
}

const containerStyle = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
};

const attStyle = {
    color: "#fff",
    padding: "2rem",
    borderRadius: "1rem",
    border: "2px solid #FFD700",
    textAlign: 'center',
    fontFamily: "Arial",
    width: '400px',
    backgroundColor: '#4169E1',
    boxShadow: '0 0 20px rgba(0, 0, 0, 0.5)',
    marginBottom: '-90px',
};

const formStyle = {
    display: 'grid',
    gap: '1.5rem',
    width: '100%',
};

const inputRowStyle = {
    display: 'grid',
    gridTemplateColumns: '1fr',
    marginBottom: '1rem',
};

const labelStyle = {
    marginBottom: '0.5rem',
    textAlign: 'left',
    fontWeight: 'bold',
    color: '#FFD700',
};

const inputStyle = {
    padding: '0.5rem',
    borderRadius: '.5rem',
    border: '2px solid #FFD700',
    width: '100%',
    transition: 'border-color 0.3s ease',
};

const buttonContainerStyle = {
    display: 'flex',
    justifyContent: 'center',
};

const buttonStyle = {
    padding: '0.5rem 1rem',
    borderRadius: '.5rem',
    border: 'none',
    backgroundColor: '#FFD700',
    color: '#4169E1',
    cursor: 'pointer',
    transition: 'background-color 0.3s ease',
};

const backButtonStyle = {
    position: 'absolute',
    top: '200px',
    left: '30px',
    padding: '0.5rem 1rem',
    borderRadius: '.5rem',
    border: 'none',
    backgroundColor: '#FFD700',
    color: '#4169E1',
    cursor: 'pointer',
    transition: 'background-color 0.3s ease',
};

export default Depart_Con;
