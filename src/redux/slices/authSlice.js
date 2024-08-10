import { api } from "../api/baseApi";

const authSlice = api.injectEndpoints({
    endpoints: (builder) => ({
        login: builder.mutation({
            query: (data) => {
                return{
                    method: "POST",
                    url: "/auth/login",
                    body: data,
                }
            }
        }),
        emailVerify: builder.mutation({
            query: (data) => {
                return{
                    method: "POST",
                    url: "/auth/verify-email",
                    body: data,
                }
            }
        }),
        forgotPassword: builder.mutation({
            query: (data) => {
                return{
                    method: "POST",
                    url: "/auth/forget-password",
                    body: data
                }
            }
        }),
        resetPassword: builder.mutation({
            query: ({data, token}) => {
                return{
                    method: "POST",
                    url: "/auth/reset-password",
                    body: data,
                    headers:{
                        Authorization: `${token}`
                    }
                }
            }
        }),
        changePassword: builder.mutation({
            query: (data) => {
                return{
                    method: "POST",
                    url: "/auth/change-password",
                    body: data,
                    headers:{
                        Authorization: `Bearer ${JSON.parse(localStorage.getItem("token"))}`
                    }
                }
            }
        }),

        updateProfile: builder.mutation({
            query: (data) => {
                return{
                    method: "PATCH",
                    url: "/admin",
                    body: data,
                    headers:{
                        Authorization: `Bearer ${JSON.parse(localStorage.getItem("token"))}`
                    }
                }
            }
        }),

        profile: builder.query({
            query: () => {
                return{
                    method: "GET",
                    url: "/admin/profile",
                    headers:{
                        Authorization: `Bearer ${JSON.parse(localStorage.getItem("token"))}`
                    }
                }
            },
            transformResponse: (response) => {
                return response?.data;
            },
        }),
    })
});

export const {
    useEmailVerifyMutation,
    useLoginMutation,
    useForgotPasswordMutation,
    useResetPasswordMutation,
    useChangePasswordMutation,
    useUpdateProfileMutation,
    useProfileQuery,
} = authSlice;