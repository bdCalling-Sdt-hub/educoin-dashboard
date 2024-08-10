import { api } from "../api/baseApi";

const ruleSlice = api.injectEndpoints({
    endpoints: (builder) => ({
        overview: builder.query({
            query: () => {
                return{
                    method: "GET",
                    url: `/admin/dashboard-overview`,
                    headers:{
                        Authorization: `Bearer ${JSON.parse(localStorage.getItem("token"))}`
                    }
                }
            }
        })
    })
});

export const {
   useOverviewQuery
} = ruleSlice;