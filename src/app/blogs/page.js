'use client'
import Link from "antd/es/typography/Link";
import { blogsArray } from "../../../public/lib/blog";


export default function Blogs() {
    return (
      <main className="flex min-h-screen flex-col items-center justify-between p-24">
         <div>
          <h1>Blogs</h1>
          {
                blogsArray.map((data) => {
                    return (
                        <Link href={`/blogs/${data.slug}`}>
                            <div className="p-5 w-full m-4 bg-blue-300 rounded-md">
                                <h1 className="font-bold">{data.title}</h1>
                                <p>{data.desc}</p>
                                <p>{data.by}</p>
                            </div>
                        </Link>
                    )
                })
          }
          </div>
      </main>
    )
  }