// Program 65: Merge two objects into a single combined object.
const data1 = {
  login: "abhisinghjadon",
  id: 280665003,
  site_admin: false,
  name: "Abhishek kumar",
  company: null,
  blog: "",
  location: null,
  email: null,
};
const data2 = {
  hireable: null,
  bio: "I am a web and full stack Developer ",
  twitter_username: null,
  public_repos: 2,
  public_gists: 0,
  followers: 0,
  following: 0,
  created_at: "2026-04-30T10:22:13Z",
  updated_at: "2026-07-29T16:27:07Z",
};

const data = { ...data1, ...data2 };
console.log(data);
