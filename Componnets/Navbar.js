import './Navbar.css';

function Navbar() {
  return (
    <div className="App">
      <header className="App__header">
        <p>Ahm<span>et.</span></p>
        <div className='user__container'>
          <button className='btn'>Register</button>
          <button className='btn'>Login</button>
        </div>
      </header>
    </div>
  );
}

export default Navbar;
