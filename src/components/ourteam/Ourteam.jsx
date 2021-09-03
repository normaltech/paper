import "./ourteam.css"
import Flickity from "flickity";

export default function Ourteam() {
  return (
    <div className="Ourteamcontainer">
      <div className="containerTitle">
        Our team
      </div>
      <div className="teams" data-flickity='{ "pageDots": false,"draggable": true, "prevNextButtons": false, "wrapAround": true, "autoPlay": 3000, "groupCells": "3","cellAlign": "left"}'>
        <div className="teams-cell">
          <div className="profile">
            <img className="teamImg" src="/assets/Website Graphics/Profiles/Lychee.png" alt="" />
            <div className="rolltag">
              Content Coordinator
            </div>
            <div className="teamName">
              Lychee
            </div>
          </div>
          <div className="profileDesc">
            Lychee is an accomplished multi-asset trader who has been involved in the cryptocurrency space for over 4 years. His position at SLINK involves managing our community content/promotion groups. In addition to his managing role, he coordinates content and researches various channels for marketing opportunities to support the SLINK community.
          </div>
        </div>
        <div className="teams-cell">
          <div className="profile">
            <img className="teamImg" src="/assets/Website Graphics/Profiles/Purple Dev.png" alt="" />
            <div className="rolltag">
              Marketing manager
            </div>
            <div className="teamName">
              Junes
            </div>
          </div>
          <div className="profileDesc">
            Co-Founder, Marketing Manager
          </div>
        </div>

        <div className="teams-cell">
          <div className="profile">

            <img className="teamImg" src="/assets/Website Graphics/Profiles/Artboard 5.png" alt="" />
            <div className="rolltag">
              Lead developer
            </div>
            <div className="teamName">
              Purple
            </div>
          </div>
          <div className="profileDesc">
            Co-Founder, Lead Developer
          </div>
        </div>

        <div className="teams-cell">
          <div className="profile">

            <img className="teamImg" src="/assets/Website Graphics/Profiles/Biscuits.png" alt="" />
            <div className="rolltag">
              Graphic Designer
            </div>
            <div className="teamName">
              Biscuits
            </div>
          </div>
          <div className="profileDesc">
            Biscuits’s skill set was honed in graphic designing and as well as market intelligence. Having extensive experience in branding design, website design, videography, animation design and much more. On the side PeanutButterx also contributes to content coordinating along with Lychee.
          </div>
        </div>
        <div className="teams-cell">
          <div className="profile">
            <img className="teamImg" src="/assets/Website Graphics/Profiles/Artboard 3.png" alt="" />
            <div className="rolltag">
              Research Analyst
            </div>
            <div className="teamName">
              Taycan
            </div>
          </div>
          <div className="profileDesc">
            goodguy
          </div>
        </div>
      </div>
    </div>
  )
}

