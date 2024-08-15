"use client";
import React, { useState } from "react";

const Endpoints = () => {
  // State to store the response data
  const [responseData] = useState({
    message: "Book generation started",
    status: "processing",
    job_id: "unique-job-identifier",
  });

  // Convert the response data to a JSON string for display
  const formattedResponse = JSON.stringify(responseData, null, 2);

  // Define table data as an array of objects
  const requestBodyData = [
    {
      parameter: "api",
      type: "string",
      description: 'The API provider to use. Options: "openai" or "together"',
    },
    {
      parameter: "model",
      type: "string",
      description:
        'The specific model to use (e.g., "gpt-3.5-turbo", "gpt-4", "llama-2-70b")',
    },
    {
      parameter: "topic",
      type: "string",
      description: "The main topic or theme of the book",
    },
    {
      parameter: "language",
      type: "string",
      description: "The language in which the book should be generated",
    },
    {
      parameter: "word_count",
      type: "integer",
      description: "The approximate number of words for the generated book",
    },
  ];

  return (
    <section id="endpoints" className="p-6">
      <h2 className="font-bold text-2xl mb-4">Endpoints</h2>
      <h3 className="font-bold text-xl mb-2">Generate Book</h3>
      <p className="mb-4">
        <span className="bg-[#22d3ee] px-2 py-1 rounded text-black font-semibold">
          POST
        </span>{" "}
        <span className="bg-[#6366f1] px-2 py-3 ml-1 rounded text-white font-semibold">
          /api/generate-book
        </span>
      </p>
      <h4 className="font-bold mb-2">Request Body</h4>
      <table>
        <thead>
          <tr>
            <th>Parameter</th>
            <th>Type</th>
            <th>Description</th>
          </tr>
        </thead>
        <tbody>
          {/* Map over requestBodyData to create table rows */}
          {requestBodyData.map((item, index) => (
            <tr key={index}>
              <td className="text-[#22d3ee]">{item.parameter}</td>
              <td>{item.type}</td>
              <td>{item.description}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <h4 className="font-bold text-lg mb-2">Response</h4>
      <pre className="bg-[#1e293b] p-4 rounded-lg overflow-x-auto">
        <code className="text-white">{formattedResponse}</code>
      </pre>
    </section>
  );
};

export default Endpoints;
