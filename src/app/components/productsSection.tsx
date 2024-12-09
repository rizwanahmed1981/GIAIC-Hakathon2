import React from 'react'
import productCard from "@/app/components/productcard"
import Image from 'next/image'
// import colour from "F:\governerProgram\quarter2\projects\hakathon2\hakathon2\public\colour.svg"


const ProductsSection = () => {
  return (
    <div className='flex flex-col gap-10 ml-28'>
        <div className='flex flex-col gap-3 items-center'>
            <p className='font-normal text-lg text-[#737373] opacity-100'>Featured Products</p>
            <p className='text-2xl font-bold '>BEST SELLER PRODUCT</p>
            <p className='text-[14px] font-normal text-[#737373] opacity-100'>Problems trying to resolve the conflict between </p>
        </div>
        <div className="w-[80%] ml-10 md:ml-40 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4  gap-2 items-center justify-center">
            {productCard.map((product ,index)=>{
                return (
                    <div key={index} className='bg-white flex flex-col items-center px-2 '>
                        <Image src={product.image[0]} alt={product.name} width={239} height={427} />
                        <div className='text-center flex flex-col justify-start items-center gap-2 mt-4'>
                            <p className='font-bold text-xl'>{product.name}</p>
                            <p className='font-normal text-sm opacity-100'>{product.details}</p>
                            <p className='font-normal text-sm opacity-100'>{product.orignalPrice}{product.discountedPrice}</p>
                            <Image src={product.image[1]} alt={product.name} width={82} height={16} />
                            
                        </div>

                    </div>
                )
            })}

        </div>
    </div>
  )
}





// import Image from "next/image";
// import productCard from "@/app/components/productcard"; // Adjust the path if necessary

// const ProductList = () => {
//   return (
//     <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(200px, 1fr))", gap: "16px" }}>
//       {productCard.map((product, index) => (
//         <div key={index} style={{ border: "1px solid #ddd", padding: "16px", borderRadius: "8px" }}>
//           <Image
//             src={product.image} // Use the imported image paths
//             alt={product.name}
//             width={150} // Adjust size as needed
//             height={150} // Adjust size as needed
//           />
//           <h3>{product.name}</h3>
//           <p>{product.details}</p>
//           <p>
//             <del>{product.orignalPrice}</del> <strong>{product.discountedPrice}</strong>
//           </p>
//         </div>
//       ))}
//     </div>
//   );
// };

// export default ProductList;


export default ProductsSection