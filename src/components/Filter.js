import React, {Component} from 'react';

import {selectFilterType} from "./../App.js";


class Filter extends Component {

  
    handleChange = (e, value) => {
      //this.props.filterItems(value, this.props.title);
      selectFilterType(value, e.target.checked);
      console.log("Filter handleChange:"+value+","+e.target.checked)
    }
  
    render() {
  
      return (
        <fieldset className="MuiFormControl-root" style={{width: '100px'}}>
            <legend className="MuiFormLabel-root">Types</legend>
              <div className="MuiFormGroup-root" >
                <label className="MuiFormControlLabel-root">
                    <span className="MuiButtonBase-root MuiIconButton-root jss1 MuiCheckbox-root MuiCheckbox-colorSecondary MuiIconButton-colorSecondary" aria-disabled="false">
                    <span className="MuiIconButton-label">
                        <input className="filter_checkbox" type="checkbox" data-indeterminate="false" value="Anime" onChange={(e) => this.handleChange(e, 'Anime', e.target.checked)}/>
                    </span>
                    <span className="MuiTouchRipple-root"></span>
                    </span>
                    <span className="MuiTypography-root MuiFormControlLabel-label MuiTypography-body1">Anime</span>
                </label>
                <br></br>
                <label className="MuiFormControlLabel-root">
                    <span className="MuiButtonBase-root MuiIconButton-root jss1 MuiCheckbox-root MuiCheckbox-colorSecondary MuiIconButton-colorSecondary" aria-disabled="false">
                        <span className="MuiIconButton-label">
                            <input className="filter_checkbox" type="checkbox" data-indeterminate="false" value="Action" onChange={(e) => this.handleChange(e, 'Action')}/>
                        </span>
                        <span className="MuiTouchRipple-root"></span>
                    </span>
                    <span className="MuiTypography-root MuiFormControlLabel-label MuiTypography-body1">Action</span>
                </label>
                <br></br>
                <label className="MuiFormControlLabel-root">
                    <span className="MuiButtonBase-root MuiIconButton-root jss1 MuiCheckbox-root MuiCheckbox-colorSecondary MuiIconButton-colorSecondary" aria-disabled="false">
                        <span className="MuiIconButton-label">
                            <input className="filter_checkbox" type="checkbox" data-indeterminate="false" value="Romance" onChange={(e) => this.handleChange(e, 'Romance')}/>
                        </span>
                        <span className="MuiTouchRipple-root"></span>
                    </span>
                    <span className="MuiTypography-root MuiFormControlLabel-label MuiTypography-body1">Romance</span>
                </label>
              </div>
            </fieldset> 
      )
    }
  }
  
  export default Filter;