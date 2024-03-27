
import { Link } from 'react-router-dom'
import { BsCart } from "react-icons/bs";

const Navbar = () => {
  // const [value, setvalue] = useState(false);


  const arr = JSON.parse(localStorage.getItem('Cart')) || []
  

  return (
    <div >
      <nav id='navbar'  className="navbar navbar-expand-lg navbar-light ">
  <div className="container-fluid">
    <h1 className='text-success'> GOOD FOOD </h1>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon" />
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav ms-auto mb-2">
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to={'/'} >Home</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link active" to='/menu' >Menu</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link active" to='/about' >About Us</Link>
        </li>
        <li className="nav-item ">
          <Link className="nav-link active" to='contact' >Contact </Link>
        </li>
        <li className="nav-item ">
          <Link className="nav-link active" to='cart'> <BsCart /> Cart {arr.length}  </Link>
        </li>
       
        
        
      </ul>
      
    </div>
  </div>
</nav>

    </div>
  )
}

export default Navbar
