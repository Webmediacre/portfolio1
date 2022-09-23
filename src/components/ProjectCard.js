/* eslint-disable jsx-a11y/alt-text */

import React from 'react';

import { Container, Row, Col, Tab, Nav } from 'react-bootstrap';

export const ProjectCard = ({ title, description, imgUrl }) => { // arguements to be used as spread operator '...project' in 'Projects' component

    return ( // output template for 'ProjectCard' component
        <Col sm={6} md={4}>
            <div className="proj-imgbx">
                <img src={imgUrl} />
                <div className="proj-txtx">
                    <h4>{title}</h4>
                    <span>{description}</span>
                </div>
            </div>
        </Col>
    )
    
}

// export default ProjectCard 