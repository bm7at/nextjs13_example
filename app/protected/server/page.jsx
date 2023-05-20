import { getServerSession } from 'next-auth/next'
import { redirect } from 'next/navigation'
import { authOptions } from '../../api/auth/[...nextauth]/route'
import ItemsList from '../../components/ItemsList/ItemsList'
//import FencyButton from '@/app/components/FencyButton/button'
//import ButtonConf from '@/app/components/FencyButton/buttonConf'
import ButtonConf from '../../components/FencyButton/buttonConf'

const ServerProtectedPage = async () => {
  const session = await getServerSession(authOptions)

  if (!session) {
    redirect('/signin?callbackUrl=/protected/server')
  }

  const { items } = await getData(session)
  //const items = await getData()

  console.log(items)

  return (
    <section className='py-24'>
      <div className='container'>
        <h1 className='text-2xl font-bold'>
          This is a <span className='text-emerald-500'>server-side</span>{' '}
          protected page
        </h1>
        <h2 className='mt-4 font-medium'>You are logged in as:</h2>
        <p className='mt-4'>{session?.user?.name}</p>

        <ButtonConf />

        <ul>
          {items.map(item => (
            <li key={item._id}>{item.name}</li>
          ))}
        </ul>
      </div>
      <ItemsList items={items} />;
    </section>
  )
}

/*
export async function getServerSideProps() {
  const res = await fetch('http://localhost:3000/items')
  const items = await res.json()

  console.log(items)
  return {
    props: { items }
  }
}

*/
async function getData(session) {
  console.log(session)
  const res = await fetch(`${process.env.API_URL}/api/items`, {
    headers: {
      'x-auth-token': session,
      'Content-Type': 'application/json'
    },
    next: { revalidate: 60 }
  })
  // The return value is *not* serialized
  // You can return Date, Map, Set, etc.

  // Recommendation: handle errors
  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error('Failed to fetch data')
  }

  const data = res.json()
  console.log(data)
  return data
}

export default ServerProtectedPage
