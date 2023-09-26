import Link from 'next/link';

export default function StudentInfo() {
    return (
        <div>
          <p>Name: Huzaifa</p>
          <p>Course section: CPRG 306 A/B/C/D/...</p>
          <p>
            <Link href="https://github.com/HHafeez123">https://github.com</Link>
            
          </p>
        </div>
    );
}