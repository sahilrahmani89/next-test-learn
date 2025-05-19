
export default async function Home(){
    const res = await fetch('https://dummyjson.com/products?limit=10',{cache: 'no-store'})
    const data = await res.json()
    return(
        <>
        {
            data?.products.map((product: any) => (
                <div key={product.id}>
                    {product.title}
                </div>
            ))
        }
        </>
    )
}