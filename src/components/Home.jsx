import { FaHtml5,FaCss3Alt,FaJsSquare,FaReact,FaGitAlt } from "react-icons/fa";

function Home() {
    return (
        <>
            <section id="home" className="home-sec py-5 text-white"
                style={{
                    backgroundColor: "#020817",
                    minHeight: "90vh",
                    
                }}>

                <div className="container">
                    <div className="row align-items-center min-vh-75">
                        <div className="col-lg-6 text-center text-lg-start">
                            <span
                                className="badge mb-3"
                                style={{
                                    backgroundColor: "#15102f",
                                    color: "#9b7cff",
                                }}>
                                I'M A WEB DEVELOPER
                            </span>

                            <h1 className="display-3 fw-bold mb-2">
                                Hi, I'm{" "}
                                <span style={{ color: "#8064ff" }}>
                                    Shivang
                                </span>
                            </h1>

                            <h2 className="fw-bold mb-3">
                                I build things for the web.
                            </h2>

                            <p className="lead mb-4" 
                                style={{
                                    color: "#a5adbd",
                                    maxWidth: "550px",
                                }}>
                                I'm a passionate web developer specializing in building
                                exceptional digital experiences with modern technologies.
                            </p>

                            <div className="d-flex gap-3 justify-content-center justify-content-lg-start mb-5">
                                <a href="#projects" className="btn px-4 py-2 text-white"
                                    style={{
                                        background: "linear-gradient(to right, #6d5dfc, #f45cf6)",
                                        border: "none",
                                    }}>
                                    View My Work ↗
                                </a>
                                <a href="#" className="btn btn-outline-light px-4 py-2">
                                    Download CV ↓
                                </a>
                            </div>

                            <div>
                                <small className="d-block mb-3"
                                    style={{ color: "#a5adbd" }}
                                >
                                    TECHNOLOGIES I WORK WITH
                                </small>

                                <div className="d-flex gap-4 fs-3 justify-content-center justify-content-lg-start">
                                    <FaHtml5 />
                                    <FaCss3Alt />
                                    <FaJsSquare />
                                    <FaReact />
                                    <FaGitAlt />
                                </div>
                            </div>

                        </div>

                        <div className="col-lg-6 text-center mt-5 mt-lg-0">

                            <div className="position-relative mx-auto"
                                style={{
                                    maxWidth: "480px",
                                }}>

                                <img src="Hero-img.jpeg" alt="Web Developer" className="img-fluid position-relative rounded-circle d-none d-lg-block"  
                                    style={{
                                        zIndex: 1   ,
                                        maxHeight: "600px",
                                        objectFit: "contain",
                                    }}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Home;