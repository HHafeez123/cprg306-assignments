import Link from 'next/link';
import StudentInfo from "./StudentInfo";

export default function Home() {
  return (
    <main>
      <div>
      <h1 style={{ fontSize: '2em', marginLeft: '250px' , marginTop: '100px'}} >CPRG 306: Web Development 2 - Assignments</h1>
      <StudentInfo style={{fontSize: '1em', marginLeft: '250px'}}/>
      <Link href="/week2" style={{fontSize: '1em', marginLeft: '250px'}}>Week 2</Link>
      </div>
      <div>
      <Link  href="/week3" style={{fontSize: '1em', marginLeft: '250px'}}>Week 3</Link>
      </div>
      

      <div style={{ marginLeft: '250px' }}>
                <Link href="/week4" style={{ fontSize: '1em' }}>
                    Week 4
                </Link>
            </div>
    </main>
  )
}