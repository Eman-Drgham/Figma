import './CardComponent.css'

export default function CardComponent(img, title, desc) {
    return (
        <>
            <img src={img} alt="img" />
            <h5>{title}</h5>
            <p>{desc}</p>
        </>
    )
}
