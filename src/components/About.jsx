import { LuUser } from "react-icons/lu";

function About() {
    return (
        <section
            id="about"
            className="py-5"
            style={{
                background: "#030c23",
                color: "white",
            }}
        >
            <div className="container py-4">
                <div className="row align-items-center g-5">

                    <div className="col-lg-5">

                        <span
                            className="badge mb-3"
                            style={{
                                backgroundColor: "#15102f",
                                color: "#9b7cff",
                            }}
                        >
                            ABOUT ME
                        </span>

                        <h2 className="fw-bold mb-3">
                            I'm passionate about
                            <br />
                            creating digital solutions
                        </h2>

                        <p className="mb-4"
                            style={{
                                color: "#9ca3af",
                                lineHeight: "1.8",
                            }}
                        >
                            With 4+ years of experience in web development, I help
                            businesses and individuals bring their ideas to life through
                            clean, efficient, and user-friendly code.
                        </p>

                        <button
                            className="btn btn-outline-light px-4 py-2"
                        >
                            Learn More About Me <LuUser />
                        </button>

                    </div>

                    <div className="col-lg-7">

                        <div className="row g-0">

                            <div className="col-md-6">
                                <div
                                    className="p-4  border"
                                    style={{
                                        borderColor: "#1f2937 !important",
                                    }}
                                >
                                    <div className="d-flex align-items-center gap-3">

                                        <div
                                            className="rounded-3 d-flex align-items-center justify-content-center"
                                            style={{
                                                width: "50px",
                                                height: "50px",
                                                background:
                                                    "linear-gradient(135deg, #6d5dfc, #8b5cf6)",
                                            }}
                                        >
                                            <i className="bi bi-calendar3 fs-5"></i>
                                        </div>

                                        <div>
                                            <h3 className="mb-0">4+</h3>
                                            <small style={{ color: "#9ca3af" }}>
                                                Years Experience
                                            </small>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="col-md-6">
                                <div
                                    className="p-4  border"
                                    style={{
                                        borderColor: "#1f2937 !important",
                                    }}
                                >
                                    <div className="d-flex align-items-center gap-3">

                                        <div
                                            className="rounded-3 d-flex align-items-center justify-content-center"
                                            style={{
                                                width: "50px",
                                                height: "50px",
                                                background:
                                                    "linear-gradient(135deg, #6d5dfc, #8b5cf6)",
                                            }}
                                        >
                                            <i className="bi bi-code-slash fs-5"></i>
                                        </div>

                                        <div>
                                            <h3 className="mb-0">50+</h3>
                                            <small style={{ color: "#9ca3af" }}>
                                                Projects Completed
                                            </small>
                                        </div>

                                    </div>
                                </div>
                            </div>

                            <div className="col-md-6">
                                <div
                                    className="p-4  border"
                                >
                                    <div className="d-flex align-items-center gap-3">

                                        <div
                                            className="rounded-3 d-flex align-items-center justify-content-center"
                                            style={{
                                                width: "50px",
                                                height: "50px",
                                                background:
                                                    "linear-gradient(135deg, #6d5dfc, #8b5cf6)",
                                            }}
                                        >
                                            <i className="bi bi-emoji-smile fs-5"></i>
                                        </div>

                                        <div>
                                            <h3 className="mb-0">30+</h3>
                                            <small style={{ color: "#9ca3af" }}>
                                                Happy Clients
                                            </small>
                                        </div>

                                    </div>
                                </div>
                            </div>

                            <div className="col-md-6">
                                <div className="p-4  border">

                                    <div className="d-flex align-items-center gap-3">

                                        <div
                                            className="rounded-3 d-flex align-items-center justify-content-center"
                                            style={{
                                                width: "50px",
                                                height: "50px",
                                                background:
                                                    "linear-gradient(135deg, #6d5dfc, #8b5cf6)",
                                            }}
                                        >
                                            <i className="bi bi-trophy fs-5"></i>
                                        </div>

                                        <div>
                                            <h3 className="mb-0">100%</h3>
                                            <small style={{ color: "#9ca3af" }}>
                                                Client Satisfaction
                                            </small>
                                        </div>

                                    </div>

                                </div>
                            </div>

                        </div>

                    </div>

                </div>
            </div>
        </section>
    );
}

export default About;