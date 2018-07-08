import React, { Component } from 'react';

class Layout extends Component {
    render() {
        return (
            <div className="container">
                <Position position={this.state.position}
                    handleChange={this.handleChange.bind(this)}
                    handleSave={this.handleSave.bind(this)}
                    handleClear={this.handleClear.bind(this)} />
                <br />
                <PositionTable positions={this.state.positions}
                    handleUpdate={this.handleUpdate.bind(this)}
                    handleDelete={this.handleDelete.bind(this)} />
            </div>
        )
    }
}

export default Layout;