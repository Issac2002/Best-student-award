import React, { useState } from 'react';
import './styles.css';
import './index.css';
function Internship() {
    const [selectedDomain, setSelectedDomain] = useState('');
    const [customDomain, setCustomDomain] = useState('');

    const handleDomainChange = (e) => {
        const { value } = e.target;
        setSelectedDomain(value);
        if (value === "Others") {
            setCustomDomain('');
        }
    };

    const handleCustomDomainChange = (e) => {
        const { value } = e.target;
        setCustomDomain(value);
    };

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
        marginBottom: '-320px',
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
                    <h1 style={{ marginBottom: '2rem', color: '#2c3e50', fontFamily: 'Comic Sans MS' }}>Internship</h1>
                    <div style={inputRowStyle}>
                        <label style={labelStyle}>Organinzation Name</label>
                        <input type='text' style={{ ...inputStyle, fontFamily: 'Comic Sans MS' }}></input>
                    </div>
                    <div style={inputRowStyle}>
                        <label style={labelStyle}>What is your domain</label>
                        <select style={{ ...inputStyle, fontFamily: 'Comic Sans MS' }} value={selectedDomain} onChange={handleDomainChange}>
                            <option value="" disabled selected>select your domain</option>
                            <option>Finance</option>
                            <option>Education</option>
                            <option>Gaming</option>
                            <option>Development</option>
                            <option>Blockchain</option>
                            <option>Data Science</option>
                            <option>Cyber Security</option>
                            <option>Others</option>
                        </select>
                    </div>
                    {selectedDomain === "Others" && (
                        <div style={inputRowStyle}>
                            <label style={labelStyle}>Enter custom domain:</label>
                            <input type='text' style={{ ...inputStyle, fontFamily: 'Comic Sans MS' }} value={customDomain} onChange={handleCustomDomainChange}></input>
                        </div>
                    )}
                    <div style={inputRowStyle}>
                        <label style={labelStyle}>Project Title</label>
                        <input type='text' style={{ ...inputStyle, fontFamily: 'Comic Sans MS' }}></input>
                    </div>
                    <div style={inputRowStyle}>
                        <label style={labelStyle}>Mode of Internship </label>
                        <div style={{ display: 'flex', alignItems: 'center' }}>
                            <label style={labelStyle}>
                                <input type="radio" name="answer" style={{ marginRight: '0.5rem', fontFamily: 'Comic Sans MS' }} />
                                Online
                            </label>
                            <label style={labelStyle}>
                                <input type="radio" name="answer" style={{ marginRight: '0.5rem', fontFamily: 'Comic Sans MS' }} />
                                Offline
                            </label>
                        </div>
                    </div>
                    <div style={inputRowStyle}>
                        <label style={labelStyle}>Duration of Internship:</label>
                        <input type="number"
                            placeholder="Enter duration in days: eg-365 " style={{ ...inputStyle, fontFamily: 'Comic Sans MS' }} />
                    </div>
                    <div style={inputRowStyle}>
                        <label style={labelStyle}>Upload Certificate</label>
                        <div style={{ display: 'flex', alignItems: 'center' }}>
                            <input type="file" style={{ ...inputStyle, marginRight: '1rem' , fontFamily: 'Comic Sans MS'}} accept=".pdf" />
                            <span style={{ color: 'red', marginRight: '1rem' , fontFamily: 'Comic Sans MS' }}> *Only upload PDF files* </span>
                        </div>
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

export default Internship;
