import React, { Component } from 'react';
import { equityTypes } from '../constant/constants';

class Calculator extends Component {

    handlePSChange(e) {
        const name = e.target.name;
        const value = e.target.value;
        console.log("name: ", name, " value: ", value);
        this.props.handlePSChange(name, value);
    }

    handleCalculate() {
        this.props.handlePSCalculate();
    }

    handleClear() {
        this.props.handlePSClear();
    }

    render() {
        return <div>
            <div className="alert alert-primary font-weight-bold" role="alert">
                Position Size Calculator
          </div>
            <div className="form-row">
                <div className="col">
                    <label htmlFor="AccountTotal">Account Total</label>
                    <input type="number" className="form-control" id="AccountTotal" name="AccountTotal" aria-describedby="AccountTotal" placeholder="Enter account total"
                        value={this.props.calculator.AccountTotal}
                        onChange={this.handlePSChange.bind(this)} />
                </div>
                <div className="col">
                    <label htmlFor="PercentRisk">% Risk</label>
                    <input type="number" className="form-control" id="PercentRisk" name="PercentRisk" aria-describedby="PercentRisk" placeholder="Enter percent risk"
                        value={this.props.calculator.PercentRisk} step="1" onChange={this.handlePSChange.bind(this)} />
                </div>
            </div>
            <div className="form-row">
                <div className="col">
                    <label htmlFor="EntryPrice">Entry Price</label>
                    <input type="number" className="form-control" id="EntryPrice" name="EntryPrice" aria-describedby="PercentRisk" placeholder="Enter entry Price"
                        value={this.props.calculator.EntryPrice} step="0.01" onChange={this.handlePSChange.bind(this)} />
                </div>
                <div className="col">
                    <label htmlFor="StopLossPrice">Stop Loss Price</label>
                    <input type="number" className="form-control" id="StopLossPrice" name="StopLossPrice" aria-describedby="StopLossPrice" placeholder="Enter stop loss price"
                        value={this.props.calculator.StopLossPrice} step="0.01" onChange={this.handlePSChange.bind(this)} />
                </div>
            </div>
            <div className="form-row">
                <div className="col">
                    <label htmlFor="NumberOfShares">Number Of Shares</label>
                    <input type="text" className="form-control" id="NumberOfShares" name="NumberOfShares" aria-describedby="NumberOfShares" placeholder="0" readOnly value={this.props.calculator.NumberOfShares}
                        onChange={this.handlePSChange.bind(this)} />
                </div>
            </div><br />
            <button className="btn btn-primary" onClick={this.handleCalculate.bind(this)}>Calculate</button>&nbsp;&nbsp;
            <button className="btn btn-danger" onClick={this.handleClear.bind(this)}>Clear</button>
        </div>
    }
}

export default Calculator;