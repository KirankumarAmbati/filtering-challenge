import React, { Component } from 'react';
import Select from 'react-select';

import { countries } from '../data';

class App extends Component {
    constructor(props) {
        super(props)

        this.state = {
            names: [
                {
                    label: 'Account',
                    value: 'account'
                },
                {
                    label: 'Country',
                    value: 'country'
                },
                {
                    label: 'Campaign',
                    value: 'campaign'
                },
                {
                    label: 'Revenue',
                    value: 'revenue'
                }
            ],
            conditions: {
                account: [
                    {
                        label: 'contains',
                        value: 'contains'
                    },
                    {
                        label: 'not contains',
                        value: 'not_contains'
                    }
                ],
                country: [
                    {
                        label: 'contains',
                        value: 'contains'
                    },
                    {
                        label: 'not contains',
                        value: 'not_contains'
                    }
                ],
                campaign: [
                    {
                        label: 'starts with',
                        value: 'starts_with'
                    },
                    {
                        label: 'contains',
                        value: 'contains'
                    },
                    {
                        label: 'not contains',
                        value: 'not_contains'
                    }
                ],
                revenue: [
                    { label: '>', value: '>' },
                    { label: '<', value: '<' },
                    { label: '>=', value: '>=' },
                    { label: '<=', value: '<=' },
                    { label: '!=', value: '!=' },
                    { label: '=', value: '=' },
                ]
            },
            selection: [{
                lhs: '',
                operator: '',
                rhs: ''
            }]
        }

        this.addFilter = this.addFilter.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleDelete = this.handleDelete.bind(this);
    }
    addFilter() {

        let { selection } = this.state;

        selection.push({
            lhs: '',
            operator: '',
            rhs: []
        })

        this.setState({
            selection
        })
    }
    handleChange(index, param, value, ...args) {

        let { selection, names } = this.state;

        if (value === null || value === undefined) {
            let valArray = args[0][0].value;

            if (args[0][0].hasOwnProperty(length)) {
                valArray = args[0][0] && args[0][0].map(item => item.value)
            }

            selection[index][param] = valArray;
        } else {
            selection[index][param] = value;
        }

        // console.log('Slet: ', selection);
        

        // let existingItems = selection.map(item => item.lhs)

        // console.log('Existing: ', existingItems);

        // let notFound = [];
        
        // names.forEach(n => {
        //     existingItems.forEach(i => {
                
        //         if(i !== '' && i !== n.value && !notFound.includes(n)) {
        //             console.log('djfdjg: ', i, n.value);
        //             notFound.push(n)
        //         }
        //     })
        // })

        // console.log('NOT-Found: ', notFound);
        

        this.setState({
            selection
        })
    }
    renderRHS(ele, ind) {
        switch (ele.lhs) {
            case 'account':
                let options = [];

                for (let i = 1; i <= 1000; i++) {
                    options.push({
                        label: i.toString(),
                        value: i.toString()
                    });
                }

                let selectedOptions = []

                if(ele.rhs.length > 0) {
                    selectedOptions = ele.rhs.map(i =>{
                        return {
                            label: i.charAt(0).toUpperCase() + i.slice(1),
                            value: i
                        }
                    })
                }

                return <Select value={selectedOptions} isMulti={true} options={options} onChange={(...args) => this.handleChange(ind, 'rhs', null, args)} />
            case 'country':
                    let selected = []

                    if(ele.rhs.length > 0) {
                        selected = ele.rhs.map(i =>{
                            return {
                                label: i.charAt(0).toUpperCase() + i.slice(1),
                                value: i
                            }
                        })
                    }
                return <Select value={selected} isMulti={true} options={countries} onChange={(...args) => this.handleChange(ind, 'rhs', null, args)} />
            case 'campaign':
                return <input style={{height: '79%', width: '98%'}} value={ele.rhs} type="text" onChange={e => this.handleChange(ind, 'rhs', e.target.value, null)} />
            case 'revenue':
                return <input style={{height: '79%', width: '98%'}} value={ele.rhs} type="number" onChange={e => this.handleChange(ind, 'rhs', parseFloat(e.target.value), null)} />
        }
    }
    handleDelete(index) {
        let { selection } = this.state;

        selection.splice(index, 1);

        this.setState({
            selection
        })
    }
    handleSubmit() {
        let filters = this.state.selection
        console.log({ filters })
    }
    render() {
        return (
            <div>
                <div>
                    {this.state.selection.map((ele, ind) => (
                        <div style={{display: 'flex'}} key={ind} >
                            <div style={{ width: '200px'}}>
                                <Select
                                    value={[
                                        {
                                            label: ele.lhs.charAt(0).toUpperCase() + ele.lhs.slice(1),
                                            value: ele.lhs
                                        }
                                    ]}
                                    options={this.state.names}
                                    onChange={(...args) => this.handleChange(ind, 'lhs', null, args)}
                                    style={{width: '400px'}}
                                />
                            </div>
                            <div style={{ width: '200px'}}>
                                <Select
                                    value={[
                                        {
                                            label: ele.operator,
                                            value: ele.operator
                                        }
                                    ]}
                                    options={this.state.conditions[ele.lhs]}
                                    onChange={(...args) => this.handleChange(ind, 'operator', null, args)}
                                />
                            </div>
                            <div style={{ width: '200px'}}>
                                {this.renderRHS(ele, ind)}
                            </div>

                            <button onClick={() => this.handleDelete(ind)} style={{ color: 'red', width: '40px', cursor: 'pointer', lineHeight: '2.5', marginLeft: '1%'}}>X</button>
                        </div>

                    ))}

                </div>
                <div style={{marginTop: '10px'}} >
                <button style={{ padding: '10px', color: 'white', borderRadius: 0, backgroundColor: 'blue', width: '7%' }} onClick={this.addFilter}>Add</button>
                <button style={{ padding: '10px', marginLeft: '5px', color: 'white', borderRadius: 0, backgroundColor: 'orange', width: '7%' }} onClick={this.handleSubmit}>Apply</button>
                </div>
            </div>
        );
    }
}

export default App;