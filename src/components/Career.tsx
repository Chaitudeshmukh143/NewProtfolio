import "./styles/Career.css";

const Career = () => {
  return (
    <div className="career-section section-container">
      <div className="career-container">
        <h2>
          My career <span>&</span>
          <br /> experience
        </h2>
        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Secondary School Certificate (10th)</h4>
                <h5>Maharashtra State Board </h5>
              </div>
              <h3>2018</h3>
            </div>
            <p>
             <b></b>
            Completed Secondary School Certificate (SSC) from Maharashtra State Board of Secondary & Higher Secondary Education with 80.20%. Developed core fundamentals in mathematics, science, and logical reasoning.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Higher Secondary Certificate (12th)</h4>
                <h5>Maharashtra State Board </h5>
              </div>
              <h3>2020</h3>
            </div>
            <p>
              
        Completed Higher Secondary Certificate (HSC) from Maharashtra State Board of Secondary & Higher Secondary Education with 78%. Built a strong academic foundation in analytical thinking and problem-solving.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>BE in Information Technology</h4>
                <h5>Savitribai Phule Pune University</h5>
              </div>
              <h3>2024</h3>
            </div>
            <p>
              Completed Bachelor of Engineering in Information Technology from Savitribai Phule Pune University with a CGPA of 7.2. Built strong fundamentals in Java, Data Structures, Object-Oriented Programming, and Database Systems. Worked on multiple academic and personal projects applying core software development concepts.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Junior Java Developer</h4>
                <h5>Maestro Intellect</h5>
              </div>
              <h3>Oct 2024 to Dec 2025</h3>
            </div>
            <p>
              Developed and maintained RESTful APIs using Java and Spring Boot. Integrated backend services with Oracle SQL databases using JDBC/JPA. Debugged production issues, implemented CRUD modules, and optimized SQL queries to improve application performance. Collaborated in an Agile team using Git, Postman, Maven, and Tomcat for development and deployment workflows.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Full Stack Developer</h4>
                <h5>Freelance</h5>
              </div>
              <h3>now</h3>
            </div>
            <p>
             Working on freelance web development projects using React.js and Spring Boot. Building responsive frontend interfaces and developing RESTful backend services with secure API integrations. Delivering scalable web applications with focus on clean code, performance, and user experience.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;
