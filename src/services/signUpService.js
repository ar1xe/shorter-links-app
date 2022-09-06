export const URL_API_LOG = "http://79.143.31.216/login";

export const SignUpService = () => {
  return {
    authorizationUser: async function (values) {
      try {
        let formData = new URLSearchParams();
        formData.append("username", values.username);
        formData.append("password", values.password);
        const requestOptions = {
          headers: { "Content-Type": "application/x-www-form-urlencoded" },
          body: formData,
          method: "POST",
        };

        return await fetch(URL_API_LOG, requestOptions).then((res) => {
          return res.json();
        });
      } catch (error) {
        console.log(error);
        return Promise.reject(error);
      }
    },
  };
};
