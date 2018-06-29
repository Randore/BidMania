import React, { Component } from 'react';
import Button from '@salesforce/design-system-react/lib/components/button';
import IconSettings from '@salesforce/design-system-react/lib/components/icon-settings';
import Input from '@salesforce/design-system-react/lib/components/input';
import InputIcon from '@salesforce/design-system-react/lib/components/icon/input-icon';
// Import Modules
import Countdown from 'react-cntdwn';

const handleFinish = function() {
  document.getElementById('submit_bid').classList('disabled');
};

class BidBlock extends Component {
  constructor(props) {
    super(props);
    this.state = {
      input: '',
      currentPrice: 0,
      minPrice: 20
    };

    this.addBidPrice = this.addBidPrice.bind(this);
    this.getBidValue = this.getBidValue.bind(this);
  }

  addBidPrice(event) {
    event.preventDefault();

    this.setState({
      currentPrice: this.state.input
    });
  }

  getBidValue(event) {
    event.preventDefault();
    const { value } = event.target;
    this.setState({
      input: value
    });
  }

  render() {
    return (
      <form onClick={this.addBidPrice.bind(this)}>
        <h2 className="slds-text-heading_medium">
          Current Price $ {this.state.currentPrice}
        </h2>
        <div className="slds-form slds-m-top_medium">
          <div className="slds-form-element">
            <label
              className="slds-text-align_left slds-p-right_small"
              htmlFor="input-id-01"
            >
              <b className="slds-text-heading_small">Bid Amount</b>
            </label>
            <div className="slds-form-element__control slds-m-top_small">
              <IconSettings iconPath="/icons">
                <Input
                  type="number"
                  onChange={this.getBidValue}
                  value={this.state.input}
                  iconLeft={
                    <InputIcon
                      assistiveText="Bid Amount"
                      name="moneybag"
                      category="utility"
                      size="small"
                    />
                  }
                  id="unique-id-1"
                  placeholder="Please enter your amount eg: 10"
                />
              </IconSettings>
            </div>

            <Button
              id="submit_bid"
              type="submit"
              className="slds-button slds-button_success slds-m-top_medium"
              label="Place Your Bid"
            />
            <p>Minimum Bid</p>
          </div>
          {/* <Timer date={Date()} /> */}
          Ending in:{' '}
          <Countdown
            targetDate={new Date('December 9, 2018')}
            startDelay={2000}
            interval={1000}
            timeSeparator={' : '}
            leadingZero
            onFinished={handleFinish}
          />
        </div>
      </form>
    );
  }
}

export default BidBlock;
