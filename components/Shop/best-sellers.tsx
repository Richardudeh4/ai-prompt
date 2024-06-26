import { styles } from "@/utils/Styles"
import SellerCard from "./seller-card"
type Props = {}
const BestSellers = (props: Props) => {
    return (
        <div className="mb-10 cursor-pointer">
            <h1 className={`${styles.heading} p-2 font-Monserrat mb-5`}>
            Top Sellers
            </h1>
            <div className="flex flex-wrap">
                <SellerCard/>
                <SellerCard/>
                <SellerCard/>
                <SellerCard/>
            </div>
        </div>
    )
}
export default BestSellers