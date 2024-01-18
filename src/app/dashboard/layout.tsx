import productList from "./@productlist/page"
import productDetail from "./@productDetail/page"

export default function DashboardLayout({
  children,
  productList,
  productDetail
}: {
  children: React.ReactNode,
  productList: React.ReactNode,
  productDetail: React.ReactNode,
}) {
  return (
    <div>
      <div>       
        {children}  
        <div className="flex">
        <div className="flex flex-col">
        <div>       
        {productList}  
        {productDetail}  
       </div>
            </div> 
            </div> 
        </div>
    </div>
  )
}