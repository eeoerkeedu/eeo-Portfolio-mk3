import {Carousel, Image, Button} from "react-bootstrap"
import "./Portfolio.css";

import classifyImage from "../../img/classify-2.png"
import vaultImage from "../../img/Screenshot 2022-05-02 140220.png"
import fynpImage from "../../img/Screenshot 2022-05-02 140550.png"
import pokeGif from "../../img/ezgif-4-d4f4d4dce7.gif"
import weatherImage from "../../img/live_weather_dashboard.png"
import { FaGithub } from "react-icons/fa";

const Portfolio = () => {
    return(
        <div className="containter d-block-flex carousel__holder">
            <h2 className="">Portfolio</h2>
            <Carousel interval={null}>
                <Carousel.Item>
                    <a 
                    href="https://classifyreact.herokuapp.com/"
                    target="_blank" rel="noreferrer">
                        <Image
                        className="d-block project__image"
                        src={classifyImage}
                        alt="Classify App"
                        />
                    </a>
                    <Carousel.Caption className="carousel__captions">
                    <h3>Classify Web App</h3>
                    <p>A school or organization personnel and budget tracking application. Uses Apollo, Graph QL, React, and JWT authentication</p>
                    <Button className="repoBtn" href="https://github.com/dkcook90/Classify_App" target="_blank" rel="noreferrer"><FaGithub/> View the Repo</Button>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <a 
                    href="https://find-your-next-pet.herokuapp.com/"
                    target="_blank" rel="noreferrer">
                        <Image
                        className="d-block project__image"
                        src={fynpImage}
                        alt="Find Your Next Pet"
                        />
                    </a>
                    <Carousel.Caption className="carousel__captions">
                    <h3>Find Your Next Pet</h3>
                    <p>A site designed to help users look for pets they'd like to adopt. Uses SQL, Handlebars, and Purina API </p>
                    <Button className="repoBtn" href="https://github.com/Ccatalyst/Find-Your-Next-Pet" target="_blank" rel="noreferrer"><FaGithub/> View the Repo</Button>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <a 
                    href="https://eeoerkeedu.github.io/Pokemon_TCG_Finder/"
                    target="_blank" rel="noreferrer">
                        <Image
                        className="d-block project__image"
                        src={pokeGif}
                        alt="Find Your Next Pet"
                        />
                    </a>
                    <Carousel.Caption className="carousel__captions">
                    <h3>Pokemon Trading Card Game Finder</h3>
                    <p>A trading card application for Pokemon. Uses two Pokemon API's and heavy CSS styling.</p>
                    <Button className="repoBtn" href="https://github.com/eeoerkeedu/Pokemon_TCG_Finder" target="_blank" rel="noreferrer"><FaGithub/> View the Repo</Button>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <a 
                    href="https://eeoerkeedu.github.io/Live-Weather-Dashboard/"
                    target="_blank" rel="noreferrer">
                        <Image
                        className="d-block project__image"
                        src={weatherImage}
                        alt="Find Your Next Pet"
                        />
                    </a>
                    <Carousel.Caption className="carousel__captions">
                    <h3>Live Weather Dashboard</h3>
                    <p>A great site to get weather results for searched cities. Uses the openweather API</p>
                    <Button className="repoBtn" href="https://github.com/eeoerkeedu/Live-Weather-Dashboard" target="_blank" rel="noreferrer"><FaGithub/> View the Repo</Button>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <a 
                    href="https://www.teamrexgames.com/"
                    target="_blank" rel="noreferrer">
                        <Image
                        className="d-block project__image"
                        src={vaultImage}
                        alt="Team Rex Games Website"
                        />
                    </a>
                    <Carousel.Caption className="carousel__captions">
                    <h3>Team Rex Games Website</h3>
                    <p>A game company website using the Square Space platfrom.</p>
                    <Button disabled className="repoBtn"><FaGithub/> No Repo Available</Button>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </div>
    );
}


export default Portfolio;