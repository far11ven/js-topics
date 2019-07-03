import React, { Component } from "react";
import axios from "axios";
import TopicItem from "./topic-item";
import Config from "../config";

class Home extends Component {
  state = {
    newTopicTitle: "",
    topicList: []
  };

  componentDidMount() {
    axios.get(Config.API.GET_TOPIC).then(response => {
      let newTopicItems = this.state.topicList.splice();
      newTopicItems = newTopicItems.concat(response.data.result);
      this.setState({ topicList: newTopicItems });
    });
  }

  handleSubmit = event => {
    event.preventDefault();

    const postBody = JSON.stringify({
      title: this.state.newTopicTitle
    });
    var headers = {
      "Content-Type": "application/json"
    };

    axios
      .post(Config.API.SAVE_TOPIC, postBody, { headers: headers })
      .then(response => {
        console.log("POST respose", response);
        if (response.status === 200) {
          this.showToastMessage(
            "Topic saved successfully!! Refresh to see updated list."
          );
        }
      });
  };

  showToastMessage(msg) {
    document.getElementById("toast").innerHTML = msg;
    document.getElementById("toast").style.display = "inline";

    setTimeout(function() {
      document.getElementById("toast").style.display = "none";
    }, 10000);
  }

  handleInputChange = event => {
    this.setState({ newTopicTitle: event.target.value });
  };

  render() {
    return (
      <React.Fragment>
        <div className="container">
          <form onSubmit={this.handleSubmit}>
            <label className="m-2">
              Topic Name:
              <input
                onChange={this.handleInputChange}
                type="text"
                name="title"
                className="m-2"
                placeholder="Enter a topic name.."
              />
            </label>
            <button
              disabled={!this.state.newTopicTitle}
              className="btn btn-primary btn-sm m-2"
              type="submit"
            >
              {" "}
              Save Topic{" "}
            </button>
          </form>

          <div
            id="toast"
            className="item-body m-2"
            style={{
              padding: "2px",
              backgroundColor: "lightgreen",
              border: "1px black solid",
              display: "none"
            }}
          >
            {" "}
          </div>

          {this.state.topicList.map(item => {
            return <TopicItem key={item._id} item={item} />;
          })}
        </div>
      </React.Fragment>
    );
  }
}

export default Home;
