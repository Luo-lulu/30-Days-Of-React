import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "antd/dist/antd.css";

import Games from "./Games";
import Lol from "./Lol";
import "./twitch.css";
import Navbar from "./Nav";
import GameStreams from "./GameStreams";

function Twitch() {
  return (
    <Router>
      <div>
        <Navbar />
        <Switch>
          <Route exact path="/" component={Games} />
          <Route path="/lol" component={Lol} />
          <Route path="/game/:id" component={GameStreams} />
        </Switch>
      </div>
    </Router>
  );
}
export default Twitch;

//   <Switch>
//   <Route path="/about" component={About} />
//   <Route path="/contact" component={Contact} />
//   <Route path="/JustChatting" component={JustChatting} />
//   <Route exact path="/" component={Home} />
//   <Route component={NotFound} />
// </Switch>

// {
//     "access_token": "t8ks86n53nauaa2onukzm6ktq3im7q",
//     "expires_in": 5520785,
//     "token_type": "bearer"
// }
