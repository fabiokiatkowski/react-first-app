import React from 'react';

export default class SeachField extends React.Component {
    render() {
        return (
            <nav className="navbar navbar-default">
                <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                <form className="navbar-form navbar-left">
                <div className="input-group">
                    <span className="input-group-addon" id="basic-addon1">
                        <span className="glyphicon glyphicon-search"></span>
                    </span>
                    <input type="text" 
                        value={this.props.searchString} 
                        onChange={this.props.onChange}
                        className="form-control" 
                        placeholder="Codigo Usuário" 
                        aria-describedby="basic-addon1"/>
                </div>
                </form>
                </div>
            </nav>
        )
    }
}