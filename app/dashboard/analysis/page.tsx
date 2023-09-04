import { options } from "@/app/api/auth/[...nextauth]/options"
import { getServerSession } from "next-auth/next"
import { redirect } from "next/navigation"

export default async function Analytics() {
    const session = await getServerSession(options)

    if(!session) {
        return redirect('/api/auth/signin?callbackUrl=/dashboard/analysis')
    }
   

  return(
    <div>
        <h1>Analytics</h1>
        <section>
            <div>
                {
                    //suppress error type error
                    // @ts-ignore
                    session ? <p>Logged in as {session?.user.name as any}</p> : <p>Not logged in</p>
                }
            </div>
        </section>
    </div>
  )
}