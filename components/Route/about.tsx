import { styles } from "@/utils/Styles"
import { Button, Chip } from "@nextui-org/react"
import Image from "next/image"

type Props = {}
const About = (props: Props) => {
    return (
        <div className="w-full relative grid md:grid-cols-2 md:py-8">
            <div className="col-span-1 w-full md:w-[60%] md:mt-5 px-5 md:px-[unset]">
                <Chip className={`${styles.button} mb-[30px] h-[37px] bg-[#12211f]`}>
                AI Image
                </Chip>
                <h5 className={`${styles.heading} mb-5 !leading-[50px]`}>
                Crafting Tomorrow&apos;s Images With Artificial Intelligence
                </h5>
                <p className={`${styles.paragraph} pb-5`}>
                    AI images generation tools have emerged as powerful resources in the 
                    realm of digital art and design. These cutting-edge tools leverage 
                    advanced
                </p>
                <Button className={`${styles.button} bg-[#2551b0] font-[500] h-[45px]`}>
                    Visit Shop
                </Button>
            </div>
            <div className="col-span-1 my-10 md:mt-[unset]">
                <Image
                src={"https://pixner.net/aikeu/assets/images/craft-thumb.png"}
                alt=""
                width={600}
                height={600}
                priority
                />
            </div>
        </div>
    )
}
export default About