// Import Dependencies
import PropTypes from "prop-types";
import {
  EnvelopeIcon,
  UserIcon,
  PhoneIcon,
} from "@heroicons/react/20/solid";

// Local Imports
import { Avatar, Button, Card } from "components/ui";
import { Highlight } from "components/shared/Highlight";

// react icons
import { MdEdit } from "react-icons/md";
import { MdDelete } from "react-icons/md";
// ----------------------------------------------------------------------

export function UserCard({
  name,
  avatar,
  phone,
  email,
  query,
}) {
  return (
    <Card className="flex grow flex-col items-center p-4 sm:p-5">
      <Avatar
        size={20}
        name={name}
        src={avatar}
        initialColor="auto"
        classNames={{
          display: "text-2xl",
        }}
        
      />
      <h3 className="pt-3 text-lg font-medium text-gray-800 dark:text-dark-100">
        <Highlight query={query}>{name}</Highlight>
      </h3>
      <p className="text-xs-plus">
        <div className="inline-flex mt-2 items-center justify-center px-3  rounded-lg bg-primary-600/10  dark:bg-primary-400/10 dark:text-primary-400 text-xs font-medium">
          ₹ 300350
        </div>
      </p>
      <div className="my-4 h-px w-full bg-gray-200 dark:bg-dark-500"></div>
      <div className="mx-auto inline-grid grid-cols-1 gap-3">
        <div className="flex min-w-0 items-center space-x-2 ">
          <div className="flex size-6 shrink-0 items-center justify-center rounded-lg bg-primary-600/10 text-primary-600 dark:bg-primary-400/10 dark:text-primary-400">
            <PhoneIcon className="size-3.5" />
          </div>
          <p className="truncate">
            <Highlight query={query}>{phone}</Highlight>
          </p>
        </div>
        <div className="flex min-w-0 items-center space-x-2 ">
          <div className="flex size-6 shrink-0 items-center justify-center rounded-lg bg-primary-600/10 text-primary-600 dark:bg-primary-400/10 dark:text-primary-400">
            <EnvelopeIcon className="size-3.5" />
          </div>
          <p className="truncate">
            <Highlight query={query}>{email}</Highlight>
          </p>
        </div>
        <div className="flex gap-2 w-full"> 
          <Button variant="soft" color="primary" className="w-full"><UserIcon className="size-5"/></Button>
          <Button variant="soft" color="success" className="w-full"><MdEdit className="size-5"/></Button>
          <Button variant="soft" color="error" className="w-full"><MdDelete className="size-5"/></Button>
        </div>
        {/* <div className="mt-2 text-center">
          <Button className="space-x-2 " color="primary">
            <UserIcon className="size-4" />
            <span>Profile</span>
          </Button>
        </div> */}
      </div>
    </Card>
  );
}

UserCard.propTypes = {
  name: PropTypes.string,
  avatar: PropTypes.string,
  position: PropTypes.string,
  phone: PropTypes.string,
  email: PropTypes.string,
  website: PropTypes.string,
  query: PropTypes.string,
};
