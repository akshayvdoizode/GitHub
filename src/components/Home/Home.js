import React from "react";
import { Card, Image, Form } from "semantic-ui-react";
import "./Home.css";
import "semantic-ui-css/semantic.min.css";
import { Link } from "react-router-dom";
const Home = ({ searchInput, handleChange, repo, handleClick, clear }) => {
  return (
    <div>
      <div className="input">
        <Form>
          <Form.Group>
            <Form.Input
              placeholder="GitHub Search User..."
              name="email"
              value={searchInput}
              onChange={handleChange}
            />
            {searchInput.length === 0 ? (
              <Form.Button content="Search" onClick={handleClick} />
            ) : (
              <>
                <Form.Button content="Search" onClick={handleClick} />
                <Form.Button content="Clear" onClick={clear} />
              </>
            )}
          </Form.Group>
        </Form>
      </div>
      <div className="card">
        {repo.length === 0 ? null : (
          <Card>
            <Image src={repo.avatar_url} wrapped ui={false} />
            <Card.Content>
              <div className="abc">
                <h3 style={{ margin: "5px" }}>
                  <Card.Header>{repo.login}</Card.Header>
                </h3>
                <Link to="/user">
                  <button className="btn">More</button>
                </Link>
              </div>
            </Card.Content>
          </Card>
        )}
      </div>
    </div>
  );
};

export default Home;
