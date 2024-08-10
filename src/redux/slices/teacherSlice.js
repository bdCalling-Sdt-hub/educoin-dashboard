import { api } from "../api/baseApi";

const tearchSlice = api.injectEndpoints({
    endpoints: (builder) => ({
        getTeacher: builder.query({
            query: ({search, page}) => {
                console.log(search, page)
                const params = new URLSearchParams();
                params.append("search", search)
                params.append("page", page)
                return{
                    method: "GET",
                    url: `/teacher?${params.toString()}`,
                    headers:{
                        Authorization: `Bearer ${JSON.parse(localStorage.getItem("token"))}`
                    }
                }
            }
        }),
        createTeacher: builder.mutation({
            query: (value) => {
                return{
                    method: "POST",
                    url: `/teacher/create-teacher`,
                    body: value,
                    headers:{
                        Authorization: `Bearer ${JSON.parse(localStorage.getItem("token"))}`
                    }
                }
            }
        })
    })
});

export const {
   useGetTeacherQuery,
   useCreateTeacherMutation
} = tearchSlice;