import "./Hero.css";
import heroImage from "../assets/School.png";

function Hero() {
  return (
    <section className="hero">
      <div className="hero-left">
        <h1 className="hero-title">SNHS Payment Web App</h1>
        <p className="hero-text">
          This is a simple hero section with two columns using React.
        </p>
        <button className="hero-btn">Get Started</button>
      </div>

      <div className="hero-right">
        <img src={heroImage} alt="hero" className="hero-img" />
      </div>
    </section>
  );
}

export default Hero;

// import "./Hero.css";
// import heroImage from "../assets/hero.png"; // Change this to your image path

// function Hero() {
//   return (
//     <section className="hero">
//       <div className="hero-left">
//         <h1 className="hero-title">Welcome to My App</h1>
//         <p className="hero-text">
//           This is a simple hero section with two columns using React.
//         </p>
//         <button className="hero-btn">Get Started</button>
//       </div>

//       <div className="hero-right">
//         <img src={heroImage} alt="hero" className="hero-img" />
//       </div>
//     </section>
//   );
// }

// export default Hero;
