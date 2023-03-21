import Hero from "./Hero";

const Home = () => {
  return (
    <>
      <Hero text="Welcome TO Movie Browser" />

      <div className="container">
        <div className="row">
          <div className="col-lgl-8 offset-lg-2 my-5">
            <p className="lead">
              My space is Lorem ipsum, dolor sit amet consectetur adipisicing elit. Atque
              mollitia illo officiis at? Quod quidem soluta perspiciatis nemo
              commodi omnis quos aspernatur, inventore vero, quisquam quia
              excepturi cum. Ratione, voluptas!
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
