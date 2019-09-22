import React, { Component } from "react";
import "./App.css";
import Play from "./asset/play2.mp4";

class App extends Component {
  render() {
    return (
      <div className="App" ref="app">
        <Header />
        <div className="contact">
          Choose the domain(s) you'd like to purchase
          <br />
          {"&"}
          <br />
          Make me an offer:
          <br />
          <span className="fancy">mnolan312@gmail.com</span>
          <br />
        </div>
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

const Header = () => {
  return (
    <div className="header">
      <BgVid src={Play} />
      <div className="inner">
        <h1>Premium Domain Names for Sale!</h1>
        <h2>
          <div className="wrapper">
            <div className="row">
              <div className="columns">
                <div>
                  godisworld.com
                  <br />
                  praytheway.com
                  <br />
                  prayforhealth.com
                  <br />
                  connectingwithchrist.com
                  <br />
                  lovegodtoday.com
                  <br /><br />
                  theanswering.com
                  <br />
                  guaranteedjoy.com
                  
                  <br />
                  <br />
                  cellhealer.com
                  <br />
                  mobileliquids.com
                  <br />
                  flexiblewearables.com
                  <br />
                  <br />
                  micromobilitymedical.com
                  <br />
                  micromobilityservices.com
                  <br />
                  micromobilitysolutions.com
                  <br />
                  <br />
                  nomansskybeyond.com
                  <br />
                  nomansskyvr.com
                </div>
              </div>
              <div className="columns">
                <div>
                             
                  illinoisdruglaw.com
                  <br />
                  illinoisdruglawyers.com
                  <br />
                  illinoisdruglawsuit.com
                  <br />
                  illinoisdrugaddiction.com
                  <br />
                  <br />
                  legitattorneys.com<br /><br />
                  illinoiscannabisresearch.com
                  <br />
                  chicagoweedsupply.com
                  <br />
                  chicagoweedconnect.com
                  <br />
                  chicagoweedsale.com
                  <br />
                  getchicagolit.com
                  <br />
                  newagecaredispensary.com
                  <br />
                  <br />
                  chicagoguitarinstructor.com
                </div>
              </div>
              <div className="columns">
                <div>
                  unrealhotdeals.com
                  <br />
                  liquidcashloan.com
                  <br />
                  wecaremoney.com
                  <br />
                  liquormoney.com
                  <br />
                  <br />
                  amillionpossibilities.com
                  <br />
                  achievegreateness.com
                  <br />
                  proveanything.com
                  <br />
                  <br />
                  organichealthdiet.com
                  <br />
                  organichealth101.com
                  <br />
                  fitliquids.com
                  <br />
                  <br />
                  secrethobbies.com
                  <br /><br />
                  slapthatpussy.com
                  <br />
                  innocentsluts.com
                  <br />
                  <br />
                  actualmeat.com
                  <br />
                  actualmeats.com
                  <br />
                  duringwhich.com
                  <br />
                </div>
              </div>
            </div>
          </div>
        </h2>
      </div>
    </div>
  );
};

export default App;
