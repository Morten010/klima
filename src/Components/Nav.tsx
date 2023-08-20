import style from "./Nav.module.scss"
import Logo from "../assets/ColorWheel.png"

export default function Nav() {
  return (
    <nav className={style.nav} id="top">
      <div className="container">
        {/* top */}
        <div className={style.top}>
          <img src={Logo} />
          <div>
            <h1>
              THE GLOBAL GOALS
            </h1>
            <h2>For sustainable Developement</h2>
          </div>
        </div>
        {/* bottom */}
        <ul className={style.bottom}>
          <li>
            VERDENSMÅLENE
          </li>
          <li>
            DELMÅLENE
          </li>
          <li>
            UDFORDRINGER
          </li>
          <li>
            KONTAKT
          </li>
        </ul>
      </div>
    </nav>
  )
}
