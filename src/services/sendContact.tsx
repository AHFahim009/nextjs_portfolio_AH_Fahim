const sendContact = async (payload: any) => {
  const response = await fetch("/api/contact", {
    method: "POST",
    body: JSON.stringify(payload),
    headers: {
      "content-type": "application/json",
      accept: "application/json",
    },
  });

  const data = response.json()
  return data
};

export default sendContact;
