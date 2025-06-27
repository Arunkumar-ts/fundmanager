import { Page } from "components/shared/Page";

// import { useFuse } from "hooks";
import { useEffect, useState } from "react";

import axios from 'axios';
import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import { PaymentCard } from "./PaymentCard";

// Local Imports
import {
    Input,
  Pagination,
  PaginationItems,
  PaginationNext,
  PaginationPrevious,
} from "components/ui";


export default function UsersCard5() {
  
  const [payments, setPayments] = useState(null);
  const [searchString, setSearchString] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [paginationTotal, setPaginationTotal] = useState(null);
  const [pageSize, setPageSize] = useState(9);
  const [totalRows, setTotalRows] = useState(null);

  useEffect(()=>{
    
    async function getUser(){
      try {
        const response = await axios.post('http://localhost:3000/payment/list',
        {
            pageSize: pageSize,
            pageIndex: currentPage-1,
            searchString:searchString
        });
        
        setPayments(response.data.data.payments);
        setTotalRows(response.data.data.totalRows)
        const totalRows1 = response.data.data.totalRows; 
        setPaginationTotal(Math.ceil(Number(totalRows1)/pageSize));
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    }
    getUser();

  },[searchString, currentPage, pageSize])
  
  const handlePageSize = (e)=>{
    setCurrentPage(1);
    setPageSize(Number(e.target.value));
  }
    
  return (
    <Page title="Users Card 5">
      <div className="transition-content w-full px-(--margin-x) pb-8">

        <div className="flex items-center justify-between lg:pt-6 gap-y-2 flex-nowrap">
          <div className="flex items-center space-x-1">
            <h2 className="truncate text-xl font-medium text-gray-700 dark:text-dark-50 lg:text-2xl">
              Payments
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
        { payments && payments.length>0 &&
          <div className="my-4">
            <span>Show </span>
              
            <select
              id="rowsPerPage"
              value={pageSize}
              onChange={handlePageSize}
              className="rounded-md border border-gray-300 bg-white px-2 py-0.5 text-xs shadow-sm focus:outline-none focus:ring-1 focus:ring-primary"
            >
              <option value={6}>6</option>
              <option value={9}>9</option>
              <option value={20}>20</option>
              <option value={50}>50</option>
            </select>

            <span>  entries</span>
            
          </div>
        }

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-5 lg:grid-cols-3 lg:gap-6">
          { payments && payments.length>0 ? payments.map((payment, index) => (
            <PaymentCard
              key={index}
              payment={payment}
            />
          )):
          <div className="text-lg m-5">Record Not Fount !</div>
          }
        </div>
          
        { payments && payments.length>0 &&
        <div className="mt-10 flex flex-col-reverse sm:flex-row justify-between items-center gap-3   ">
          
          <div>
              <div>{currentPage === 1 ? currentPage : pageSize * (currentPage-1)} - {(currentPage*pageSize)>totalRows ? totalRows : currentPage*pageSize } of {totalRows} entries</div>
          </div>

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
        }

      </div>
    </Page>
  );
}