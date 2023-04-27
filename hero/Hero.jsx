import heroImg from './hero.svg';

const Hero = () => {
  return (
    <div className="container hero">
      <div className="hero--sections">
        <div className="hero--text">
          <h1>Left aligned hero</h1>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique ex numquam quia eveniet minus dicta amet at ea, sit voluptates nam aliquam asperiores voluptatum rerum cum. Omnis sit est similique.</p>
          <div>
            <button type="button" className="btn btn--md btn--primary">Comenzar</button>
          </div>
        </div>
        <div className="hero--img">
          <img src={heroImg} alt=""/>
        </div>
      </div>
    </div>
  )
}

export default Hero;
