import React from 'react';
import CheckOut from '../_components/CheckOut';

export default async function CheckOutPage({ params }: { params: Promise<{ id: string }> }) {
  const data = await params;

  return (
    <div className="m-5 mt-30 sm:m-10 lg:m-20">
      <h1 className="text-3xl sm:text-4xl mb-5 font-bold">Check out now</h1>
      <CheckOut cartId={data?.id}></CheckOut>
    </div>
  );
}
