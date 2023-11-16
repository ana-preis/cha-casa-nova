const { KV_REST_API_URL, KV_REST_API_TOKEN } = process.env;

export const example = () => {
  fetch(`${KV_REST_API_URL}`, {
    headers: {
      Authorization: `Bearer ${KV_REST_API_TOKEN}`,
    },
    body: `[
      ["HGET", "gift:list", "1"]
    ]`,
    method: 'POST',
  })
    .then((response) => response.json())
    .then((data) => console.table(data));
}