import React from 'react';
import Select from 'react-select';
import Grid from '@material-ui/core/Grid';
import Selected from './Selected';

const options = [
    { value: 'Australian Capital Territory', label: 'Australian Capital Territory' },
    { value: 'New South Wales', label: 'New South Wales' },
    { value: 'Victoria', label: 'Victoria' },
    { value: 'Queensland', label: 'Queensland' },
    { value: 'Western Australia', label: 'Western Australia' },
    { value: 'South Australia', label: 'South Australia' },
];

class SelectOne extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedOption: "",

        };
    }

    handleChange = selectedOption => {
        this.setState({ selectedOption });
        console.log(`Option selected:`, selectedOption);
    };
    render() {

        return (
            <div>
                <Grid container spacing={3}>
                    <Grid item xs={3} md={4}>
                    </Grid>
                    <Grid item xs={3} md={4}>
                        <h3>Select one:</h3>
                        <Select
                            value={this.state.selectedOption}
                            onChange={this.handleChange}
                            options={options}
                        />
                        <Selected selection={this.state.selectedOption.value} />
                    </Grid>
                </Grid>

            </div>

        );
    }
}

export default SelectOne;