import { type LoaderFunction } from "react-router-dom"

import { Filters, ProductsContainer, PaginationContainer } from "@/components"
import { customFetch, type ProductsResponse, type ProductsResponseWithParams } from "@/utils"

const url = '/products'

export const loader: LoaderFunction = async({request}): Promise<ProductsResponseWithParams> => {
  const params = Object.fromEntries([
    ...new URL(request.url).searchParams.entries()
  ])

  const res = await customFetch<ProductsResponse>(url,{
    params,
  })
  
  return { ...res.data, params}
}

const Products = () => {
  return (
    <>
      <Filters />
      <ProductsContainer />
      <PaginationContainer />
    </>
  )
}
export default Products