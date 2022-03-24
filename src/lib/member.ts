import axios from "axios";

const SEARCH_USERS_URL = "https://api.github.com/v0/users/find";

const getMemberByUsername = async (username: number) => {
  const body = {
    filters: {
      conjunction: "and",
      filterGroups: [
        {
          conjunction: "and",
          filters: [
            {
              attr: "username",
              type: "string",
              comparison: "is",
              value: "janedoe",
            },
          ],
        },
      ],
    },
  };

  const response = await axios.post();
};
