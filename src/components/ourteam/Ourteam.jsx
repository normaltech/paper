import "./ourteam.css"
import Flickity from "flickity";

export default function Ourteam() {
  return (
    <div className="Ourteamcontainer">
      <div className="containerTitle">
        Team
      </div>
      <div className="teams" data-flickity='{ "pageDots": false,"draggable": true, "prevNextButtons": false, "wrapAround": true, "autoPlay": 3000, "groupCells": "3","cellAlign": "center"}'>
        <div className="teams-cell">
          <div className="profile">
            <img className="teamImg" src="/assets/Website Graphics/Profiles/Lychee.png" alt="" />
            <div className="teamName">
              Lychee
            </div>
            <div className="rolltag">
            Research Analyst and Content Coordinator.
            </div>
          </div>
          <div className="profileDesc">
          Lychee coordinates and manages opportunities for SLINK LABS.
          </div>
        </div>
        <div className="teams-cell">
          <div className="profile">
            <img className="teamImg" src="/assets/Website Graphics/Profiles/Purple Dev.png" alt="" />
            <div className="teamName">
              Junes
            </div>
            <div className="rolltag">
            Marketing Specialist.
            </div>
          </div>
          <div className="profileDesc">
          Junes facilitates partnerships and marketing between various platforms for SLINK LABS.
          </div>
        </div>

        <div className="teams-cell">
          <div className="profile">

            <img className="teamImg" src="/assets/Website Graphics/Profiles/Artboard 5.png" alt="" />
            <div className="teamName">
              Purple
            </div>
            <div className="rolltag">
              Head Developer.
            </div>
          </div>
          <div className="profileDesc">
          Purple currently oversees operations at SLINK LABS.
          </div>
        </div>

        <div className="teams-cell">
          <div className="profile">

            <img className="teamImg" src="/assets/Website Graphics/Profiles/Biscuits.png" alt="" />
            <div className="teamName">
            Mickey
            </div>
            <div className="rolltag">
            Graphics Designer and Assistant Content Coordinator.
            </div>
          </div>
          <div className="profileDesc">
          Mickey delivers SLINK LABS graphics designs, whilst working alongside Lychee with community coordination and management.
          </div>
        </div>
        <div className="teams-cell">
          <div className="profile">
            <img className="teamImg" src="/assets/Website Graphics/Profiles/Artboard 3.png" alt="" />
            <div className="teamName">
            TEAM HORTANS
            </div>
            <div className="rolltag">
            Human Resources Representative.
            </div>
          </div>
          <div className="profileDesc">
          TEAM HORTANS is in charge of all HR operations for SLINK LABS.
          </div>
        </div>
      </div>
    </div>
  )
}

