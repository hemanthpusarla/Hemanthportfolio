import { Row, Col, Form, FormControl, FormGroup, InputGroup, Button } from "react-bootstrap";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { faFacebookMessenger, faInstagram, faLinkedin } from "@fortawesome/free-brands-svg-icons";



const Contact = () => {
    return (
        <>
            <Row className="mt-5">
                <Col className="message">
                    <h1>Contact Me </h1>
                    <br/>
                    <Form className="was-validated">
                        <FormGroup>
                     <FormControl type="text" required placeholder="Your Name"></FormControl><br />
                            <FormControl type="number" required placeholder="Mobile Number"></FormControl><br />
                            <FormControl type="email" required placeholder="Your Email"></FormControl><br />
                            <FormControl as="textarea" required placeholder="Your Email"></FormControl><br />
                        </FormGroup>
                        <Button type="submit" className="submit"> Submit</Button>
                    </Form>
                </Col>
                <Col className="aboutme">
                    <h1>  </h1>
                    <p> I am Hemanth pusarla ,I am graduated in Electrical Engineering in 2021 ,
                      im passionate about web development </p>
                    {/* <p> <a href="https://www.instagram.com/rajesh_geesala/"  target="blank" className="fa"><FontAwesomeIcon icon={faInstagram} className="fa-beat"/></a> */}
                    <p> <a href="https://www.instagram.com/hemanth_unprofessional?igshid=MzRlODBiNWFlZA%3D%3D/"  target="blank" className="fa"><FontAwesomeIcon icon={faInstagram} className="fa-beat"/></a>
                     {/* <a href="https://www.linkedin.com/in/rajesh-geesala-5a7407214/" className="fa" target="blank" > <FontAwesomeIcon icon={faLinkedin} className="fa-beat"  /> </a> */}
                     <a href="http://surl.li/mkvia" className="fa" target="blank" > <FontAwesomeIcon icon={faLinkedin} className="fa-beat"  /> </a>
                    <a href="mailto:hemanthpusarla7@gmail.com" className="fa" target="blank" ><FontAwesomeIcon icon={faEnvelope}  className="fa-beat" /></a> 
                   </p> 
  
                </Col>
            </Row>
        </>
    )
}

export default Contact;