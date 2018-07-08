import React, { Component } from 'react';
import Navbar from './components/nav/navbar';
import PositionTable from './components/position/positionTable';
import Position from './components/position/position';
import Statistic from './components/statistic';
import Calculator from './components/calculator/calculator';
import Search from './components/position/search';
import { newPosition, newCalculator, newSearch } from './components/constant/constants';
import { BrowserRouter, browserHistory, Router, Route, Switch, NavLink } from 'react-router-dom';
import axios from 'axios';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            position: newPosition,
            positions: [],
            calculator: newCalculator,
            search: newSearch,
            hasError: false,
            error: '',
            success: ''
        }
    }

    componentDidMount() {
        this.loadPositions();
    }

    loadPositions = () => {
        console.log("loadPositions called.")
        axios.get('http://localhost:3001/api/position')
            .then(response => {
                if (response.data.lenth == 0) {
                    this.setState({ positions: [] })
                    this.setState({ hasError: true });
                    this.setState({ error: 'No data found' });
                    console.log('No data found');
                } else {
                    console.log('Received data')
                    this.setState({ positions: response.data })
                }
            }).catch(error => {
                this.setState({ positions: [] })
                this.setState({ hasError: true });
                this.setState({ error: 'No data found' + error });
            });
    }

    handleChange(name, value) {
        console.log("handleChange called.");
        let position = Object.assign({}, this.state.position);
        position[name] = value;
        this.setState({ position });
    }

    handleSave() {
        console.log("handleSave called.");
        const axiosConfig = {
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            }
        };
        const position = this.state.position;
        let Profit = this.calculateProfit(this.state.position.Quantity,
            this.state.position.EntryPrice,
            this.state.position.ExitPrice,
            this.state.position.Commission);
        if (Profit !== '') {
            position.Profit = Profit;
        }
        if (position.Id === '') {
            axios.post('http://localhost:3001/api/position',
                position,
                axiosConfig)
                .then(function (response) {
                    this.setState({ hasError: false });
                    this.setState({ error: 'Position saved' });
                    console.log("Position saved")
                })
                .catch(function (error) {
                    this.setState({ hasError: true });
                    this.setState({ error: 'Failed to save position. ' + error });
                    console.log('Failed to save position, ' + error);
                });
        } else {
            axios.patch('http://localhost:3001/api/position',
                position,
                axiosConfig)
                .then(function (response) {
                    this.setState({ hasError: false });
                    this.setState({ error: 'Position updated' });
                    console.log('Position updated')
                })
                .catch(function (error) {
                    this.setState({ hasError: true });
                    this.setState({ error: 'Failed to update position. ' + error });
                    console.log('Failed to update position, ' + error);
                });
        }
    }

    handleClear() {
        console.log("handleClear called.");
        this.setState({ position: newPosition });
    }

    handleEdit(id) {
        console.log("handleEdit called. ID: ", id);
        axios.get('http://localhost:3001/api/position/' + id)
            .then(response => this.setState({ position: response.data[0] })).catch(error => console.log(error));
    }

    handleDelete(Id) {
        console.log("handleDelete called. ID: ", Id);
        const axiosConfig = {
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            }
        };
        if (Id !== '') {
            axios.delete('http://localhost:3001/api/position/' + Id,
                axiosConfig)
                .then(function (response) {
                    console.log(response);
                    this.setState({ hasError: false });
                    this.setState({ error: 'Position deleted' });
                })
                .catch(function (error) {
                    console.log(error);
                    this.setState({ hasError: true });
                    this.setState({ error: 'Failed to delete position. ' + error });
                });
        }
    }

    handlePSChange(name, value) {
        console.log("handlePSChange called.");
        let calculator = Object.assign({}, this.state.calculator);
        calculator[name] = value;
        this.setState({ calculator });
    }

    handlePSCalculate() {
        console.log("handlePSCalculate called.");
    }

    handlePSClear() {
        console.log("handlePSClear called.");
        this.setState({ calculator: newCalculator });
    }

    handleSearchChange(name, value) {
        console.log("handleSearchChange called.");
        let search = Object.assign({}, this.state.search);
        search[name] = value;
        this.setState({ search: search });
    }

    handlePositionSearch() {
        console.log("handlePositionSearch called.");
        var params = '';
        var first = true;
        console.log(this.state.search.StartDate, this.state.search.EndDate)
        if (this.state.search.Symbol !== '') {
            if (first) {
                first = false;
                params += '?'
            } else {
                params += '&'
            }
            params += 'Symbol=' + this.state.search.Symbol;
        }
        if (this.state.search.Company !== '') {
            if (first) {
                first = false;
                params += '?'
            } else {
                params += '&'
            }
            params += 'Company=' + this.state.search.Company;
        }
        if (this.state.search.Type !== '') {
            if (first) {
                first = false;
                params += '?'
            } else {
                params += '&'
            }
            params += 'Type=' + this.state.search.Type;
        }
        if (this.state.search.StartDate !== '') {
            if (first) {
                first = false;
                params += '?'
            } else {
                params += '&'
            }
            params += 'StartDate=' + this.state.search.StartDate;
        }
        if (this.state.search.EndDate !== '') {
            if (first) {
                first = false;
                params += '?'
            } else {
                params += '&'
            }
            params += 'EndDate=' + this.state.search.EndDate;
        }
        if (this.state.search.Result !== '') {
            if (first) {
                first = false;
                params += '?'
            } else {
                params += '&'
            }
            params += 'Result=' + this.state.search.Result;
        }
        if (this.state.search.OrderBy !== '') {
            if (first) {
                first = false;
                params += '?'
            } else {
                params += '&'
            }
            params += 'OrderBy=' + this.state.search.OrderBy;
        }
        axios.get('http://localhost:3001/api/position/' + params)
            .then((response) => {
                if (response.data == 0) {
                    this.setState({ positions: [] })
                    this.setState({ hasError: true });
                    this.setState({ error: 'No data found' });
                }
                else {
                    this.setState({ hasError: false });
                    this.setState({ error: '' });
                    this.setState({ positions: response.data })
                }
            }).catch(error => {
                this.setState({ positions: [] })
                this.setState({ hasError: true });
                this.setState({ error: 'No data found' });
            });


    }

    handleSearchClear() {
        console.log("handleSearchClear called.");
        this.setState({ search: newSearch });
    }

    calculateProfit(Quantity, EntryPrice, ExitPrice, Commission) {
        if (Quantity !== '' && EntryPrice !== '' && ExitPrice !== '' && Commission !== '') {
            return parseFloat((Quantity * (ExitPrice - EntryPrice)) - Commission).toFixed(2)
        } else {
            return '';
        }
    }

    render() {
        return (
            // <div>
            //     <div className="container">
            //         <Calculator calculator={this.state.calculator}
            //             handlePSChange={this.handlePSChange.bind(this)}
            //             handlePSCalculate={this.handlePSCalculate.bind(this)}
            //             handlePSClear={this.handlePSClear.bind(this)} />
            //         <br />
            //         <Position position={this.state.position}
            //             hasError={this.state.hasError}
            //             error={this.state.error}
            //             success={this.state.success}
            //             handleChange={this.handleChange.bind(this)}
            //             handleSave={this.handleSave.bind(this)}
            //             handleClear={this.handleClear.bind(this)} />
            //         <br />
            //         <Search search={this.state.search}
            //             hasError={this.state.hasError}
            //             error={this.state.error}
            //             success={this.state.success}
            //             handleSearchChange={this.handleSearchChange.bind(this)}
            //             handlePositionSearch={this.handlePositionSearch.bind(this)}
            //             handleSearchClear={this.handleSearchClear.bind(this)} />
            //         <br />
            //         <PositionTable positions={this.state.positions}
            //             handleEdit={this.handleEdit.bind(this)}
            //             handleDelete={this.handleDelete.bind(this)} />
            //     </div>
            // </div>
            <div>
                <BrowserRouter>
                    <Switch>
                        {/* <Navbar /> */}
                        <Route history={browserHistory} exact path='/' render={() =>
                            <div className="container">
                                <Navbar />
                                <Position position={this.state.position}
                                    hasError={this.state.hasError}
                                    error={this.state.error}
                                    success={this.state.success}
                                    handleChange={this.handleChange.bind(this)}
                                    handleSave={this.handleSave.bind(this)}
                                    handleClear={this.handleClear.bind(this)} />
                                <br />
                                <Search hasError={this.state.hasError}
                                    error={this.state.error}
                                    search={this.state.search}
                                    handleSearchChange={this.handleSearchChange.bind(this)}
                                    handlePositionSearch={this.handlePositionSearch.bind(this)}
                                    handleSearchClear={this.handleSearchClear.bind(this)} />
                                <br />
                                <PositionTable positions={this.state.positions}
                                    handleEdit={this.handleEdit.bind(this)}
                                    handleDelete={this.handleDelete.bind(this)} />
                            </div>} />
                        <Route history={browserHistory} path='/statistic' render={() =>
                            <div className="container">
                                <Navbar />
                                <Statistic /> </div>} />
                        <Route history={browserHistory} path='/calculator' render={() =>
                            <div className="container">
                                <Navbar />
                                <Calculator calculator={this.state.calculator}
                                    handlePSChange={this.handlePSChange.bind(this)}
                                    handlePSCalculate={this.handlePSCalculate.bind(this)}
                                    handlePSClear={this.handlePSClear.bind(this)} />
                            </div>
                        } />
                    </Switch>
                </BrowserRouter>
            </div>
        )
    };
}

export default App;