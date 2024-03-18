import React from 'react';
import Button from "./Button";

const BookNow = () => {
  return (
    <div className="bg-zinc-900 z-100 flex justify-center">
        <div className="flex pt-3 relative z-1 max-w-[62rem]  text-center ml-[1rem] lg:py-0">
          <h2 className="py-4 md: lg:py-6">Ask us anything about Aref, Free Consultation available </h2>
          <Button href="https://forms.gle/Y6XQeyqAVspoYb2w7" target="_blank" className="my-[1rem] mx-[1rem] md:lg:my-[rem]">
              Book Now
          </Button>
        </div>
      </div> 
  );
}

export default BookNow;
