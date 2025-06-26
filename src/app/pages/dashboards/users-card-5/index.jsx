// Local Imports
import { Page } from "components/shared/Page";
import { Toolbar } from "./Toolbar";
import { UserCard } from "./UserCard";
import { useFuse } from "hooks";

// ----------------------------------------------------------------------

const users = [
  {
    uid: "1",
    name: "Konnor Guzman",
    avatar: "/images/200x200.png",
    username: "@konnorguzman",
  },
  {
    uid: "2",
    name: "Travis Fuller",
    avatar: "/images/200x200.png",
    username: "@travisfuller",
  },
  {
    uid: "3",
    name: "Alfredo Elliott",
    avatar: "/images/200x200.png",
    username: "@alfredoelliott",
  },
  {
    uid: "4",
    name: "Derrick Simmons",
    avatar: null,
    username: "@derricksimmons",
  },
  {
    uid: "5",
    name: "Katrina West",
    avatar: "/images/200x200.png",
    username: "@katrinawest",
  },
  {
    uid: "6",
    name: "Henry Curtis",
    avatar: "/images/200x200.png",
    username: "@henrycurtis",
  },
  {
    uid: "7",
    name: "Raul Bradley",
    avatar: "/images/200x200.png",
    username: "@raulbradley",
  },
  {
    uid: "8",
    name: "Samantha Shelton",
    avatar: null,
    username: "@samanthashelton",
  },
  {
    uid: "9",
    name: "Corey Evans",
    avatar: "/images/200x200.png",
    username: "@coreyevans",
  },
  {
    uid: "10",
    name: "Lance Tucker",
    avatar: null,
    username: "@lancetucker",
  },
  {
    uid: "11",
    name: "Anthony Jensen",
    avatar: "/images/200x200.png",
    username: "@anthonyjensen",
  },
  {
    uid: "12",
    name: "Anthony Jensen",
    avatar: "/images/200x200.png",
    username: "anthonyjensen",
  },
  {
    uid: "13",
    name: "Konnor Guzman",
    avatar: "/images/200x200.png",
    username: "@konnorguzman",
  },
  {
    uid: "14",
    name: "Travis Fuller",
    avatar: "/images/200x200.png",
    username: "@travisfuller",
  },
  {
    uid: "15",
    name: "Alfredo Elliott",
    avatar: "/images/200x200.png",
    username: "@alfredoelliott",
  },
  {
    uid: "16",
    name: "Derrick Simmons",
    avatar: null,
    username: "@derricksimmons",
  },
  {
    uid: "17",
    name: "Katrina West",
    avatar: "/images/200x200.png",
    username: "@katrinawest",
  },
  {
    uid: "18",
    name: "Henry Curtis",
    avatar: "/images/200x200.png",
    username: "@henrycurtis",
  },
];

export default function UsersCard5() {
  const {
    result: filteredUsers,
    query,
    setQuery,
  } = useFuse(users, {
    keys: ["name", "username"],
    threshold: 0.2,
    matchAllOnEmptyQuery: true,
  });

  return (
    <Page title="Users Card 5">
      <div className="transition-content w-full px-(--margin-x) pb-8">
        <Toolbar setQuery={setQuery} query={query} />
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-5 lg:grid-cols-3 lg:gap-6">
          {filteredUsers.map(({ item: user, refIndex }) => (
            <UserCard
              key={refIndex}
              name={user.name}
              avatar={user.avatar}
              username={user.username}
              query={query}
            />
          ))}
        </div>
      </div>
    </Page>
  );
}
