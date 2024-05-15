import React from 'react';
import './styles.css';
import './index.css';
function Tool() {
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
                <h1 style={{ marginBottom: '2rem', color: '#2c3e50', fontFamily: 'Comic Sans MS' }}>Software and Tools Expertise</h1>
                    <div style={inputRowStyle}>
                        <label style={labelStyle}>Enter the Software or tools that you are expertise </label>
                        <input type="text" style={{ ...inputStyle, fontFamily: 'Comic Sans MS' }} placeholder='e.g: Figma, Github, etc'/>
                    </div>
                    <div style={inputRowStyle}>
                        <label style={labelStyle}>Give the sample work in URL (like in drive or Github link) </label>
                        <input type="url" style={{ ...inputStyle, fontFamily: 'Comic Sans MS' }} placeholder='https://example.com'/>
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
  marginBottom: '80px',
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
 
export default Tool;
