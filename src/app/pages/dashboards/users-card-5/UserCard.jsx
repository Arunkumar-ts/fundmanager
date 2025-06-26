// react icons
import { MdEdit } from "react-icons/md";
import { MdDelete } from "react-icons/md";
import {
  EnvelopeIcon,
  UserIcon,
  PhoneIcon,
} from "@heroicons/react/20/solid";
// Import Dependencies
import PropTypes from "prop-types";

// Local Imports
import { Avatar, Card, Button } from "components/ui";

// ----------------------------------------------------------------------

export function UserCard({ name, avatar=null, username, phone }) {
  return (
   <Card className="p-3 sm:p-4">
    
    <div className="flex justify-between items-start">
      <div>
        <div className="flex space-x-1">
          <h4 className="truncate text-xl font-medium text-gray-800 dark:text-dark-100">
            {name}
          </h4>
        </div>

        <div className="space-y-1 mt-1">
          <div className="flex min-w-0 items-center space-x-1.5">
            <div className="flex size-5 shrink-0 items-center justify-center rounded-lg bg-primary-600/10 text-primary-600 dark:bg-primary-400/10 dark:text-primary-400">
              <EnvelopeIcon className="size-3" />
            </div>
            <p className="truncate text-sm">{username}</p>
          </div>
          <div className="flex min-w-0 items-center space-x-1.5">
            <div className="flex size-5 shrink-0 items-center justify-center rounded-lg bg-primary-600/10 text-primary-600 dark:bg-primary-400/10 dark:text-primary-400">
              <PhoneIcon className="size-3" />
            </div>
            <p className="truncate text-sm">{phone}</p>
          </div>
        </div>
      </div>

      <Avatar
        size={16}
        name={name}
        src={avatar}
        initialColor="auto"
        classNames={{
          display: "mask is-squircle rounded-none",
        }}
      />
    </div>

    <div className="flex items-center justify-between gap-2 mt-3">
      <Button variant="soft" color="info" className="w-10 h-8" isIcon>
        <UserIcon className="size-4" />
      </Button>
      <Button variant="soft" color="success" className="w-10 h-8" isIcon>
        <MdEdit className="size-4" />
      </Button>
      <Button variant="soft" color="error" className="w-10 h-8" isIcon>
        <MdDelete className="size-4" />
      </Button>
    </div>

  </Card>

  );
}

UserCard.propTypes = {
  name: PropTypes.string,
  avatar: PropTypes.string,
  username: PropTypes.string,
  phone: PropTypes.string,
};
