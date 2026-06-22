import apiClient from "./axios";
import { useAuthStore } from "@/lib/stores/use-auth-store";

export const setupInterceptors = () => {
  apiClient.interceptors.request.use(
    (config) => {
      const token = useAuthStore.getState().token;
      if (token && config.headers) {
        config.headers.Authorization = `Bearer ${token}`;
      }
      return config;
    },
    (error) => Promise.reject(error)
  );

  apiClient.interceptors.response.use(
    (response) => response,
    (error) => {
      const status = error.response ? error.response.status : null;

      if (status === 401) {
        useAuthStore.getState().logout();
        window.location.href = "/login";
      } else if (status === 500) {
        console.error("Server Error. Please try again later.");
      }

      return Promise.reject(error);
    }
  );
};
