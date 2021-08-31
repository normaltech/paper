import "./ecosystem.css"
import ImageMapper from 'react-img-mapper';
import ImageMap from "image-map";

export default function Ecosystem() {

  return (

     <div className="ecosystemContainer">
       <img src="/assets/Website Graphics/Ecosystem Map/EcoImage.png" alt="Image" useMap="#image-map" />
       <map name="image-map">
         <area shape="rect" coords="373,495,537,537" alt="Ethereum" href="https://ethereum.org/en/"/>
         <area shape="rect" coords="957,488,1109,536" alt="Cardano" href="https://cardano.org/" target="_blank"/>
        <area shape="rect" coords="276,722,447,762" alt="Binance" href="https://ethereum.org/en/"/>
         <area shape="rect" coords="1054,727,1180,767" alt="Matic" href="https://ethereum.org/en/"/>
         <area shape="rect" coords="437,944,534,993" alt="Avalanche" href="https://ethereum.org/en/"/>
         <area shape="rect" coords="653,669,846,823" alt="SLINK" href="https://ethereum.org/en/"/>
       </map>
        
     </div>

  )
}

  

