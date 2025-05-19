export const revalidate = 60
export default async function Home(){
    const res = await fetch('https://randomuser.me/api/',{ next: { revalidate: 60 }})
    const data = await res.json()
    return(
        <>
        {
            <div>{data?.results[0].name.first }</div>
        }
        </>
    )
}