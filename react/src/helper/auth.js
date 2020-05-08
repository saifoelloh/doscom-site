import axios from "axios"

const baseURL = "localhost:3000"

export const login = async (username = "", password = "") => {
  try {
    const response = await axios({
      method: "post",
      link: `${baseURL}/api/v1/auth/login`,
      data: { username, password },
    })
    return response
  } catch (error) {
    throw error
  }
}

export const logout = async () => {
  try {
    const response = await axios({
      method: "post",
      link: `${baseURL}/api/v1/auth/logout`,
    })
    return response
  } catch (error) {
    throw error
  }
}
