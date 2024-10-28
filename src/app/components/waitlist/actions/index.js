"use server";

export const joinWaitlist = async (formdata) => {
  const email = formdata.get("email");
  const options = {
    method: "POST",
    headers: {
      Authorization: `Bearer ${process.env.LOOPS_EMAIL_KEY}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      email: email,
      firstName: "John",
      lastName: "Doe",
      source: "waitlist",
    }),
  };

  return fetch("https://app.loops.so/api/v1/contacts/create", options)
    .then((response) => response.json())
    .then((response) => response)
    .catch((err) => err);
};
