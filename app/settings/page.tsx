import { options } from "../api/auth/[...nextauth]/options"
import { getServerSession } from "next-auth/next"


export default async function Settings() {

    const session = await getServerSession(options)

  return (
    <div>
      <h1>Settings</h1>
      <div>
      
        {// @ts-ignore
        session ? <p>Logged in as {session?.user.name as any}</p> : <p>Not logged in</p>}
      </div>
    </div>

  )
}