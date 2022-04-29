import { Link } from "react-router-dom";
import "./Home.css";

const Home = () => {
	const introdata = {
		title: "I'm Erik Oerke",
		description: "Junior Web Dev, loving coding and working on cool projects",
	};

	return (
		<main>
			<div>
				<section id="home" className="home">
					<div className="intro_sec d-block d-lg-flex align-items-center">
						<div className="text h-100 d-lg-flex justify-content-center">
							<div className="align-self-center ">
								<div className="intro mx-auto">
									<h2 className="mb-1x">{introdata.title}</h2>
									<h1 className="fluidz-48 mb-1x">Full Stack Web Dev</h1>
									<p className="mb-1x">{introdata.description}</p>
									<div className="intro_btn-action pb-5">
										<Link to="/portfolio" className="text_2">
											<div id="button_p" className="ac_btn btn">
												My Portfolio
											</div>
										</Link>
										<Link to="/contact">
											<div id="button_h" className="ac_btn btn">
												Contact Me
											</div>
										</Link>
										<Link to="/contact">
											<div id="button_k" className="ac_btn btn">
												About Me
											</div>
										</Link>
									</div>
								</div>
							</div>
						</div>
						<div className="bg"></div>
					</div>
				</section>
			</div>
		</main>
	);
};

export default Home;
