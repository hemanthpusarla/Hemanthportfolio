import { Row ,Col } from "react-bootstrap"
import { Mypic } from "../utils/mpic";
const Home = () => {
    return (
           <>
           <Row>
            <Col className="welcome1" ><h1 className="name">Hemanth pusarla</h1>
               <p className="job">Front-End Developer</p></Col>
            <Col  className="welcome2" >
            <img src={Mypic}  className="mypic"/>
            </Col>
           </Row>
           </>
    )
}

export default Home ;