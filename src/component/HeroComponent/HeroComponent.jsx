import './HeroComponent.css'
import Imge from '../../assets/imges/Image.png'

export default function HeroComponent() {
    return (
        <section className="ED-padding ED-hero">
            <div className=" w-50 ">
                <h5 className="ED-h5"> Branding | Image making </h5>
                <h1 className="ED-h1">My awesome portfolio</h1>
                <p className="ED-p">And I made it myself! Yes. In Figma with Anima</p>
            </div>
            <img className="ED-hero-img" src={Imge} alt="hero-img" />
        </section>
    )
}
