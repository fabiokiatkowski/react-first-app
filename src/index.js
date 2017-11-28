import React from 'react';
import ReactDOM from 'react-dom';
import '.\\index.css';

function SeachField (props) {
    return (
            <nav className="navbar navbar-default">
                <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                <form className="navbar-form navbar-left">
                <div className="input-group">
                    <span className="input-group-addon" id="basic-addon1">
                        <span className="glyphicon glyphicon-search"></span>
                    </span>
                    <input type="text" 
                        value={props.searchString} 
                        onChange={props.handleChange} 
                        className="form-control" 
                        placeholder="Codigo Usuário" 
                        aria-describedby="basic-addon1"/>
                </div>
                <p>{props.searchString}</p>
                </form>
                </div>
            </nav>
        );
}

class UserInfo extends React.Component {
    render() {
        return (
            <nav className="navbar navbar-default">
                <div className="container-fluid">
                    <p className="navbar-text">{this.props.user.id} - {this.props.user.name}</p>
                    <p className="navbar-text pull-right">{this.props.user.nickname}</p>
                </div>
            </nav>
        );
    }
}

function StageComponent(props) {
   const listStage = props.stages.map((stage) => {
        return <li key={stage.stageId.toString()} className="list-group-item">{stage.stageName}</li>
    });
    return (
        <ul className="list-group">{listStage}</ul>
    );
}

function getAsync() {
    return fetch('http://localhost:8080/users/202/stages')
    .then((response) => response.json()
        .then((responseJson) => {
            return responseJson
    }));
}

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
            "searchString" : "",
        }
    }

    componentDidMount() {
        getAsync().then(data =>{
            this.setState(data)
        });
    }

    handleChange(e) {
        this.setState({
            "searchString" : e.target.value
        });
    }

    render() {
        return (
        <div className="container">
            <SeachField onChange={() => this.handleChange}
                searchString={this.state.searchString}/>
            <div className="panel panel-default">
                <div className="panel-heading">
                    <h3 className="panel-title">
                        <UserInfo user={this.state.userInfo.user}/>
                    </h3>
                </div>
                <div className="panel-body">
                    <StageComponent stages={this.state.userInfo.stages}/>
                </div>
            </div>
        </div>
        );
    }
}

ReactDOM.render(<UserStages />, document.getElementById("root"))