const Hero = ({ text, backdrop }) => {
  return (
    <header className="hero-container bg-dark text-white p-5 ">
      <h1 className="hero-text">{text}</h1>
      {backdrop &&
     
      <div className="hero-backdrop" style={{backgroundImage: `url(${backdrop})`}}></div>
      }
    </header>
  );
};

export default Hero;

