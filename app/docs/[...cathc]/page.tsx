export default async function Home({params}: { params: Promise<{ cathc: string[] }> }) {
    const resolvedParams = await params;
    console.log(resolvedParams.cathc)
    return(
        <>
        hsjjj
        </>
    )
}