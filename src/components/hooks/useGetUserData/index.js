const useGetUserData = () => {
  const data = JSON.parse(localStorage.getItem("userData"));
  const token = data?.data?.token;
  const setUserData = (data) => {
    localStorage.setItem("userData", JSON.stringify(data));
  };
  return [data?.data, token, setUserData];
};
export default useGetUserData;
