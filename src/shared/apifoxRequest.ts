import { writeFileLog } from './writeFileLog';

export async function apifoxRequest(
  url: string,
  options: RequestInit & {
    projectId: number;
  },
  token: string,
) {
  const apifoxBaseURL = 'https://api.apifox.com/api';

  const response = await fetch(apifoxBaseURL + url, {
    ...options,
    headers: {
      'Content-Type': 'application/json',
      'X-Apifox-Version': '2024-03-28',
      Authorization: `Bearer ${token}`,
      'X-Project-Id': options.projectId.toString(),
      ...options.headers,
    },
  });

  const json = await response.json();
  writeFileLog(url.replace(/\//g, '-').substring(1), JSON.stringify(json, null, 4));

  return json;
}
