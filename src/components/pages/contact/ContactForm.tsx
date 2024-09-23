"use client";
import { Button as MovingBtn } from "@/aceternityUI/movingBorder";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import handleContact from "@/pages/api/contact";
import sendContact from "@/services/sendContact";
import { useState } from "react";
import { FaLess } from "react-icons/fa";

type TInitialInput = {
  name: string;
  email: string;
  message: string;
};

type TFormState = {
  data: TInitialInput;
  isLoading?: boolean;
};

const initialInput: TInitialInput = {
  name: "",
  email: "",
  message: "",
};

const ContactForm = () => {
  const [state, setState] = useState<TFormState>({
    data: initialInput,
    isLoading: false,
  });
  const { data, isLoading } = state;

  const handleOnChange = (e: any) => {
    // replace field value onChange action
    setState((pre) => ({
      ...pre,
      data: {
        ...pre.data,
        [e.target.name]: e.target.value,
      },
    }));
  };

  const onSubmit = async (e: any) => {
    e.preventDefault();

    try {
      // loading start.....
      setState((pre) => ({
        ...pre,
        isLoading: true,
      }));
      const res = await sendContact(data);
      window.alert(res.message);
    } catch (error) {
      console.log("contact form error", error);
    } finally {
      setState((pre) => ({
        ...pre,
        data: initialInput,
        isLoading: false,
      }));
    }
  };

  return (
    <MovingBtn>
      <form
        onSubmit={onSubmit}
        className="bg-[#27272c] flex flex-col gap-5 rounded-xl p-10  xl:w-[500px] w-full xl:mx-auto"
      >
        <h2>Send me project</h2>
        {/* input field */}
        <Input
          type="text"
          value={data.name}
          placeholder="write you name"
          name="name"
          onChange={handleOnChange}
        />
        <Input
          type="text"
          value={data.email}
          placeholder="write you email"
          name="email"
          onChange={handleOnChange}
        />
        <Textarea
          name="message"
          value={data.message}
          placeholder="Give me the scoop on your next big thing!"
          onChange={handleOnChange}
        />
        {isLoading ? (
          "loading"
        ) : (
          <Button type="submit" className="w-[150px]">
            Send Message
          </Button>
        )}
      </form>
    </MovingBtn>
  );
};
export default ContactForm;
