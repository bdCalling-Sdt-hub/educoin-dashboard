import { api } from "../api/baseApi";

const studentSlice = api.injectEndpoints({
    endpoints: (builder) => ({
        students: builder.query({
            query: ({page, search}) => {
                const params = new URLSearchParams();
                params.append("page", page)
                params.append("search", search)
                return{
                    method: "GET",
                    url: `/student/all?${params.toString()}`,
                    headers:{
                        Authorization: `Bearer ${JSON.parse(localStorage.getItem("token"))}`
                    }
                }
            }
        })
    })
});

export const {
   useStudentsQuery
} = studentSlice;