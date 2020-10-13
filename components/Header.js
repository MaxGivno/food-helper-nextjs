import Link from 'next/link'
import { useRouter } from 'next/router'

function Header(props) {
  const router = useRouter()
  return (
    <nav
      className='navbar navbar-expand-sm navbar-light'
      style={{ backgroundColor: '#fbf3ea' }}
    >
      <div className='container p-0'>
        <Link href='/'>
          <a className='navbar-brand logo'>
            Cooking
            <span className='logo-after'>book</span>
          </a>
        </Link>
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
              <Link href='/'>
                <a className='nav-link'>Home</a>
              </Link>
            </li>
            <li
              className={`nav-item ${
                router.pathname === '/categories' && 'active'
              }`}
            >
              <Link href='/categories'>
                <a className='nav-link'>Categories</a>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Header
