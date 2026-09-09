function Projects() {
    return (
        <section
            id="projects"
            className="py-3"
            style={{
                backgroundColor: "#030c23",
                color: "white",
            }}
        >
            <div className="container">

                <div className="text-center mb-5">
                    <span className="badge mb-3"
                        style={{
                            backgroundColor: "#15102f",
                            color: "#9b7cff",
                            letterSpacing: "1px",
                        }}
                    >
                        PROJECTS
                    </span>

                    <h2 className="fw-bold">
                        Some of My Recent Work
                    </h2>
                </div>

                <div className="row g-4">

                    <div className="col-md-6 col-lg-4">
                        <div className="card h-100 overflow-hidden"
                            style={{
                                backgroundColor: "#07101f",
                                border: "1px solid #263247",
                                borderRadius: "8px",
                            }}
                        >
                            <div className="position-relative"
                                style={{ height: "190px" }}
                            >
                                <img src="Bike-project.png" alt="Bike-Project " className="w-100 h-100"
                                    style={{ objectFit: "cover" }}
                                />

                                <span className="position-absolute top-0 start-0 m-2 px-2 py-1 rounded"
                                    style={{
                                        backgroundColor: "#07101f",
                                        fontSize: "12px",
                                        color: "white",
                                    }}
                                >
                                    01
                                </span>
                            </div>

                            <div className="card-body p-3">
                                <h5 className="text-white fw-semibold">
                                    Bike-Project 
                                </h5>

                                <p style={{
                                        color: "#9ca3af",
                                        fontSize: "14px",
                                    }}
                                >
                                    A Royal-Enfield Bikes project like E-commerce Plateform.
                                </p>

                                <a href="https://github.com/shivangpandya1515-code/Bike-Project.git" className="text-decoration-none"
                                    style={{
                                        color: "#8b6cff",
                                        fontSize: "13px",
                                    }}
                                >
                                    View Project ↗
                                </a>
                            </div>
                        </div>
                    </div>

                    <div className="col-md-6 col-lg-4">
                        <div className="card h-100 overflow-hidden"
                            style={{
                                backgroundColor: "#07101f",
                                border: "1px solid #263247",
                                borderRadius: "8px",
                            }}
                        >
                            <div className="position-relative"
                                style={{ height: "190px" }}
                            >
                                <img src="E-commerce.png" alt="E-commerce.png" className="w-100 h-100"
                                    style={{ objectFit: "cover" }}
                                />

                                <span className="position-absolute top-0 start-0 m-2 px-2 py-1 rounded"
                                    style={{
                                        backgroundColor: "#07101f",
                                        fontSize: "12px",
                                        color: "white",
                                    }}
                                >
                                    02
                                </span>
                            </div>

                            <div className="card-body p-3">
                                <h5 className="text-white fw-semibold">
                                    E-Commerce Plateform
                                </h5>

                                <p style={{
                                        color: "#9ca3af",
                                        fontSize: "14px",
                                    }}
                                >
                                    A E-Commerce project has many products.
                                </p>

                                <a href="https://github.com/shivangpandya1515-code/Java-Script-Final-Project.git" className="text-decoration-none"
                                    style={{
                                        color: "#8b6cff",
                                        fontSize: "13px",
                                    }}
                                >
                                    View Project ↗
                                </a>
                            </div>
                        </div>
                    </div>

                    <div className="col-md-6 col-lg-4">
                        <div className="card h-100 overflow-hidden"
                            style={{
                                backgroundColor: "#07101f",
                                border: "1px solid #263247",
                                borderRadius: "8px",
                            }}
                        >
                            <div className="position-relative"
                                style={{ height: "190px" }}
                            >
                                <img src="Library Manegement System.png" alt="Crypto Dashboard" className="w-100 h-100"
                                    style={{ objectFit: "cover" }}
                                />

                                <span className="position-absolute top-0 start-0 m-2 px-2 py-1 rounded"
                                    style={{
                                        backgroundColor: "#07101f",
                                        fontSize: "12px",
                                        color: "white",
                                    }}
                                >
                                    03
                                </span>
                            </div>

                            <div className="card-body p-3">
                                <h5 className="text-white fw-semibold">
                                    Library Management System
                                </h5>

                                <p style={{
                                        color: "#9ca3af",
                                        fontSize: "14px",
                                    }}
                                >
                                    A Library Management System has full information about books.
                                </p>

                                <a href="https://github.com/shivangpandya1515-code/Library-Management-System.git" className="text-decoration-none"
                                    style={{
                                        color: "#8b6cff",
                                        fontSize: "13px",
                                    }}
                                >
                                    View Project ↗
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Projects;