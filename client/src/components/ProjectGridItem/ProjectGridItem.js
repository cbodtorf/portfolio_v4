import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Modal, Button } from 'react-bootstrap';
import TechStack from "./TechStack"

class ProjectGridItem extends Component {
  constructor(props) {
    super(props)

    this.state = {
      showModal: false
    }
  }

   close = () => {
     this.setState({ showModal: false });
   }

   open = () => {
     this.setState({ showModal: true });
   }

  render() {
    return (
      <div className="grid__item one-whole work-item">
        <div className="portfolio-item">
          <span className="item-index">{ this.props.index }</span>
            <div onClick={ this.open  } className="portfolio-link">
                <div className="caption">
                    <div className="caption-content">
                        <TechStack tech={ this.props.tech }/>
                    </div>
                </div>
                <div className="marquee">
                  <h3><span>{ this.props.name }</span><span>{ this.props.name }</span></h3>
                </div>
                {/* <img src={this.props.img_src} className="img-responsive img-centered" alt={this.props.name} /> */}
            </div>
            <Modal show={ this.state.showModal } onHide={ this.close }>
            <Modal.Header>
              <Modal.Title>{ this.props.name }</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <h5>Deets</h5>
              <div>{ this.props.description }</div>
              <Link to={ this.props.url } target="_blank">Website </Link> |
              <Link to={ this.props.github } target="_blank"> Github</Link>

            </Modal.Body>
            <Modal.Footer>
              <Button onClick={ this.close }>Close</Button>
            </Modal.Footer>
          </Modal>
        </div>
      </div>
    );
  }

}

export default ProjectGridItem;
