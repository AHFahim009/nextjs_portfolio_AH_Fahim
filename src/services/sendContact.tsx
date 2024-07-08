const sendContact = async (payload: any) => {
  fetch("/api/contact", {
    method: "POST",
    body: JSON.stringify(payload),
    headers: {
      "content-type": "application/json",
      accept: "application/json",
    },
  });
};

export default sendContact;
