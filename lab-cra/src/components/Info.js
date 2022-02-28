import icon1 from "../images/icon1.png"
import icon2 from "../images/icon2.png"
import icon3 from "../images/icon3.png"
import icon4 from "../images/icon4.png"


function Info(){
    return(
    <div className="info-div">
       <div className="icon">
        <img
          id="icon1"
          src={icon1}
          alt="declarative"
        />
        <h2>Declarative</h2>
        <p>React makes it painless to create interactive UIs</p>
         </div>

      <div className="icon"> 
        <img
          id="icon2"
          src={icon2}
          alt="components"
        />
        <h2>Components</h2>
        <p>Build encapssulated components that manage their state</p>
       </div>
    
    <div className="icon"> 
        <img
          id="icon3"
          src={icon3}
          alt="single"
        />
        <h2>Single-way</h2>
        <p>A set of immutable values are set to pass to the components</p>
        </div>

    <div className="icon">
        <img
          id="icon4"
          src={icon4}
          alt="jsx"
        />
        <h2>JSX</h2>
        <p>Statically-typed, design to run on modern browsers</p>
     </div>
    
    
    </div>
    );
}

export default Info