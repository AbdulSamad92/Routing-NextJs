'use client'
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter()
  const handleOnClickBLog = () => {
    router.push('/blogs')
  }
  return (
    <main className="flex min-h-screen flex-col items-center p-24">
       <div>
        <h1>Home</h1>
        </div>
        <div className="flex">
          <div className="p-3 m-4 rounded-md bg-red-400 cursor-pointer"><Link href={'/contact'}>Contact</Link></div>
          <div className="p-3 m-4 rounded-md bg-red-400 cursor-pointer" onClick={()=>{router.push('/about')}}>About</div>
          <div className="p-3 m-4 rounded-md bg-red-400 cursor-pointer" onClick={handleOnClickBLog}>Blogs</div>
        </div>

    </main>
  )
}
