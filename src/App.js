import React, { Component } from "react";
import "./App.css";
import Play from "./asset/play2.mp4";

class App extends Component {
  render() {
    return (
      <div className="App" ref="app">
        <Header />
      </div>
    );
  }
}

const BgVid = props => {
  return (
    <div className="bg-vid">
      <video src={props.src} autoPlay loop muted />
    </div>
  );
};

const Header = props => {
  return (
    <header className="header">
      <BgVid src={Play} />

      <div className="inner">
        <h1>
          Premium Domain Names for Sale!
          <h2>
            <div className="god">
              prayforhealth.com
              <br />
              godisworld.com
              <br />
              praytheway.com
              <br />
              guaranteedjoy.com
              <br />
              lovegodtoday.com
              <br />
              connectingwithchrist.com
              <br />
              theanswering.com
            </div>
            <div className="phone">
              fitliquids.com
              <br />
              cellhealer.com
              <br />
              mobileliquids.com
              <br />
              flexiblewearables.com
              <br />
              micromobilitymedical.com
              <br />
              micromobilityservices.com
              <br />
              micromobilitysolutions.com
            </div>
            <div className="money">
            liquormoney.com
            <br />
            liquidcashloan.com
            <br />
            wecaremoney.com
            </div>
            <div className="health">
            organichealth101.com
            <br />
            organichealthdiet.com
            </div>
            <div className="meat">
            actualmeat.com
            <br />
            actualmeats.com
            </div>
            <div className="misc">
            proveanything.com
            <br />
            secrethobbies.com
            <br />
            amillionpossibilities.com
            <br />
            achievegreateness.com
            <br />
            duringwhich.com
            <br />
            unrealhotdeals.com
            </div>
            <div className="law">
              legitattorneys.com
              <br />
              illinoisdruglawyers.com
              <br />
              illinoisdruglawsuit.com
              <br />
              illinoisdruglaw.com
              <br />
              illinoisdrugaddiction.com
            </div>
            <div className="weed">
              illinoiscannabisresearch.com
              <br />
              newagecaredispensary.com
              <br />
              chicagoweedsale.com
              <br />
              chicagoweedsupply.com
              <br />
              chicagoweedconnect.com
              <br />
              getchicagolit.com
            </div>
            <div className="porn">
              innocentsluts.com
              <br />
              slapthatpussy.com
            </div>
            <div className="cgi">chicagoguitarinstructor.com</div>
            <div className="vg">
              nomansskybeyond.com
              <br />
              nomansskyvr.com
            </div>
          </h2>
        </h1>
      </div>
    </header>
  );
};

export default App;
