import { useRouter } from 'next/router'

function Header(props) {
  const router = useRouter()
  return (
    <nav
      className='navbar navbar-expand-sm navbar-light'
      style={{ backgroundColor: '#fbf3ea' }}
    >
      <div className='container p-0'>
        <a className='navbar-brand logo' href='/'>
          Cooking
        </a>
        <button
          className='navbar-toggler'
          type='button'
          data-toggle='collapse'
          data-target='#navbarSupportedContent'
          aria-controls='navbarSupportedContent'
          aria-expanded='false'
          aria-label='Toggle navigation'
        >
          <span className='navbar-toggler-icon'></span>
        </button>
        <div className='collapse navbar-collapse' id='navbarSupportedContent'>
          <ul className='navbar-nav ml-auto'>
            <li className={`nav-item ${router.pathname === '/' && 'active'}`}>
              <a className='nav-link' href='/'>
                Home
              </a>
            </li>
            <li
              className={`nav-item ${
                router.pathname === '/categories' && 'active'
              }`}
            >
              <a className='nav-link' href='/categories'>
                Categories
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Header
