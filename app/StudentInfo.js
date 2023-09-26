import Link from 'next/link';

export default function StudentInfo() {
    return (
        <div>
          <p style={{fontSize: '1em', marginLeft: '250px'}}>Name: Huzaifa</p>
          <p style={{fontSize: '1em', marginLeft: '250px'}}>Course section: CPRG 306 A/B/C/D/...</p>
          <p style={{fontSize: '1em', marginLeft: '250px'}}>
            <Link href="https://github.com/HHafeez123">https://github.com</Link>
            
          </p>
        </div>
    );
}