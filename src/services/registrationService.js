export const URL_API_REG = "http://79.143.31.216/register?username=";

export const RegistrationService = () => {
  return {
    registrationUser: async function (values) {
      try {
        return await fetch(
          URL_API_REG +
            `${values.username}` +
            "&password=" +
            `${values.password}`,
          {
            method: "POST",
          }
        );
      } catch (error) {
        console.log(error);
        return Promise.reject(error);
      }
    },
  };
};
