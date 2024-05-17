import React from 'react'
import Image from 'next/image'
import person from '../../assets/images/testimonials/person-1.png'
import rating from '../../assets/images/testimonials/rating-1.png'


const TestimonialCard = () => {
    const testimonial = "It's really easy to use. We now have everyone working digitally, we can plan in advance and the technicians can easily see what’s going on all the time, so changes to schedules are no longer a problem. The technicians also no longer have to keep coming into the office which increases our productivity and allows us to focus on jobs."
    
    return (
      <div className="md:grid md:grid-rows-none md:grid-cols-3 ">
        {/* <Image
                src='/images/testimonials/1.png'
            /> */}
        <div>
          <Image
            src={person}
            width={133}
            height={25}
            alt="rating"
            className="h-full w-full max-h-[225px] md:max-h-[350px] object-contain object-top "
          />
        </div>
        <div className="space-y-4 row-span-2 md:col-span-2 p-4 md:p-8 text-sm font-semibold text-gray-500">
          <span>&quot;{testimonial}&quot;</span>
          <Image src={rating} width={133} height={25} alt="rating" />
        </div>
      </div>
    );
}

export default TestimonialCard
