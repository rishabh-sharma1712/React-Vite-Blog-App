const Header = () => {
  return (
    <>
        <nav className="navbar sticky-top bg-body-tertiary">
            <form className="container-fluid justify-content-end">
                <button className="btn btn-sm btn-outline-success" type="button" style={{marginRight:'2em'}}>Sign In</button>
                <button className="btn btn-sm btn-outline-secondary" type="button">Register</button>
            </form>
        </nav>
    </>
  )
}

export default Header