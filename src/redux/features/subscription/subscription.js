import { baseApi } from "../../baseApi/baseApi";


const subscription = baseApi.injectEndpoints({
    endpoints: (builder) => ({
        getSubscription: builder.query({
            query: () => ({
                url: "/subscription",
                method: "GET",
            }),
        }),
    }),
});

export const {

    useGetSubscriptionQuery



} = subscription;
