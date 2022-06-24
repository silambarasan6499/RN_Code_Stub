import { api } from '@/Services/api'
import { STUDENT } from '../../api_endPoint'


export const userApi = api.injectEndpoints({
  endpoints: build => ({
    fetchOne:
      build.query({
        // query: param => ({
        //   url: STUDENT.FORGOT_PASSWORD,
        //   method: 'POST',
        //   body: param,
        // }),
        query: id => `/users/${id}`,

      })
  }),
  overrideExisting: false,
})

export const { useLazyFetchOneQuery } = userApi
