import patientInfoImg1 from "./assets/patientinfo1.jpg"
import patientInfoImg2 from "./assets/patientinfo2.jpg"
import patientInfoImg3 from "./assets/patientinfo3.jpg"
import zaffraImg1 from "./assets/zaffra1.jpg"
import zaffraImg2 from "./assets/zaffra2.jpg"

function Home() {
    return (
        <>
            <h2>My Works</h2>

            <section>
                <article>
                    <h3>Patient Info</h3>
                    <h5>
                        Repo: <a href="https://github.com/aslampa17/patient_info" target="_blank" rel="noopener noreferrer">GitHub Link</a>
                    </h5>
                    <p>
                        Patient Info is a web application that allows storing patient data.
                        It was built using HTML, CSS, JavaScript, and Flask, with SQLite as the database.
                        The app was developed for a doctor to use in personal consultations and research data collection.
                        It is an ongoing project with new features added based on the client's requirements.
                    </p>
                    <div className="images">
                        <img src={patientInfoImg1} alt="Patient Info app screenshot 1" />
                        <img src={patientInfoImg2} alt="Patient Info app screenshot 2" />
                        <img src={patientInfoImg3} alt="Patient Info app screenshot 3" />
                    </div>
                </article>

                <article>
                    <h3>Zaffra</h3>
                    <h5>
                        Repo: <a href="https://github.com/aslampa17/zaffra" target="_blank" rel="noopener noreferrer">GitHub Link</a>
                    </h5>
                    <h5>
                        Website: <a href="https://zaffra.vercel.app/" target="_blank" rel="noopener noreferrer">Live Site</a>
                    </h5>
                    <p>
                        Zaffra is a website I developed for a small-scale home business.
                        It was created using HTML, CSS, and JavaScript.
                        The site is a single-page static website that includes videos, an image carousel, and a contact link for service inquiries.
                    </p>
                    <div className="images">
                        <img src={zaffraImg1} alt="Zaffra website screenshot 1" />
                        <img src={zaffraImg2} alt="Zaffra website screenshot 2" />
                    </div>
                </article>
            </section>
        </>
    );
}

export default Home;