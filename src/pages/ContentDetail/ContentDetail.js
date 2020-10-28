import React, { Component } from "react";
import "./ContentDetail.scss";

class ContentDetail extends Component {
  constructor() {
    super();
    this.state = {
      contentInfo: {
        id: 0,
        title: "",
        content: "",
        description: "",
        issue: "",
        image_list: [],
      },
    };
  }

  componentDidMount() {
    console.log(`10.58.2.235:8000/stories/story/${this.props.match.params.id}`);
    fetch(`http://10.58.2.235:8000/stories/story/${this.props.match.params.id}`)
      .then((res) => res.json())
      .then((res) => {
        console.log(res.story_detail[0]);
        this.setState({ contentInfo: res.story_detail[0] });
      });
  }

  render() {
    const {
      contentInfo: { title, content, description, issue, image_list },
    } = this.state;
    return (
      <main className="contentDetail">
        <section className="contentContainer">
          <article>
            <span>{issue}</span>
            <header>{title}</header>
            <p>{content}</p>
          </article>
          <img alt="image1" src={image_list[0]}></img>
        </section>
        <section className="contentContainer">
          <img alt="image1" src={image_list[1]}></img>
          <div>
            <div className="articleContainer">
              <article>
                <p>{description}</p>
              </article>
            </div>
            <img alt="image1" src={image_list[2]}></img>
          </div>
        </section>
      </main>
    );
  }
}

export default ContentDetail;
