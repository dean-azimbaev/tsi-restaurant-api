export const swaggerConfig = () => ({
  swagger: {
    path: process.env.DOCUMENTATION_PATH,
    info: {
      title: process.env.npm_package_name, //
      description: process.env.npm_package_description, //
      version: process.env.npm_package_version, //
    },
  },
});
