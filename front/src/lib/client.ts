import { createPromiseClient, PromiseClient } from '@bufbuild/connect'
import { createGrpcWebTransport } from '@bufbuild/connect-web'
import { ServiceType } from '@bufbuild/protobuf'
import { useMemo } from 'react'

export const transport = createGrpcWebTransport({
  baseUrl: 'http://localhost:8080',
  credentials: 'include'
})

export const useClient = <T extends ServiceType>(
  service: T
): PromiseClient<T> => {
  return useMemo(() => createPromiseClient(service, transport), [service])
}
