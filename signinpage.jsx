import './signinpage.css'

export default function Signin(){
   return(
    <>
      <div className='container'>
        <div className="top_bar">
            <img src='../src/images/sjc.jpg'/>
            <p className='deptName'>DEPARTMENT OF COMPUTER SCIENCE</p>
            <p className="collegeName">St.JOSEPH'S COLLEGE, TIRUCHIRAPPALI <span>- 620002</span></p>
            <p className='className'>MCA (2023 - 2025)</p>
        </div>
        
        <div className='signinContainer'>
        <p className='title'>BEST STUDENT AWARD</p>
        <div className='register'>
            <input type="text" className='registerInput' placeholder=' ' required/>
            <div className='registerLabel'>Register Number</div>
            </div>
            <div className='password'>
            <input type="text" className='passwordinput'></input>
            <div className='passwordlabel'>Password</div>
            </div>
            <button  onClick={() => window.location.href = 'dashboard.html'}>Sign in</button>
        </div>
        </div>
    </>
   )
};