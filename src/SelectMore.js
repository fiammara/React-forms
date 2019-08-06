import React from 'react';
import Select from 'react-select';
import Selected from './Selected';
import Grid from '@material-ui/core/Grid';

const kategorijos = [
    { id: 1, value: 'Australian Capital Territory', label: 'Australian Capital Territory' },
    { id: 2, value: 'New South Wales', label: 'New South Wales' },
    { id: 3, value: 'Victoria', label: 'Victoria' },
    { id: 4, value: 'Queensland', label: 'Queensland' },
    { id: 5, value: 'Western Australia', label: 'Western Australia' },
    { id: 6, value: 'South Australia', label: 'South Australia' },
].map(suggestion => ({
    value: suggestion.label,
    label: suggestion.label,
}));

class SelectMore extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedOptions: [],
        };
    }

    handleChange = (selectedOptions) => {
        this.setState({ selectedOptions });
    }

    render() {

        const { selectedOption } = this.state;
        return (
            <div >
                
                <Grid container spacing={3}>
                    <Grid item xs={4} md={4}>
                    </Grid>
                    <Grid item xs={4} md={4}>
                        <h3>Select multiple:</h3>
                <Select
                    isMulti
                    value={selectedOption}
                    onChange={this.handleChange}
                    options={kategorijos}
                />
                 <Selected selection={this.state.selectedOptions.map((result, id) => (
                    <div key={id}>{result.value}</div>
                ))} />
                </Grid>
                </Grid>
                
            </div>
        );
    }
}
export default SelectMore;
