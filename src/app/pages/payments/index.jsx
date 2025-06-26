// Local Imports
import { Page } from "components/shared/Page";
// import  PaymentCard  from "./PaymentCard";

// import { useFuse } from "hooks";
import { useEffect, useState } from "react";

import axios from 'axios';
import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";

// Local Imports
import { Input } from "components/ui";
import {
  Pagination,
  PaginationItems,
  PaginationNext,
  PaginationPrevious,
} from "components/ui";


export default function Payments() {
  
  const [payments, setpayments] = useState(null);
  const [searchString, setSearchString] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [paginationTotal, setPaginationTotal] = useState(null);
  useEffect(()=>{
    
    async function getUser(){
      try {
        const response = await axios.post('http://localhost:3000/payment/list',
        {
            pageSize: 6,
            pageIndex: currentPage-1,
            searchString:searchString
        });
        setpayments(response.data.data.payments);
        const totalRows = response.data.data.totalRows; 
        setPaginationTotal(Math.ceil(totalRows/6));
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    }
    getUser();

  },[searchString, currentPage])
  
  console.log(payments);
  
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
        </div>

        <div className="mt-8">
          <div>
            <Pagination
              total={paginationTotal}
              value={currentPage} 
              onChange={setCurrentPage}
              classNames={{
                root: "gap-1.5 bg-transparent dark:bg-transparent",
                control: "bg-gray-150 dark:bg-surface-2",
              }}
            >
              <PaginationPrevious/>
              <PaginationItems />
              <PaginationNext/>
            </Pagination>
          </div>
        </div>

      </div>
    </Page>
  );
}
