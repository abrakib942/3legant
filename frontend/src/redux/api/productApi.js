import { baseApi } from "./apiSlice";

export const productApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    addProduct: build.mutation({
      query: (data) => ({
        url: "/product/create",
        method: "POST",
        data,
      }),
      invalidatesTags: ["product"],
    }),
    getAllProduct: build.query({
      query: (arg) => ({
        url: "/product",
        params: arg,
        method: "GET",
      }),
      providesTags: ["product"],
    }),
    getSingleProduct: build.query({
      query: (id) => ({
        url: `/product/${id}`,
        method: "GET",
      }),
      providesTags: ["product"],
    }),
    updateProduct: build.mutation({
      query: ({ id, data }) => ({
        url: `/product/${id}`,
        method: "PATCH",
        data: data,
      }),
      invalidatesTags: ["product"],
    }),
    deleteProduct: build.mutation({
      query: (id) => ({
        url: `/product/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["product"],
    }),
  }),
});

export const {
  useAddProductMutation,
  useGetAllProductQuery,
  useGetSingleProductQuery,
  useUpdateProductMutation,
  useDeleteProductMutation,
} = productApi;
