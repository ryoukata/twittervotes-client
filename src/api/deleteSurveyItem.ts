const host: string = "http://localhost:8080/polls/";
const key: string = "/?key=abc123";

export const deleteSurveyItem = (pollId: string) => {
  const headers: Headers = new Headers();
  headers.append('Content-Type', 'application/json');
  headers.append('Access-Control-Request-Headers', 'Content-Type');
  headers.append('Access-Control-Request-Method', 'DELETE, OPTIONS');
  const params: RequestInit = {
    method: 'DELETE',
    mode: 'cors',
    headers
  }
  return fetch(host+pollId+key, params);
}