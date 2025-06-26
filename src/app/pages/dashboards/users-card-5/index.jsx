// Local Imports
import { Page } from "components/shared/Page";
import { UserCard } from "./UserCard";

// import { useFuse } from "hooks";
import { useEffect, useState } from "react";

import axios from 'axios';
import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";

// Local Imports
import { Input } from "components/ui";


export default function UsersCard5() {
  
  const [users, setusers] = useState(null);
  const [searchString, setSearchString] = useState("");
  useEffect(()=>{
    
    async function getUser(){
      try {
        const response = await axios.post('http://localhost:3000/member/list',
        {
            pageSize: 20,
            pageIndex: 0,
            searchString:searchString
        });
        setusers(response.data.data.members)
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    }
    getUser();

  },[searchString])
  
  return (
    <Page title="Users Card 5">
      <div className="transition-content w-full px-(--margin-x) pb-8">

        <div className="flex items-center justify-between py-5 lg:py-6 gap-y-2 flex-nowrap">
          <div className="flex items-center space-x-1">
            <h2 className="truncate text-xl font-medium text-gray-700 dark:text-dark-50 lg:text-2xl">
              Members
            </h2>
          </div>
          <div className="w-auto">
            <div className="flex items-center space-x-1">
              <Input
                classNames={{
                  input: "h-8 text-md",
                  root: "w-48 sm:w-60",
                }}
                value={searchString}
                onChange= {(e)=>setSearchString(e.target.value)}
                placeholder="Search Users ..."
                prefix={<MagnifyingGlassIcon className="size-4.5" />}
              />
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-5 lg:grid-cols-3 lg:gap-6">
          { users && users.length>0 ? users.map((user, index) => (
            <UserCard
              key={index}
              name={user.member_name}
              username={user.email}
              phone={user.phone_no}
            />
          )):
          <div className="text-lg">Record Not Fount !</div>
          }
        </div>

      </div>
    </Page>
  );
}
