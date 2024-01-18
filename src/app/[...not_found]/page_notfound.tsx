 
import Link from 'next/link'

export default function NotFound() {
  return ( <div className='items-center'>
      <h1>Not found – 404!</h1>
      <div className='items-center'>
        <Link href="/">Go back to Home</Link>
      </div>
  </div>)
}
