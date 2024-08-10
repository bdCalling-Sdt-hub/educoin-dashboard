import { api } from "../api/baseApi";

const presetSlice = api.injectEndpoints({
    endpoints: (builder) => ({
        presets: builder.query({
            query: (page) => {
                const params = new URLSearchParams();
                params.append("page", page)
                return{
                    method: "GET",
                    url: `/preset?${params.toString()}`,
                    headers:{
                        Authorization: `Bearer ${JSON.parse(localStorage.getItem("token"))}`
                    }
                }
            }
        }),
        createPreset: builder.mutation({
            query: (value) => {
                return{
                    method: "POST",
                    url: `/preset/upload`,
                    body: value,
                    headers:{
                        Authorization: `Bearer ${JSON.parse(localStorage.getItem("token"))}`
                    }
                }
            }
        }),
        deletePreset: builder.mutation({
            query: (id) => {
                return{
                    method: "DELETE",
                    url: `/preset/delete/${id}`,
                    headers:{
                        Authorization: `Bearer ${JSON.parse(localStorage.getItem("token"))}`
                    }
                }
            }
        })
    })
});

export const {
   usePresetsQuery,
   useCreatePresetMutation,
   useDeletePresetMutation
} = presetSlice;