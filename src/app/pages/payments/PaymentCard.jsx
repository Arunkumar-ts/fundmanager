// Local Imports
import { Avatar, Card, Button} from "components/ui";


// react icons
import { MdEdit } from "react-icons/md";
import { MdDelete } from "react-icons/md";

// ----------------------------------------------------------------------

export function PaymentCard({ payment }) {
  return (
    <>
    <Card className="flex items-center justify-between p-3.5 w-full">
      <div className="flex flex-row items-center gap-3">
        <Avatar size={14}  name={payment.member.member_name.toUpperCase()} initialColor="auto" />
        <div className="flex min-w-0 flex-col ">
          <span className="truncate text-lg font-medium text-gray-800 dark:text-dark-100">
            {payment.member.member_name
            .split(' ')
            .map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
            .join(' ')}
          </span>
          <div >
            <div>
                <div className='text-xs'>Payment Date</div>
                <div className='text-gray-800 dark:text-dark-100'>{payment.created_on.slice(0,10)}</div>
            </div>
          </div>
            
        </div>
      </div>
      <div className='flex flex-col space-y-2 ms-3'>
        <div>
          <span className="">
              ₹{payment.amount.toFixed(2)}
          </span>
        </div>
        <div>
          <div className='flex justify-between'>
            <Button variant="soft" color="success" className="size-7 me-2" isIcon>
              <MdEdit className="size-5" />
            </Button>
            <Button variant="soft" color="error" className="size-7 " isIcon>
              <MdDelete className="size-5" />
            </Button>
          </div>
        </div>
      </div>
    </Card>
    </>

  );
}
