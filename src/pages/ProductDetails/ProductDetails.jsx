import React from "react";
import { useParams, Link } from "react-router-dom";
import { useSingleProductQuery } from "../../store/api/products/productsApiSlice";
import { ProductImageGallery } from "../../components/productDetails/ProductImageGallery";
import { ProductTabs } from "../../components/productDetails/ProductTabs";
import { ProductInfo } from "../../components/productDetails/ProductInfo";
import { RelatedProducts } from "../../components/productDetails/RelatedPrducts";


export const ProductDetails = () => {
  const { productId } = useParams();

  // Fetch product data using RTK Query
  const { data: product, isLoading, isError } = useSingleProductQuery(productId);

  if (isLoading) {
    return <div className="text-center py-10">Loading product details...</div>;
  }

  if (isError || !product) {
    return (
      <div className="container text-center py-10">
        <h1>Product Not Found</h1>
        <Link to="/" className="text-blue-500 underline">
          Go Back to Products
        </Link>
      </div>
    );
  }

  const { productName, description, price, stock, images,categoryId } = product.data;
  console.log("catigort",categoryId)

  return (
    <div className="container py-10">
      <div className="grid lg:grid-cols-2 grid-cols-1 gap-8">
        {/* Image Gallery */}
        <ProductImageGallery images={images} productName={productName} />

        {/* Product Info */}
        <ProductInfo
          productName={productName}
          stock={stock}
          price={price}
          description={description}
        />
      </div>

      {/* Product Tabs */}
      <ProductTabs description={description} />
      <RelatedProducts category={categoryId}/>
    </div>
  );
};
