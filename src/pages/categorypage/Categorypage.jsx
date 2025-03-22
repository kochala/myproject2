import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import { getProductCategories } from './Categori-api';
import "./Category.css"

const Categorypage = () => {
  const { category_slug } = useParams();
  const [category, setCategory] = useState(null);

  useEffect(() => {
    const feetchProduct = async () => {
      try {
        const productData = await getProductCategories(category_slug);
        setCategory(productData);
      } catch (error) {
        console.error('Failed to fetch product:', error);
      }
    };

    feetchProduct();
  }, [category_slug]);

  return (
    <div className='single-categories'>
      {category?(
        category.products.map((item) => (
            <Link key={item.id} to={`/products/${item.id}`} >
          <div key={item.id} className='single-category-div'>
            
            <img src={item.thumbnail} alt={item.title} />
            <p className='category-title'>{item.title}</p>
            <p>
              <strong className='category-price'>${item.price.toFixed(2)}</strong>
            </p>
            <div className='add-to-cart'>  
            <span>add to cart</span>
          </div> 
          </div>
          </Link>          
        ))
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default Categorypage;





// import React, { useEffect, useState } from 'react';

// import { useParams } from 'react-router-dom';
// import { getProductCategories } from './Categori-api';

// const Categorypage = () => {
//   const { category_slug } = useParams();
//   const [product, setProduct] = useState(null);

//   useEffect(() => {
//     const fetchProduct = async () => {
//       try {
//         const productData = await getProductCategories (category_slug);
//         setProduct(productData);
//       } catch (error) {
//         console.error("Failed to fetch product:", error);
//       }
//     };

//     fetchProduct();
//   }, [category_slug]);
//   console.log(product);
  



//     return (
//         <div >
//           {product.products.map((item) => (
//             <div
//               key={item.id}
//             >
//               <img
//                 src={item.imageUrl} 
//                 alt={item.title}
//               />
//               <h3>{item.title}</h3>
//               <p>{item.description}</p>
//               <p><strong>${item.price.toFixed(2)}</strong></p>
//             </div>
//           ))}
//         </div>
     

//    );
// };

// export default Categorypage;
