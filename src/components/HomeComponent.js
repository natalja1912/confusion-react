import React from 'react';
import {
    Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle
} from 'reactstrap';

function RenderCard({ item }) {

    return (
        <Card>
            <CardImg className="card-picture-home" cover src={item.image} alt={item.name} />
            <CardBody>
                <CardTitle>{item.name}</CardTitle>
                {item.designation ? <CardSubtitle>{item.designation}</CardSubtitle> : null}
                <CardText>{item.description}</CardText>
            </CardBody>
        </Card>
    );

}

function Home({ dish, promotion, leader }) {
    return (
        <div className="container">
            <div className="row align-items-start">
                <div className="col-12 col-md m-1">
                    {promotion && <RenderCard item={promotion} />}
                </div>
                <div className="col-12 col-md m-1">
                    {leader && <RenderCard item={leader} />}
                </div>
                <div className="col-12 col-md m-1">
                    {dish && <RenderCard item={dish} />}
                </div>
            </div>
        </div>
    );
}

export default Home;