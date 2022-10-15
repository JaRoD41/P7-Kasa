import React, {useState, useRef, useEffect} from 'react'  //import des hooks de base react
import './Collapse.scss'
import Chevron from '../../assets/images/vectorBas.svg'

export default function Collapse(props) {

  const [toggle, setToggle] = useState(false)  // je definie le state du toggle (et false par défaut)
  const [heightEl, setHeightEl] = useState()   // je definie le state de la hauteur du collapse

  const toggleState = () => {  //je définie la fonction toggleState qui modifie la valeur toggle au clic
    setToggle(!toggle)
  }

  const refHeight = useRef()  //récupère et conserve la valeur de hauteur du collapse déplié

  useEffect(() => {
    setHeightEl(`${refHeight.current.scrollHeight}px`) //useEffect s'éxécute au montage du composant, dans ce cas, il définit la hauteur du collapse déplié lors de sa première ouverture et la conserve dans refHeight
  }, [])

  return ( // affiche le collapse replié par défaut et l'ouvre au clic puis le referme au clic en faisant disparaitre le texte et le style
		<div className="collapse-about">
			<div className="collapseContainer">
				<div onClick={toggleState} className="collapse-about__visible"> 
					<h2>{props.aboutTitle}</h2>
					<img className='aboutChevron' src={Chevron} alt="chevron down" />
				</div>  
			</div>
			<div
				ref={refHeight}
				className={
					toggle ? "collapse-about__toggle animated" : "collapse-about__toggle"
				}
				style={{ height: toggle ? `${heightEl}` : "0px" }}
			>
				<p aria-hidden={toggle ? "true" : "false"}>{props.aboutText}</p>
			</div>
		</div>
	);
}
