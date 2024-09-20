import '../styles/burguer.css';

const Burguer = (props) => {
  return (
    <div>
       <input type="checkbox" id="checkbox" placeholder='checkbox' onClick={props.handleClick}/>
       <label htmlFor="checkbox" className="toggle">
          <div className="bars" id="bar1"></div>
          <div className="bars" id="bar2"></div>
          <div className="bars" id="bar3"></div>
       </label>
    </div>
  )
}

export default Burguer