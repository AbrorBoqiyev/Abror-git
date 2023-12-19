import "./style.scss"


function Navigation(props) {
    return ( 
        <div className="nav-wrapper">
           
            <h1>Navbar</h1>
            <div className="links">
                <a href="#home">Home</a>
                <a href="#about">About</a>
                <a href="#Contacts">Contacts</a>
                <a href="#Products">Products</a>
            </div>
                
            
        </div>
     );
}

export default Navigation;