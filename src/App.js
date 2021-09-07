import "./styles.css";
import Head from "./comp/Head";
import Header from "./comp/Header";
import Main from "./comp/Main";
import About from "./comp/About";
import Service from "./comp/Service";

export default function App() {
  return (
    <>
      {/****** css in styles.css **********/}
      <Head />
      <Header />
      <Main />
      <About />
      <Service />
      <br />
      <br />
      {/****** Footer Section Start **********/}
      <div className="bottom-footer">
        <div id="footer-p">
          <p> © Electrico, Designed & Developed By Amisha Tiwari</p>
        </div>
      </div>
      {/****** Footer Section End **********/}
    </>
  );
}
