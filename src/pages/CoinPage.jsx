import About from "../components/About.jsx"
import CradsPromo from "../components/CradsPromo.jsx"
import Crypto from "../components/Crypto.jsx"
import PageHolder from "../components/PageHolder.jsx"
import PerformanceSection from "../components/PerformanceSection.jsx"
import SentimentSection from "../components/SentimentSection.jsx"
import ToggleSection from "../components/ToggleSection.jsx"
import Tokenomics from "../components/Tokenomics.jsx"
import TrendingCoins from "../components/TrendingCoins.jsx"
import Team from "../components/TeamCard.jsx"
import SuggestionSection from "../components/SuggestionSection.jsx"


function CoinPage() {
  return (
    <div className="h-full w-screen bg-slate-200/40">
      <PageHolder/>

      <div className="w-screen lg:flex">
        <div className="lg:w-8/12 lg:ml-14 mx-4">
            <Crypto/>
             <ToggleSection/>
             <PerformanceSection/>
             <SentimentSection/>
             <About/>
             <Tokenomics/>
             <Team/>
        </div>
        <div className="lg:w-4/12 lg:mr-14 mx-4">
          <CradsPromo/>
          <TrendingCoins/>
        </div>
        
      </div>
        <SuggestionSection/>
    </div>
  )
}

export default CoinPage
