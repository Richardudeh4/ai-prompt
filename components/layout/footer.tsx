import { styles } from "@/utils/Styles"
import Link from "next/link"

const Footer = () => {
    return(
        <div className="mt-8">
        <div className="w-full mb-5 flex justify-between items-center">
        <div>
            <Link href={"/"}>
            <h1 className="font-inter text-3xl cursor-pointer">
        <span className="text-[#64ff4c]">Rich</span>Gallery
        </h1> 
            </Link>
        </div>
        <div>
            <ul className="flex items-center flex-wrap">
                <li>
                    <Link href="/" className={`${styles.label} hover:text-[#64ff4b] duration-200 transtion px-4`}>
                        Home
                    </Link>
                </li>
                <li>
                    <Link href="/marketplace" className={`${styles.label} hover:text-[#64ff4b] duration-200 transtion px-4`}>
                        MarketPlace
                    </Link>
                </li>
                <li>
                    <Link href="/contact-us" className={`${styles.label} hover:text-[#64ff4b] duration-200 transtion px-4`}>
                       Contact us
                    </Link>
                </li>
            </ul>
        </div>
        </div>
        <p className={`${styles.paragraph} text-center`}>
    Copyright 2023 RichGallery. All Rights reserved       
        </p>
        <br/>
        <br/>
        </div>
    )
}
export default Footer