import React from 'react';
import {
    Card, CardImg, CardText, CardBody,
    CardTitle, Breadcrumb, BreadcrumbItem
} from 'reactstrap';
import { Link } from 'react-router-dom';
import SubmitComment from './SubmitCommentModal';
import { Loading } from './LoadingComponent';


function RenderDish({ dish }) {
    return (
        <Card className="card-description">
            <CardImg top className="card-desc-picture" src={dish.image} alt={dish.name} />
            <CardBody>
                <CardTitle tag="h5">{dish.name}</CardTitle>
                <CardText>{dish.description}</CardText>
            </CardBody>
        </Card>
    );
}

function RenderComments({ comments }) {
    return comments.map((comment) =>
        <li key={comment.id}>
            <blockquote>
                <i>{comment.comment}</i>
                <footer><span>{comment.author}{`, `}</span>{new Date(comment.date).toLocaleDateString()}</footer>
            </blockquote>
        </li>);
}

const DishDetail = (props) => {
    if (props.isLoading) {
        return (
            <div className="container">
                <div className="row">
                    <Loading />
                </div>
            </div>
        );
    }
    else if (props.errorMessage) {
        return (
            <div className="container">
                <div className="row">
                    <h4>{props.errorMessage}</h4>
                </div>
            </div>
        );
    }
    else if (props.dish != null) {
        return (
            <div className="container">

                <div className="row">
                    <Breadcrumb>
                        <BreadcrumbItem><Link to="/menu">Menu</Link></BreadcrumbItem>
                        <BreadcrumbItem active>{props.dish.name}</BreadcrumbItem>
                    </Breadcrumb>
                    <div className="col-12">
                        <h3>{props.dish.name}</h3>
                        <hr />
                    </div>
                </div>
                <div className="row">
                    <div className="col-12 col-md-5 m-2">
                        <RenderDish dish={props.dish} />
                    </div>
                    <div className="col-12 col-md-5 m-2">
                        <ul className="comments-list">
                            <RenderComments comments={props.comments} />
                        </ul>
                        <SubmitComment dishId={props.dish.id} addComment={props.addComment}></SubmitComment>
                    </div>
                </div>
            </div>
        );
    }
}

export default DishDetail;