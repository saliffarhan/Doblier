import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"
import { client } from "@/sanity/lib/client";


async function About() {

    const query = `*[_type == "about"][0]{
        question1, answer1,
        question2, answer2,
        question3, answer3,
        question4, answer4,
        addQuestions     
 }`;
    const item = await client.fetch(query);





    return (
        <div id="about">
            <div className="w-[100%] h-auto max-w-screen-2xl mx-auto bg-slate-00">
                <Accordion className="lg:px-20 md:px-11 px-3 py-8" type="single" defaultValue="item-1" collapsible>

                    <div className="flex flex-col justify-center items-center">
                        <h3  className="font-bold md:text-2xl  text-xl" data-aos="flip-up md:block hidden">Get <span className="inline-block mb-2 -rotate-6 bg-purple-200 md:bg-purple-300 rounded-2xl px-5 ">to Know</span> Us</h3>
                        <p className="font-sans md:px-0 px-5  font-medium  md:text-base text-sm  text-gray-800 pt-2 pb-6 text-center" data-aos="flip-down md:block hidden">We use blockchain and leadership to help people collaborate and grow.</p>
                    </div>

                    {/* Item 1 */}
                    <AccordionItem value="item-1" data-aos="fade-down">
                        <AccordionTrigger className="cursor-pointer">{item.question1}</AccordionTrigger>
                        <AccordionContent className="font-sans font-normal md:text-[16px] md:leading-7 leading-6 text-gray-800 py-2 md:px-1 px-2">
                            {item.answer1}
                        </AccordionContent>
                    </AccordionItem>
                    {/* item 2 */}
                    <AccordionItem className="mt-5" value="item-2" data-aos="fade-down">
                        <AccordionTrigger className="cursor-pointer">{item.question2}</AccordionTrigger>
                        <AccordionContent className="py-2 font-sans font-normal md:text-[16px] md:leading-7 leading-6 text-gray-800  md:px-1 px-2">
                            {item.answer2}
                        </AccordionContent>
                    </AccordionItem>
                    {/* item3 */}
                    <AccordionItem className="mt-5" value="item-3" data-aos="fade-down">
                        <AccordionTrigger className="cursor-pointer">{item.question3} </AccordionTrigger>
                        <AccordionContent className="py-2 font-sans font-normal md:text-[16px] md:leading-7 leading-6 text-gray-800  md:px-1 px-2">
                            {item.answer3}
                        </AccordionContent>
                    </AccordionItem>
                    {/* item 4 */}
                    <AccordionItem className="mt-5" value="item-4" data-aos="fade-down">
                        <AccordionTrigger className="cursor-pointer">{item.question4}  </AccordionTrigger>
                        <AccordionContent className="py-2 font-sans font-normal md:text-[16px] md:leading-7 leading-6 text-gray-800  md:px-1 px-2">
                            {item.answer4}
                        </AccordionContent>
                    </AccordionItem>

                    {/* Additional questions */}
                    {item.addQuestions?.length > 0 &&
                        item.addQuestions.map((faq: About_FAQ, index: number) => (
                            <AccordionItem key={index} className="mt-5" data-aos="fade-down" value={`additional-item-${index}`}>
                                <AccordionTrigger className="cursor-pointer">{faq.question}</AccordionTrigger>
                                <AccordionContent className="py-2 font-sans font-normal md:text-[16px] md:leading-7 leading-6 text-gray-800  md:px-1 px-2">
                                    {faq.answer}
                                </AccordionContent>
                            </AccordionItem>
                        ))}
                </Accordion>
            </div>
        </div>
    )
}

export default About






