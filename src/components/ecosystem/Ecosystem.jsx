import "./ecosystem.css"
import ImageMapper from 'react-img-mapper';
import ImageMap from "image-map";
import ReactTooltip from "react-tooltip";
import { Tooltip } from "@material-ui/core";


export default function Ecosystem() {


  return (
    <div className="ecosystemContainer">
      <div id="ecosystemTopbarPos"></div>
      <div id="ecosystemTopbarPosUnder"></div>
      <div className="ecosystemTitle">
        <div id="slinkline">SLABS</div>
        <div>ECOSYSTEM</div>
      </div>
    <img className="ecosystemImg" src="/assets/Website Graphics/Ecosystem Map/EcoImage2.png" alt="Image" useMap="#image-map" />
    <map name="image-map">
      <area data-for='enrich' data-tip= "RugRelief" shape="rect" coords="119,105,293,173" alt="Ethereum" href="https://www.rugrelief.com/" target="_blank"/> 
      <ReactTooltip id='enrich' getContent={(dataTip) => `${dataTip}`}/>
      <area data-for='enrich' data-tip='COMING SOON' shape="rect" coords="696,105,869,180" alt="Cardano" target="_blank"/>
      <ReactTooltip id='enrich' getContent={(dataTip) => `${dataTip}`}/>
      <area data-for='enrich' data-tip='COMING SOON' shape="rect" coords="18,334,204,401" alt="Binance" target="_blank" />
      <ReactTooltip id='enrich' getContent={(dataTip) => `${dataTip}`}/>
      <area data-for='enrich' data-tip='COMING SOON' shape="rect" coords="791,333,936,403" alt="Matic" target="_blank" title="SBSBS"/>
      <ReactTooltip id='enrich' getContent={(dataTip) => `${dataTip}`}/>
      <area data-for='enrich' data-tip='COMING SOON' shape="rect" coords="209,559,324,648" alt="Avalanche" target="_blank"/>
      <ReactTooltip id='enrich' getContent={(dataTip) => `${dataTip}`}/>
      {/* <area data-for='enrich' data-tip='COMING SOON ' shape="rect" coords="390,285,601,464" alt="SLINK" href="https://ethereum.org/en/" target="_blank"/>
      <ReactTooltip id='enrich' getContent={(dataTip) => `${dataTip}`}/> */}
    </map>
  </div>

  )
}