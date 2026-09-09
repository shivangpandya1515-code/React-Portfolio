import { FaHtml5, FaCss3Alt, FaJsSquare, FaReact, FaGitAlt, FaBootstrap, } from "react-icons/fa";

function Skills() {
    return (
        <section
            id="skills"
            className="py-5"
            style={{
                backgroundColor: "#020817",
                color: "white",
            }}
        >
            <div className="container py-4">

                <div className="text-center mb-5">

                    <span
                        className="badge mb-3"
                        style={{
                            backgroundColor: "#15102f",
                            color: "#9b7cff",
                            letterSpacing: "1px",
                        }}
                    >
                        MY SKILLS
                    </span>

                    <h2 className="fw-bold"> Technologies I Master </h2>
                </div>

                <div className="row g-4">

                    <div className="col-md-6 col-lg-4">
                        <div className="d-flex align-items-center gap-2">

                            <FaHtml5 className="fs-2" />

                            <div className="flex-grow-1">

                                <div className="d-flex justify-content-between">
                                    <span>HTML</span>
                                    <small>95%</small>
                                </div>

                                <div className="progress mt-2" role="progressbar" aria-valuenow="95" aria-valuemin="0" aria-valuemax="100"
                                    style={{ height: "5px" }}>

                                    <div className="progress-bar" style={{
                                        width: "95%",
                                        backgroundColor: "#7657ff",
                                    }}
                                    ></div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-12 col-md-6 col-lg-4">
                        <div className="d-flex align-items-center gap-2">

                            <FaCss3Alt className="fs-2" />

                            <div className="flex-grow-1">

                                <div className="d-flex justify-content-between">
                                    <span>CSS</span>
                                    <small>90%</small>
                                </div>

                                <div
                                    className="progress mt-2"
                                    role="progressbar"
                                    aria-valuenow="90"
                                    aria-valuemin="0"
                                    aria-valuemax="100"
                                    style={{ height: "5px" }}
                                >
                                    <div
                                        className="progress-bar"
                                        style={{
                                            width: "90%",
                                            backgroundColor: "#7657ff",
                                        }}
                                    ></div>
                                </div>

                            </div>
                        </div>
                    </div>

                    <div className="col-12 col-md-6 col-lg-4">
                        <div className="d-flex align-items-center gap-2">

                            <FaJsSquare className="fs-2" />

                            <div className="flex-grow-1">

                                <div className="d-flex justify-content-between">
                                    <span>JavaScript</span>
                                    <small>85%</small>
                                </div>

                                <div
                                    className="progress mt-2"
                                    role="progressbar"
                                    aria-valuenow="85"
                                    aria-valuemin="0"
                                    aria-valuemax="100"
                                    style={{ height: "5px" }}
                                >
                                    <div
                                        className="progress-bar"
                                        style={{
                                            width: "85%",
                                            backgroundColor: "#7657ff",
                                        }}
                                    ></div>
                                </div>

                            </div>
                        </div>
                    </div>

                    <div className="col-12 col-md-6 col-lg-4">
                        <div className="d-flex align-items-center gap-2">

                            <FaBootstrap className="fs-2" />

                            <div className="flex-grow-1">

                                <div className="d-flex justify-content-between">
                                    <span>Bootstrap</span>
                                    <small>90%</small>
                                </div>

                                <div className="progress mt-2" role="progressbar" aria-valuenow="90" aria-valuemin="0" aria-valuemax="100"
                                    style={{ height: "5px" }}
                                >
                                    <div
                                        className="progress-bar"
                                        style={{
                                            width: "90%",
                                            backgroundColor: "#7657ff",
                                        }}
                                    ></div>
                                </div>

                            </div>
                        </div>
                    </div>

                    <div className="col-12 col-md-6 col-lg-4">
                        <div className="d-flex align-items-center gap-2">

                            <FaReact className="fs-2" />

                            <div className="flex-grow-1">

                                <div className="d-flex justify-content-between">
                                    <span>React</span>
                                    <small>75%</small>
                                </div>

                                <div
                                    className="progress mt-2"
                                    role="progressbar"
                                    aria-valuenow="75"
                                    aria-valuemin="0"
                                    aria-valuemax="100"
                                    style={{ height: "5px" }}
                                >
                                    <div
                                        className="progress-bar"
                                        style={{
                                            width: "75%",
                                            backgroundColor: "#7657ff",
                                        }}
                                    ></div>
                                </div>

                            </div>
                        </div>
                    </div>

                    <div className="col-12 col-md-6 col-lg-4">
                        <div className="d-flex align-items-center gap-2">

                            <FaGitAlt className="fs-2" />

                            <div className="flex-grow-1">

                                <div className="d-flex justify-content-between">
                                    <span>Git</span>
                                    <small>85%</small>
                                </div>

                                <div
                                    className="progress mt-2"
                                    role="progressbar"
                                    aria-valuenow="85"
                                    aria-valuemin="0"
                                    aria-valuemax="100"
                                    style={{ height: "5px" }}
                                >
                                    <div
                                        className="progress-bar"
                                        style={{
                                            width: "85%",
                                            backgroundColor: "#7657ff",
                                        }}
                                    ></div>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Skills;