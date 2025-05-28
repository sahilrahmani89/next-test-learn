import { type Metadata } from 'next';

interface PageProps {
    params: Promise<{
        productId: string;
    }>;
}

export default async function ProductPage({ params }: PageProps) {
  const { productId } = await(params);

  return (
    <div className="text-3xl">This is id {productId}</div>
  );
}
