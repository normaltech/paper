import "./ecosystem.css"
import ImageMapper from 'react-img-mapper';
import ImageMap from "image-map";
import ReactTooltip from "react-tooltip";
import { Tooltip } from "@material-ui/core";


export default function Ecosystem() {

  return (
    <div className="ecosystemContainer">
      <div className="ecosystemTitle">Ecosystems</div>
    <img className="ecosystemImg" src="/assets/Website Graphics/Ecosystem Map/EcoImage2.png" alt="Image" useMap="#image-map" />
    <map name="image-map">
      <area data-for='enrich' data-tip='Write_Content' shape="rect" coords="119,105,293,173" alt="Ethereum" href="https://ethereum.org/en/" target="_blank"/> 
      <ReactTooltip id='enrich' getContent={(dataTip) => `Write Content ${dataTip}`}/>
      <area data-for='enrich' data-tip='Write_Content ' shape="rect" coords="696,105,869,180" alt="Cardano" href="https://cardano.org/" target="_blank"/>
      <ReactTooltip id='enrich' getContent={(dataTip) => `Write Content ${dataTip}`}/>
      <area data-for='enrich' data-tip='Write_Content ' shape="rect" coords="18,334,204,401" alt="Binance" href="https://ethereum.org/en/" target="_blank" />
      <ReactTooltip id='enrich' getContent={(dataTip) => `Write Content ${dataTip}`}/>
      <area data-for='enrich' data-tip='Write_Content ' shape="rect" coords="791,333,936,403" alt="Matic" href="https://ethereum.org/en/" target="_blank" title="SBSBS"/>
      <ReactTooltip id='enrich' getContent={(dataTip) => `Write Content ${dataTip}`}/>
      <area data-for='enrich' data-tip='Write_Content ' shape="rect" coords="209,559,324,648" alt="Avalanche" href="https://ethereum.org/en/" target="_blank"/>
      <ReactTooltip id='enrich' getContent={(dataTip) => `Write Content ${dataTip}`}/>
      <area data-for='enrich' data-tip='Write_Content ' shape="rect" coords="390,285,601,464" alt="SLINK" href="https://ethereum.org/en/" target="_blank"/>
      <ReactTooltip id='enrich' getContent={(dataTip) => `Write Content ${dataTip}`}/>
    </map>
  </div>

  )
}