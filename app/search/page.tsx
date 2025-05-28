export type paramsType = {
    params: Promise<{ nest: string[] }>;
    searchParams:Promise<{lang?:string}>
}

export default async function SearchPage({
    params,
    searchParams,
}: paramsType) {
    const { lang = "en" } = await searchParams;

    return (
        <>
            <h1>Search Params</h1>
            <h2>{lang}</h2>
        </>
    );
}
// this piece of code for searchparams in server component