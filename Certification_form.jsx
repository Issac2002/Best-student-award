import React from 'react';
import './styles.css';
import './index.css';
function Certificate() {
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
                <h1 style={{ marginBottom: '2rem', color: '#2c3e50', fontFamily: 'Comic Sans MS' }}>Certification</h1>
                    <div style={inputRowStyle}>
                        <label style={labelStyle}>Course Organization</label>
                        <select style={{ ...inputStyle, fontFamily: 'Comic Sans MS' }}  required>
                            <option value="" disabled selected>Select your activities</option>
                            <option>NPTEL</option>
                            <option>Coursera</option>
                            <option>Udemy</option>
                            <option>Edx</option>
                            <option>AWS</option>
                            <option>Google</option>
                            <option>Microsoft</option>
                            <option>Great Learning</option>
                            <option>Others</option>
                        </select>
                    </div>
                    <div style={inputRowStyle}>
                        <label style={labelStyle}>Do you Certified with exam?</label>
                        <div style={{ display: 'flex', alignItems: 'center' }}>
                            <label style={labelStyle}>
                                <input type="radio" name="answer" style={{ marginRight: '0.5rem', fontFamily: 'Comic Sans MS' }} />
                                Yes
                            </label>
                            <label style={labelStyle}>
                                <input type="radio" name="answer" style={{ marginRight: '0.5rem', fontFamily: 'Comic Sans MS'}} />
                                No
                            </label>
                        </div>
                    </div>
                    <div style={inputRowStyle}>
                        <label style={labelStyle}>Certification ID</label>
                        <input type="text" style={{ ...inputStyle, fontFamily: 'Comic Sans MS' }} placeholder='e.g: A44565fd34'  required/>
                    </div>
                    <div style={inputRowStyle}>
                        <label style={labelStyle}>Duration of the Course </label>
                        <input type="number" style={{ ...inputStyle, fontFamily: 'Comic Sans MS' }} placeholder='Enter the durations in days e-g: 30'  required/>
                    </div>
                    <div style={inputRowStyle}>
                        <label style={labelStyle}>Payment of the Course </label>
                        <input type="number" style={{ ...inputStyle, fontFamily: 'Comic Sans MS' }} placeholder='5000' optional/>
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
const yes = {
    position: 'absolute',
    margin: '200px',
}
const no = {
    position: 'absolute',
    marginLeft: '200px',
}

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
    marginBottom: '-200px',
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

export default Certificate;
