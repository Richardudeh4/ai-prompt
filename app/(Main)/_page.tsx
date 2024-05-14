"use client";
import Hero from "@/components/Route/hero";
import Header from "@/components/layout/header";
import About from "@/components/Route/about";
import Image from "next/image";
import { useEffect, useState } from "react";
import { styles } from "@/utils/Styles";
import PromptCard from "@/components/Prompts/prompt-card";
import BestSellers from "@/components/Shop/best-sellers";
import Future from "@/components/Route/future";
import Partners from "@/components/Route/partners";
import SellersBanner from "@/components/Shop/sellers-banner";
import { Divider } from "@nextui-org/react";
import Footer from "@/components/layout/footer";
import { User } from "@clerk/nextjs/server";

type Props = {
  user: User | undefined;
  isSellerExist: boolean | undefined;
  promptsData: any;
};
const RoutePage = ({ user, isSellerExist, promptsData }: Props) => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    if (!isMounted) {
      setIsMounted(true);
    }
  }, [isMounted]);
  if (!isMounted) {
    return null;
  }

  return (
    <>
      <div>
        <div className="banner">
          <Header activeItem={0} user={user} isSellerExist={isSellerExist} />
          <Hero />
        </div>
        <Image
          src={"https://pixner.net/aikeu/assets/images/footer/shape-two.png"}
          alt=""
          width={120}
          height={120}
          className="absolute right-[-30px]"
        />
        <br />
        <div className="w-[95%] md:w-[90%] xl:w-[8-%] 2xl:w-[75%] m-auto">
          <About />
          <div>
            <h1 className={`${styles.heading} p-2 font-Monserrat`}>
              Latest Prompts
            </h1>
            <div className="flex flex-wrap">
              {
                promptsData && promptsData.map((prompt:any) => (
                  <PromptCard key={prompt.id} prompt={prompt} />
                ))
              }
   
            </div>
            <br />
            <BestSellers />
            <Future />
            <Partners />
            <SellersBanner />
            <br />
            <br />
            <Divider className="bg-[#ffffff23]" />
            <Footer />
          </div>
        </div>
      </div>
    </>
  )
}
export default RoutePage;