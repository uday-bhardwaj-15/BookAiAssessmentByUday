import React from "react";

const Tutorial = () => {
  return (
    <section id="tutorial">
      <h2 className="font-bold text-2xl pb-1">Tutorial</h2>
      <h3 className="font-bold text-xl ">Step 1: Obtain an API Key</h3>
      <p>
        Generate an API key using the button in the Authentication section
        above.
      </p>
      <h3 className="font-bold text-xl ">Step 2: Make a Request</h3>
      <p>
        Use your preferred programming language or tool to make a POST request
        to the /api/generate-book endpoint. Include your API key in the header
        and the required parameters in the request body.
      </p>
      <h3 className="font-bold text-xl ">Step 3: Handle the Response</h3>
      <p>
        The API will return a response with a job ID. You can use this ID to
        check the status of your book generation job.
      </p>
      <h3 className="font-bold text-xl ">
        Step 4: Retrieve the Generated Book
      </h3>
      <p>
        Once the job is complete, you can retrieve the generated book using the
        job ID (endpoint to be implemented).
      </p>
    </section>
  );
};

export default Tutorial;
