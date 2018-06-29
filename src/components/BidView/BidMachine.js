import React, { Component } from 'react';
import BidBlock from './BidBlock';

import './BidMachine.css';
import BidItemImg from '../../assets/one_plus.jpg';

class BidMachine extends Component {
  render() {
    return (
      <div className="slds-grid slds-wrap BidGrid">
        <div className="slds-col slds-size_10-of-12">
          <div className="slds-m-bottom_large" />
        </div>
        <div className="slds-col slds-grid slds-size_12-of-12">
          <div className="slds-col slds-size_5-of-12">
            <div className="slds-col--padded bg-color--item item-placeHolder">
              <img alt="Bid Item" src={BidItemImg} />
            </div>
          </div>
          <div className="slds-col slds-size_7-of-12">
            <div className="slds-col--padded slds-p-left_medium">
              <h1 className="title-content--right slds-text-heading_large">
                OnePlus 6 <br />(Mirror Black, 8GB RAM + 128GB Memory)
              </h1>
              <div className="slds-card slds-p-around_medium slds-m-top_small">
                <BidBlock />
              </div>
              <div className="slds-m-top_large">
                <h2 className="slds-text-heading_medium">Product Details:</h2>
                <ul className="list-items">
                  <li>20 MP + 16 MP primary dual camera with OIS,</li>
                  <li>Super Slow motion, </li>
                  <li>Portrait mode and 16 MP front facing camera</li>
                  <li>
                    15.95 centimeters(6.28 - inch)FHD + Full Optic AMOLED 19 : 9
                    display with 2280 x 1080 pixels resolution.2.5 D Corning
                    Gorilla Glass 5
                  </li>
                  <li>
                    OxygenOS based on Android Oreo 8.1 with Qualcomm Snapdragon
                    845 octa core processor.
                  </li>
                  <li>8 GB RAM, </li>
                  <li>
                    128 GB internal memory and dual nano SIM dual - standby(4 G
                    + 4 G){' '}
                  </li>
                  <li>
                    3300 mAH lithium Polymer battery with Dash Charge technology{' '}
                  </li>
                  <li>Face Unlock, </li>
                  <li>Fingerprint scanner, </li>
                  <li>Water Resistant, </li>
                  <li>Glass back and NFC enabled</li>

                  <li>
                    1 year manufacturer warranty for device and in - box
                    accessories including batteries from the date of purchase
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default BidMachine;
