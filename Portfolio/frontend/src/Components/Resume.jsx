import "./css/Resume.css"
import Card from "./Card"
import education from "../Resources/Images/board-classroom-education-svgrepo-com.svg"
import experience from "../Resources/Images/work-svgrepo-com.svg"
import skills from "../Resources/Images/mouse-svgrepo-com.svg"

import programmer from "../Resources/Images/programmer.svg";

function Resume() {
    return (
        <section id="resume">
            <div className="container p-5 text-center text-md-start">
                <div className="d-md-flex py-3">
                    <img className="img-fluid w-25 mx-5" src={education} alt="education photo"/>
                    <div className="row text-center justify-content-center">
                        <Card
                            featured="Education"
                            title="Institute of Engineering and Management, Kolkata"
                            description="I graduated from the Institute of Engineering and Management (IEM) with a Bachelor of Technology in Electronics and Communications Engineering, achieving a GPA of 8.50. During my time at IEM, I gained a solid foundation in core subjects such as Data Structures, Algorithms, Analysis of Algorithms, and Database Management Systems. The rigorous curriculum and hands-on projects provided me with critical problem-solving skills and a deep understanding of engineering principles. Additionally, I actively participated in technical workshops and coding competitions, which honed my skills and prepared me for a career in software engineering."
                        />
                    </div>
                </div>
                <div className="d-flex flex-column flex-md-row py-3 align-items-center">
                    <div className="order-2 order-md-1 text-center">
                        <div className="row justify-content-center">
                            <Card
                                featured="Experience"
                                title="Specialist Programmer @ Infosys"
                                description="As a Specialist Programmer at Infosys Limited, based in Bangalore, I have been working on the Income Tax Department’s Tax Processing System since October 2023. In this role, I leverage my expertise in Java and Spring Boot to develop and maintain robust backend systems that process large volumes of tax-related data efficiently. Collaborating with cross-functional teams, I ensure the seamless integration and functionality of services, adhering to high standards of code quality and performance. My responsibilities also include optimizing system performance, troubleshooting issues, and implementing scalable solutions to enhance the overall efficiency of tax processing operations."
                            />
                        </div>
                    </div>
                    <img className="order-1 order-md-2 img-fluid w-25 mx-5" src={experience} alt="education photo"/>
                </div>
                <div className="d-md-flex py-3">
                    <img className="img-fluid w-25 mx-5" src={skills} alt="education photo"/>
                    <div className="row text-center justify-content-center">
                        <Card
                            featured="Skills"
                            title="Areas of Expertise"
                            description="My skill set encompasses a diverse range of technical and soft skills that enable me to excel in software development and problem-solving. I have proficiency in programming languages such as Java, C++, and C, with a strong understanding of data structures and algorithms. I have hands-on experience with frameworks like Spring Boot, Kafka, and testing libraries such as JUnit and Mockito. I am adept at using tools like Docker, Git, Jenkins, and databases such as PostgreSQL and MySQL. My work is supported by a solid grasp of platforms like Linux, Windows, and Unix systems. Additionally, my soft skills include leadership, effective communication, problem-solving, time management, and teamwork, which allow me to work collaboratively and manage projects efficiently"
                        />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Resume;