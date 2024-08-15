import React from "react";

const APIPricing = () => {
  // Define the table data as an array of objects
  const pricingData = [
    { api: "OpenAI", model: "GPT-3.5", price: "$0.002" },
    { api: "OpenAI", model: "GPT-4", price: "$0.03" },
    { api: "Together AI", model: "Llama-2-70b", price: "$0.0008" },
    { api: "Together AI", model: "Llama-2-13b", price: "$0.0006" },
  ];

  return (
    <section id="pricing">
      <h2 className="font-bold text-2xl pb-1">API Pricing</h2>
      <p>
        Our API pricing is based on the model used and the number of tokens
        processed. Here's a breakdown of the costs:
      </p>
      <table>
        <thead>
          <tr>
            <th>API</th>
            <th>Model</th>
            <th>Price per 1K tokens</th>
          </tr>
        </thead>
        <tbody>
          {/* Map over the pricingData array to create table rows */}
          {pricingData.map((item, index) => (
            <tr key={index}>
              <td>{item.api}</td>
              <td>{item.model}</td>
              <td>{item.price}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <h3 className="font-bold text-xl">Token Estimation</h3>
      <p>
        On average, 1 token is approximately 4 characters or 0.75 words. For
        precise pricing, we recommend using our token calculator tool.
      </p>
      <h3 className="font-bold text-xl">Billing</h3>
      <p>
        You will only be charged for the tokens used in generating the book. The
        API tracks token usage and bills accordingly. Detailed usage reports are
        available in your account dashboard.
      </p>
    </section>
  );
};

export default APIPricing;
