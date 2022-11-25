import React, {Component} from 'react';

import {selectSortingValue} from "./../App.js";

class SortItems extends Component {

    handleChange = event => {
        //this.setState({value: event.target.value});
        //this.props.sortItems(event.target.value);
        selectSortingValue(event.target.value)
        //console.log(this.state)
    }

  render() {
    return (
        <fieldset className="MuiFormControl-root">
          <legend className="MuiFormLabel-root">Sort By</legend>
          <div className="MuiFormGroup-root" role="radiogroup">
            <label className="MuiFormControlLabel-root">
              <span className="MuiButtonBase-root MuiIconButton-root jss1 MuiRadio-root MuiRadio-colorSecondary MuiIconButton-colorSecondary" aria-disabled="false">
                <span className="MuiIconButton-label">
                  <input className="jss4" type="radio" value="Rating" name="sortGroup" onChange={(e) => this.handleChange(e)}/>
                </span>
                <span className="MuiTouchRipple-root"></span>
              </span>
              <span className="MuiTypography-root MuiFormControlLabel-label MuiTypography-body1">Rating</span>
            </label>
            <br></br>
            <label className="MuiFormControlLabel-root">
              <span className="MuiButtonBase-root MuiIconButton-root jss1 MuiRadio-root MuiRadio-colorSecondary MuiIconButton-colorSecondary" aria-disabled="false">
                <span className="MuiIconButton-label">
                  <input className="jss4" type="radio" value="Price"  name="sortGroup" onChange={(e) => this.handleChange(e)}/>
                </span>
                <span className="MuiTouchRipple-root"></span>
              </span>
              <span className="MuiTypography-root MuiFormControlLabel-label MuiTypography-body1">Price</span>
            </label>                
          </div>
        </fieldset>
    );
    }
}

export default SortItems;
