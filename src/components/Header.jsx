import "./Style.css";
import { FaCode, } from "react-icons/fa";
import { FiArrowUpRight } from "react-icons/fi";

function Header() {
    return (
        <section className="d-flex align-items-center sticky-top"
            style={{
                background: "#020817",
                height: "70px",
                borderBottom: "5px solid #030c23",
            }}
        >
            <nav className="container d-flex align-items-center">
                <div className="left w-100">
                    <h3 className="d-flex gap-2 align-items-center fw-bold"><FaCode className="logo" /> Shivang</h3>
                </div>
                <div className="d-none d-lg-block ">
                    <div className="text-center d-flex gap-5 w-100 ">
                        <a href="#home" className="text-decoration-none text-white ">Home</a>
                        <a href="#about" className="text-decoration-none text-white ">About</a>
                        <a href="#skills" className="text-decoration-none text-white ">Skills</a>
                        <a href="#projects" className="text-decoration-none text-white ">Projects</a>
                        <a href="#contact" className="text-decoration-none text-white ">Contact</a>
                    </div>
                </div>
                <div className="right w-100 d-flex justify-content-end ">
                    <button className="py-2 px-3 rounded text-white  "> Hire Me <FiArrowUpRight /></button>
                </div>
            </nav>
        </section>

    )
}

export default Header;