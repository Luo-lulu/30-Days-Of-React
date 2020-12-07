import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import api from "./api";
import { Card, Row, Col, BackTop } from "antd";

function Games() {
  const [games, setGames] = useState([]);
  const { Meta } = Card;

  useEffect(() => {
    const fetchData = async () => {
      const res = await api.get(
        "https://api.twitch.tv/helix/games/top?first=100"
      );
      //   console.log(res.data.data);
      let dataArr = res.data.data.map(game => {
        let newURL = game.box_art_url
          .replace("{width}", "300")
          .replace("{height}", "300");
        game.box_art_url = newURL;
        return game;
      });

      setGames(dataArr);
    };
    fetchData();
  }, []);

  const Games = () => {
    return (
      <Row justify="center">
        <Col sm={24} md={20} className="container">
          <Row
            className="row "
            justify="center"
            gutter={(16, { sm: 16, md: 24 })}
          >
            {games.map((game, index) => (
              <Col md={6} sm={9} className="col" key={index}>
                <Link
                  className="link"
                  to={{
                    pathname: "game/" + game.name,
                    state: {
                      gameID: game.id
                    }
                  }}
                >
                  <Card
                    hoverable="true"
                    cover={<img alt="example" src={game.box_art_url} />}
                  >
                    <Meta title={game.name}></Meta>
                  </Card>
                </Link>
              </Col>
            ))}
          </Row>
        </Col>
        <BackTop />
      </Row>
    );
  };

  return <Games />;
}

export default Games;
// to={{
//   path: "game/",
//   name: `${game.name}`,
//   state: {
//     gameID: game.id
//   }
// }}
