import Link from 'next/link';
import StudentInfo from "./StudentInfo";

export default function Home() {
  return (
    <main>
      <h1 style={{ fontSize: '2em', marginLeft: '250px' , marginTop: '100px'}} >CPRG 306: Web Development 2 - Assignments</h1>
      <StudentInfo style={{fontSize: '1em', marginLeft: '250px'}}/>
      <Link href="/week2" style={{fontSize: '1em', marginLeft: '250px'}}>Week 2</Link>
    </main>
  )
}