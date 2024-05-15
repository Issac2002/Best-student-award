// Attendance_form.jsx
import React from 'react';
import './styles.css';
import './index.css';
const Academy = () => {
    return (
        <>
            <div className='container'>
        <div className="top_bar">
            <img src='../src/images/sjc.jpg'/>
            <p className='dept_name'>DEPARTMENT OF COMPUTER SCIENCE</p>
            <p className="college_name">ST JOSEPH'S COLLLEGE, TRICHY <span>- 620001</span></p>
            <p className='class_name'>MCA (2023 - 2025)</p>
        </div>
        </div>
        <button className="logout-button" onClick={() => handleLogout()}>Logout</button>
        <div style={containerStyle}>
              <button style={backButtonStyle} onClick={() => window.location.href = 'dashboard.html'}>Back</button>
            <div style={attStyle} className="animated-form">
                <form style={formStyle}>
                    <h1 style={{ marginBottom: '2rem', color: '#2c3e50', fontFamily: 'Comic Sans MS' }}>Academic Activities</h1>
                    <div style={inputRowStyle}>
                        <label style={{ ...labelStyle }}>Choose the semester</label>
                        <select style={{ ...inputStyle, width: '200px', fontFamily: 'Comic Sans MS' }}>
                            <option>1</option>
                            <option>2</option>
                            <option>3</option>
                            <option>4</option>
                        </select>
                    </div>
                    <div style={inputRowStyle}>
                        <label style={{ ...labelStyle, textAlign: 'justify' }}>Enter the SGPA</label>
                        <input type="number" step="0.01" min="0" max="10" style={{ ...inputStyle, fontFamily: 'Comic Sans MS' }} placeholder="e.g: 8.6" />
                    </div>
                    <div style={inputRowStyle}>
                        <label style={{ ...labelStyle, textAlign: 'justify' }}>Enter the CGPA</label>
                        <input type="number" step="0.01" min="0" max="10" style={{ ...inputStyle, fontFamily: 'Comic Sans MS' }} placeholder="e.g: 8.8" />
                    </div>
                    <div style={buttonContainerStyle}>
                        <button style={buttonStyle} className="button-animation">Submit</button>
                    </div>
                </form>
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
    marginBottom: '30px',
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
export default Academy;
