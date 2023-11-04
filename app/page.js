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
      <Link href="/week4" style={{fontSize: '1em', marginLeft: '250px'}}>Week 4</Link>
      <div>
      <Link href="/week5" style={{fontSize: '1em', marginLeft: '250px'}}>Week 5</Link>
      </div>
      <div>
      <Link href="/week6" style={{fontSize: '1em', marginLeft: '250px'}}>Week 6</Link>
      </div>
      <div>
      <Link href="/week7" style={{fontSize: '1em', marginLeft: '250px'}}>Week 7</Link>
      </div>
      <div>
      <Link href="/week8" style={{fontSize: '1em', marginLeft: '250px'}}>Week 8</Link>
      </div>
    </main>
  )
}