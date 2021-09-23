const host: string = "http://localhost:8080/";
const key: string = "/?key=abc123";

export const getSurveyitem = (poll: string) => {
  const headers: Headers = new Headers();
  headers.append('Content-Type', 'application/json');
  headers.append('Access-Control-Request-Headers', 'Content-Type');
  headers.append('Access-Control-Request-Method', 'GET');
  const params: RequestInit = {
    mode: 'cors',
    headers
  }
  console.log("getSurveyItem poll: ", poll);
  console.log("getSurveyItem: ", host+poll+key);
  return fetch(host+poll+key, params).then((response) => response.json());
}