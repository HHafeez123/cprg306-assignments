import dynamic from 'next/dynamic';

const NewItem = dynamic(() => import('./new-item'), {
  ssr: false
});

function Page() {
    return (
        <div>
            <NewItem />
        </div>
    );
}

export default Page;






