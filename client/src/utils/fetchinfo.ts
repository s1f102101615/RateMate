import { apiClient } from './apiClient';

export function useFetchInfo() {
  async function fetchInfo() {
    console.log('a');
    const fetchInfo = await apiClient.fetchinfo.post();
    return fetchInfo;
  }

  return fetchInfo;
}

export function useFetchInfoDetail() {
  async function fetchInfoDetail(companyId: number) {
    console.log('b');
    const serchroomId = await apiClient.fetchinfodetail.post({ body: { companyId } });
    return serchroomId;
  }

  return fetchInfoDetail;
}

export function useSearchInfo() {
  async function fetchInfo(params = {}) {
    console.log('Fetching with params:', params);
    const response = await apiClient.searchinfo.post({ body: params });
    return response;
  }

  return fetchInfo;
}
