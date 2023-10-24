import {Card ,Row , Col } from "react-bootstrap"
const Projects = () => {
    const projects = [
        {
            id : 1 ,
            name : "Email validator " ,
            imageUrl : "https://images.unsplash.com/photo-1698082689840-d03a36822a05?auto=format&fit=crop&q=80&w=1932&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" ,
            LiveDemo : "https://emailvalidatorhemanth.netlify.app/",
            techno : "HTML , CSS , JAVASCRIPT , BOOTSTRAP ,APIS",
        
        },    {
            id : 2 ,
            name : "Login Form with local storage" ,
            imageUrl : "https://assets.justinmind.com/wp-content/uploads/2018/10/inspiration-login-forms-list-768x492.png" ,
            LiveDemo : "https://loginusinglocalsorage.netlify.app/",
            techno : "HTML , CSS , JAVASCRIPT , BOOTSTRAP , ",
        },
        {
            id : 3 ,
            name : "Sign-Up Form" ,
            imageUrl : "https://i.ytimg.com/vi/aIpqUKelmp0/maxresdefault.jpg" ,
            LiveDemo : "https://signupandsigninhemanth.netlify.app/",
            techno : "HTML , CSS , JAVASCRIPT , BOOTSTRAP ",
        },
        {
            id : 4 ,
            name : "Todo application" ,
            imageUrl : "https://images.unsplash.com/photo-1698141028885-80db11098151?auto=format&fit=crop&q=80&w=1932&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" ,
            LiveDemo : "https://todoapplicationhemanth.netlify.app/" ,
            techno : "HTML , CSS  , BOOTSTRAP ",
        },
        {
            id : 5 ,
            name : "QR code generator" ,
            imageUrl : "https://images.unsplash.com/photo-1698141417306-cf5ef7f8c676?auto=format&fit=crop&q=80&w=1932&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" ,
            LiveDemo : "https://qrcodegeneratorhemanth.netlify.app/" ,
            techno : "HTML , CSS ,  , BOOTSTRAP ",
        },
        {
            id : 6,
            name : "Basic Calculator" ,
            imageUrl : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSt6zWVLPdiTM_EhoVhx__6KS__KeAQIlalow&usqp=CAU" ,
            LiveDemo  : "https://caluculatorhemanth.netlify.app/" ,
            techno : "HTML , CSS , JAVASCRIPT", 
        } ,
        {
            id : 7 ,
            name :"Toggle between light & dark mode" ,
            // imageUrl : "https://cms-assets.tutsplus.com/cdn-cgi/image/width=850/uploads/users/2778/posts/32174/image-upload/proland_landing_page_product.jpg" ,
            imageUrl : "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEi3Lhcxc8m62EmaH-KK6G9Ziz9QEWb1RhYfuW8jJqA9g5jhRKXaij3W09nrZg0fat0PnqskNABYtVRUR6e5LoDsGNedwMdxDNRqumJNfZ4BCU42FWOsp0GI80j03uCqOGkgzPTJMUa6JfLZZ3ey4vSQoNZ3p8hSkMT12PyUOh4QlfxyT2Sv1ID9Kd30/s16000/Toggle%20Dark%20and%20Light%20MOde.png" ,
            LiveDemo : "https://lightmodeanddarkmode.netlify.app/"  ,
            techno : "HTML , CSS , BOOTSTRAP", 
         
        } ,
        {
            id : 8 ,
            name :"Will Add More Projects Soon..." ,
             imageUrl : "https://images.unsplash.com/photo-1607434472257-d9f8e57a643d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bG9hZGluZ3xlbnwwfHwwfHx8MA%3D%3D&w=1000&q=80" ,
            // imageUrl : "https://qrcodegeneratorhemanth.netlify.app/" ,
            LiveDemo : "https://qrcodegeneratorhemanth.netlify.app/"  ,
            techno : "---" 
         
        }
    ]
    return (
       <>
      <center className="mt-5 text-white"> <h3>My Projects</h3> </center>
       <Row>
      
           {
            projects.map((project)=> ( 
                <Col>
                <Card>
                <Card.Img  variant="top" src={project.imageUrl} className="cardimg"/>
                    <Card.Body> 
                        <Card.Title>{project.name}</Card.Title> 
                        <Card.Text className="projecttext"><b>{project.techno}</b>
                          <p>LiveDemo link : <span><a href={project.LiveDemo} target="blank" className="gitlink"> Click Here</a></span></p> 
                        </Card.Text>
                    </Card.Body>
                </Card>
                </Col>
            ))
           }
      
       </Row>
       </>
    )
}

export default Projects ;