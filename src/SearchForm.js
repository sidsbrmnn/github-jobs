import React from "react";
import { Form, Col } from "react-bootstrap";

function SearchForm({ params, onParamChange }) {
    return (
        <Form className="mb-4">
            <Form.Row className="align-items-end">
                <Col xs="auto">
                    <Form.Group as={Col}>
                        <Form.Label>Description</Form.Label>
                        <Form.Control
                            onChange={onParamChange}
                            value={params.description}
                            name="description"
                            type="text"
                        />
                    </Form.Group>
                </Col>

                <Col xs="auto">
                    <Form.Group as={Col}>
                        <Form.Label>Loaction</Form.Label>
                        <Form.Control
                            onChange={onParamChange}
                            value={params.loaction}
                            name="loaction"
                            type="text"
                        />
                    </Form.Group>
                </Col>

                <Form.Group as={Col} xs="auto" className="ml-2">
                    <Form.Check
                        onChange={onParamChange}
                        value={params.full_time}
                        name="full_time"
                        id="full_time"
                        label="Only Full Time"
                        type="checkbox"
                        className="mb-2"
                    />
                </Form.Group>
            </Form.Row>
        </Form>
    );
}

export default SearchForm;
