// Import Dependencies
import PropTypes from "prop-types";

// Local Imports
import { Avatar, Card, Button } from "components/ui";
import { Highlight } from "components/shared/Highlight";

// react icons
import { MdEdit } from "react-icons/md";
import { MdDelete } from "react-icons/md";
import { FaInfo } from "react-icons/fa";
// ----------------------------------------------------------------------

export function UserCard({ name, avatar, username, query }) {
  return (
    <Card className="flex flex-row justify-between space-x-2 p-4 sm:p-5 ">
      <div>
        <div className="flex space-x-1 ">
          <h4 className="truncate text-base font-medium text-gray-800 dark:text-dark-100">
            <Highlight query={query}>{name}</Highlight>
          </h4>
          
        </div>
        <div
          className="text-xs-plus transition-colors hover:text-gray-800 dark:hover:text-dark-50"
        >
          <Highlight query={query}>{username}</Highlight>
        </div>
        <div
          className="text-xs-plus transition-colors hover:text-gray-800 dark:hover:text-dark-50"
        >
          <Highlight query={query}>9342772857</Highlight>
        </div>
        <div className="flex items-center gap-5 mt-3">
          <Button variant="soft" color="info" className="size-7 rounded-full" isIcon>
            <FaInfo className="size-3" />
          </Button>
          <Button variant="soft" color="success" className="size-7 rounded-full" isIcon>
            <MdEdit className="size-4" />
          </Button>
          <Button variant="soft" color="error" className="size-7 rounded-full" isIcon>
            <MdDelete className="size-4" />
          </Button>
        </div>
      </div>
      <div className="flex flex-col gap-4">
        <Avatar
          size={15}
          name={name}
          src={avatar}
          initialColor="auto"
          classNames={{
            display: "mask is-squircle rounded-none",
          }}
        />
        <div className="inline-flex items-center justify-center px-3  rounded-lg bg-primary-600/10  dark:bg-primary-400/10 dark:text-primary-400 text-xs font-medium">
          ₹ 300
        </div>
      </div>
    </Card>
  );
}

UserCard.propTypes = {
  name: PropTypes.string,
  avatar: PropTypes.string,
  username: PropTypes.string,
  query: PropTypes.string,
};
