import React, { Component } from 'react';
import apiService from '../../utils/apiService';

class HomePage extends Component {
    state = {
        data: null
    }

    async componentDidMount() {
        const data = await apiService.getMyLists(this.props.user);
        this.setState({data: data})
        console.log(data)
    }

    render () {
        return (
            <div>
                Lists:
            </div>
        );
    };
};

export default HomePage;