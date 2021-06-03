import { useEffect } from 'react'
import Router from 'next/router'
import useSWR from 'swr'

const fetcher = (url) => fetch(url).then((r) => r.json())

export function useUser({ redirectTo, redirectIfFound } = {}) {
  const { data, error } = useSWR('/api/user', fetcher)
  const isLoading = !error && !data
  const isError = error
  const hasUser = Boolean(data?.user)

  // useEffectによりコンポーネントのレンダリング後まで実行が遅延される
  useEffect(() => {
    if (!redirectTo || isLoading) return
    if (
      (redirectTo && !redirectIfFound && !hasUser) ||
      (redirectIfFound && hasUser)
    ) {
      Router.push(redirectTo)
    }
  }, [redirectTo, redirectIfFound, isLoading, hasUser])

  return {
    data: data?.user || null,
    isLoading: isLoading,
    isError: isError
  }
}

export function useStaff(id = '') {
  const { data, error } = useSWR(`/api/staff/${id}`, fetcher)
  const isLoading = !error && !data
  const isError = error
  const hasStaff = Boolean(data?.staff)

  return {
    staff: data?.staff || null,
    isLoading: isLoading,
    isError: isError
  }
}

export function useRelative({id = '', staffId = ''} = {}) {
  const param = staffId ? `?staffId=${staffId}` : ''
  const { data, error } = useSWR(`/api/relatives/${id}${param}`, fetcher)
  const isLoading = !error && !data
  const isError = error
  const hasRelatives = Boolean(data?.relatives)

  return {
    relatives: data?.relatives || null,
    isLoading: isLoading,
    isError: isError
  }
}

export function useQualification({id = '', staffId = ''} = {}) {
  const param = staffId ? `?staffId=${staffId}` : ''
  const { data, error } = useSWR(`/api/qualifications/${id}${param}`, fetcher)
  const isLoading = !error && !data
  const isError = error
  const hasQualifications = Boolean(data?.qualifications)

  return {
    qualifications: data?.qualifications || null,
    isLoading: isLoading,
    isError: isError
  }
}

export function useHistory({id = '', staffId = ''} = {}) {
  const param = staffId ? `?staffId=${staffId}` : ''
  const { data, error } = useSWR(`/api/histories/${id}${param}`, fetcher)
  const isLoading = !error && !data
  const isError = error
  const hasHistories = Boolean(data?.histories)

  return {
    histories: data?.histories || null,
    isLoading: isLoading,
    isError: isError
  }
}

export function useProject({id = '', staffId = ''} = {}) {
  const param = staffId ? `?staffId=${staffId}` : ''
  const { data, error } = useSWR(`/api/projects/${id}${param}`, fetcher)
  const isLoading = !error && !data
  const isError = error
  const hasProjects = Boolean(data?.projects)

  return {
    projects: data?.projects || null,
    isLoading: isLoading,
    isError: isError
  }
}

export function useHoldOnto(id = '') {
  const { data, error } = useSWR(`/api/hold_onto/${id}`, fetcher)
  const isLoading = !error && !data
  const isError = error
  const hasHoldOnto = Boolean(data?.hold_onto)

  return {
    hold_onto: data?.hold_onto || null,
    isLoading: isLoading,
    isError: isError
  }
}

export function useCMaterial(id = '') {
  const { data, error } = useSWR(`/api/construction_materials/${id}`, fetcher)
  const isLoading = !error && !data
  const isError = error
  const hasCMaterial = Boolean(data?.construction_materials)

  return {
    construction_materials: data?.construction_materials || null,
    isLoading: isLoading,
    isError: isError
  }
}

export function usePc(id = '') {
  const { data, error } = useSWR(`/api/lease_rental_pc/${id}`, fetcher)
  const isLoading = !error && !data
  const isError = error
  const hasPc = Boolean(data?.lease_rental_pc)

  return {
    lease_rental_pc: data?.lease_rental_pc || null,
    isLoading: isLoading,
    isError: isError
  }
}

export function usePhone(id = '') {
  const { data, error } = useSWR(`/api/phone_wifi/${id}`, fetcher)
  const isLoading = !error && !data
  const isError = error
  const hasPc = Boolean(data?.phone_wifi)

  return {
    phone_wifi: data?.phone_wifi || null,
    isLoading: isLoading,
    isError: isError
  }
}

export function useFixedAsset(id = '') {
  const { data, error } = useSWR(`/api/fixed_asset/${id}`, fetcher)
  const isLoading = !error && !data
  const isError = error
  const hasPc = Boolean(data?.fixed_asset)

  return {
    fixed_asset: data?.fixed_asset || null,
    isLoading: isLoading,
    isError: isError
  }
}

export function useDisasterStockpile(id = '') {
  const { data, error } = useSWR(`/api/disaster_stockpile/${id}`, fetcher)
  const isLoading = !error && !data
  const isError = error
  const hasPc = Boolean(data?.disaster_stockpile)

  return {
    disaster_stockpile: data?.disaster_stockpile || null,
    isLoading: isLoading,
    isError: isError
  }
}
