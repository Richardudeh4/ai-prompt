import React from "react";
import RoutePage from "./_page";
import { getUser } from "@/actions/user/getUser";
import { getAllPrompts } from "@/actions/prompts/getAllPrompt";

const Page = async () => {
  const data = await getUser();
 const promptsData = await getAllPrompts();
 console.log(promptsData);
  return (
    <div>
      <RoutePage
        user={data?.user}
        isSellerExist={data?.shop ? true : false}
        promptsData={promptsData}
      />
    </div>
  );
};

export default Page;
// import React from 'react'
// import RoutePage from './_page'
// import { getUser } from '@/actions/user/getUser'



// const  Page = async () => {
//   const data = await getUser();
//   return (
//     <div>
//     <RoutePage user={data?.user} isSellerExist={data?.shop ? true: false}/>
//       </div>
//   )
// }

// export default Page