const sendContact = async (payload: any) => {
  const { name, email, message } = payload;

  // Validate request data
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (!name || !email || !message) {
    return window.alert("All fields are required");
  }

  if (!emailRegex.test(email)) {
    return window.alert("Please provide a valid email address");
  }

  try {
    const response = await fetch("/api/contact", {
      method: "POST",
      body: JSON.stringify(payload),
      headers: {
        "content-type": "application/json",
        accept: "application/json",
      },
    });

    // Check if response is ok (status in range 200–299)
    if (!response.ok) {
      return {
        message: "Check you internet problem",
      };
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.log("Error sending contact form:", error);
  }
};

export default sendContact;
