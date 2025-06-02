import { redirect } from "next/navigation"

export default function Home(){
    //redirect to homepage 
    // its server side
    redirect('/')
    return(
        <div>
          <h1>This is redirect - check page</h1>
        </div>
    )
}