import { useState } from "react";
import { Col, Form, Row } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Footer from "./Footer";
import Header from "./Header";

function FormExample() {
  const [validated, setValidated] = useState(false);

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    setValidated(true);
  };
  return (
    <div>
      <Header />
      <div className="section">
        <h1>Contact</h1>
        <Form noValidate validated={validated} onSubmit={handleSubmit}>
          <Row className="mb-3">
            <Form.Group as={Col} md="4" controlId="validationCustom01">
              <Form.Label>Nom</Form.Label>
              <Form.Control
                required
                type="text"
                placeholder="Nom"
                defaultValue="Mark"
              />
              <Form.Control.Feedback />
            </Form.Group>
            <Form.Group as={Col} md="4" controlId="formGroupEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control type="email" placeholder="Enter email" />
            </Form.Group>
            <Form.Group as={Col} md="4" controlId="validationCustom02">
              <Form.Label>Objet</Form.Label>
              <Form.Control
                required
                type="text"
                placeholder="Objet"
                defaultValue="Mark"
              />
              <Form.Control.Feedback />
            </Form.Group>
            <Form.Group
              as={Col}
              md="12"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Label>Message</Form.Label>
              <Form.Control as="textarea" rows={3} />
            </Form.Group>
          </Row>
          <Button variant="primary" className="cont" type="submit">
            Envoyer
          </Button>
        </Form>
        <div>
          <h2>John Doe</h2>
          <h3>rue jean charle</h3>
          <h3>065584444594846</h3>
          <div class="responsive-map">
            <div class="responsive-map">
              <iframe
                frameborder="0"
                scrolling="no"
                marginheight="0"
                marginwidth="0"
                id="gmap_canvas"
                src="https://maps.google.com/maps?width=600&amp;height=350&amp;hl=en&amp;q=5%20-%207%20Av.%20Lacassagne%20Lyon+(John%20Doe)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
              ></iframe>
            </div>
          </div>
          <script
            type="text/javascript"
            src="https://embedmaps.com/google-maps-authorization/script.js?id=ca6155382aebbc46fbfccf5407bceb15efc55762"
          ></script>
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
}

export default FormExample;
