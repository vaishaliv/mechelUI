import { useEffect, useState } from "react";

export const dummyContactData = () => {
  const [loginUser, setLoginUser] = useState({});

  useEffect(() => {
    const data = localStorage.getItem("Users");
    const loginUser = JSON.parse(data);
    setLoginUser(loginUser);
  }, []);

  return [
    {
      id: 1,
      name: "Customer 1",
      phone: "7738180202",
      email: "test@test.com",
      message:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      welcomeEmailFlag: false,
      welcomeSMSFlag: true,
      last_stamping_date: "2025-05-28T03:00:00",
      next_stamping_date: "2025-05-28T03:00:00",
      modifiedBy: loginUser.name,
    },
    {
      id: 2,
      name: "Customer 2",
      phone: "7738180202",
      email: "test@test.com",
      message:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      welcomeEmailFlag: false,
      welcomeSMSFlag: false,
      created_by: "",
      modifiedBy: loginUser.name,
      modified_date: new Date(),
    },
    {
      id: 3,
      name: "Customer 3",
      phone: "7738180202",
      email: "test@test.com",
      message:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      welcomeEmailFlag: true,
      welcomeSMSFlag: false,
      created_by: "",
      modifiedBy: loginUser.name,
      modified_date: new Date(),
    },
    {
      id: 4,
      name: "Customer 4",
      phone: "7738180202",
      email: "test@test.com",
      message:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      welcomeEmailFlag: false,
      welcomeSMSFlag: false,
      created_by: "",
      modifiedBy: loginUser.name,
      modified_date: new Date(),
    },
    {
      id: 5,
      name: "Customer 5",
      phone: "7738180202",
      email: "test@test.com",
      message:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      welcomeEmailFlag: true,
      welcomeSMSFlag: true,
      created_by: "",
      modifiedBy: loginUser.name,
      modified_date: new Date(),
    },
  ];
};
