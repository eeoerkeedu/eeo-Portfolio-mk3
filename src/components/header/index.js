import React, { useState } from "react";
import "./style.css";
import { VscGrabber, VscClose } from "react-icons/vsc";
// import { Link } from "react-router-dom";

const Headermain = () => {
	const [isActive, setActive] = useState("false");

	const handleToggle = () => {
		setActive(!isActive);
		document.body.classList.toggle("ovhidden");
	};

	return (
		<>
			<header className="fixed-top site__header">
				<div className="d-flex align-items-center justify-content-between">
					<a className="navbar-brand nav_ac" href="/">
						{"Erik E. Oerke"}
					</a>
					<div className="d-flex align-items-center">
						<button className="menu__button  nav_ac" onClick={handleToggle}>
							{!isActive ? <VscClose /> : <VscGrabber />}
						</button>
					</div>
				</div>

				<div className={`site__navigation ${!isActive ? "menu__opend" : ""}`}>
					<div className="bg__menu h-100">
						<div className="menu__wrapper">
							<div className="menu__container p-3">
								<ul className="the_menu">
									<li className="menu_item ">
										<a onClick={handleToggle} to="/" className="my-3">
											Home
										</a>
									</li>
									<li className="menu_item">
										<a onClick={handleToggle} to="/portfolio" className="my-3">
											{" "}
											Portfolio
										</a>
									</li>
									<li className="menu_item">
										<a onClick={handleToggle} to="/about" className="my-3">
											About
										</a>
									</li>
									<li className="menu_item">
										<a onClick={handleToggle} to="/contact" className="my-3">
											{" "}
											Contact
										</a>
									</li>
								</ul>
							</div>
						</div>
					</div>
					<div className="menu_footer d-flex flex-column flex-md-row justify-content-between align-items-md-center position-absolute w-100 p-3">
						<div className="d-flex">
							<a
								target="_blank"
								rel="noreferrer noopener"
								href={"https://www.linkedin.com/in/erik-oerke-6a24bb8b/"}
							>
								LinkedIn
							</a>
							<a
								target="_blank"
								rel="noreferrer noopener"
								href={"https://github.com/eeoerkeedu"}
							>
								Github
							</a>
							<a
								target="_blank"
								rel="noreferrer noopener"
								href={"https://twitter.com/Littletzar"}
							>
								Twitter
							</a>
						</div>
					</div>
				</div>
			</header>
			<div className="br-top"></div>
			<div className="br-bottom"></div>
			<div className="br-left"></div>
			<div className="br-right"></div>
		</>
	);
};

export default Headermain;
