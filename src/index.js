import React from 'react';
import ReactDOM from 'react-dom';
import _ from 'lodash';
import SearchField from './components/SearchField';
import StageComponent from './components/Stage';
import UserInfo from './components/UserInfo'
import '.\\index.css';

class UserStages extends React.Component {
    constructor() {
        super();
        this.state = {
            "userInfo": {
                "user": {
                    "id": 0,
                    "name": "",
                    "nickname": ""
                  },
                  "stages": [
                    {
                      "stageId": 0,
                      "stageName": "",
                      "stageLeadTime": 0.0
                    },
                  ]   
            },
            searchString : "",
        }
        this._getAsync = _.debounce(this._getAsync,800)
    }

    _defaultState() {
        return {
            "userInfo": {
                "user": {
                    "id": 0,
                    "name": "",
                    "nickname": "",
                  },
                  "stages": [
                    {
                      "stageId": 0,
                      "stageName": "",
                      "stageLeadTime": 0.0
                    },
                  ]   
            },
            searchString : "",
        };
    }

    _getAsync(userId) {
        if (userId.length === 0) return;
        fetch(`http://localhost:8080/users/${userId}/stages`)
        .then((response) => response.json()
            .then((responseJson) => this.setState(responseJson)));
    }
    
    componentWillUpdate(nextProps, nextState) {
        this._getAsync(nextState.searchString,800)
    }

    componentDidMount() {
        this._getAsync(this.state.searchString)
    }

    _handleChange(e) {
        if (e.target.value.length === 0) {
            this.setState(this._defaultState())
        }
        this.setState({searchString : e.target.value}); 
    }

    
    render() {
        let scrollable = (this.state.userInfo.stages && 
        this.state.userInfo.stages.length > 0 && 
        this.state.userInfo.stages[0].stageId > 0 )
        
        return (
            <div className="container">
                <SearchField onChange={(e) => this._handleChange(e)} searchString={this.state.searchString}/>
                <div className="panel panel-default">
                    <UserInfo user={this.state.userInfo.user}/>
                    <StageComponent stages={this.state.userInfo.stages} scrollable={scrollable}/>
                </div>
            </div>
        );
    }
}

ReactDOM.render(<UserStages />, document.getElementById("root"))