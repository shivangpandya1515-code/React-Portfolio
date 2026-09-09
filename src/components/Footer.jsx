import { FaGitAlt, FaInstagram, FaLinkedin, } from "react-icons/fa";
import { MdEmail, MdCall } from "react-icons/md";

function Footer() {
    return (
        <>
            <section id="contact" className="py-2"
                style={{
                    backgroundColor: "#020817",
                    color: "white",
                    cursor: "pointer"
                }}>
                <div className="text-center">
                    <span className="badge my-3"
                        style={{
                            backgroundColor: "#15102f",
                            color: "#9b7cff",
                            letterSpacing: "1px",
                        }}>
                        Follow Me
                    </span>

                    <span className="d-flex justify-content-center d-block gap-3">
                        <FaGitAlt />
                        <FaLinkedin />
                        <FaInstagram />
                    </span>
                    <span className=""
                        style={{
                            padding: "5px"
                        }}>

                        <p style={{
                            color: "#9ca3af"
                        }}>
                            <MdEmail /> shivangpandya1515@gmail.com
                        </p>
                        <p style={{
                            color: "#9ca3af"
                        }}>
                            <MdCall /> +91 9909560450
                        </p>
                    </span>
                </div>

                <main className="container-fluid d-flex justify-content-between align-items-center pt-3" style={{
                    color: "#9ca3af",
                    background: "#030c23"
                }}>
                    <p>
                        &copy; 2026 Shivang || Developer || All rights reserved
                    </p>
                    <p>
                        Made by Shivang
                    </p>
                </main>
            </section>
        </>
    )
} export default Footer;