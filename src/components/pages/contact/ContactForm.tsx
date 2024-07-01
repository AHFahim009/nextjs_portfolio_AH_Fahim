"use client"
import { Button as MovingBtn } from "@/aceternityUI/movingBorder";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
const ContactForm = () => {
  const onSubmit = (e: any) => {
    e.preventDefault();
  };
  return (
    <MovingBtn>
      <form
        onSubmit={onSubmit}
        className="bg-[#27272c] flex flex-col gap-5 rounded-xl p-10  lg:w-[500px] mx-auto"
      >
        <h2>Send me project</h2>
        {/* input field */}
        <Input type="text" placeholder="write you name" />
        <Input type="text" placeholder="write you email" />
        <Textarea
          className="h-[90px]"
          placeholder="Give me the scoop on your next big thing!"
        />
        <Button type="submit" className="w-[150px]">
          Send Message
        </Button>
      </form>
    </MovingBtn>
  )
}
export default ContactForm