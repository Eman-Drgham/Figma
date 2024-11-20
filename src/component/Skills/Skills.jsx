import CardComponent from '../CardComponent/CardComponent'
import './Skills.css'
import { SkillsData } from '../../Data/SkillsData'

export default function Skills() {
  return (
    <>
    {SkillsData.map((e,index) => {
        return(
            <CardComponent key={index} title={e.title} img={e.img} desc={e.desc} />
        )
    })}
    </>
  )
}
