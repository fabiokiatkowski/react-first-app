import React from 'react';

export default class StageComponent extends React.Component {
    render() {
        const listStage = this.props.stages.map((stage) => {
            return <li key={stage.stageId.toString()} className="list-group-item">{stage.stageName}</li>
        });

        return (
            <div className={this.props.scrollable ? "panel-body pre-scrollable" : "panel-body" }>
                <ul className="list-group">{listStage}</ul>
            </div>
        );
    }
}