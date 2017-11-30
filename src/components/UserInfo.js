import React from 'react';

export default class UserInfo extends React.Component {
    render() {
        let userFound = this.props.user.id > 0
        return (
            <div className="panel-heading">
                <h3 className="panel-title" >
                    <nav className="navbar navbar-default">
                        <div className="container-fluid">
                            <p className="navbar-text" style={{visibility: userFound ? 'visible' : 'hidden'}}>{this.props.user.id} - {this.props.user.name}</p>
                            <p className="navbar-text pull-right" style={{visibility: userFound ? 'visible' : 'hidden'}}>{this.props.user.nickname}</p>
                        </div>
                    </nav>
                </h3>
            </div>
        );
    }
}