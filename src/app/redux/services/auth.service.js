import axiosInstance, {
  authHeader
} from "../../utils/axios";
const user = {
  email: "admin@jazzcash.com",
  password: "test",
};
const login = async (formData) => {
  const response = {
    data: {
      token: {
        value: "741a3d50caaf5bfd2e72e30c651aea92f6a41e163b69eef936d7969c03a0a0b6fcdfa951d206349a27b4897bc4b01e816ce87f8be9119cb2235c71c3e39312f8d39781263147a709927e4bcfc9e3dfddfd3ddbbd76de4b850826dbfce857bee12ed3e1729c89f8a6c1a9da0e7113601406d8921fc1863556a01af9f5ed28b9a48c6576bcc75e91299bdc7d1fb43cdb1021c5f71f2c35c5bd27861dc10f4a5010137c957d2907b7f9f08907c72da2b9f9bb1f0a4c4e898ff803e3a4fdf60cf822445b15e57feeb75724c4facd5215871e53650b27b9897c393b407fd3a57370b4a1502409c070997afacabc4eb209d33b13fb6861f992b4760b597067f2a9fc3b646ed49b63cc4d3ee9ae4ddb81969a7bf19dc63fb9086a1eecd3ec748df042f77b011155ddd539b19040ce7c3b5ba526e24bfb131e764931998febddb1a74644ad51b90c301b2ea00940b98d36ab1ab55e5321e3a4eeef0981211a68c937811cca4c007127dda833c6441b4bba0d85cef76c0935e6e802b0c2689ffc4370630662c34a77539184b66b1659869c22eb9a2b8651bbe0af665276310d3b10af19e2decfb3febb6a4be6ce0adbbfa961d00e2c656ee20452d1c5fc8dc7404603ebbcb9c3ab2ef0dbbd6e8ce007c47314c3b1a2666c545b148920eeafe532c820e798226453e45bcdc4657cf00d4cdb437d85e8d9701019714ff40bdcb0871f94824b41397a7f5fa0ac910bb013eda7fa44824dfa737ff932dac91b6e1f1d3aa6641a4d2264682afd3c3d4fbe457ff9c34aa7036e2f089159661695138053aebd6ec20f51f4b6c69ca9e225deba6c375834fd85111c853dc40773e8c388a2e09123bd9bf34517e8e8c73aae0bf96ccf82aa124c12710a873f8ec0e29ca848fde45b30f54fef5952e9fb4201c2298edebeadee085b22bb02bd2260766b413616085e2f1f7a8449e2fa9129a6e538e220571b7a89263a5a0dd0abb2f8e051950ed7bb5d67dec11b9c96de7f917d37ee56f36625ec56c9e972dde68620c1c8ee34666d19f3df8f2087d5552ec3a9e2efcfb4baec72ba164a99aa14343c3501a9bbbadea2",
        exp: 1599484975,
      },
      user: {
        _id: "5eff394d1fb66ea6b07e20bd",
        userName: "admin",
        email: "admin@jazzcash.com",
        role: "admin",
        verified: true,
      },
      success: true,
    },
    status: 200,
    statusText: "OK",
    headers: {
      "content-type": "application/json; charset=utf-8"
    },
    config: {
      url: "/auth/login",
      method: "post",
      data: '{"email":"admin@jazzcash.com","password":"test"}',
      headers: {
        Accept: "application/json, text/plain, */*",
        "Content-Type": "application/json",
      },
      baseURL: "test",
      transformRequest: [null],
      transformResponse: [null],
      timeout: 0,
      xsrfCookieName: "XSRF-TOKEN",
      xsrfHeaderName: "X-XSRF-TOKEN",
      maxContentLength: -1,
    },
    request: {},
  };
  return new Promise((resolve, reject) => {
    if (formData.email === user.email && formData.password === user.password) {
      localStorage.setItem("token", response.data.token.value);
      localStorage.setItem("exp", response.data.token.exp);
      resolve(response);
    } else {
      reject("error");
    }
  });
};

const register = (formData) =>
  axiosInstance
  .post("/auth/register", JSON.stringify(formData))
  .then((res) => res)
  .catch();

const registerGoogle = () =>
  axiosInstance
  .get("/auth/google")
  .then((res) => res)
  .catch();

const logout = (token) =>
  axiosInstance
  .post(
    "/auth/logout", {
      token
    }, {
      headers: authHeader(),
    }
  )
  .then((res) => {
    localStorage.clear();
    return res;
  })
  .catch();

const checkRegister = (formData) =>
  axiosInstance
  .post("/auth/checkRegister", JSON.stringify(formData))
  .then((res) => res)
  .catch();

const userDetails = () =>
  axiosInstance
  .get("/auth/detail", {
    headers: authHeader(),
  })
  .then((res) => res)
  .catch();

export default {
  login,
  logout,
  register,
  registerGoogle: registerGoogle,
  checkRegister,
  userDetails,
};