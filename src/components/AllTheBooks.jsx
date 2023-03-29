import { Component } from "react";
import { Row, Col } from "react-bootstrap";
import BookCards from "./BookCard";

class AllTheBooks extends Component {
  render() {
    console.log(this.props.books);
    return (
      <>
        <Row>
          <Col xs={12}>
            <h1>{this.props.title}</h1>
          </Col>
        </Row>
        <Row lg={6}>
          {this.props.books.map((book, index) => (
            <BookCards image={book.img} title={book.title} price={book.price} />
          ))}
        </Row>
      </>
    );
  }
}

export default AllTheBooks;
