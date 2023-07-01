import React from 'react';
import '../../App.css';
import './About.css';
import Footer from '../Footer';

const About = () => {
  return (
    <div className="about-container">
      <h1>About Us: InspireFit</h1>
      <p>Welcome to InspireFit, your ultimate destination for fitness enthusiasts, brought to you by a team of four passionate students. We embarked on a thrilling journey together, pooling our diverse skills and interests to create a cutting-edge fitness website for our final project.</p>

      <h2>Our Team</h2>
      <div className="team-container">
        <div className="team-member">
          <h3>Eugene Laureano - The Visionary</h3>
          <p>Eugene is a visionary with a deep understanding of the transformative power of fitness. With a background in psychology, he recognized the potential to combine her passion for human behavior and fitness to create a platform that inspires and motivates people to lead healthier lives.</p>
        </div>

        <div className="team-member">
          <h3>Jose Mari Solo - The Tech Guru</h3>
          <p>Jose Mari is our tech guru, armed with a wealth of programming knowledge and expertise. He tirelessly works behind the scenes to ensure that our website operates seamlessly, providing users with a user-friendly experience and access to the latest fitness trends and tools.</p>
        </div>

        <div className="team-member">
          <h3>Em-greg Tusi - The Content Maven</h3>
          <p>Em-greg is a wordsmith and fitness enthusiast, passionate about crafting engaging and informative content. He diligently researches and curates articles, blog posts, and expert tips to keep our users informed, educated, and motivated on their fitness journey.</p>
        </div>

        <div className="team-member">
          <h3>Sebastian Wayne Ramirez - The Design Maestro</h3>
          <p>Sebastian is our creative powerhouse, responsible for the captivating visual design that sets our website apart. With an eye for aesthetics and a deep understanding of user experience, he brings our platform to life, making it visually appealing and intuitive for users to navigate.</p>
        </div>
      </div>

      <h2>Our Journey</h2>
      <p>As students with a shared interest in fitness and wellness, we recognized the need for an online hub that combines information, guidance, and community support to help individuals achieve their fitness goals. Thus, InspireFit was born as a culmination of our collective passion and expertise.</p>

      <h2>Our Mission</h2>
      <p>At InspireFit, our mission is to empower individuals to embrace a healthier lifestyle by providing a comprehensive platform that caters to all aspects of fitness. We strive to inspire and motivate our users, helping them overcome obstacles and transform their lives through exercise, nutrition, and mental well-being.</p>

      <h2>What We Offer</h2>
      <ul>
        <li>Informative Content: Our website is filled with carefully curated articles, workout routines, nutrition guides, and wellness tips from industry experts. We believe that knowledge is power and aim to equip our users with the information they need to make informed decisions about their health.</li>
        <li>Customized Workouts: We provide a range of tailored workout programs suitable for various fitness levels and goals. Whether you're a beginner looking to kickstart your fitness journey or an experienced athlete aiming for new milestones, our programs cater to your unique needs.</li>
        <li>Community Support: Building a supportive community is at the core of our platform. We encourage users to connect, share their stories, and find accountability partners who will help them stay motivated and committed to their fitness goals.</li>
        <li>Expert Guidance: We collaborate with renowned fitness experts, trainers, and nutritionists to offer professional guidance and insights. Through video tutorials, live sessions, and Q&A forums, our users have access to expert advice to optimize their fitness journey.</li>
      </ul>

      <h2>Join Us on the InspireFit Journey</h2>
      <p>Whether you're a fitness enthusiast or just starting your wellness journey, we invite you to join us on the InspireFit platform. Together, let's embrace a healthier lifestyle, break through barriers, and inspire one another to reach new heights of fitness and well-being. Get ready to transform your life with InspireFit!</p>

      <div className="disclaimer">
        <p>Disclaimer: The information provided on our website is intended for educational and informational purposes only. We recommend consulting with a healthcare professional before starting any fitness or nutrition program to ensure it is suitable for your individual needs and medical history.</p>
      </div>
    </div>
    
  );
};

export default About;
