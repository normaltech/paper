import "./tokenomics.css"


export default function Tokenomics() {
  return (
    <div className="tokenomicsContainer">
      <div className="tokenomicsTitle">Tokenomics</div>
      <div className="tokenImgDiv">
        <img className="tokenImg" src="/assets/Website Graphics/Tokenomics/Tax_10_1.png" alt="tokenImg" />
        <img className="tokenImg" src="/assets/Website Graphics/Tokenomics/Tax_10.png" alt="tokenImg" />
      </div>
      <div className="warningText">
       ※the marketing tax will slowly decrease after funding initial push
      </div>
    </div>

  )
}