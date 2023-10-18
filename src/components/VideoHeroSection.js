const VideoHeroSection = () => {

  return (
    <div className="heroSection">
      <div className="videoContainer">
        <video
          src="/videos/hero-video.mov"
          type="video/quicktime"
          class="clip w-full" autoPlay loop muted>   
        </video>
      </div>
      <div className="heroText">
        <h1>Welcome to Sushi Sensei</h1>
        <p>Experience the finest sushi in West Hollywood.</p>
        <a href="/order" target="_blank" rel="noopener noreferrer">
          <button 
            type="button"
            className="btn btn-lg bg-red-600 font-kanit text-white text-center no-underline text-3xl mt-4">
            Order Now
          </button>
        </a>
      </div>
    </div>
  );
};

export default VideoHeroSection;
