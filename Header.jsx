import { Toolbar, BackButton } from 'react-onsenui';

function Header(){
    return(
        <header> 
         <Toolbar modifier="material" > 
        <div className="left" style={backBotton}> 
          <a href='#'><BackButton modifier="material"></BackButton></a></div> 
        <div className="center" style={backBotton}><a href='#'>Return To Home</a><h1 style={myStyle}>Symposium</h1></div> 
      </Toolbar> 
        </header>
    );
}
const myStyle = {
    color: "black",
    backgroundColor: "lightgrey", 
    padding: 20,
    alignItem: 'center',
    textAlign:'center',
    fontFamily: "Sans-Serif"
  };
const  backBotton = {
    color: "black",
    backgroundColor: "lightgrey",
};
export default Header