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
    phone: "9876543210",
    paidAmount: 12000000,
  },
  {
    uid: "2",
    name: "Travis Fuller",
    avatar: "/images/200x200.png",
    username: "@travisfuller",
    phone: "9876543211",
    paidAmount: 1000,
  },
  {
    uid: "3",
    name: "Alfredo Elliott",
    avatar: "/images/200x200.png",
    username: "@alfredoelliott",
    phone: "9876543212",
    paidAmount: 900,
  },
  {
    uid: "4",
    name: "Derrick Simmons",
    avatar: null,
    username: "@derricksimmons",
    phone: "9876543213",
    paidAmount: 1500097,
  },
  {
    uid: "5",
    name: "Katrina West",
    avatar: "/images/200x200.png",
    username: "@katrinawest",
    phone: "9876543214",
    paidAmount: 800,
  },
  {
    uid: "6",
    name: "Henry Curtis",
    avatar: "/images/200x200.png",
    username: "@henrycurtis",
    phone: "9876543215",
    paidAmount: 1300,
  },
  {
    uid: "7",
    name: "Raul Bradley",
    avatar: "/images/200x200.png",
    username: "@raulbradley",
    phone: "9876543216",
    paidAmount: 1250,
  },
  {
    uid: "8",
    name: "Samantha Shelton",
    avatar: null,
    username: "@samanthashelton",
    phone: "9876543217",
    paidAmount: 1400,
  },
  {
    uid: "9",
    name: "Corey Evans",
    avatar: "/images/200x200.png",
    username: "@coreyevans",
    phone: "9876543218",
    paidAmount: 11005656,
  },
  {
    uid: "10",
    name: "Lance Tucker",
    avatar: null,
    username: "@lancetucker",
    phone: "9876543219",
    paidAmount: 950,
  },
  {
    uid: "11",
    name: "Anthony Jensen",
    avatar: "/images/200x200.png",
    username: "@anthonyjensen",
    phone: "9876543220",
    paidAmount: 1000,
  },
  {
    uid: "12",
    name: "Anthony Jensen",
    avatar: "/images/200x200.png",
    username: "anthonyjensen",
    phone: "9876543221",
    paidAmount: 1000,
  },
  {
    uid: "13",
    name: "Konnor Guzman",
    avatar: "/images/200x200.png",
    username: "@konnorguzman",
    phone: "9876543222",
    paidAmount: 1100,
  },
  {
    uid: "14",
    name: "Travis Fuller",
    avatar: "/images/200x200.png",
    username: "@travisfuller",
    phone: "9876543223",
    paidAmount: 900,
  },
  {
    uid: "15",
    name: "Alfredo Elliott",
    avatar: "/images/200x200.png",
    username: "@alfredoelliott",
    phone: "9876543224",
    paidAmount: 800,
  },
  {
    uid: "16",
    name: "Derrick Simmons",
    avatar: null,
    username: "@derricksimmons",
    phone: "9876543225",
    paidAmount: 950,
  },
  {
    uid: "17",
    name: "Katrina West",
    avatar: "/images/200x200.png",
    username: "@katrinawest",
    phone: "9876543226",
    paidAmount: 1200,
  },
  {
    uid: "18",
    name: "Henry Curtis",
    avatar: "/images/200x200.png",
    username: "@henrycurtis",
    phone: "9876543227",
    paidAmount: 1350,
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
              phone={user.phone}
              amount={user.paidAmount}
              query={query}
            />
          ))}
        </div>
      </div>
    </Page>
  );
}
