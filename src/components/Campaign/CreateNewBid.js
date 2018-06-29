import React, { Component } from 'react';

import Input from '@salesforce/design-system-react/lib/components/input';
import Button from '@salesforce/design-system-react/lib/components/button';

class CreateNewBid extends Component {
  render() {
    return (
      <div className="slds-grid slds-wrap slds-grid_align-center">
        <div>
          <div className="slds-col slds-size_1-of-1">
            <h1 className="slds-text-heading_large">Create a new Bid</h1>
          </div>
          <UploadImages />
        </div>
      </div>
    );
  }
}

const BidTitle = () => <h1>OnePlus_6</h1>

class UploadImages extends Component {
  render() {
    return (
      <div className="slds-col slds-size_1-of-1">
        <div className="slds-form-element">
          <span
            className="slds-form-element__label"
            id="file-selector-primary-label"
          >
            Attachment
          </span>
          <div className="slds-form-element__control">
            <div className="slds-file-selector slds-file-selector_files">
              <div className="slds-file-selector__dropzone">
                <input
                  type="file"
                  className="slds-file-selector__input slds-assistive-text"
                  accept="image/png"
                  id="file-upload-input-01"
                  aria-labelledby="file-selector-primary-label file-selector-secondary-label"
                />
                <label
                  className="slds-file-selector__body"
                  htmlFor="file-upload-input-01"
                  id="file-selector-secondary-label"
                >
                  <span className="slds-file-selector__button slds-button slds-button_neutral">
                    <svg
                      className="slds-button__icon slds-button__icon_left"
                      aria-hidden="true"
                    />Upload Files
                  </span>
                  <span className="slds-file-selector__text slds-medium-show">
                    or Drop Files
                  </span>
                </label>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default CreateNewBid;
