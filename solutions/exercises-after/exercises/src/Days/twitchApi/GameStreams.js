import React, { useState, useEffect } from "react";
import api from "./api";
import { Card, Row, Col } from "antd";
function GameStreams({ location, match }) {
  const [streamData, setstreamData] = useState([]);
  const [viewers, setviewers] = useState(0);
  const { Meta } = Card;

  useEffect(() => {
    const fetchData = async () => {
      const result = await api.get(
        `https://api.twitch.tv/helix/streams?game_id=${location.state.gameID}`
      );
      let dataArr = result.data.data;
      let finalArr = dataArr.map(stream => {
        let newURL = stream.thumbnail_url
          .replace("{width}", "360")
          .replace("{height}", "240");
        stream.thumbnail_url = newURL;
        return stream;
      });

      let totalViewers = finalArr.reduce((acc, val) => {
        return acc + val.viewer_count;
      }, 0);
      setviewers(totalViewers);
      setstreamData(finalArr);
    };
    fetchData();
  }, []);
  return (
    <div>
      <h1>{match.params.id} Streams</h1>
      <h3>
        <strong>{viewers}</strong> people watching{match.params.id}
      </h3>
      <Row justify="center">
        <Col sm={24} md={20} className="container">
          <Row
            className="row"
            justify="center"
            gutter={(16, { sm: 16, md: 24 })}
          >
            {streamData.map((stream, index) => (
              <Col md={6} sm={9} className="col" key={index}>
                <a
                  className="link"
                  href={"http://twitch.tv/" + stream.user_name}
                  target="_blank"
                >
                  <Card
                    hoverable="true"
                    cover={<img alt="example" src={stream.thumbnail_url} />}
                  >
                    <Meta
                      title={stream.user_name}
                      description={stream.viewer_count + "live viewer"}
                    ></Meta>
                  </Card>
                </a>
              </Col>
            ))}
          </Row>
        </Col>
      </Row>
    </div>
  );
}

export default GameStreams;
