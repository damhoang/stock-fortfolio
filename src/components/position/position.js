import React, { Component } from 'react';
import { equityTypes } from '../constant/constants';

class Position extends Component {

    handleChange(e) {
        const name = e.target.name;
        const value = e.target.value;
        console.log("name: ", name, " value: ", value);
        this.props.handleChange(name, value);
    }

    handleSave() {
        this.props.handleSave();
    }

    handleClear() {
        this.props.handleClear();
    }

    render() {
        return <div>
            <div className="alert alert-primary font-weight-bold" role="alert">
                {this.props.position.Id === '' ? 'Create New Position' : 'Update Existing Position'}
            </div>
            <div style={this.props.hasError ? {} : { display: 'none' }} className="alert alert-danger" role="alert">
                {this.props.error}
            </div>
            <div style={(!this.props.hasError && this.props.success) ? {} : { display: 'none' }} className="alert alert-success" role="alert">
                {this.props.success}
            </div>
            <div className="form-row">
                <div className="col">
                    <label htmlFor="Symbol">Symbol</label>
                    <input type="text" className="form-control" id="Symbol" name="Symbol" aria-describedby="Symbol" placeholder="Enter Symbol" value={this.props.position.Symbol} onChange={this.handleChange.bind(this)} />
                </div>
                <div className="col">
                    <label htmlFor="Company">Company</label>
                    <input type="text" className="form-control" id="Company" name="Company" aria-describedby="Company" placeholder="Enter Company" value={this.props.position.Company} onChange={this.handleChange.bind(this)} />
                </div>
                <div className="col">
                    <label htmlFor="Type">Type</label>
                    <select id="Type" name="Type" className="form-control" aria-describedby="Type" value={this.props.position.Type} onChange={this.handleChange.bind(this)} >
                        <option defaultValue={this.props.position.Type}>{this.props.position.Type}</option>
                        {equityTypes.map((type, i) =>
                            <option key={i} value={type}>{type}</option>
                        )}
                    </select>
                </div>
            </div><br />
            <div className="form-row">
                <div className="col">
                    <label htmlFor="Quantity">Quantity</label>
                    <input type="number" className="form-control" id="Quantity" name="Quantity" aria-describedby="Quantity" placeholder="Enter Quantity" value={this.props.position.Quantity} onChange={this.handleChange.bind(this)} />
                </div>
                <div className="col">
                    <label htmlFor="EntryDate">Entry Date</label>
                    <input type="date" className="form-control" id="EntryDate" name="EntryDate" aria-describedby="EntryDate" placeholder="Enter entry date" value={(new Date(this.props.position.EntryDate)).toISOString().slice(0, 10)} onChange={this.handleChange.bind(this)} />
                </div>
                <div className="col">
                    <label htmlFor="ExitDate">Exit Date</label>
                    <input type="date" className="form-control" id="ExitDate" name="ExitDate" aria-describedby="ExitDate" placeholder="Enter exit date" value={(new Date(this.props.position.ExitDate)).toISOString().slice(0, 10)} onChange={this.handleChange.bind(this)} />
                </div>
            </div><br />
            <div className="form-row">
                <div className="col">
                    <label htmlFor="EntryPrice">Entry Price</label>
                    <input type="number" className="form-control" id="EntryPrice" name="EntryPrice" aria-describedby="EntryPrice" placeholder="Enter entry price" value={this.props.position.EntryPrice} step="0.01" onChange={this.handleChange.bind(this)} />
                </div>
                <div className="col">
                    <label htmlFor="ExitPrice">Exit Price</label>
                    <input type="number" className="form-control" id="ExitPrice" name="ExitPrice" aria-describedby="ExitPrice" placeholder="Enter exit price" value={this.props.position.ExitPrice} step="0.01" onChange={this.handleChange.bind(this)} />
                </div>
                <div className="col">
                    <label htmlFor="Commission">Commission</label>
                    <input type="number" className="form-control" id="Commission" name="Commission" aria-describedby="Commission" placeholder="Enter Commission" value={this.props.position.Commission} step="0.01" onChange={this.handleChange.bind(this)} />
                </div>
            </div>
            <br />
            <button className="btn btn-primary" onClick={this.handleSave.bind(this)}>{this.props.position.Id === '' ? 'Save' : 'Update'}</button>&nbsp;&nbsp;
            <button className="btn btn-danger" onClick={this.handleClear.bind(this)}>Clear</button>
        </div>
    }
}

export default Position;