import React, { Component } from 'react';
import Select from 'react-select';

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
            rhs: ''
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
        switch (ele) {
            case 'account':
                let options = [];

                for (let i = 1; i <= 1000; i++) {
                    options.push({
                        label: i.toString(),
                        value: i.toString()
                    });
                }

                return <Select isMulti={true} options={options} onChange={(...args) => this.handleChange(ind, 'rhs', null, args)} />
            case 'country':
                const countries = [
                    { value: 'AD', label: 'Andorra' },
                    { value: 'AE', label: 'United Arab Emirates' },
                    { value: 'AF', label: 'Afghanistan' },
                    { value: 'AG', label: 'Antigua and Barbuda' },
                    { value: 'AI', label: 'Anguilla' },
                    { value: 'AL', label: 'Albania' },
                    { value: 'AM', label: 'Armenia' },
                    { value: 'AO', label: 'Angola' },
                    { value: 'AQ', label: 'Antarctica' },
                    { value: 'AR', label: 'Argentina' },
                    { value: 'AS', label: 'American Samoa' },
                    { value: 'AT', label: 'Austria' },
                    { value: 'AU', label: 'Australia' },
                    { value: 'AW', label: 'Aruba' },
                    { value: 'AX', label: 'Alland Islands' },
                    { value: 'AZ', label: 'Azerbaijan' },
                    { value: 'BA', label: 'Bosnia and Herzegovina' },
                    { value: 'BB', label: 'Barbados' },
                    { value: 'BD', label: 'Bangladesh' },
                    { value: 'BE', label: 'Belgium' },
                    { value: 'BF', label: 'Burkina Faso' },
                    { value: 'BG', label: 'Bulgaria' },
                    { value: 'BH', label: 'Bahrain' },
                    { value: 'BI', label: 'Burundi' },
                    { value: 'BJ', label: 'Benin' },
                    { value: 'BL', label: 'Saint Barthelemy' },
                    { value: 'BM', label: 'Bermuda' },
                    { value: 'BN', label: 'Brunei Darussalam' },
                    { value: 'BO', label: 'Bolivia' },
                    { value: 'BR', label: 'Brazil' },
                    { value: 'BS', label: 'Bahamas' },
                    { value: 'BT', label: 'Bhutan' },
                    { value: 'BV', label: 'Bouvet Island' },
                    { value: 'BW', label: 'Botswana' },
                    { value: 'BY', label: 'Belarus' },
                    { value: 'BZ', label: 'Belize' },
                    { value: 'CA', label: 'Canada' },
                    { value: 'CC', label: 'Cocos (Keeling) Islands' },
                    { value: 'CD', label: 'Congo, Republic of the' },
                    { value: 'CF', label: 'Central African Republic' },
                    { value: 'CG', label: 'Congo, Democratic Republic of the' },
                    { value: 'CH', label: 'Switzerland' },
                    { value: 'CI', label: "Cote d'Ivoire" },
                    { value: 'CK', label: 'Cook Islands' },
                    { value: 'CL', label: 'Chile' },
                    { value: 'CM', label: 'Cameroon' },
                    { value: 'CN', label: 'China' },
                    { value: 'CO', label: 'Colombia' },
                    { value: 'CR', label: 'Costa Rica' },
                    { value: 'CU', label: 'Cuba' },
                    { value: 'CV', label: 'Cape Verde' },
                    { value: 'CW', label: 'Curacao' },
                    { value: 'CX', label: 'Christmas Island' },
                    { value: 'CY', label: 'Cyprus' },
                    { value: 'CZ', label: 'Czech Republic' },
                    { value: 'DE', label: 'Germany' },
                    { value: 'DJ', label: 'Djibouti' },
                    { value: 'DK', label: 'Denmark' },
                    { value: 'DM', label: 'Dominica' },
                    { value: 'DO', label: 'Dominican Republic' },
                    { value: 'DZ', label: 'Algeria' },
                    { value: 'EC', label: 'Ecuador' },
                    { value: 'EE', label: 'Estonia' },
                    { value: 'EG', label: 'Egypt' },
                    { value: 'EH', label: 'Western Sahara' },
                    { value: 'ER', label: 'Eritrea' },
                    { value: 'ES', label: 'Spain' },
                    { value: 'ET', label: 'Ethiopia' },
                    { value: 'FI', label: 'Finland' },
                    { value: 'FJ', label: 'Fiji' },
                    { value: 'FK', label: 'Falkland Islands (Malvinas)' },
                    { value: 'FM', label: 'Micronesia, Federated States of' },
                    { value: 'FO', label: 'Faroe Islands' },
                    { value: 'FR', label: 'France' },
                    { value: 'GA', label: 'Gabon' },
                    { value: 'GB', label: 'United Kingdom' },
                    { value: 'GD', label: 'Grenada' },
                    { value: 'GE', label: 'Georgia' },
                    { value: 'GF', label: 'French Guiana' },
                    { value: 'GG', label: 'Guernsey' },
                    { value: 'GH', label: 'Ghana' },
                    { value: 'GI', label: 'Gibraltar' },
                    { value: 'GL', label: 'Greenland' },
                    { value: 'GM', label: 'Gambia' },
                    { value: 'GN', label: 'Guinea' },
                    { value: 'GP', label: 'Guadeloupe' },
                    { value: 'GQ', label: 'Equatorial Guinea' },
                    { value: 'GR', label: 'Greece' },
                    { value: 'GS', label: 'South Georgia and the South Sandwich Islands' },
                    { value: 'GT', label: 'Guatemala' },
                    { value: 'GU', label: 'Guam' },
                    { value: 'GW', label: 'Guinea-Bissau' },
                    { value: 'GY', label: 'Guyana' },
                    { value: 'HK', label: 'Hong Kong' },
                    { value: 'HM', label: 'Heard Island and McDonald Islands' },
                    { value: 'HN', label: 'Honduras' },
                    { value: 'HR', label: 'Croatia' },
                    { value: 'HT', label: 'Haiti' },
                    { value: 'HU', label: 'Hungary' },
                    { value: 'ID', label: 'Indonesia' },
                    { value: 'IE', label: 'Ireland' },
                    { value: 'IL', label: 'Israel' },
                    { value: 'IM', label: 'Isle of Man' },
                    { value: 'IN', label: 'India' },
                    { value: 'IO', label: 'British Indian Ocean Territory' },
                    { value: 'IQ', label: 'Iraq' },
                    { value: 'IR', label: 'Iran, Islamic Republic of' },
                    { value: 'IS', label: 'Iceland' },
                    { value: 'IT', label: 'Italy' },
                    { value: 'JE', label: 'Jersey' },
                    { value: 'JM', label: 'Jamaica' },
                    { value: 'JO', label: 'Jordan' },
                    { value: 'JP', label: 'Japan' },
                    { value: 'KE', label: 'Kenya' },
                    { value: 'KG', label: 'Kyrgyzstan' },
                    { value: 'KH', label: 'Cambodia' },
                    { value: 'KI', label: 'Kiribati' },
                    { value: 'KM', label: 'Comoros' },
                    { value: 'KN', label: 'Saint Kitts and Nevis' },
                    { value: 'KP', label: "Korea, Democratic People's Republic of" },
                    { value: 'KR', label: 'Korea, Republic of' },
                    { value: 'KW', label: 'Kuwait' },
                    { value: 'KY', label: 'Cayman Islands' },
                    { value: 'KZ', label: 'Kazakhstan' },
                    { value: 'LA', label: "Lao People's Democratic Republic" },
                    { value: 'LB', label: 'Lebanon' },
                    { value: 'LC', label: 'Saint Lucia' },
                    { value: 'LI', label: 'Liechtenstein' },
                    { value: 'LK', label: 'Sri Lanka' },
                    { value: 'LR', label: 'Liberia' },
                    { value: 'LS', label: 'Lesotho' },
                    { value: 'LT', label: 'Lithuania' },
                    { value: 'LU', label: 'Luxembourg' },
                    { value: 'LV', label: 'Latvia' },
                    { value: 'LY', label: 'Libya' },
                    { value: 'MA', label: 'Morocco' },
                    { value: 'MC', label: 'Monaco' },
                    { value: 'MD', label: 'Moldova, Republic of' },
                    { value: 'ME', label: 'Montenegro' },
                    { value: 'MF', label: 'Saint Martin (French part)' },
                    { value: 'MG', label: 'Madagascar' },
                    { value: 'MH', label: 'Marshall Islands' },
                    { value: 'MK', label: 'Macedonia, the Former Yugoslav Republic of' },
                    { value: 'ML', label: 'Mali' },
                    { value: 'MM', label: 'Myanmar' },
                    { value: 'MN', label: 'Mongolia' },
                    { value: 'MO', label: 'Macao' },
                    { value: 'MP', label: 'Northern Mariana Islands' },
                    { value: 'MQ', label: 'Martinique' },
                    { value: 'MR', label: 'Mauritania' },
                    { value: 'MS', label: 'Montserrat' },
                    { value: 'MT', label: 'Malta' },
                    { value: 'MU', label: 'Mauritius' },
                    { value: 'MV', label: 'Maldives' },
                    { value: 'MW', label: 'Malawi' },
                    { value: 'MX', label: 'Mexico' },
                    { value: 'MY', label: 'Malaysia' },
                    { value: 'MZ', label: 'Mozambique' },
                    { value: 'NA', label: 'Namibia' },
                    { value: 'NC', label: 'New Caledonia' },
                    { value: 'NE', label: 'Niger' },
                    { value: 'NF', label: 'Norfolk Island' },
                    { value: 'NG', label: 'Nigeria' },
                    { value: 'NI', label: 'Nicaragua' },
                    { value: 'NL', label: 'Netherlands' },
                    { value: 'NO', label: 'Norway' },
                    { value: 'NP', label: 'Nepal' },
                    { value: 'NR', label: 'Nauru' },
                    { value: 'NU', label: 'Niue' },
                    { value: 'NZ', label: 'New Zealand' },
                    { value: 'OM', label: 'Oman' },
                    { value: 'PA', label: 'Panama' },
                    { value: 'PE', label: 'Peru' },
                    { value: 'PF', label: 'French Polynesia' },
                    { value: 'PG', label: 'Papua New Guinea' },
                    { value: 'PH', label: 'Philippines' },
                    { value: 'PK', label: 'Pakistan' },
                    { value: 'PL', label: 'Poland' },
                    { value: 'PM', label: 'Saint Pierre and Miquelon' },
                    { value: 'PN', label: 'Pitcairn' },
                    { value: 'PR', label: 'Puerto Rico' },
                    { value: 'PS', label: 'Palestine, State of' },
                    { value: 'PT', label: 'Portugal' },
                    { value: 'PW', label: 'Palau' },
                    { value: 'PY', label: 'Paraguay' },
                    { value: 'QA', label: 'Qatar' },
                    { value: 'RE', label: 'Reunion' },
                    { value: 'RO', label: 'Romania' },
                    { value: 'RS', label: 'Serbia' },
                    { value: 'RU', label: 'Russian Federation' },
                    { value: 'RW', label: 'Rwanda' },
                    { value: 'SA', label: 'Saudi Arabia' },
                    { value: 'SB', label: 'Solomon Islands' },
                    { value: 'SC', label: 'Seychelles' },
                    { value: 'SD', label: 'Sudan' },
                    { value: 'SE', label: 'Sweden' },
                    { value: 'SG', label: 'Singapore' },
                    { value: 'SH', label: 'Saint Helena' },
                    { value: 'SI', label: 'Slovenia' },
                    { value: 'SJ', label: 'Svalbard and Jan Mayen' },
                    { value: 'SK', label: 'Slovakia' },
                    { value: 'SL', label: 'Sierra Leone' },
                    { value: 'SM', label: 'San Marino' },
                    { value: 'SN', label: 'Senegal' },
                    { value: 'SO', label: 'Somalia' },
                    { value: 'SR', label: 'Suriname' },
                    { value: 'SS', label: 'South Sudan' },
                    { value: 'ST', label: 'Sao Tome and Principe' },
                    { value: 'SV', label: 'El Salvador' },
                    { value: 'SX', label: 'Sint Maarten (Dutch part)' },
                    { value: 'SY', label: 'Syrian Arab Republic' },
                    { value: 'SZ', label: 'Swaziland' },
                    { value: 'TC', label: 'Turks and Caicos Islands' },
                    { value: 'TD', label: 'Chad' },
                    { value: 'TF', label: 'French Southern Territories' },
                    { value: 'TG', label: 'Togo' },
                    { value: 'TH', label: 'Thailand' },
                    { value: 'TJ', label: 'Tajikistan' },
                    { value: 'TK', label: 'Tokelau' },
                    { value: 'TL', label: 'Timor-Leste' },
                    { value: 'TM', label: 'Turkmenistan' },
                    { value: 'TN', label: 'Tunisia' },
                    { value: 'TO', label: 'Tonga' },
                    { value: 'TR', label: 'Turkey' },
                    { value: 'TT', label: 'Trinidad and Tobago' },
                    { value: 'TV', label: 'Tuvalu' },
                    { value: 'TW', label: 'Taiwan, Province of China' },
                    { value: 'TZ', label: 'United Republic of Tanzania' },
                    { value: 'UA', label: 'Ukraine' },
                    { value: 'UG', label: 'Uganda' },
                    { value: 'US', label: 'United States' },
                    { value: 'UY', label: 'Uruguay' },
                    { value: 'UZ', label: 'Uzbekistan' },
                    { value: 'VA', label: 'Holy See (Vatican City State)' },
                    { value: 'VC', label: 'Saint Vincent and the Grenadines' },
                    { value: 'VE', label: 'Venezuela' },
                    { value: 'VG', label: 'British Virgin Islands' },
                    { value: 'VI', label: 'US Virgin Islands' },
                    { value: 'VN', label: 'Vietnam' },
                    { value: 'VU', label: 'Vanuatu' },
                    { value: 'WF', label: 'Wallis and Futuna' },
                    { value: 'WS', label: 'Samoa' },
                    { value: 'XK', label: 'Kosovo' },
                    { value: 'YE', label: 'Yemen' },
                    { value: 'YT', label: 'Mayotte' },
                    { value: 'ZA', label: 'South Africa' },
                    { value: 'ZM', label: 'Zambia' },
                    { value: 'ZW', label: 'Zimbabwe' },
                ];
                return <Select isMulti={true} options={countries} onChange={(...args) => this.handleChange(ind, 'rhs', null, args)} />
            case 'campaign':
                return <input style={{height: '79%', width: '98%'}} type="text" onChange={e => this.handleChange(ind, 'rhs', e.target.value, null)} />
            case 'revenue':
                return <input style={{height: '79%', width: '98%'}} type="number" onChange={e => this.handleChange(ind, 'rhs', parseFloat((e.target.value)).toFixed(2), null)} />
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
                                    options={this.state.names}
                                    onChange={(...args) => this.handleChange(ind, 'lhs', null, args)}
                                    style={{width: '400px'}}
                                />
                            </div>
                            <div style={{ width: '200px'}}>
                                <Select
                                    options={this.state.conditions[ele.lhs]}
                                    onChange={(...args) => this.handleChange(ind, 'operator', null, args)}
                                />
                            </div>
                            <div style={{ width: '200px'}}>
                                {this.renderRHS(ele.lhs, ind)}
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