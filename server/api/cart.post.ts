export default defineEventHandler(async (event) => {
  const res = {
    status: "ok",
    orderId: Math.floor(Date.now() * Math.random()),
  };
  const rej = {
    status: "error",
    orderId: Math.floor(Date.now() * Math.random()),
  };
  const body = await readBody(event);

  body && (await useStorage().setItem("redis:cart", body));

  return body ? res : rej;
});
