import React, { useState } from "react";

const NftCard = ({ bidders, title, author, contact, image }) => {
  const [showTooltip, setShowTooltip] = useState(false);

  return (
    <div
      className="relative cursor-pointer rounded-xl bg-white p-4 shadow-md hover:shadow-lg dark:bg-navy-700"
      onMouseEnter={() => setShowTooltip(true)}
      onMouseLeave={() => setShowTooltip(false)}
    >
      <img src={image} alt={title} className="h-40 w-full rounded-xl object-cover" />
      <h3 className="mt-3 text-lg font-semibold text-navy-700 dark:text-white">{title}</h3>
      <p className="text-sm text-gray-500 dark:text-gray-300">{author}</p>

      <div className="mt-2 text-sm font-medium text-brand-500">
        Contact
        <span className="ml-2 underline text-blue-600 cursor-help">?</span>
      </div>

      {/* Tooltip */}
      {showTooltip && (
        <div className="absolute left-4 top-[110%] z-50 w-max rounded-md bg-gray-700 px-3 py-2 text-xs text-white shadow-lg">
          {contact}
        </div>
      )}

      {/* Bidders avatars */}
      <div className="mt-3 flex -space-x-2">
        {bidders.map((bidder, i) => (
          <img
            key={i}
            src={bidder}
            alt={`Bidder ${i + 1}`}
            className="h-8 w-8 rounded-full border-2 border-white dark:border-navy-700"
          />
        ))}
      </div>
    </div>
  );
};

export default NftCard;
