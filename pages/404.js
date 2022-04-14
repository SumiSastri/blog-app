import Link from 'next/link'
import { useEffect } from 'react'
import { useRouter } from 'next/router'
import Image from 'next/image'

const NotFound = () => {
  const router = useRouter()

  useEffect(() => {
    setTimeout(() => {
      // router.go(-1)
      // router.go(1)
      router.push('/')
    }, 5000)
  }, [router])

  return (
    <div className="card">
      <Image height={150} width={125} alt="The author Prema Sastri at Chattam College, Pittsburg, Pennsylvania" src="/premasastrichattamcollege1950.jpeg"/>
      <p>Sorry we are unable to find the page</p>
      <p>We are returning to the <Link href="/"><a>Homepage</a></Link></p>
      <p>Please contact your adminstrator for further assistance</p>
    </div>
  );
}
 
export default NotFound;