
export default async function Home(){
    // w/o ravoalidate and force cache
    const res = await fetch('https://randomuser.me/api/')
    const data = await res.json()
    return(
        <>
        {
            <div>{data?.results[0].name.first }</div>
        }
        </>
    )
}