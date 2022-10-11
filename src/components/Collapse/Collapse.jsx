import React, {useState, useRef, useEffect} from 'react'
import './Collapse.scss'
import Chevron from '../../assets/images/vectorBas.svg'

export default function Collapse(props) {

  const [toggle, setToggle] = useState(false)
  const [heightEl, setHeightEl] = useState()

  const toggleState = () => {
    setToggle(!toggle)
  }

  const refHeight = useRef()

  useEffect(() => {
    setHeightEl(`${refHeight.current.scrollHeight}px`)


  }, [])


  return (
		<div className="collapse-about">
			<div className="collapseContainer">
				<div onClick={toggleState} className="collapse-about__visible">
					<h2>{props.aboutTitle}</h2>
					<img src={Chevron} alt="chevron down" />
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
