import React from 'react'
import Image from 'next/image'


const TestimonialCard = (testimonial) => {
    return (
      <div className="space-y-4 mx-5 py-12 px-5 bg-[#F3F6FE] rounded-lg">
        <h3 className="text-2xl font-bold">“{testimonial.message}”</h3>

        {/* profile */}
        <div className="flex items-center gap-4">
          <Image
            src={testimonial.profile}
            width={35}
            height={35}
            alt={testimonial.author}
          />
          <div className="text-xs font-bold  w-[60%] space-y-2">
            <h4 className="text-[#0A2640]">{testimonial.author}</h4>
            <p className="">{testimonial.role}</p>
          </div>
        </div>
      </div>
    );
}

export default TestimonialCard
