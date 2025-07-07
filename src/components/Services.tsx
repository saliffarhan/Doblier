import React from 'react'

import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"
import { client } from '@/sanity/lib/client';

async function Services() {

    const query = `*[_type == "services"][0]{
            question1, answer1,
            question2, answer2,
            question3, answer3,
            AddQuestions

          }`;
    const items = await client.fetch(query);

    return (
        <div id='services'>
            <div className="w-[100%] h-auto max-w-screen-2xl  mx-auto">
                <Accordion className="lg:px-20 md:px-11 px-3 py-7" type="single" collapsible>

                    <div className="flex flex-col justify-center items-center">
                        <h3 className="font-bold text-xl md:text-2xl" data-aos="flip-up">Services <span className="inline-block mb-2 -rotate-3 bg-purple-200 md:bg-purple-300 rounded-2xl px-4  ">We Provide</span> </h3>
                        <p className="font-sans md:px-0 px-5 md:text-base text-sm  font-medium  text-gray-800 pt-2 pb-6 text-center" data-aos="flip-down">lets you lead or contribute with trust, clarity, and real rewards on  <br className='md:block hidden' /> the blockchain.</p>
                    </div>

                    {/* Item 1 */}
                    <AccordionItem value="item-1" data-aos="fade-down">
                        <AccordionTrigger className='cursor-pointer'>{items.question1}</AccordionTrigger>
                        <AccordionContent className="font-sans font-normal md:text-[16px] md:leading-7 leading-6 text-gray-800 py-2 md:px-1 px-2">
                            {items.answer1}
                        </AccordionContent>
                    </AccordionItem>
                    {/* item 2 */}
                    <AccordionItem className="mt-5" value="item-2" data-aos="fade-down">
                        <AccordionTrigger className='cursor-pointer'>{items.question2} </AccordionTrigger>
                        <AccordionContent className="font-sans font-normal md:text-[16px] md:leading-7 leading-6 text-gray-800 py-2 md:px-1 px-2">
                            {items.answer2}
                        </AccordionContent>
                    </AccordionItem>
                    {/* item3 */}
                    <AccordionItem className="mt-5" value="item-3" data-aos="fade-down">
                        <AccordionTrigger className='cursor-pointer'>{items.question3}</AccordionTrigger>
                        <AccordionContent className="font-sans font-normal md:text-[16px] md:leading-7 leading-6 text-gray-800  py-2 md:px-1 px-2">
                            {items.answer3}
                        </AccordionContent>
                    </AccordionItem>

                    {/* Additional FAQs */}
                    {items.AddQuestions?.length > 0 &&
                        items.AddQuestions.map((item: Servies_FAQ, index: number) => (
                            <AccordionItem key={index} className="mt-5" data-aos="fade-down" value={`additional-item-${index}`}>
                                <AccordionTrigger className='cursor-pointer'>{item.question}</AccordionTrigger>
                                <AccordionContent className="font-sans font-normal md:text-[16px] md:leading-7 leading-6 text-gray-800 py-2 md:px-1 px-2">
                                    {item.answer}
                                </AccordionContent>
                            </AccordionItem>
                        ))}
                </Accordion>

            </div>
        </div>
    )
}

export default Services
