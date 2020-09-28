import React from "react";
import { Route, Switch } from "react-router-dom";
import Executive from "./Executive";
import Monitoring from "./Monitoring";
import Perfomance from "./Perfomance";

function Reports() {
  return (
    <div className="container reports">
      <h2>Reports</h2>
      <Switch>
        <Route path="/reports/executive" component={Executive} />
        <Route path="/reports/monitoring" component={Monitoring} />
        <Route path="/reports/perfomance" component={Perfomance} />
      </Switch>
    </div>
  );
}

export default Reports;
