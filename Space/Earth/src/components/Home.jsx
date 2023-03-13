import React from "react";
import { Link } from "react-router-dom";
import Woman from '../img/home/woman.jpg'
import Woman2 from '../img/about/woman.png'
function Home() {
    return (
        <>
            <section className="sectionPreview">
                <div className="sectionPreview__wrapper">
                    {/* text */}
                    {<div className="textContainer">
                        <h1 className="textContainer__title">Lash Maker <br />& Photographer</h1>
                        <p className="textContainer__subtitle">Kolpino, Saint-Pitersburg</p>
                        <Link>
                            <button className="btn">Here me</button>
                        </Link>
                    </div>}

                    {/* img */}
                    <div className="img__wrapper">
                        <img src={Woman} alt="Me" />
                    </div>
                </div>
            </section>

            <section className="sectionAbout">
                {/* image */}
                <div className="sectionAbout__img" id={'about'}>
                    <img src={Woman2} alt="Me" />
                </div>
                {/* text */}
                <div className="sectionAbout__text">
                    <div>
                        <h2>About me</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Senectus scelerisque viverra at id aenean scelerisque. Nec eget condimentum etiam leo.
                            <br />
                            <br />
                            Morbi at eget fusce feugiat volutpat et volutpat malesuada. At suspendisse nisi, quam neque in leo sollicitudin.</p>
                        <Link to={'/portfolio'}>
                            <button className="btn">View my works</button>
                        </Link>
                    </div>

                </div>
            </section>
        </>
    )
}

export default Home;