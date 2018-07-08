import React, { Component } from 'react'

class PositionTable extends Component {

    handleDelete(Id) {
        this.props.handleDelete(Id);
    }

    handleEdit(Id) {
        this.props.handleEdit(Id);
    }

    render() {
        return <div className="table-responsive">
            <table className="table">
                <thead className="thead-light">
                    <tr>
                        <th scope="col"></th>
                        <th scope="col">Symbol</th>
                        <th scope="col">Company</th>
                        <th scope="col">Type</th>
                        <th scope="col">Qty</th>
                        <th scope="col">Entry Date</th>
                        <th scope="col">Exit Date</th>
                        <th scope="col">Entry Price</th>
                        <th scope="col">Exit Price</th>
                        <th scope="col">Commission</th>
                        <th scope="col">Profit</th>
                    </tr>
                </thead>
                <tbody>
                    {this.props.positions.map((position, i) =>
                        <tr key={position.Id}>
                            <td scope="row"><a
                                className="btn btn-primary btn-sm"
                                onClick={this.handleEdit.bind(this, position.Id)}>Edit</a>&nbsp;&nbsp;
                                <a
                                    className="btn btn-danger btn-sm"
                                    onClick={this.handleDelete.bind(this, position.Id)}>Delete</a></td>
                            <td scope="row">{position.Symbol}</td>
                            <td scope="row">{position.Company}</td>
                            <td scope="row">{position.Type}</td>
                            <td scope="row">{position.Quantity}</td>
                            <td scope="row">{new Date(position.EntryDate).toLocaleDateString()}</td>
                            <td scope="row">{new Date(position.ExitDate).toLocaleDateString()}</td>
                            <td scope="row">${position.EntryPrice}</td>
                            <td scope="row">${position.ExitPrice}</td>
                            <td scope="row">${position.Commission}</td>
                            <td scope="row">${position.Profit}</td>
                        </tr>
                    )}
                </tbody>
            </table>
        </div >
    }
}

export default PositionTable;