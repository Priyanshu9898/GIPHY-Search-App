import React from "react";
import { Button, Container, Navbar} from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import ParticleEffect from "../../components/ParticleEffect";
import { signOut } from "firebase/auth";
import { auth } from "../../firebaseConfig";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "../../styles/style.css";

const Navigation = () => {

  const navigate = useNavigate();

  const toastOptions = {
    position: "bottom-right",
    autoClose: 2000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: false,
    draggable: true,
    progress: undefined,
    theme: "dark",
  };

  const handleLogout = async () => {


    try{
      await signOut(auth);
      toast.success("Logged out Successfully", toastOptions);
      navigate("/login");
      
    }
    catch(err){
      toast.error("Error in Logged out", toastOptions);
    }
  }
  return (
    <>
    <div style={{ position: "relative", overflow: "hidden" }}>
      <ParticleEffect />
      <Navbar bg="transparent"  expand="lg" variant="dark" className="px-2">
        <Container fluid>
          <Link to="/" style={{color: "white", textDecoration: "none"}}><h1>GIPHY Finder</h1></Link>
          
          
            <div>
              <Button onClick={handleLogout} className="btnStyle">Logout</Button>
            </div>
        
        </Container>

      </Navbar>

      <ToastContainer style={{ zIndex: "2 !important"}} />
      </div>
    </>
  );
};

export default Navigation;
