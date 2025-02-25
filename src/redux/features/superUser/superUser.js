import { baseApi } from "../../baseApi/baseApi";


const superUser = baseApi.injectEndpoints({
    endpoints: (builder) => ({
        getAllSupperUser: builder.query({
            query: () => ({
                url: "/subscription",
                method: "GET",
            }),
        }),
    }),
});

export const {

    useGetAllSupperUserQuery



} = superUser;
