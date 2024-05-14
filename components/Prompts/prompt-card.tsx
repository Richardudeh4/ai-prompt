import { getShopById } from "@/actions/shop/getShopById";
import Ratings from "@/utils/Ratings";
import { styles } from "@/utils/Styles";
import { Avatar, Button, Card, Divider} from "@nextui-org/react";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";


type Props = {
    prompt: any
}
const PromptCard = ({prompt}:Props) => {
    const [shopData, setShopData] = useState<any>();
    useEffect(() => {
        if(prompt){
            getShopInfo();
        }
    },[prompt]);

    const getShopInfo = async () => {
      const shopData =  await getShopById({shopId: prompt?.sellerId});
      setShopData(shopData);
    }
    return(
     <Card radius="lg" className="w-full md:w-[31%] 2xl:w-[23%] p-4 bg-[#130f23] m-3">
        <div className="relative">
            <Image
            src={""}
            alt=''
            className="w-full"
            width={300}
            height={300}
            />
            <div className="absolute bottom-2 left-2">
                <div className="w-max bg-black hover:bg-[#16252] duration-300 transition-opacity hover:text-black text-white p-[10px] items-center flex rounded-xl" >
                <Image
                src={""}
                width={25}
                height={25}
                alt=""
                />
                <span className={`${styles.label} p-2 text-white`}>
                    Chatgpt
                </span>
                </div>
            </div>
        </div>
        <div className="w-full flex justify-between py-2">
        <h3 className={`${styles.label} text-[18px] text-white`}>
           {prompt?.name}
        </h3>
        <p className={`${styles.paragraph}`}>
            $25.00
        </p>
        </div>
        <Divider className="bg-[#ffffff18] my-3"/>
        <div className="w-full flex items-center justify-between">
            <div className="flex items-center">
        <Avatar src=""/>
        <span className={`${styles.label} pl-3`}>
            @Richard
        </span>
            </div>
          
            <Ratings rating={prompt?.rating}/>
        </div>
        <br/>
        <Link href="/shop/124" className="w-full">
        <Button className={'mb-3 w-full text-white bg-transparent border border-[#16c252] hover:bg-[#16c252] hover:text-black duration-300 transition-opacity font-Inter font-[600]'}>
        Get Prompts
        </Button>
        </Link>
     </Card>
    )
}
export default PromptCard;