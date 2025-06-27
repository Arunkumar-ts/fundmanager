// Local Imports
import { Avatar, Card, Button} from "components/ui";
import { LuBadgeCheck } from "react-icons/lu";


// react icons
import { MdEdit } from "react-icons/md";
import { MdDelete } from "react-icons/md";

// ----------------------------------------------------------------------

export function PaymentCard({ payment }) {
  return (
    <>
    <Card className="flex p-3.5 flex-col space-y-2">
      <div>
        <div className="flex">
          <Avatar size={11}  name={payment.member.member_name.toUpperCase()} initialColor="auto"
            classNames={{
              display: "mask is-squircle rounded-none text-xs-plus",
            }}
          />
          <div className="mx-2">
            <div className="truncate text-sm font-medium text-gray-800 dark:text-dark-100">
              {payment.member.member_name
              .split(' ')
              .map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
              .join(' ')}
            </div>
            <div className="truncate text-xs text-gray-800 dark:text-dark-100">
              {payment.member.email}
            </div>
          </div>
        </div>
      </div>
      <div>
          <div className='text-gray-800 font-medium dark:text-dark-100 '>Payment Date</div>
          <div className='text-xs'>{payment.created_on.slice(0,10)}</div>
      </div>
      <div>
        <div className="flex justify-between items-center">
          <div className='flex justify-between'>
            <Button variant="soft" color="info" className="size-7 me-3 " isIcon>
              <MdEdit className="size-5" />
            </Button>
            <Button variant="soft" color="error" className="size-7" isIcon>
              <MdDelete className="size-5" />
            </Button>
          </div>
          <div>
            <div className="flex items-center space-x-1">
              <span>
                <LuBadgeCheck className="text-success" />
              </span>
              <span className="text-sm">₹{payment.amount.toFixed(2)}</span>
            </div>
          </div>
        </div>
      </div>
    </Card>
    </>

  );
}
