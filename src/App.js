import "./styles.css";
import Head from "./comp/Head";
import Header from "./comp/Header";
import Main from "./comp/Main";
import About from "./comp/About";
import Service from "./comp/Service";
import Contact from "./comp/Contact";

export default function App() {
  return (
    <>
      {/****** css in styles.css **********/}
      <Head />
      <Header />
      <Main />
      <About />
      <Service />
      <Contact />
      <br />
      <br />
      {/****** Footer Section Start **********/}
      <div className="bottom-footer">
        <div id="footer-p">
        
          <p> <a href="https://github.com/amisha26" style={{textDecoration:'none',color:'whitesmoke'}}>©2021 Electrico, Designed & Developed By Amisha Tiwari</a></p>
        </div>
      </div>
      {/****** Footer Section End **********/}
    </>
  );
}
