import React, { Component } from 'react';
import { equityTypes, resultTypes, orderByTypes } from '../constant/constants';
class Search extends Component {

    handleChange(e) {
        const name = e.target.name;
        const value = e.target.value;
        console.log("name: ", name, " value: ", value);
        this.props.handleSearchChange(name, value);
    }

    handleSearch() {
        this.props.handlePositionSearch();
    }

    handleClear() {
        this.props.handleSearchClear();
    }

    render() {
        return <div>
            <div className="alert alert-primary font-weight-bold" role="alert">
                Search for Position
          </div>
            <div style={this.props.hasError ? {} : { display: 'none' }} className="alert alert-danger" role="alert">
                {this.props.error}
            </div>
            <div className="form-row">
                <div className="col">
                    <label htmlFor="Symbol">Symbol</label>
                    <input type="text" className="form-control" id="Symbol" name="Symbol" aria-describedby="Symbol" placeholder="Enter Symbol" value={this.props.search.Symbol} onChange={this.handleChange.bind(this)} />
                </div>
                <div className="col">
                    <label htmlFor="Company">Company</label>
                    <input type="text" className="form-control" id="Company" name="Company" aria-describedby="Company" placeholder="Enter Company" value={this.props.search.Company} onChange={this.handleChange.bind(this)} />
                </div>
                <div className="col">
                    <label htmlFor="Type">Type</label>
                    <select id="Type" name="Type" className="form-control" aria-describedby="Type" value={this.props.search.Type} onChange={this.handleChange.bind(this)} >
                        {equityTypes.map((Type, i) =>
                            <option key={i} value={Type}>{Type}</option>
                        )}
                    </select>
                </div>
            </div><br />
            <div className="form-row">
                <div className="col">
                    <label htmlFor="StartDate">Start Date</label>
                    <input type="date" className="form-control" id="StartDate" name="StartDate" aria-describedby="StartDate" placeholder="Enter start date" selected={this.props.search.StartDate} value={this.props.search.StartDate} onChange={this.handleChange.bind(this)} />
                </div>
                <div className="col">
                    <label htmlFor="EndDate">End Date</label>
                    <input type="date" className="form-control" id="EndDate" name="EndDate" aria-describedby="EndDate" placeholder="Enter end date" value={this.props.search.EndDate} onChange={this.handleChange.bind(this)} />
                </div>
                <div className="col">
                    <label htmlFor="Type">Result</label>
                    <select id="Result" name="Result" className="form-control" aria-describedby="Result" value={this.props.search.Result} onChange={this.handleChange.bind(this)} >
                        {resultTypes.map((Type, i) =>
                            <option key={i} value={Type}>{Type}</option>
                        )}
                    </select>
                </div>
            </div><br />
            <div className="form-row">
                <div className="col-md-4">
                    <label htmlFor="OrderBy">OrderBy</label>
                    <select id="OrderBy" name="OrderBy" className="form-control" aria-describedby="OrderBy" value={this.props.search.OrderBy} onChange={this.handleChange.bind(this)} >
                        {orderByTypes.map((Type, i) =>
                            <option key={i} value={Type}>{Type}</option>
                        )}
                    </select>
                </div>
            </div><br />
            <button className="btn btn-primary" onClick={this.handleSearch.bind(this)}>Search</button>&nbsp;&nbsp;
            <button className="btn btn-danger" onClick={this.handleClear.bind(this)}>Clear</button>
        </div>
    }
}

export default Search;