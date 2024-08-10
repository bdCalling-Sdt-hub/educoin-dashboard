import { api } from "../api/baseApi";

const ruleSlice = api.injectEndpoints({
    endpoints: (builder) => ({
        getPrivacy: builder.query({
            query: () => {
                return{
                    method: "GET",
                    url: `/rule/privacy-policy`,
                    headers:{
                        Authorization: `Bearer ${JSON.parse(localStorage.getItem("token"))}`
                    }
                }
            }
        }),
        updatePrivacy: builder.mutation({
            query: (value) => {
                return{
                    method: "PATCH",
                    url: `/rule/privacy-policy`,
                    body: value,
                    headers:{
                        Authorization: `Bearer ${JSON.parse(localStorage.getItem("token"))}`
                    }
                }
            }
        }),
        getTerms: builder.query({
            query: () => {
                return{
                    method: "GET",
                    url: `/rule/terms-and-conditions`,
                    headers:{
                        Authorization: `Bearer ${JSON.parse(localStorage.getItem("token"))}`
                    }
                }
            }
        }),
        updateTerms: builder.mutation({
            query: (value) => {
                return{
                    method: "PATCH",
                    url: `/rule/terms-and-conditions`,
                    body: value,
                    headers:{
                        Authorization: `Bearer ${JSON.parse(localStorage.getItem("token"))}`
                    }
                }
            }
        }),
    })
});

export const {
   useGetPrivacyQuery,
   useGetTermsQuery,
   useUpdatePrivacyMutation,
   useUpdateTermsMutation
} = ruleSlice;