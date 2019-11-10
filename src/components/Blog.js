import React from 'react';
import {Container, Row, Col, Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap';
import profilePic from '../profilePic.jpg';
import {Jumbotron} from "reactstrap";
import profile from "../profile";
import moment from "moment";
import { Media } from "reactstrap";
import blog from "../blog";
import ReactDOM from 'react-dom';
import '../blog.css';

class Blog extends React.Component {

  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }

  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }

    render() {

     return <Container>
      <Row>
        <Col>
          {blog.blogposts.map(function (blogpost, i) {
            return <Media key={i}>
              <Media left top href={blogpost.url}>
                <Media object src={blogpost.logo} alt={blogpost.institute}/>
              </Media>
              <Media body>
                <Media heading>
                  <h1>{blogpost.blogPostTitle}</h1>
				  <h2>{blogpost.subtitle}</h2>
				<h5>{"by: " + blogpost.author}</h5>

				<p className="blogArticle">{blogpost.blogText}</p>
                </Media>
              
              </Media>
            </Media>
          })}
        </Col>
      </Row>
    </Container>

  }
}

export default Blog;
