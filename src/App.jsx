import "./App.css";

//component imports
import Banner from "./components/Banner";
import FAQ from "./components/FAQ";
import Footer from "./components/Footer";
import SignUpHero from "./components/SignUpHero";

function App() {
  return (
    <div id="page" className="bg-[url('/endless-constellation.svg')]">
      <div id="top">
        <Banner />
      </div>
      <div id="content">
        <div className="iframe-container bg-neutral shadow-2xl">
            <iframe
              className="w-4/5 h-4/5"
              width="560"
              height="315"
              src="https://www.youtube.com/embed/FokrwLIKs0M"
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            ></iframe>
        </div>
        <br></br>
        <br></br>
        <div className="hero w-full h-auto mt-40">
          <SignUpHero />
        </div>
        <br></br> 
        <div className="hero w-full h-auto mt-40">
          <FAQ />
        </div>
        <div className="divider mt-40"></div> 
      </div>
      <div id="bottom">
        <Footer />
      </div>
    </div>
  );
}

export default App;
