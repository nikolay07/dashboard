import React from "react";
import MenuPanel from "./components/menu/MenuPanel";
import Header from "./components/header/Header";
import Dashboard from "../src/components/menu/dashboard/Dashboard";
import Reports from "../src/components/menu/reports/Reports";
import Cams from "../src/components/menu/cams/Cams";
import Alerts from "../src/components/menu/alerts/Alerts";
import Setting from "../src/components/menu/settings/Setting";
import { BrowserRouter, Route, Switch } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <div className="app">
        <Header />
        <div className="common">
          <MenuPanel />
          <Switch>
            <Route path="/dashboard" component={Dashboard} />
            <Route path="/reports" component={Reports}></Route>
            <Route path="/cams" component={Cams} />
            <Route path="/alerts" component={Alerts} />
            <Route path="/setting" component={Setting} />
          </Switch>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
