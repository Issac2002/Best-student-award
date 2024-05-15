import React, { useState } from 'react';
import { BrowserRouter as Router } from 'react-router-dom'; // We don't need Routes and Route here
import Card from './Card';
import Attendance from './Attendance_form';
import Symposium from './Symposium_form';

const Dashboard = () => {
    const [showAttendance, setShowAttendance] = useState(false);
    const [showAcademics, setShowAcademics] = useState(false);
    const [showCertificates, setShowCertificates] = useState(false);
    const [showTools, setShowTools] = useState(false);
    const [showProject, setShowProject] = useState(false);
    const [showSymposium, setShowSymposium] = useState(false);
    const [showDepartcon, setShowDepartcon] = useState(false);
    const [showInternship, setShowInternship] = useState(false);
    const [showExtra, setShowExtra] = useState(false);
    const handleAttendanceClick = () => {
        setShowAttendance(true);
    };
    const handleAcademicsClick = () => {
        setShowAcademics(true);
    };
    const handleCertificatesClick = () => {
        setShowCertificates(true);
    };
    const handleToolsClick = () => {
        setShowTools(true);
    };
    const handleProjectClick = () => {
        setShowProject(true);
    };
    const handleSymposiumClick = () => {
        setShowSymposium(true);
    };
    const handleDepartconClick = () => {
        setShowDepartcon(true);
    };
    const handleInternshipClick = () => {
        setShowInternship(true);
    };
    const handleExtraClick = () => {
        setShowExtra(true);
    };

    return (
        <Router>
            <>
            <div className='container'>
        <div className="top_bar">
            <img src='../src/images/sjc.jpg'/>
            <p className='dept_name'>DEPARTMENT OF COMPUTER SCIENCE</p>
            <p className="college_name">ST JOSEPH'S COLLLEGE, TRICHY <span>- 620001</span></p>
            <p className='class_name'>MCA (2023 - 2025)</p>
        </div>
        </div>
        <div><button className="logout-button" onClick={() => handleLogout()}>Logout</button></div>
                <h1 className="titlename">Hi {"Symon"} choose your activities to update </h1>
                <div className="backcolor">
                    <div className="cardapp" >

                        <a href='academy.html' style={{ textDecoration: 'none' }}>
                            <Card className="Acadamics_Activities" name="Acadamics Activities" desc="first" />
                        </a>

                        <a href='certificate.html' style={{ textDecoration: 'none' }}>
                            <Card className="Certificate" name="Certificate" desc="second" />
                        </a>

                        <a href='h_tools.html' style={{ textDecoration: 'none' }}>
                            <Card className="Software_Tools" name="Software Tools" desc="third" />
                        </a>

                        <a href='project.html' style={{ textDecoration: 'none' }}>
                            <Card className="Project" name="Project" desc="third" />
                        </a>

                        <a href='h_symposium.html' style={{ textDecoration: 'none' }}>
                            <Card className="Symposium" name="Symposium" desc="third" />
                        </a>

                        <a href='depart_con.html' style={{ textDecoration: 'none' }}>
                            <Card className="Department_Certificate" name="Department Contribution" desc="third" />
                        </a>

                        <a href='internship.html' style={{ textDecoration: 'none' }}>
                            <Card className="Internship" name="Internship" desc="third" />
                        </a>

                        <a href='attendance.html' style={{ textDecoration: 'none' }}>
                            <Card className="Attendance" name="Attendance" desc="third" />
                        </a>

                        <a href='extra.html' style={{ textDecoration: 'none' }}>
                            <Card className="Extra_Curriculam_Activity" name="Extra Curriculam Activity" desc="third" />
                        </a>

                    </div>
                </div>
            </>
        </Router>
    );
}

export default Dashboard;
