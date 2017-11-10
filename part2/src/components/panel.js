import React from 'react';

const Panel = props => (
  <div>
    <div className="row">
      <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6 col-xs-offset-0 col-sm-offset-0 col-md-offset-3 col-lg-offset-3 toppad" >
        <div className="panel panel-info">
          {props.children}
        </div>
      </div>
    </div>
  </div>
);

export default Panel;
