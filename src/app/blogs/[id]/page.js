export default function BlogDetail({ params }) {
    return (
      <main className="flex min-h-screen flex-col items-center justify-between p-24">
         <div>
          <h1>{params.id}</h1>
          </div>
      </main>
    )
  }