import './About.css'
import image1 from '../../assets/image1.jpeg'

const About = () => {
  return (
    <div className="container">
    <div className="image-div">
      <img src={image1} alt="Placeholder" />
    </div>
    <div className="content-div">
      <h2>Content Title</h2>
      <p>This is some sample content. It will be displayed next to the image and both divs will have the same size.</p>
      <button>Book Apointment</button>
    </div>
  </div>
  )
}

export default About
